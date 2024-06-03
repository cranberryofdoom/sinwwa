import { useEffect, useRef, useState } from "react";
import { ClickableIcon } from "../icons";
import styles from "./Pdf.module.css";
import { Document, Page, pdfjs } from "react-pdf";
import classNames from "classnames";
import { Loading } from "../loaders";
import { spacing } from "../tokens";

export const getLocalStoragePdfSettings = () => {
  return localStorage.getItem("pdfSettings");
};

export const getPdfSettingsFromLocalStorage = (url: string) => {
  const existingValues = getLocalStoragePdfSettings();
  if (existingValues) {
    const parsedValues = JSON.parse(existingValues);
    return parsedValues[url];
  }
  return undefined;
};

export const setLocalStoragePdfSettings = ({
  url,
  rotateAngle,
  scale,
  pageNumber,
}: {
  url: string;
  rotateAngle: number;
  scale: number;
  pageNumber: number;
}) => {
  const existingValues = getLocalStoragePdfSettings();
  if (existingValues) {
    const parsedExistingValues = JSON.parse(existingValues);

    /**
     * If the new values are going to be the default values,
     * remove the entry from the local storage.
     */
    if (rotateAngle === 0 && scale === 1 && pageNumber === 1) {
      delete parsedExistingValues[url];
      return localStorage.setItem(
        "pdfSettings",
        JSON.stringify(parsedExistingValues),
      );
    }

    /**
     * If the new values are not the default values, update the entry
     * in the local storage.
     */
    const newPdfSettingsValue = JSON.stringify({
      ...parsedExistingValues,
      [url]: { rotateAngle, scale, pageNumber },
    });
    return localStorage.setItem("pdfSettings", newPdfSettingsValue);
  } else if (rotateAngle !== 0 || scale !== 1 || pageNumber !== 1) {
    const value = JSON.stringify({ [url]: { rotateAngle, scale, pageNumber } });
    localStorage.setItem("pdfSettings", value);
  }
};

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Pdf = ({ url }: { url: string }) => {
  const initialSettings = getPdfSettingsFromLocalStorage(url);
  const pdfWrapper = useRef<HTMLDivElement>(null);
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(
    initialSettings?.pageNumber || 1,
  );
  const [rotateAngle, setRotateAngle] = useState(
    initialSettings?.rotateAngle || 0,
  );
  const [scale, setScale] = useState(initialSettings?.scale || 1);
  const [pdfHeight, setPdfHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (pdfWrapper.current) {
      setPdfHeight(pdfWrapper.current.offsetHeight - spacing.xxs);
    }
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.pdf} ref={pdfWrapper}>
        <Document
          className={styles.document}
          loading={() => <Loading size="medium" />}
          file={url}
          onLoadSuccess={(pdf) => {
            setNumPages(pdf.numPages);
          }}
          rotate={rotateAngle}
        >
          <Page pageNumber={pageNumber} scale={scale} height={pdfHeight} />
        </Document>
      </div>
      {numPages > 1 && (
        <>
          <ClickableIcon
            disabled={pageNumber === 1}
            className={classNames(styles.pageButton, styles.previous)}
            label="Previous Page"
            size="large"
            onClick={() => {
              const newPageNumber = pageNumber - 1;
              setPageNumber(newPageNumber);
              setLocalStoragePdfSettings({
                url,
                rotateAngle,
                scale,
                pageNumber: newPageNumber,
              });
            }}
            name="ChevronLeft"
            color="black"
            circle
          />
          <ClickableIcon
            disabled={pageNumber === numPages}
            className={classNames(styles.pageButton, styles.next)}
            label="Next Page"
            size="large"
            onClick={() => {
              const newPageNumber = pageNumber + 1;
              setPageNumber(newPageNumber);
              setLocalStoragePdfSettings({
                url,
                rotateAngle,
                scale,
                pageNumber: newPageNumber,
              });
            }}
            name="ChevronRight"
            color="black"
            circle
          />
        </>
      )}
      <div className={styles.toolbar}>
        <ClickableIcon
          onClick={() => {
            const newScale = scale + 0.1;
            setScale(newScale);
            setLocalStoragePdfSettings({
              url,
              rotateAngle,
              scale: newScale,
              pageNumber,
            });
          }}
          name="ZoomIn"
          label="Zoom In"
          size="large"
          color="gray"
        />
        <ClickableIcon
          onClick={() => {
            const newScale = scale - 0.1;
            setScale(newScale);
            setLocalStoragePdfSettings({
              url,
              rotateAngle,
              scale: newScale,
              pageNumber,
            });
          }}
          name="ZoomOut"
          label="Zoom Out"
          size="large"
          color="gray"
        />
        <ClickableIcon
          onClick={() => {
            const newAngle = rotateAngle + 90;
            setRotateAngle(newAngle);
            setLocalStoragePdfSettings({
              url,
              rotateAngle: newAngle,
              scale,
              pageNumber,
            });
          }}
          name="RotateRight"
          label="Rotate Right"
          size="large"
          color="gray"
        />
        <ClickableIcon
          onClick={() => {
            const newAngle = rotateAngle - 90;
            setRotateAngle(newAngle);
            setLocalStoragePdfSettings({
              url,
              rotateAngle: newAngle,
              scale,
              pageNumber,
            });
          }}
          name="RotateLeft"
          label="Rotate Left"
          size="large"
          color="gray"
        />
      </div>
    </div>
  );
};

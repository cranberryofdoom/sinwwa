import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import styles from "./DateDropdown.module.css";
import { DateRangePicker, Range } from "react-date-range";
import { colors } from "../tokens";
import { useEffect, useRef, useState } from "react";
import { useClickOutside } from "../hooks";
import { DropdownToggle } from "./DropdownToggle";
import { DropdownActionBar } from "./DropdownActionBar";
import { format } from "date-fns";
import { dateFormat } from "../dates";

const today = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

const getDropdownLabel = ({
  label,
  value,
  placeholder,
}: {
  value?: Range[];
  label?: string;
  placeholder?: string;
}) => {
  if (label) return label;
  if (value) {
    const [range] = value;
    if (range.startDate && range.endDate) {
      if (range.startDate.toDateString() === range.endDate.toDateString()) {
        return format(range.startDate, dateFormat);
      }
      return `${format(range.startDate, dateFormat)} - ${format(range.endDate, dateFormat)}`;
    }
  } else if (placeholder) return placeholder;
  return "Date";
};

export const DateDropdown = ({
  value,
  label,
  placeholder,
  onReset,
  onApplyChanges,
}: {
  placeholder?: string;
  label?: string;
  value?: Range[];
  onReset: () => void;
  onApplyChanges: (value: Range[]) => void;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedDates, setSelectedDates] = useState<Range[]>(value || [today]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (selectedDates !== value) {
      setSelectedDates(selectedDates || [today]);
    }
  }, [value, selectedDates]);

  const handleReset = () => {
    onReset();
    setOpen(false);
  };

  useClickOutside([containerRef], () => {
    setOpen(false);
  });

  return (
    <div ref={containerRef} className={styles.root}>
      <DropdownToggle
        isOpen={open}
        label={getDropdownLabel({ label, value, placeholder })}
        hasValue={!!value}
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className={styles.dropdown}>
          <DateRangePicker
            className={styles.dateRangePicker}
            direction="horizontal"
            editableDateInputs={false}
            inputRanges={[]}
            maxDate={new Date()}
            months={1}
            moveRangeOnFirstSelection={false}
            onChange={(range) => {
              setSelectedDates([range.selection]);
            }}
            rangeColors={[colors["accent-darker-cyan"]]}
            ranges={selectedDates}
            showDateDisplay={false}
            showMonthAndYearPickers={false}
            showPreview={false}
            staticRanges={[]}
            weekStartsOn={1}
            weekdayDisplayFormat="eeeeee"
          />
          <DropdownActionBar
            onReset={handleReset}
            onApplyChanges={() => {
              onApplyChanges(selectedDates);
              setOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

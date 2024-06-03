import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import styles from "./DateInput.module.css";
import { forwardRef, useRef, useState } from "react";
import { Input } from "./Input";
import { useClickOutside } from "../hooks";
import { Calendar } from "react-date-range";
import { format, isValid, parse } from "date-fns";
import { colors } from "../tokens";

export type DateInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
> & {
  value: string;
  onChange?: (value: string) => void;
};

const today = new Date();

export const getDateValue = (value: string) => {
  const numbersAndSlashesOnly = value.replace(/[^0-9/]/g, "");
  if (numbersAndSlashesOnly.length === 3 && numbersAndSlashesOnly[2] !== "/") {
    return (
      numbersAndSlashesOnly.slice(0, 2) + "/" + numbersAndSlashesOnly.slice(2)
    );
  }
  const slashSections = numbersAndSlashesOnly.split("/");
  const month = slashSections[0];
  const day = slashSections[1];
  const year = slashSections[2];
  const cappedMonth = month ? month.slice(0, 2) : "";
  const cappedDay = day ? day.slice(0, 2) : "";
  const cappedYear = year ? year.slice(0, 4) : "";
  const monthSlash = cappedMonth.length === 2 || cappedDay ? "/" : "";
  const daySlash = cappedDay.length === 2 || cappedYear ? "/" : "";
  return cappedMonth + monthSlash + cappedDay + daySlash + cappedYear;
};

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  ({ value, onChange, ...props }, forwardedRef) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const [open, setOpen] = useState(false);

    useClickOutside([containerRef], () => {
      setOpen(false);
    });

    const parsedDate = parse(value, "P", new Date());
    const isValidDate = isValid(parsedDate);

    return (
      <div className={styles.root} ref={containerRef}>
        <Input
          ref={forwardedRef}
          rightIconName="DateRange"
          onClickRightIcon={() => setOpen(!open)}
          placeholder="MM/DD/YYYY"
          value={value}
          onKeyUp={(event) => {
            const lastChar = value.slice(-1);
            if (event.key === "Backspace" && lastChar === "/") {
              onChange?.(value.slice(0, -1));
            }
          }}
          onChange={(event) => {
            const dateValue = getDateValue(event.target.value);
            onChange?.(dateValue);
          }}
          {...props}
        />
        {open && (value === "" || isValidDate) && (
          <div className={styles.dropdown}>
            <Calendar
              color={colors["accent-darker-cyan"]}
              className={styles.datePicker}
              direction="horizontal"
              date={value === "" ? today : new Date(value)}
              onChange={(date) => {
                onChange?.(format(date || new Date(), "MM/dd/yyyy"));
              }}
              maxDate={today}
              showMonthAndYearPickers={false}
              weekStartsOn={1}
              weekdayDisplayFormat="eeeeee"
            />
          </div>
        )}
      </div>
    );
  },
);

DateInput.displayName = "DateInput";

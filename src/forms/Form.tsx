import * as RadixForm from "@radix-ui/react-form";
import { FieldHeading } from "./FieldHeading";
import styles from "./Form.module.css";
import { FieldErrorMessage } from "./FieldErrorMessage";
import { Input, InputProps } from "../inputs/Input";
import { DropdownList } from "../dropdowns/DropdownList";
import { SearchableDropdownInput } from "../inputs/SearchableDropdownInput";
import { SearchableDropdownPositioner } from "../inputs/SearchableDropdownPositioner";
import {
  SearchableDropdownListContent,
  SearchableDropdownProps,
  getFilteredResults,
  useSearchableDropdown,
} from "../inputs";
import { Body } from "../typography";
import { DateInput, DateInputProps } from "../inputs/DateInput";
import { isValid, parse } from "date-fns";
import { formatGeneral } from "cleave-zen";

export const getDollarValue = (value: string) => {
  const numbersAndDecimalOnly = value.replace(/[^0-9.]/g, "");
  const decimalSections = numbersAndDecimalOnly.split(".");
  const capCents = decimalSections[1];
  if ((capCents && capCents.length > 2) || decimalSections.length > 2) {
    return decimalSections[0] + "." + decimalSections[1].slice(0, 2);
  }
  return numbersAndDecimalOnly;
};

export type FieldProps = {
  heading?: string;
  headingDecoration?: "required" | "optional";
  /**
   * The name of the field.
   * This will be used as the key in the form data value when onSubmit is called.
   * Naming convention whatever the API expects for that field.
   */
  name: string;
  children: React.ReactNode;
  /**
   * Used for server-side inline validation errors.
   */
  error?: string;
  /**
   * Validation messages to display for each built-in HTML validity state.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ValidityState}
   */
  validations?: { [key in RadixForm.ValidityMatcher]?: string };
  /**
   * Used for custom client-side validations.
   */
  customValidations?: { validator: RadixForm.CustomMatcher; message: string }[];
  description?: string;
};

const Field = ({
  heading,
  headingDecoration,
  name,
  children,
  error,
  customValidations,
  validations,
  description,
}: FieldProps) => {
  return (
    <RadixForm.Field
      className={styles.formField}
      name={name}
      serverInvalid={!!error}
    >
      <div className={styles.headingAndControl}>
        {heading && (
          <RadixForm.Label asChild>
            <FieldHeading decoration={headingDecoration}>
              {heading}
            </FieldHeading>
          </RadixForm.Label>
        )}
        {children}
      </div>
      {description && !error && !validations && !customValidations?.length && (
        <Body color="accent-uniform-grey">{description}</Body>
      )}
      {error && (
        <RadixForm.Message forceMatch={!!error}>
          <FieldErrorMessage>{error}</FieldErrorMessage>
        </RadixForm.Message>
      )}
      {validations &&
        Object.entries(validations).map(([key, value]) => (
          <RadixForm.Message key={key} match={key as RadixForm.ValidityMatcher}>
            <FieldErrorMessage>{value}</FieldErrorMessage>
          </RadixForm.Message>
        ))}
      {customValidations &&
        customValidations.map(({ validator, message }) => (
          <RadixForm.Message key={message} match={validator}>
            <FieldErrorMessage>{message}</FieldErrorMessage>
          </RadixForm.Message>
        ))}
    </RadixForm.Field>
  );
};

/**
 * An accessible form component.
 */
export const Form = {
  /**
   * Should render Form.Field, Form.InputField, Form.SearchableDropdown, Form.Row, Form.Error and Form.Submit.
   */
  Root: ({
    children,
    onSubmit,
  }: {
    children: React.ReactNode;
    /**
     * Returns the form data as an object, where the keys are the field names and the values are the field values.
     * Useful for simple, uncontrolled forms.
     */
    onSubmit?: (value: { [key: string]: FormDataEntryValue }) => void;
  }) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(event.currentTarget));
      onSubmit?.(data);
    };

    return (
      <RadixForm.Root onSubmit={handleSubmit} className={styles.formRoot}>
        {children}
      </RadixForm.Root>
    );
  },
  /**
   * Used to group related fields together in equally sized columns.
   */
  Row: ({
    children,
    gridTemplateColumns,
  }: {
    children: React.ReactNode;
    gridTemplateColumns?: React.CSSProperties["gridTemplateColumns"];
  }) => {
    return (
      <div
        className={styles.row}
        style={{
          gridTemplateColumns,
          display: gridTemplateColumns ? "grid" : "flex",
        }}
      >
        {children}
      </div>
    );
  },
  /**
   * A generic field component that can be used to wrap any form control.
   */
  Field,
  InputField: ({
    heading,
    headingDecoration,
    name,
    error,
    validations,
    customValidations,
    description,
    ...args
  }: Omit<FieldProps, "children"> & InputProps) => {
    return (
      <Field
        headingDecoration={headingDecoration}
        customValidations={customValidations}
        error={error}
        heading={heading}
        name={name}
        validations={validations}
        description={description}
      >
        <RadixForm.FormControl asChild>
          <Input {...args} />
        </RadixForm.FormControl>
      </Field>
    );
  },
  PhoneInputField: ({
    heading,
    name,
    onChange,
    placeholder,
    required,
    error,
    validations,
    customValidations,
    value,
    disabled,
    description,
  }: {
    name: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
  } & Omit<FieldProps, "children">) => {
    return (
      <Form.InputField
        required={required}
        validations={validations}
        customValidations={customValidations}
        error={error}
        heading={heading}
        name={name}
        value={value}
        onChange={(event) => {
          const formattedPhoneValue = formatGeneral(event.target.value, {
            blocks: [2, 3, 3, 4],
            delimiters: [" (", ") ", "-", "-"],
            delimiterLazyShow: true,
            prefix: "+1",
            numericOnly: true,
          });
          onChange?.(formattedPhoneValue);
        }}
        placeholder="+1 (000) 000-0000"
        disabled={disabled}
        description={description}
      />
    );
  },
  DollarInputField: ({
    heading,
    name,
    onChange,
    placeholder,
    required,
    error,
    validations,
    customValidations,
    value,
    disabled,
    description,
  }: {
    name: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
  } & Omit<FieldProps, "children">) => {
    return (
      <Form.InputField
        required={required}
        validations={validations}
        customValidations={customValidations}
        error={error}
        leftIconName="AttachMoney"
        heading={heading}
        name={name}
        value={value}
        onChange={(event) => {
          const dollarValue = getDollarValue(event.target.value);
          onChange?.(dollarValue);
        }}
        placeholder={placeholder}
        disabled={disabled}
        description={description}
      />
    );
  },
  DateInputField: ({
    heading,
    headingDecoration,
    name,
    error,
    validations,
    customValidations = [],
    description,
    ...args
  }: Omit<FieldProps, "children"> & DateInputProps) => {
    return (
      <Field
        headingDecoration={headingDecoration}
        customValidations={[
          {
            validator: (value) => {
              const parsedDate = parse(value, "P", new Date());
              return !isValid(parsedDate);
            },
            message: "Invalid date format.",
          },
          ...customValidations,
        ]}
        error={error}
        heading={heading}
        name={name}
        validations={validations}
        description={description}
      >
        <RadixForm.FormControl asChild>
          <DateInput {...args} />
        </RadixForm.FormControl>
      </Field>
    );
  },
  /**
   * Used this version to render a searchable dropdown field that
   * searches for and fetches results asynchronously.
   */
  AsyncSearchableDropdownField: ({
    heading,
    headingDecoration,
    name,
    error,
    validations,
    customValidations,
    placeholder,
    value,
    results,
    required,
    onSelectOption,
    isLoading,
    onSearch,
    searchTerm,
    onLoadMore,
    disabled,
  }: Omit<FieldProps, "children"> &
    SearchableDropdownProps & {
      onSearch: (searchTerm: string) => void;
      searchTerm: string;
    }) => {
    const {
      containerRef,
      showOptions,
      handleChange,
      handleClick,
      handleFocus,
      handleClear,
      setShowOptions,
    } = useSearchableDropdown({ results, value, onSelectOption });

    return (
      <Field
        headingDecoration={headingDecoration}
        customValidations={customValidations}
        error={error}
        heading={heading}
        name={name}
        validations={validations}
      >
        <SearchableDropdownPositioner ref={containerRef}>
          <RadixForm.FormControl asChild>
            <SearchableDropdownInput
              disabled={disabled}
              isOptionsShown={showOptions}
              onClear={handleClear}
              onFocus={handleFocus}
              required={required}
              value={searchTerm}
              placeholder={placeholder}
              onChange={(event) => {
                handleChange(event);
                onSearch(event.target.value);
              }}
              onToggleOpen={() => setShowOptions(!showOptions)}
            />
          </RadixForm.FormControl>
          {showOptions && (
            <DropdownList isLoading={isLoading} onLoadMore={onLoadMore}>
              <SearchableDropdownListContent
                isLoading={!!isLoading}
                results={results}
                onClickOption={handleClick}
              />
            </DropdownList>
          )}
        </SearchableDropdownPositioner>
      </Field>
    );
  },
  /**
   * Used this version to render a searchable dropdown field that
   * fetches all dropdown items upfront and search through them client-side.
   */
  SearchableDropdownField: ({
    heading,
    headingDecoration,
    name,
    error,
    validations,
    customValidations,
    placeholder,
    value,
    results,
    required,
    onSelectOption,
    isLoading,
    onLoadMore,
    disabled,
  }: Omit<FieldProps, "children"> & SearchableDropdownProps) => {
    const {
      containerRef,
      searchTerm,
      showOptions,
      handleChange,
      handleClick,
      handleFocus,
      handleClear,
      setShowOptions,
    } = useSearchableDropdown({ results, value, onSelectOption });

    const filteredResults = getFilteredResults(results, searchTerm);

    return (
      <Field
        headingDecoration={headingDecoration}
        customValidations={customValidations}
        error={error}
        heading={heading}
        name={name}
        validations={validations}
      >
        <SearchableDropdownPositioner ref={containerRef}>
          <RadixForm.FormControl asChild>
            <SearchableDropdownInput
              disabled={disabled}
              isOptionsShown={showOptions}
              onClear={handleClear}
              onFocus={handleFocus}
              required={required}
              value={searchTerm}
              placeholder={placeholder}
              onChange={handleChange}
              onToggleOpen={() => setShowOptions(!showOptions)}
            />
          </RadixForm.FormControl>
          {showOptions && (
            <DropdownList isLoading={isLoading} onLoadMore={onLoadMore}>
              <SearchableDropdownListContent
                isLoading={!!isLoading}
                results={filteredResults}
                onClickOption={handleClick}
              />
            </DropdownList>
          )}
        </SearchableDropdownPositioner>
      </Field>
    );
  },
  Error: FieldErrorMessage,
  Submit: ({ children }: { children: React.ReactNode }) => {
    return <RadixForm.Submit asChild>{children}</RadixForm.Submit>;
  },
};

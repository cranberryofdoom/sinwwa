import { useEffect, useRef, useState } from "react";
import { useClickOutside } from "../hooks/useClickOutside";
import { DropdownList } from "../dropdowns/DropdownList";
import {
  EmptyOptionsRowPlaceholder,
  LoadingOptionsRowPlaceholder,
  OptionsRow,
} from "../dropdowns/OptionsRow";
import { SearchableDropdownInput } from "./SearchableDropdownInput";
import { SearchableDropdownPositioner } from "./SearchableDropdownPositioner";

type SearchableDropdownResult = {
  /**
   * The unique identifier for the search result.
   * This usually lines up with the id of the object in the database.
   */
  id: string | number;
  /**
   * What the dropdown result options row will display.
   */
  name: string;
};

type SearchableDropdownResults = SearchableDropdownResult[] | [];

export const getFilteredResults = (
  results: SearchableDropdownResults,
  searchTerm: string,
) => {
  return results.filter((result) =>
    result.name.toLowerCase().startsWith(searchTerm.toLowerCase()),
  );
};

export const findMatchingResultNameById = (
  results: SearchableDropdownResults,
  id: string,
) => {
  return results.find((result) => {
    return result.id.toString() === id;
  })?.name;
};

export const useSearchableDropdown = ({
  results,
  value,
  onSelectOption,
}: {
  value: string;
  results: SearchableDropdownResults;
  onSelectOption: (value: string) => void;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState(
    findMatchingResultNameById(results, value) || "",
  );
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    setSearchTerm(findMatchingResultNameById(results, value) || "");
  }, [results, value]);

  useClickOutside([containerRef], () => {
    setShowOptions(false);
    const selectedName = findMatchingResultNameById(results, value);
    setSearchTerm(selectedName || "");
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (inputValue === "") {
      setShowOptions(false);
      onSelectOption("");
    } else {
      setShowOptions(true);
    }
    setSearchTerm(inputValue);
  };

  const handleClick = (result: SearchableDropdownResult) => {
    onSelectOption(result.id.toString());
    const selectedName = findMatchingResultNameById(
      results,
      result.id.toString(),
    );
    setSearchTerm(selectedName || "");
    setShowOptions(false);
  };

  const handleFocus = () => {
    if (searchTerm !== "") {
      setShowOptions(true);
    }
  };

  const handleClear = () => {
    setSearchTerm("");
    onSelectOption("");
    setShowOptions(false);
  };

  return {
    containerRef,
    searchTerm,
    setSearchTerm,
    showOptions,
    setShowOptions,
    handleChange,
    handleClick,
    handleFocus,
    handleClear,
  };
};

export const SearchableDropdownListContent = ({
  isLoading,
  results,
  onClickOption,
}: {
  isLoading: boolean;
  results: { id: string | number; name: string }[] | [];
  onClickOption: (result: { id: string | number; name: string }) => void;
}) => {
  if (results.length === 0 && !isLoading) {
    return <EmptyOptionsRowPlaceholder />;
  }
  return (
    <>
      {results.map((result) => (
        <OptionsRow
          key={result.id}
          id={result.id.toString()}
          name={result.name}
          onClick={() => onClickOption(result)}
        />
      ))}
      {isLoading && <LoadingOptionsRowPlaceholder />}
    </>
  );
};

export type SearchableDropdownProps = {
  disabled?: boolean;
  value: string;
  placeholder?: string;
  required?: boolean;
  onSelectOption: (value: string) => void;
  results: { id: string | number; name: string }[] | [];
  isLoading?: boolean;
  onLoadMore?: () => void;
};

export const SearchableDropdown = ({
  placeholder,
  value,
  results,
  required,
  onSelectOption,
  isLoading,
  onLoadMore,
  disabled,
}: SearchableDropdownProps) => {
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
    <SearchableDropdownPositioner ref={containerRef}>
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
  );
};

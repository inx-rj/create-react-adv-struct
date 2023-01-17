import React, {ChangeEvent} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {OptionType} from "constants/types/commonTypes";
import TextField from '@material-ui/core/TextField';

interface Props {
    options: OptionType[],
    onSelect: (value: OptionType) => void;
    value: OptionType;
    inputValue?: string;
    placeholder?: string;
    id?: string;
    required?: boolean;
    size?: 'small' | 'medium';
    autoComplete?: boolean;
    customMenuItemElement?: (option: any) => JSX.Element;
    onInputChange?: (value: string) => void;
    hidePopupIcon?: boolean;
    multiple?: boolean;
}

const AutocompleteComponent = (props: Props) => {
    const {
        options,
        onSelect,
        value,
        placeholder,
        id,
        required,
        customMenuItemElement,
        onInputChange,
        inputValue,
        size,
        autoComplete,
        hidePopupIcon,
        multiple = false,
    } = props;
    return (
        <Autocomplete renderInput={(params) => {
            return (
                <TextField {...params}
                           id={id}
                           label={placeholder}
                           value={inputValue || value?.label}
                           size={size}
                           onChange={(event: ChangeEvent<HTMLInputElement>) => onInputChange && onInputChange(event.target.value)}
                           required={required}
                           variant="outlined" />
            )
}}
                      options={options}
                      closeIcon={null}
                      multiple={multiple}
                      fullWidth
                      autoComplete={autoComplete}
                      forcePopupIcon={!hidePopupIcon}
                      value={value}
                      onChange={(event, value: OptionType) => {
                          onSelect(value);
                          onInputChange && onInputChange('');
                      }}
                      getOptionLabel={(option: OptionType) => option?.label || ''}
                      renderOption={(option: OptionType) => customMenuItemElement ? customMenuItemElement(option) : option?.label}
        />
    )
};

export default AutocompleteComponent;

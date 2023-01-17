import React from 'react';
import { translate } from "utils/commonUtils";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { HeaderCell, HeaderProperties } from "constants/types/componentsTypes";
import TableHeaderCell from "./TableHeaderCell";
import { TableCell } from "@material-ui/core";
import AutocompleteComponent from "components/AutocompleteComponent";
import { OptionType } from "constants/types/commonTypes";

interface Props extends HeaderProperties {
    data?: any;
    isRowSelectable?: boolean;
}

const TableHeader = (props: Props) => {
    const {
        cells,
        readOnly = false,
        actionsColumnName = translate('openiam.ui.common.actions'),
        actionsColumnWidth,
        setSorting,
        sortOrder,
        sortField,
        setSearchFilter,
        searchFilter,
        isRowSelectable
    } = props;
    const renewedCells = cells?.map(e => e);
    if (renewedCells?.length > 0 && !readOnly) {
        renewedCells.push({ id: "actions", label: actionsColumnName, width: actionsColumnWidth } as HeaderCell)
    }
    const renderSearchField = (type: string, fieldName: string, options?: OptionType[]) => {
        const handler = (value: string) => setSearchFilter(fieldName, value);
        const targetSearchFilter = searchFilter.find(searchItem => searchItem.field === fieldName);
        switch (type) {
            case 'select':
                const selectHandler = (value: OptionType) => handler(value.value);
                return (
                    <AutocompleteComponent value={targetSearchFilter !== undefined && options?.find(option => option.value === targetSearchFilter.value)}
                        size="small"
                        onSelect={selectHandler}
                        hidePopupIcon
                        options={options}
                    />
                )
            default:
                return null;
        }
    }
    return (
        <TableHead>
            <TableRow>
                {isRowSelectable &&
                    <TableCell padding="checkbox" />}
                {renewedCells?.map((headCell) => (
                    <TableHeaderCell {...headCell}
                        key={headCell.id}
                        sortField={sortField}
                        sortOrder={sortOrder}
                        renderSearchField={renderSearchField}
                        setSorting={setSorting} />
                ))}
            </TableRow>
        </TableHead>
    );
};

export default TableHeader;
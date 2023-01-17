import React from 'react';
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { HeaderCell } from "constants/types/componentsTypes";
import makeStyles from '@material-ui/core/styles/makeStyles';
import { OptionType } from "constants/types/commonTypes";

interface HeaderCellProps extends HeaderCell {
    sortField?: string;
    sortOrder?: 'asc' | 'desc';
    setSorting?: (id: string, sortOrder: string) => void;
    renderSearchField?: (searchFieldType: string, id: string, searchOptions?: OptionType[]) => JSX.Element;
}
const useStyles = makeStyles({
    headCell: {
        width: (props: HeaderCellProps) => `${props.width}%`,
        verticalAlign: (props: HeaderCellProps) => props.searchFieldType ? "inherit" : "top !important",
    },
});
const TableHeaderCell = (props: HeaderCellProps) => {
    const classes = useStyles(props);
    const {
        id,
        numeric,
        disablePadding,
        isSortable,
        label,
        searchFieldType,
        searchOptions,
        sortField,
        sortOrder,
        setSorting,
        renderSearchField } = props;

    return (
        <TableCell
            id={`headcell-${id}`}
            key={id}
            align={numeric ? 'right' : 'left'}
            classes={{ root: classes.headCell }}
            padding={disablePadding ? 'none' : 'normal'}>
            <TableSortLabel
                active={sortField === id}
                hideSortIcon={!isSortable}
                direction={sortOrder}
                classes={{ root: 'default-cursor' }}
                onClick={() => setSorting(id, sortOrder)}
            >
                <div onClick={(event) => event.stopPropagation()}>
                    <div className="table-headcell">{label}</div>
                    {searchFieldType && renderSearchField(searchFieldType, id, searchOptions)}
                </div>
            </TableSortLabel>
        </TableCell>
    )
};

export default TableHeaderCell;
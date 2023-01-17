import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import TablePagination from "@material-ui/core/TablePagination";
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

interface Props {
    count: number;
    page: number;
    rowsPerPage: number;
    rowsPerPageOptions: number[];
    onChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onChangePage: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, page: number) => void;
}

function TablePaginationActions({ count, page, rowsPerPage, onPageChange }) {
    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div className="table-pagination">
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                <FirstPageIcon />
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                <KeyboardArrowLeft />
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                <KeyboardArrowRight />
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                <LastPageIcon />
            </IconButton>
        </div>
    );
}

const TablePaginationComponent = (props: Props) => {
    const {
        count,
        page,
        rowsPerPage,
        rowsPerPageOptions,
        onChangeRowsPerPage,
        onChangePage
    } = props;

    return (
        <TablePagination count={count}
                         page={page}
                         rowsPerPage={rowsPerPage}
                         rowsPerPageOptions={rowsPerPageOptions || [10, 50, 100]}
                         onChangeRowsPerPage={onChangeRowsPerPage}
                         onPageChange={onChangePage}
                         ActionsComponent={TablePaginationActions}
        />)
}

export default TablePaginationComponent;
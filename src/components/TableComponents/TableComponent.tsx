import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ClearIcon from '@material-ui/icons/Clear';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import TableHeader from "./TableHeader";
import TablePagination from './TablePagination';
import { HeaderProperties, HeaderCell } from "constants/types/componentsTypes";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { ReportParams, translate } from 'utils/commonUtils';
import { OptionType } from 'constants/types/commonTypes';
import { TextField } from '@material-ui/core';

interface IconOptions {
  tooltipText?: string;
  onClick(row?: any): void;
  isVisible(row?: any): boolean;
  isEnabled(row?: any): boolean;
}

interface AddOptions extends IconOptions {
  onClick: () => void;
}

interface ToolbarProps {
  title?: string;
  showToolbar: boolean;
  addOptions?: AddOptions;
}

interface PaginationProperties {
  rowsPerPage: number;
  setRowsPerPage: (value: number) => void;
  currentPage: number;
  setCurrentPage: (value: number) => void;
  rowsPerPageOptions?: number[];
  totalCount?: number;
}

interface SelectRowProps {
  onClick: (row?: any) => void;
  rowIsSelected: (row?: any) => boolean;
}

interface Props {
  headerProps: HeaderProperties;
  toolbarProps: ToolbarProps;
  readOnly?: boolean;
  size?: 'small' | 'medium';
  emptyMessage?: string;
  extractData: (cellId: string, row: any) => JSX.Element | string | boolean | number;
  generateRowId: (row: any, index?: number) => string;
  deleteOptions?: IconOptions;
  editOptions?: IconOptions,
  viewOptions?: IconOptions,
  acceptOptions?: IconOptions,
  rejectOptions?: IconOptions,
  claimOptions?: IconOptions,
  unclaimOptions?: IconOptions,
  selectionProps?: SelectRowProps,
  data: any[];
  paginationProps?: PaginationProperties;
  allowRowSelect?: boolean;
}

const EnhancedTableToolbar = (props: ToolbarProps) => {
  const {
    title,
    addOptions,
    showToolbar
  } = props;

  return (
    <>
      {showToolbar && (
        <Toolbar classes={{ root: "table-toolbar" }}>
          <Typography variant="h6" component="div">{title}</Typography>
          {addOptions && addOptions.isVisible && addOptions.isVisible() && (
            <Tooltip title={addOptions.tooltipText || ''}>
              {addOptions.onClick &&
                <IconButton onClick={() => { addOptions.onClick() }}
                  classes={{ root: 'add-icon' }}
                  disabled={addOptions.isEnabled && !addOptions.isEnabled()}>
                  <AddIcon />
                </IconButton>
              }
            </Tooltip>
          )}
        </Toolbar>
      )}
    </>
  );
};

const TableComponent = (props: Props) => {
  const {
    readOnly = false,
    size = 'medium',
    emptyMessage,
    editOptions,
    deleteOptions,
    viewOptions,
    acceptOptions,
    rejectOptions,
    data,
    extractData,
    generateRowId,
    toolbarProps,
    headerProps,
    paginationProps,
    selectionProps,
    claimOptions,
    unclaimOptions,
    allowRowSelect = true
  } = props;

  const hasActionButtons = (deleteOptions || editOptions || viewOptions || acceptOptions || rejectOptions);
  const currentPage = paginationProps?.currentPage || 0;
  const rowsPerPage = paginationProps?.rowsPerPage || data?.length;

  const [headerFilter, setHeaderFilter] = useState<OptionType[]>([]);

  const renderActionButton = (actionOptions: IconOptions, icon: JSX.Element, customClassName: string, row: any) => {
    return (
      <>
        {actionOptions && actionOptions.isVisible && actionOptions.isVisible(row) && (
          <Tooltip title={actionOptions.tooltipText || ''}>
            <IconButton onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              event.stopPropagation();
              actionOptions.onClick(row);
            }}
              classes={{ root: customClassName }}
              disabled={actionOptions.isEnabled && !actionOptions.isEnabled(row)}>
              {icon}
            </IconButton>
          </Tooltip>
        )}
      </>
    )
  };
  const sliceDataForPagination = () => {
    if (paginationProps && data.length !== paginationProps.totalCount) {
      console.log('Inside? Found');

      return data;
    }
    console.log('Outside? Found', data);
    return data?.slice(currentPage * rowsPerPage, currentPage * rowsPerPage + rowsPerPage);
  }
  return (
    <div>
      <Paper>
        <EnhancedTableToolbar {...toolbarProps} />
        <TableContainer>
          <Table
            size={size}
          >
            <TableHeader
              readOnly={readOnly}
              isRowSelectable={!!selectionProps && !!data?.length}
              data={data}
              {...headerProps}
            />
            <TableBody>
              <>
                {sliceDataForPagination()?.map((row, index: number) => {
                  return (
                    <TableRow
                      hover
                      selected={allowRowSelect && selectionProps?.rowIsSelected(row)}
                      onClick={() => selectionProps?.onClick(row)}
                      id={generateRowId(row, index)}
                      key={generateRowId(row, index)}
                      classes={{ selected: 'row-selected' }}>
                      {selectionProps &&
                        <TableCell padding="checkbox">
                          <Checkbox color="primary"
                            checked={selectionProps.rowIsSelected(row)}
                            onChange={() => selectionProps?.onClick(row)} />
                        </TableCell>
                      }
                      {data?.length > 0 &&
                        headerProps.cells.map((cell: HeaderCell, cellIndex: number) => {
                          const valueToDisplay = extractData(cell.id, row);
                          console.log(valueToDisplay, typeof valueToDisplay);

                          return (
                            <TableCell component="th" scope="row" key={cell.id}>
                              {
                                (valueToDisplay === 'true' || valueToDisplay === true) ?
                                  <CheckIcon className="material-icons-orange" /> :
                                  valueToDisplay
                              }
                            </TableCell>
                          );
                        })
                      }
                      {
                        hasActionButtons && (
                          <TableCell>
                            <div className="buttons-row action-buttons">
                              {renderActionButton(viewOptions, <VisibilityIcon />, 'edit-icon', row)}
                              {renderActionButton(acceptOptions, <CheckIcon />, 'accept-icon', row)}
                              {renderActionButton(claimOptions, <LockIcon />, 'accept-icon', row)}
                              {renderActionButton(unclaimOptions, <LockOpenIcon />, 'accept-icon', row)}
                              {renderActionButton(rejectOptions, <ClearIcon />, 'delete-icon', row)}
                              {renderActionButton(editOptions, <EditIcon />, 'edit-icon', row)}
                              {renderActionButton(deleteOptions, <DeleteIcon />, 'delete-icon', row)}
                            </div>
                          </TableCell>
                        )
                      }
                    </TableRow>
                  );
                })}
                {(!data || data?.length == 0) && (
                  <TableRow className="empty-message-row">
                    <TableCell colSpan={props?.headerProps?.cells?.length + ((hasActionButtons) ? 1 : 0)}>
                      <div className="text-center">{emptyMessage || ''}</div>
                    </TableCell>
                  </TableRow>
                )}
              </>
            </TableBody>
            {paginationProps && (
              <TablePagination count={paginationProps.totalCount || data?.length}
                page={paginationProps.currentPage}
                rowsPerPage={paginationProps.rowsPerPage}
                rowsPerPageOptions={paginationProps.rowsPerPageOptions || [10, 50, 100]}
                onChangeRowsPerPage={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => paginationProps.setRowsPerPage(parseInt(event.target.value))}
                onChangePage={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, page: number) => paginationProps.setCurrentPage(page)}
              />
            )}
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}


export default TableComponent;

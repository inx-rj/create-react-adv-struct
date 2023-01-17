import {OptionType} from "./commonTypes";

export interface HeaderCell {
    id: string,
    numeric?: boolean,
    disablePadding?: boolean,
    label: string;
    isSortable?: boolean;
    searchFieldType?: string;
    searchOptions?: OptionType[];
    width?: number;
};

export interface HeaderProperties {
    cells: HeaderCell[];
    readOnly?: boolean;
    actionsColumnName?: string;
    actionsColumnWidth?: number;
    sortOrder?: 'asc' | 'desc';
    setSorting?: (id: string, sortOrder: string) => void;
    sortField?: string;
    searchFilter?: SearchFilter[];
    setSearchFilter?: (fieldName: string, value: string | number) => void;
}
export interface SearchFilter {
    field: string;
    op: string;
    value: string | number;
}

export interface UserSearchOptionType extends OptionType {
    employeeId: string,
    email: string,
    principal: string,
    userStatus: string;
    name: string;
}

export interface TreeViewData {
    id: string;
    name: string;
    children?: TreeViewData[];
    internalId?: string;
    status?: string;
    picture?: string;
    notes?: string | {
        processInstanceId: string;
        fileName: string;
        attachmentId: string;
    };
    rolecontext?: string;
    navigation?: {
        from: number;
        size: number;
        total: number;
        page: number;
    },
    iconCls?: string;
    blockedByApproverId?: string;
    type?: string;
}

export interface IconOptions {
    tooltipText?: string;
    onClick?: (row?: any) => void;
    isVisible?: (row?: any) => boolean;
    isEnabled?: (row?: any) => boolean;
}

export interface ActionButtonsProps extends IconOptions {
    color?: 'primary' | 'secondary';
    label: string | JSX.Element;
}

export interface ToolbarProps {
    showToolbar: boolean;
    toolbarButtons?: ActionButtonsProps[];
}
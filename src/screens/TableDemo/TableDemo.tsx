import { TextField } from '@material-ui/core';
import AutocompleteComponent from 'components/AutocompleteComponent';
import TableComponent from 'components/TableComponents/TableComponent';
import { OptionType } from 'constants/types/commonTypes';
import { UserIdentity } from 'constants/types/userManagement';
import React, { useEffect, useState } from 'react';
import { ReportParams } from 'utils/commonUtils';

const TableDemo = () => {

    const [tableData, setTableData] = useState([]);
    const [searchFilter, setSearchFilter] = useState<string>('');
    const [headerFilter, setHeaderFilter] = useState(null);

    useEffect(() => {
        setTableData([
            { label: "FIRST_NAME_HEADER", value: "FIRST_NAME_HEADER" },
            { label: "MIDDLE_INITIAL_HEADER", value: "MIDDLE_INITIAL_HEADER" },
            { label: "EMPLOYEE_ID_HEADER", value: "EMPLOYEE_ID_HEADER" },
            { label: "EMAIL_HEADER", value: "EMAIL_HEADER" },
            { label: "ATTRIBUTE_NAME_HEADER", value: "ATTRIBUTE_NAME_HEADER" },
        ]);
    }, [])


    useEffect(() => {
        if (searchFilter) {
            setHeaderFilter(ReportParams.find(option => option?.value === searchFilter));
        }
    }, [searchFilter])


    const extractData = (cellId: string, row: {}) => {

        console.log("ExtractData", cellId, row);

        switch (cellId) {
            case 'name':
                return row['label'];
            case 'types':
                if (row['label'] === "ATTRIBUTE_NAME_HEADER") {

                    return (
                        <AutocompleteComponent
                            options={ReportParams}
                            onSelect={(value: OptionType) => setSearchFilter(value?.value)}
                            placeholder={"Select headers"}
                            value={headerFilter}
                        />
                    );
                } else if (row['label'] === 'EMAIL_HEADER') {
                    return (
                        <TextField type={"email"} name='email' label="Email ID" />
                    )
                }else{
                    return row['label']
                }
            default:
                return null;
        }
    };
    return (
        <TableComponent
            headerProps={{
                cells: [
                    {
                        id: 'name',
                        label: "Name"
                    },
                    {
                        id: 'types',
                        label: "Types"
                    },
                ]
            }}
            toolbarProps={{
                title: "Headers",
                showToolbar: true,
            }}
            emptyMessage={"Empty Message"}
            data={tableData}
            extractData={extractData}
            generateRowId={(row: UserIdentity) => row.id}
        />
    )
}

export default TableDemo
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";


const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field: "id", headerName: "ID", flex: 0.5},
        {field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell"},
        {field: "registrarId", headerName: "registrar ID"},
        {field: "email", headerName: "Email", flex: 1},
        {field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left"},
        {field: "phone", headerName: "Phone number", flex: 1},
        {field: "address", headerName: "Address", flex: 1},
        {field: "city", headerName: "City", flex: 1},
        {field: "zipCode", headerName: "ZipCode", flex: 1},
    ]

    return (
        <Box m="20px">
            <Header Title="Contacts" subtitle="List of contacts for future reference" />
            <Box 
                m="40px 0 0 0" 
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {border: "none"},
                    "& .MuiDataGrid-cell": {borderBottom: "none"},
                    "& .name-column--cell": {color: colors.greenAccent[300]},
                    "& .MuiDataGrid-columnHeader": {backgroundColor: colors.blueAccent[700], borderBottom: "none"},
                    "& .MuiDataGrid-virtualScroller": {backgroundColor: colors.primary[400]},
                    "& .MuiDataGrid-footerContainer": {backgroundColor: colors.blueAccent[700], borderTop: "none"},
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {color: `${colors.gray[100]}`},
                }}
            >
                <DataGrid 
                    rows={mockDataContacts}
                    columns={columns}
                    components={{Toolbar: GridToolbar}}
                />
            </Box>
        </Box>
    )

}

export default Contacts;
import { Container } from '@mui/material';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
    { id: 1, col1: '1', col2: 'Connor McDavid', col3: 'C', col4: '300', col5: '35', col6: '70', col7: '-50', col8: '120', col9: '14', col10: '5', col11: '4', col12: '200', col13: '50', col14: '40', col15: '0' },
    { id: 2, col1: '2', col2: 'Nathan MacKinnon', col3: 'C', col4: '298', col5: '22', col6: '62', col7: '+50', col8: '100', col9: '27', col10: '5', col11: '4', col12: '200', col13: '50', col14: '40', col15: '0' },
    { id: 3, col1: '3', col2: 'Auston Matthews', col3: 'C', col4: '270', col5: '50', col6: '33', col7: '-2', col8: '160', col9: '31', col10: '5', col11: '4', col12: '200', col13: '50', col14: '40', col15: '0' },

];

const columns: GridColDef[] = [
    { field: 'col2', headerName: 'Player', width: 150 },
    { field: 'col3', headerName: 'Pos', width: 75 },
    { field: 'col4', headerName: 'PTS', width: 75 },
    { field: 'col5', headerName: 'G', width: 75 },
    { field: 'col6', headerName: 'A', width: 75 },
    { field: 'col7', headerName: '+/-', width: 75 },
    { field: 'col8', headerName: 'PIM', width: 75 },
    { field: 'col9', headerName: 'PPP', width: 75 },
    { field: 'col10', headerName: 'SHG', width: 75 },
    { field: 'col11', headerName: 'HAT', width: 75 },
    { field: 'col12', headerName: 'SOG', width: 75 },
    { field: 'col13', headerName: 'HIT', width: 75 },
    { field: 'col14', headerName: 'BLK', width: 75 },
    { field: 'col15', headerName: 'DEF', width: 75 },
];


function LandingPage() {
    return (
        <>
            <Container
                maxWidth={false}
                disableGutters
                sx={{
                    height: 'calc(100vh - 100px)', // Oletetaan, että NavBarin korkeus on 64px
                    marginTop: '64px', // Sama kuin NavBarin korkeus
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div style={{
                    height: '100%', width: '100%'
                }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        disableColumnMenu
                        sx={{
                            color: 'white',
                            fontFamily: 'roboto',
                            backgroundColor: "#1E1E2F",
                            borderColor: 'black',
                            borderWidth: '2px',
                            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
                            '& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell': {
                                backgroundColor: "#1E1E2F",
                                color: "#FFFFFF",
                            },
                            '& .MuiDataGrid-footerContainer, & .MuiTypography-root': {
                                color: "#FFFFFF", // Muuta footerin kaikki tekstit valkoisiksi
                            },

                        }}
                    />
                </div>
            </Container >

        </>
    )
}

export default LandingPage
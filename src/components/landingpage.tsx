import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
    { id: 1, col1: '1', col2: 'Connor McDavid', col3: 'C', col4: '300', col5: '35', col6: '70', col7: '-50', col8: '120', col9: '14' },
    { id: 2, col1: '2', col2: 'Nathan MacKinnon', col3: 'C', col4: '298', col5: '22', col6: '62', col7: '+50', col8: '100', col9: '27' },
    { id: 3, col1: '3', col2: 'Auston Matthews', col3: 'C', col4: '270', col5: '50', col6: '33', col7: '-2', col8: '160', col9: '31' },

];

const columns: GridColDef[] = [
    { field: 'col2', headerName: 'Player', width: 150 },
    { field: 'col3', headerName: 'Pos', width: 50 },
    { field: 'col4', headerName: 'PTS', width: 50 },
    { field: 'col5', headerName: 'G', width: 50 },
    { field: 'col6', headerName: 'A', width: 50 },
    { field: 'col7', headerName: '+/-', width: 50 },
    { field: 'col8', headerName: 'HIT', width: 50 },
    { field: 'col9', headerName: 'BLK', width: 50 },
];


function LandingPage() {
    return (
        <>
            <div style={{ display: 'flex ', alignItems: 'center', justifyContent: 'center', backgroundColor: 'red' }}>
                <div style={{ height: '100%', width: '95%', color: 'white', backgroundColor: 'white' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        disableColumnMenu={true}
                        sx={{
                        }}
                    />
                </div>
            </div>

        </>
    )
}

export default LandingPage
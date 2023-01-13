import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'vendor', headerName: 'Vendor', width: 130 },
  { field: 'vendor_code', headerName: 'Vendor Code', width: 130 },
  { field: 'po', headerName: 'PO#', width: 130 },
  {
    field: 'po_line',
    headerName: 'PO',
    type: 'number',
    width: 90,
  },
  { field: 'description', headerName: 'Description', width: 270 },
  { field: 'po_value', headerName: 'PO Value-INR', width: 130 },
  { field: 'qty_ordered', headerName: 'Qty Ordered', width: 130 },
  { field: 'qty_shipped', headerName: 'Qty Shipped', width: 130 },
  { field: 'gr_quantity', headerName: 'GR Quantity', width: 130 },
  { field: 'uom', headerName: 'UOM', width: 100 },
  { field: 'due_date', headerName: 'Due Date', width: 130 },
  { field: 'commited_date', headerName: 'Commited Date', width: 130 },
  { field: 'status', headerName: 'Status', width: 130 },

];


export default function DataTable({rows}) {
  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}
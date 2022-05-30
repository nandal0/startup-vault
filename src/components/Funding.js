import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, logo, transaction, money, lead) {
  return { name, logo, transaction, money, lead };
}

const rows = [

  createData('Ola Click',"https://static.wixstatic.com/media/db188b_10a12ef3b84e4cd59e5857770ff50029~mv2.jpg/v1/fill/w_800,h_800,al_c/db188b_10a12ef3b84e4cd59e5857770ff50029~mv2.jpg", 'Spped Round - Ola Click' ,159, 'Gradinet Ventures'),
  createData('Joywell Foods',"https://1000logos.net/wp-content/uploads/2021/07/Tyson-Foods-Logo-768x483.png", 'Series B - Joywell Foods' ,25, 'Piva Capital'),
  createData('Jupiter Exchnage',"https://1000logos.net/wp-content/uploads/2021/08/Ping-An-Logo-768x483.png", 'Spped Round - Jupiter Exchange' ,15, 'White Hilt Captail'),
  createData('Astro Forge',"https://1000logos.net/wp-content/uploads/2017/08/Astros-Logo-768x591.png", 'Spped Round - Astro Forge' ,13, 'Initialized Capital'),
  createData('Dedoco',"https://1000logos.net/wp-content/uploads/2020/04/Nordea-Bank-Logo-2000-640x280.jpg", 'Spped Round - Dedoco' ,150, 'FMO'),
  createData('Emiza',"https://1000logos.net/wp-content/uploads/2021/04/WWF-logo-768x432.png", 'Spped Round - Emiza' ,103, 'JM Financial Private Equity'),
  createData('MANTA',"https://1000logos.net/wp-content/uploads/2018/12/Pringles-Logo-768x432.png", 'Series B - MANTA' ,150, 'Forestay Capital'),
  createData('Astro Forge',"https://1000logos.net/wp-content/uploads/2017/08/Astros-Logo-768x591.png", 'Spped Round - Astro Forge' ,13, 'Initialized Capital'),
  createData('Bold Metrics',"https://1000logos.net/wp-content/uploads/2021/01/Irizar-logo-700x195.png", 'Series A - Bold Metrics' ,150, 'Bessemer Venture Partners'),
  
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 550,backgroundColor:'#cee3f9' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Organization Name</TableCell>
            <TableCell align="right">Transaction Name
</TableCell>
            <TableCell align="right">Money Raised
</TableCell>
            <TableCell align="right">Lead Investors
</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
               <div className="row-name">
                <img src={row.logo} alt=""/>
                {row.name}
               </div>
              </TableCell>
              <TableCell align="right">{row.transaction}</TableCell>
              <TableCell align="right">{row.money}</TableCell>
              <TableCell align="right">{row.lead}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

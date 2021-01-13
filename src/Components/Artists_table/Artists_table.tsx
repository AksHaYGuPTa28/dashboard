import React from 'react';
import './Artists_table.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(location: string, manager: string, type: string, status: number, owner: string) {
  return { location, manager, type, status, owner };
}

const rows = [
  createData('5th Avenue, New York','Person 1', 'Condo', 2000,'New'),
  createData('5th Avenue, New York','Person 1', 'Condo', 2000, 'Hot'),
  createData('5th Avenue, New York','Person 1', 'Condo', 2000, 'Hot'),
  createData('5th Avenue, New York','Person 1', 'Condo', 2000, 'Hot'),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead  className="Artists_table2">
          <TableRow>
            <TableCell  style={{color:"black", width: 150}}>Location</TableCell>
            <TableCell  style={{color:"black", width: 200}} align="right">Manager</TableCell>
            <TableCell  style={{color:"black", width: 200}} align="right">Type</TableCell>
            <TableCell  style={{color:"black", width: 200}} align="right">Status</TableCell>
            <TableCell  style={{color:"black", width: 200}} align="right">Owner</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.location}>
              <TableCell component="th" scope="row">
                {row.location}
              </TableCell>
              
              <TableCell align="right">{row.manager}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.owner}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

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

function createData(Heatscore: number, Name: string, Username: string, Followers: number, Lead: string) {
  return { Heatscore, Name, Username, Followers, Lead };
}

const rows = [
  createData(5,'Mark Bardi', '@markbardi', 2000,'New'),
  createData(2,'Mark Bardi', '@markbardi', 2000, 'Hot'),
  createData(7,'Mark Bardi', '@markbardi', 2000, 'Hot'),
  createData(2,'Mark Bardi', '@markbardi', 2000, 'Hot'),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead  className="Artists_table2">
          <TableRow>
            <TableCell  style={{color:"white"}}>Heat score</TableCell>
            <TableCell  style={{color:"white"}} align="right">Name</TableCell>
            <TableCell  style={{color:"white"}} align="right">Username</TableCell>
            <TableCell  style={{color:"white"}} align="right">Followers</TableCell>
            <TableCell  style={{color:"white"}} align="right">Lead Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Heatscore}>
              <TableCell component="th" scope="row">
                {row.Heatscore}
              </TableCell>
              <TableCell align="right">{row.Name}</TableCell>
              <TableCell align="right">{row.Username}</TableCell>
              <TableCell align="right">{row.Followers}</TableCell>
              <TableCell align="right">{row.Lead}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

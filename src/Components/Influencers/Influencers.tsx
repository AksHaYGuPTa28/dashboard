import React, { Component } from 'react';
import './Influencers.css';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import BackupIcon from '@material-ui/icons/Backup';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name: string, username: string, followers: number, Lead: number, protein: number) {
    return { name, username, followers, Lead, protein };
}

const rows = [
    createData('Mark Bardi', '@markbardi', 2000, 2000, 4.0),
   
];

export default function Influencers() {

        let iconsize = {
            fontSize: '48px'
        };
        const classes = useStyles();

        return (
            <div className="Influencers">
            <div className="Influencers_main">
                <h1>Influencers</h1>
                <div className="Influencers_search">
                    <form className="Influencers_form" >
                        <input className="Influencers_input" type="text" placeholder="Search by Username" name="search2" />
                        <Button className="Influencers_searchicon" variant="contained" color="primary">
                            <SearchIcon  />
                        </Button>
                    </form>
                </div>
                <Button className="Influencers_button" variant="contained" >
                    +Add New
      </Button>
                <BackupIcon className="Influencers_upload" style={iconsize} color="primary" />
            </div>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className="Influencers_table">
          <TableRow >
            <TableCell style={{color:"white"}}>Name</TableCell>
            <TableCell style={{color:"white"}} align="right">Username</TableCell>
            <TableCell style={{color:"white"}} align="right">Followers</TableCell>
            <TableCell style={{color:"white"}} align="right">Following</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.followers}</TableCell>
              <TableCell align="right">{row.Lead}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
        );
    
}

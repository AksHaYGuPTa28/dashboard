import React from 'react';
import './Artists.css';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Artiststable from '../Artists_table/Artists_table';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import BackupIcon from '@material-ui/icons/Backup';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import Progressbar from '../Progress_bar/Progress_bar';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
    <div className="Artists">
      <div className="Artists_progress">
    <Progressbar />
    <p style={{ color: '#12005e' }}> &nbsp;643 new properties to onboard</p>
    </div>

      <div className="Artists_head">
        <h1>Properties</h1>
        <div className="Influencers_search">
          <form className="Influencers_form" >
            <input className="Influencers_input" type="text" placeholder="Search by Username" name="search2" />
            <Button className="Influencers_searchicon" variant="contained" color="primary">
              <SearchIcon />
            </Button>
          </form>
        </div>
        <Button className="Influencers_button" variant="contained" >
          Add New Property
      </Button>
      </div>
      </div>

        <AppBar elevation={0} position="static">
          <Tabs className="Artists_table" value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab style={{ color: '#12005e' }} label="New" {...a11yProps(0)} />
            <Tab style={{ color: '#12005e' }} label="Published" {...a11yProps(1)} />
            <Tab style={{ color: '#12005e' }} label="Pre-Auction" {...a11yProps(2)} />
            <Tab style={{ color: '#12005e' }} label="On-Auction" {...a11yProps(3)} />
            <Tab style={{ color: '#12005e' }} label="Post-Auction" {...a11yProps(4)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Artiststable />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Content can be added here
     </TabPanel>
     <TabPanel value={value} index={2}>
          Content can be added here
     </TabPanel>
     <TabPanel value={value} index={3}>
          Content can be added here
     </TabPanel>
     <TabPanel value={value} index={4}>
          Content can be added here
     </TabPanel>

      </div>
  );
}









// import React, { Component } from 'react';
// import './Artists.css';

// class Artists extends Component {


//   render() {
//     return (
// <div className="Artists">
//     <div className="Artists_head">
//      <h1>Artists</h1>
//      <p>Last synced: Dec 27,2020</p>
//      </div>
//      </div>
//     );
//   }
// }
// export default Artists;
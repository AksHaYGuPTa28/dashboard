import React from 'react';
import './App.css';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Influencers from './Components/Influencers/Influencers';
import Artists from './Components/Artists/Artists';

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
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
let iconStyles = {
  fontSize: '48px'
};
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  tabs: {
    borderRight: `0px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="main">
      <div className="wrapper">

        <div className={classes.root}>
          <div className="wrapper_left">
            <h1 className="wrapper_h1">LOGO</h1>
            <div className="wrapper_tabs">
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
              >
                <Tab icon={<AccountCircleIcon style={iconStyles} />} aria-label="phone"  {...a11yProps(0)} />
                <Tab icon={<SupervisedUserCircleIcon style={iconStyles} />} aria-label="phone"  {...a11yProps(1)} />
              </Tabs>
            </div>
            <div className="wrapper_logout">
              <ExitToAppIcon />
              <p style={{ marginLeft: '7px' }}>Logout</p>
            </div>
          </div>
          <div className="wrapper_right">
            <TabPanel value={value} index={0}>
              <Artists />      </TabPanel>
            <TabPanel value={value} index={1}>
              <Influencers />
            </TabPanel>
          </div>
        </div>
      </div>
    </div>
  );
}




// return (
//   <div className="main">
//     <div className="wrapper">
// <div className="wrapper_left">
// <h1>LOGO</h1>
// </div>
// <div className="wrapper_right">

// </div>
//     </div>
//   </div>
// );
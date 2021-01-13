import React from 'react';
import './Landing_page.css';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HomeIcon from '@material-ui/icons/Home';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AssessmentIcon from '@material-ui/icons/Assessment';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AdjustIcon from '@material-ui/icons/Adjust';
import Artists from '../Artists/Artists';
import Button from '@material-ui/core/Button';


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
    fontSize: '36px',
    color: '#12005e'
};
const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
    },
    tabs: {
        borderLeft: `0px solid ${theme.palette.divider}`,
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
                        <div className="wrapper_topicon">
                            <AdjustIcon style={iconStyles} className="circle_icon" />
                        </div>
                        <div className="wrapper_tabs">
                            <Tabs
                                orientation="vertical"
                                variant="scrollable"
                                value={value}
                                onChange={handleChange}
                                aria-label="Vertical tabs example"
                                className={classes.tabs}
                            >
                                <Tab style={{ color: '#12005e' }} icon={<HomeIcon style={iconStyles} />} label="Properties" aria-label="Home"  {...a11yProps(0)} />
                                <Tab style={{ color: '#12005e' }} icon={<AccountBalanceIcon style={iconStyles} />} label="Treasury" aria-label="phone"  {...a11yProps(1)} />
                                <Tab style={{ color: '#12005e' }} icon={<AssessmentIcon style={iconStyles} />} label="Auctions" aria-label="Home"  {...a11yProps(0)} />
                                <Tab style={{ color: '#12005e' }} icon={<PermContactCalendarIcon style={iconStyles} />} label="Wallets" aria-label="Home"  {...a11yProps(0)} />
                                <Tab style={{ color: '#12005e' }} icon={<QuestionAnswerIcon style={iconStyles} />} label="Chat" aria-label="Home"  {...a11yProps(0)} />


                            </Tabs>
                        </div>
                        <div className="wrapper_logout">
                            <ExitToAppIcon style={iconStyles} />
                        </div>
                    </div>
                    <div className="wrapper_right">
                        <div className="wrapper_right_top">
                            <Button className="wrapper_button" variant="contained" >
                                Wallet      </Button>                        </div>
                        <TabPanel value={value} index={0}>
                            <Artists />      </TabPanel>
                        <TabPanel value={value} index={1}>
                            <h1>Add Content here</h1>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <h1>Add Content here</h1>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <h1>Add Content here</h1>
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            <h1>Add Content here</h1>
                        </TabPanel>
                    </div>
                </div>
            </div>
        </div>
    );
}

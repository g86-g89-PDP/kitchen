import React from 'react'
import { AiOutlineHeart, AiOutlineHome, AiOutlineControl} from 'react-icons/ai';
import { FaDiscourse } from 'react-icons/fa'
import { BiBell, BiErrorCircle, BiLockOpen } from 'react-icons/bi'
import { SettingsWrapper } from '../styleW/SettingWrap';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Tabs from '../components/settings/ToDo/Tabs'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));



const Settings = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState('1');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (   
            <SettingsWrapper>
                
                <div>
                    <h1 className="text-light">Settings</h1>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-4">
                        <div className="settings">
                            {/* 1qsim */}
                            <div className="menu">
                                <div className=" text-light menuName">
                                    <span className="pe-2 pb-2 menuIcon"><AiOutlineHeart/></span>
                                    <h5>Appereance</h5>
                                </div>
                                <span className="menuText ps-4">Dark and Light mode, Font size</span>
                            </div>
                            {/* 2qsim */}
                            <div className="menu">
                                <div className=" text-light menuName">
                                    <span className="pe-2 pb-2 menuIcon"><AiOutlineHome /></span>
                                    <h5>Your Restaurant</h5>
                                </div>
                                <span className="menuText ps-4">Dark and Light mode, Font size</span>
                            </div>
                            {/* 3qsim */}
                            <div className="menu active">
                                <div className=" text-light menuName">
                                    <span className="pe-2 pb-2 menuIcon"><FaDiscourse className="Discourse" /></span>
                                    <h5>Products Manage</h5>
                                </div>
                                <span className="menuText ps-4">Manage your product, pricing</span>
                            </div>
                            {/* 4qsim */}
                            <div className="menu">
                                <div className=" text-light menuName">
                                    <span className="pe-2 pb-2 menuIcon"><BiBell /></span>
                                    <h5>Notifications</h5>
                                </div>
                                <span className="menuText ps-4">Customize your notifications</span>
                            </div>
                            {/* 5qsim */}
                            <div className="menu">
                                <div className=" text-light menuName">
                                    <span className="pe-2 pb-2 menuIcon"><BiLockOpen /></span>
                                    <h5>Security</h5>
                                </div>
                                <span className="menuText ps-4">Configure Password, PIN, etc</span>
                            </div>
                            {/* 6qsim */}
                            <div className="menu">
                                <div className=" text-light menuName">
                                    <span className="pe-2 pb-2 menuIcon"><BiLockOpen /></span>
                                    <h5>Security</h5>
                                </div>
                                <span className="menuText ps-4">Configure Password, PIN, etc</span>
                            </div>
                            {/* 7qsim */}
                            <div className="menu">
                                <div className=" text-light menuName">
                                    <span className="pe-2 pb-2 menuIcon"><BiErrorCircle /></span>
                                    <h5>About Us</h5>
                                </div>
                                <span className="menuText ps-4">Find out more about Posly</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-8">
                        <div className="Products">
                            <div className="Management">
                                <h3>Products Management</h3>
                                <div className="Manage text-light">
                                    <AiOutlineControl className="controlIcon"/>
                                    <p>Manage Categories</p>
                                </div>
                            </div>
                            <div className="tabs">
                                <TabContext value={value}>
                                    <AppBar position="static">
                                        <TabList onChange={handleChange} aria-label="simple tabs example">
                                        <Tab label="Hot Dishes" value="1" />
                                        <Tab label="Cold Dishes" value="2" />
                                        <Tab label="Soup" value="3" />
                                        <Tab label="Grill" value="4" />
                                        <Tab label="Appetizer" value="5"/>
                                        <Tab label="Dessert" value="6" />
                                        </TabList>
                                    </AppBar>
                                    <TabPanel value="1" ><Tabs /></TabPanel>
                                    <TabPanel value="2">Item Two</TabPanel>
                                    <TabPanel value="3">Item Three</TabPanel>
                                    <TabPanel value="4">Item Four</TabPanel>
                                    <TabPanel value="5">Item Five</TabPanel>
                                    <TabPanel value="6">Item Six</TabPanel>
                                </TabContext>
                            </div>
                        </div>
                    </div>
                </div>

                {/* tabs */}
             
             
            </SettingsWrapper>
     
    )
}

export default Settings;



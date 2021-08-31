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


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));


const data = [
    {
        icon: <AiOutlineHeart/>,
        name: "Appereance",
        text: "Dark and Light mode, Font size",

    },
    {
        icon: <AiOutlineHome />,
        name: "Your Restaurant",
        text: "Dark and Light mode, Font size",
    },
    {
        icon: <FaDiscourse />,
        name: "Products Management",
        text: "Manage your product, pricing, etc",
    },
    {
        icon: <BiBell />,
        name: "Notifications",
        text: "Customize your notifications",
    },
    {
        icon: <BiLockOpen />,
        name: "Security",
        text: "Configure Password, PIN, etc",
    },
    {
        icon: <BiLockOpen />,
        name: "Security",
        text: "Configure Password, PIN, etc",
    },
    {
        icon: <BiErrorCircle />,
        name: "About Us",
        text: "Find out more about Posly",
    }
]

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
                <div className="Manage text-light">
                    <AiOutlineControl className="controlIcon"/>
                    <p>Manage Categories</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <div className="settings">
                        {
                            data.map((v) => {
                              return(
                                    <div key={v.name} className="menu {${v.className}}">
                                        <div className=" text-light menuName">
                                            <span className="pe-2 pb-2 menuIcon">{v.icon}</span>
                                            <h5>{v.name}</h5>
                                        </div>
                                        <span className="menuText ps-4">{v.text}</span>
                                    </div>
                              )
                            })
                        }
                    </div>
                </div>
                <div className="col-lg-9">
                   <div className="tabs">
                        <div >
                            <TabContext value={value}>
                                <AppBar position="static">
                                    <TabList onChange={handleChange} aria-label="simple tabs example">
                                    <Tab label="Item One" value="1" />
                                    <Tab label="Item Two" value="2" />
                                    <Tab label="Item Three" value="3" />
                                    </TabList>
                                </AppBar>
                                <TabPanel value="1" >Item One</TabPanel>
                                <TabPanel value="2">Item Two</TabPanel>
                                <TabPanel value="3">Item Three</TabPanel>
                            </TabContext>
                        </div>
                   </div>
                </div>
            </div>
        </SettingsWrapper>
    )
}

export default Settings;



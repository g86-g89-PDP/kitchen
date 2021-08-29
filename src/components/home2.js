import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   <div className="container">
      <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Hot Dishes" {...a11yProps(0)} />
          <Tab label="Cold Dishes" {...a11yProps(1)} />
          <Tab label="Soup" {...a11yProps(2)} />
          <Tab label="Grill" {...a11yProps(3)} />
          <Tab label="Appetizer" {...a11yProps(4)} />
          <Tab label="Dessert" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <div className='d-flex justify-content-between onTop'>
        <p className='onTop'>Choose Dishes</p>
        <button className='btn btnTop'>Dine In</button>

      </div>
    
      <TabPanel value={value} index={0}>
       <div className="row">
         <div className="col-lg-4 col-md-6 col-sm-12">
         <div className='imgCard1'>
             <div className='imgCard2'>
               <img src="meal1.jpg" alt="" className='Img' />

              <div className='infMeal'>
                  <p className='imgword1 text-center'>Spicy seasoned seafood noodles</p>
                  <p className='imgword1'>$ 2.29</p>
                  <p className='imgword2'>20 Bowls available</p>   
              </div>

             </div>
           </div>
         </div>

         <div className="col-lg-4 col-md-6 col-sm-12">
         <div className='imgCard1'>
             <div className='imgCard2'>
               <img src="meal1.jpg" alt="" className='Img' />

              <div className='infMeal'>
                  <p className='imgword1 text-center'>Spicy seasoned seafood noodles</p>
                  <p className='imgword1'>$ 2.29</p>
                  <p className='imgword2'>20 Bowls available</p>   
              </div>

             </div>
           </div>
         </div>
         
         <div className="col-lg-4 col-md-6 col-sm-12">
         <div className='imgCard1'>
             <div className='imgCard2'>
               <img src="meal1.jpg" alt="" className='Img' />

              <div className='infMeal'>
                  <p className='imgword1 text-center'>Spicy seasoned seafood noodles</p>
                  <p className='imgword1'>$ 2.29</p>
                  <p className='imgword2'>20 Bowls available</p>   
              </div>

             </div>
           </div>
         </div>

       </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Three
      </TabPanel>
    </div>
   </div>
  );
}
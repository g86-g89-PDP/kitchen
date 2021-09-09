import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useDispatch, useSelector } from 'react-redux';





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
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const meals = useSelector(state => state.meals);


  const Add = (meal) => {
    const action = { type: "ADD", payload: meal };
    dispatch(action);
  };

  return (
    <div className="container kkk">
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
        <div className='onTop onTop2'>
          <p className='onTop'>Choose Dishes</p>
          <button className='btn btnTop'>Dine In</button>

        </div>
        {
          meals.map((v, i) => (
            <TabPanel value={value} index={i} key={v}>
              <div className="row">
                {v.data.map((taom, index) => {
                  return <div className="col-lg-4 col-md-6 col-sm-12  ps-0" key={i}>
                    <div className='imgCard1'>
                      <div className='imgCard2'>
                        <img src={taom.img} alt="" className='Img' />

                        <div className='infMeal'>
                          <p className='imgword1 text-center'>{taom.name}</p>
                          <p className='imgword1 mb-0 pb-0'>{taom.price}</p>
                          <p className='imgword2 mt-0 mb-0'>20 Bowls available</p>
                          <p><button className='deleteBtn pt-0 pb-0' onClick={() => Add(taom)}>+</button></p>
                        </div>

                      </div>
                    </div>
                  </div>
                })}


              </div>

            </TabPanel>
          ))
        }

        {/* <TabPanel value={value} index={0}>
          <ColdDish></ColdDish>

        </TabPanel>
        <TabPanel value={value} index={1}>
          <Cold></Cold>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Soup></Soup>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Grill></Grill>
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Three
        </TabPanel> */}
      </div>
    </div>
  );
}
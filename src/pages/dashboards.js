import { DashboardsWrapper } from "../styleW/dashboardswrapper";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineDollarCircle,
} from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";
import { VscComment } from "react-icons/vsc";
import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {Home} from './../styleW/homeW'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "img",
    "Eren Jaegar ",

    "Spicy seasoned seafood noodles ",
    "$125",
    "Completed"
  ),
  createData(
    "img",
    "Eren Jaegar ",

    "Spicy seasoned seafood noodles ",
    "$125",
    "Completed"
  ),
  createData(
    "img",
    "Eren Jaegar ",

    "Spicy seasoned seafood noodles ",
    "$125",
    "Completed"
  ),
  createData(
    "img",
    "Eren Jaegar ",

    "Spicy seasoned seafood noodles ",
    "$125",
    "Completed"
  ),
  createData(
    "img",
    "Eren Jaegar ",

    "Spicy seasoned seafood noodles ",
    "$125",
    "Completed"
  ),
];

const data = [
  {
    icon: <AiOutlineDollarCircle />,
    pratcent: "+32.40",
    iconToo: <AiOutlineArrowUp />,
    price: "$10,243.00",
    title: "Total Revenue",
    color:"#50D1AA"
  },
  {
    icon:  <VscComment />,
    pratcent: "+32.40",
    iconToo: <AiOutlineArrowUp />,
    price: "$10,243.00",
    title: "Total Revenue",
    color:"#50D1AA"
  },
  {
    icon:  <VscComment />,
    pratcent: "+32.40",
    iconToo: <AiOutlineArrowUp />,
    price: "$10,243.00",
    title: "Total Revenue",
    color:"#50D1AA"
  }
]

const Dashboards = () => {
  const classes = useStyles();

  return (
    <Home>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mt-3">
            <div className="row">
          
               
                  
                    {
                      data.map((v)=>{
                        return(
                        <>
                            <div className="col-md-4">
                              <div className="summery-card">
                                <div className="card-header">
                                  <div className="head1 d-flex align-item-center justify-content-around">
                                    {v.icon}
                                    <h6 className="text-center">{v.pratcent}</h6>
                                    {v.iconToo}
                                  </div>
                                </div>
                                <div className="card-body">
                                  <h3>{v.price}</h3>
                                  <p>{v.title}</p>
                                </div>
                              </div>
                            </div>
                        </>
                          
                        )
                      })
                    }
                    {/* <div className="card-header">
                      <div className="head1 d-flex align-item-center justify-content-around">
                        <AiOutlineDollarCircle />
                        <h6 className="text-center">+32.40</h6>
                        <AiOutlineArrowUp />
                      </div>
                    </div>
                    <div className="card-body">
                      <h3>$10,243.00</h3>
                      <p>Total Revinue</p>
                    </div> */}
                  
                

              <div className="col-md-4">
                <div >
                  <div className="summery-card">
                    <div className="card-header">
                      <div className="head1 d-flex align-item-center justify-content-around">
                        <VscComment />
                        <h6 className="text-center">+32.40</h6>
                        <AiOutlineArrowDown />
                      </div>
                    </div>
                    <div className="card-body">
                      <h3>$10,243.00</h3>
                      <p>Total Revinue</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <div className="summery-card">
                    <div className="card-header">
                      <div className="head1 d-flex align-item-center justify-content-around">
                        <RiContactsLine />
                        <h6 className="text-center">+32.40</h6>
                        <AiOutlineArrowUp />
                      </div>
                    </div>
                    <div className="card-body">
                      <h3>$10,243.00</h3>
                      <p>Total Revinue</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <div className="d-flex justify-content-between">
                      <h6>Order Report</h6>
                      <button className="btn ">Order filter</button>
                    </div>
                  </div>
                  <div className="card-body">
                    <Table className="table">
                      <TableHead>
                        <TableRow className="">
                          <TableCell className="text-white">Customer</TableCell>
                          <TableCell className="text-white">Menu</TableCell>
                          <TableCell className="text-white">
                            Total Payment
                          </TableCell>
                          <TableCell className="text-white">Status</TableCell>
                        </TableRow>
                      </TableHead>

                      <TableBody>
                        {rows.map((row) => (
                          <TableRow key={row.name}>
                            <TableCell
                              component="th"
                              scope="row"
                              className="text-white"
                            >
                              {/* {row.name} */}
                              <img src="/child.jpg" alt="" className="client" />
                              {row.calories}
                            </TableCell>

                            <TableCell className="text-white">
                              {row.fat}
                            </TableCell>
                            <TableCell className="text-white">
                              {row.carbs}
                            </TableCell>
                            <TableCell className="butt text-white">
                              <button className="Completed">
                                {row.protein}
                              </button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mt-3">
            <div className="row">
              <div className="card">
                <div className="card-header">right</div>
                <div className="card-body">
                  <ul>
                    <li className="d-flex">
                      <img src="/lagmon.jpg" alt="" className="img1" />
                      <div>
                        <h6>Spicy seasoned seafood noodles</h6>
                        <p>200 dishes ordered</p>
                      </div>
                    </li>
                    <li className="d-flex">
                      <img src="/lagmon2.jpg" alt="" className="img1" />
                      <div>
                        <h6>Spicy seasoned seafood noodles</h6>
                        <p>200 dishes ordered</p>
                      </div>
                    </li>
                    <li className="d-flex">
                      <img src="/pilvin.jpg" alt="" className="img1" />
                      <div>
                        <h6>Spicy seasoned seafood noodles</h6>
                        <p>200 dishes ordered</p>
                      </div>
                    </li>
                  </ul>

                  <button className="w-100">View All</button>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <h5>Most Type Of Order</h5>
                  <h6>Today</h6>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <svg
                        width="89"
                        height="90"
                        viewBox="0 0 89 90"
                        fill="none"
                        xmlns="https://ak.picdn.net/shutterstock/videos/1010674277/thumb/1.jpg"
                      >
                        <circle
                          opacity="0.1"
                          cx="44.3582"
                          cy="44.995"
                          r="41.5012"
                          fill="#1F1D2B"
                        />
                      </svg>
                    </div>
                    <div className="col-lg-6">
                      <ul>
                        <li>Dine in</li>
                        <li>Dine in</li>
                        <li>Dine in</li>
                      </ul>
                    </div>
                  </div>
                  <button className="w-100">View All</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Home>
  );
};

export default Dashboards;

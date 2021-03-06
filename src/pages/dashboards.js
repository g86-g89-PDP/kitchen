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
import { Home } from './../styleW/homeW'
import { Doughnut } from 'react-chartjs-2';

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
    color: "#50D1AA",
    colorToo: "#9288E0",
  },
  {
    icon: <VscComment />,
    pratcent: "+32.40",
    iconToo: <AiOutlineArrowUp />,
    price: "$10,243.00",
    title: "Total Revenue",
    color: "#FF7CA3",
    colorToo: "#FFB572",
  },
  {
    icon: <VscComment />,
    pratcent: "+32.40",
    iconToo: <AiOutlineArrowUp />,
    price: "$10,243.00",
    title: "Total Revenue",
    color: "#50D1AA",
    colorToo: "#65B0F6",
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
                data.map((v) => {
                  return (
                    <>
                      <div className="col-md-4">
                        <div className="summery-card">
                          <div className="card-header">
                            <div className="head1 d-flex align-items-center justify-content-around">
                              <div className="strelka" style={{ color: v.colorToo }}>
                                {v.icon}
                              </div>
                              <h6 className="text-center" style={{ color: v.color }}>{v.pratcent}</h6>
                              <div style={{ color: v.color }}>
                                {v.iconToo}
                              </div>

                            </div>
                          </div>
                          <div className="card-body">
                            <h3>{v.price}</h3>
                            <p className="titleColor">{v.title}</p>
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

            </div>
            <div className="row mt-4">
              <div className="col-12">
                <div className="card TableBody">
                  <div className="card-header">
                    <div className="d-flex justify-content-between">
                      <h6>Order Report</h6>
                      <button className="btn text-light">Order filter</button>
                    </div>
                  </div>
                  <div className="l">
                    <Table className='TableBody'>
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

                      <TableBody className='TableBody'>
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
                              <button className="btn btnDark">
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
              <div className="TableBody">
                <div className="card-header">right</div>
                <div className="card-body">
                  <ul>
                    <li className="d-flex">
                      <img src="/lagmon.jpg" alt="" className="client" />
                      <div>
                        <h6>Spicy seasoned seafood noodles</h6>
                        <p>200 dishes ordered</p>
                      </div>
                    </li>
                    <li className="d-flex">
                      <img src="/lagmon2.jpg" alt="" className="client" />
                      <div>
                        <h6>Spicy seasoned seafood noodles</h6>
                        <p>200 dishes ordered</p>
                      </div>
                    </li>
                    <li className="d-flex">
                      <img src="/pilvin.jpg" alt="" className="client" />
                      <div>
                        <h6>Spicy seasoned seafood noodles</h6>
                        <p>200 dishes ordered</p>
                      </div>
                    </li>
                  </ul>

                  <button className="w-100 btn btnDark">View All</button>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="TableBody">
                <div className="card-header d-flex justify-content-between">
                  <h5>Most Type Of Order</h5>
                  <h6>Today</h6>
                </div>
                <div className="card-body">
                  <div className="row">

                    <div className="col-lg-12">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nam ea vel id maiores corporis consectetur modi inventore odio, repudiandae quisquam placeat aliquam blanditiis alias, nisi natus laborum! Quia, labore.</p>


                    </div>
                  </div>
                  <button className="w-100 btn btnDark">View All</button>
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

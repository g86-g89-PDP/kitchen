import { Home } from "../styleW/homeW";
import React from "react";
import Home2 from "./../components/home2";
import { RiDeleteBin7Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Button, SideSheet } from "evergreen-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faPlus,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";

const Homes = (props) => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.selected);

  const Delet = (i) => {
    const action = { type: "DELETE", payload: i };
    console.log(i);
    dispatch(action);
  };

  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const vaqt = new Date();

  const [isShown, setIsShown] = React.useState(false);

  return (
    <Home>
      <div className="homeHead">
        <div className="homeHeadSm">
          <div>
            <p className="dashboardName">Jaegar Resto</p>
            <p className="date">{`${vaqt.toDateString()}, ${vaqt.getHours()}: ${vaqt.getMinutes()} `}</p>
          </div>
          <div className="HeaderInpCard">
            <input
              type="text"
              placeholder="Search for coffe"
              className="form-control HeaderInp"
            />
          </div>
        </div>
        <Home2 />
      </div>

      <div className="rightPage1">
        <p className="topWord">Orders #34562</p>
        <div className="d-flex justif-content-start">
          <div className="d-flex">
            <button className="btn btnDark mb-3">Dine In</button>
            <button className="btn btnDark mb-3">To Go</button>

            {/* Payment start */}
            <div>
              <SideSheet
                isShown={isShown}
                onCloseComplete={() => setIsShown(false)}
                preventBodyScrollin
              >
                <div className="payment h-100">
                  <div className="container py-3">
                    <div className="row">
                      <div className="col-md-6 leftSidebar">
                        <div className="py-3 bord">
                          <div className="d-flex justify-content-between">
                            <h3>Confirmation</h3>

                            <button className="btn plus py-0">
                              <FontAwesomeIcon
                                className="text-white"
                                icon={faPlus}
                              />
                            </button>
                          </div>
                          <small className="text-muted">Orders #34562</small>
                        </div>
                        <div className="todoAppCard">
                          {selected?.map((v, i) => {
                            return (
                              <div key={i}>
                                <div className="d-flex">
                                  <div className="my-3">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex mb-2 pe-5">
                                        <img
                                          src={v.img}
                                          className="images me-2"
                                          alt="not photo"
                                        />
                                        <div>
                                          <p className="mb-0">{v.name}</p>
                                          <small className="text-muted">
                                            {v.price}
                                          </small>
                                        </div>
                                      </div>
                                      <div className="todoInput me-3">
                                        <input
                                          type="text"
                                          placeholder="2"
                                          className="inp"
                                        />
                                      </div>
                                      <p className="d-flex justify-content-center align-items-center">
                                        {v.price2}
                                      </p>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                      <input
                                        type="text"
                                        className="input pe-5"
                                        placeholder={v.value}
                                      />
                                      <button
                                        className="btn delete"
                                        onClick={() => Delet(i)}
                                      >
                                        <RiDeleteBin7Line className="icons" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                          <p className="text-muted">Discount</p>
                          <p>$0</p>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                          <p className="text-muted">Sub total</p>
                          <p> $ 21,03</p>
                        </div>
                      </div>

                      <div className="col-md-6 px-3 rightSidebar">
                        <div className="bord py-3">
                          <h3>Payment</h3>
                          <small className="text-muted">
                            3 payment method available
                          </small>
                        </div>
                        <div className="py-2">
                          <h5>Payment Method</h5>
                          <div className="row">
                            <div className="col-12 col-sm-12 col-md-4">
                              <button className="btn border text-white mt-2">
                                <FontAwesomeIcon icon={faCreditCard} />
                                <p className="mb-0">Credit Card</p>
                              </button>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4">
                              <button className="btn border text-white mt-2">
                                <FontAwesomeIcon icon={faPaypal} />
                                <p className="mb-0">Credit Card</p>
                              </button>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4">
                              <button className="btn border text-white mt-2">
                                <FontAwesomeIcon icon={faWallet} />
                                <p className="mb-0">Credit Card</p>
                              </button>
                            </div>
                          </div>
                          <div className="mt-2">
                            <h6>Cardholder Name</h6>
                            <input
                              type="text"
                              className="input pe-5 ps-2 py-2"
                              placeholder="Levi Ackerman"
                            />
                            <h6 className="mt-2">Card Number</h6>
                            <input
                              type="text"
                              className="input pe-5 ps-2 py-2"
                              placeholder="2564 1421 0897 1244"
                            />
                            <div className="row mt-2 pb-3 bord">
                              <div className="col-12 col-sm-12 col-md-6">
                                <div className="pe-2">
                                  <h6>Expiration Date</h6>
                                  <input
                                    type="date"
                                    className="input02 pe-5 ps-2 py-2"
                                    placeholder="02/2022"
                                  />
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-6">
                                <div>
                                  <h6>CVV</h6>
                                  <input
                                    type="password"
                                    className="input02 pe-5 ps-2 py-2"
                                    placeholder="as2B34"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="row mt-2">
                              <div className="col-12 col-sm-12 col-md-6">
                                <div className="pe-2">
                                  <h6>Order Type</h6>
                                  <input
                                    type="tel"
                                    className="input02 pe-5 ps-2 py-2"
                                    placeholder="Dine In"
                                  />
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-6">
                                <div>
                                  <h6>Table no.</h6>
                                  <input
                                    type="text"
                                    className="input02 pe-5 ps-2 py-2"
                                    placeholder="as2B34"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="d-flex buttonGroup">
                              <button className="btn w-100 me-2 lightBtn py-2">
                                Cancel
                              </button>
                              <button className="btn w-100 lightBtn py-2">
                                Confirm Payment
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SideSheet>
              <button
                className="btn btnDark mb-2"
                onClick={() => setIsShown(true)}
              >
                Payment
              </button>
            </div>
            {/* Payment end */}
          </div>
        </div>
        <div className="d-flex justify-content-between jkl text-light">
          <p>Item</p>
          <div className="d-flex">
            <p className="pe-2">Qty</p>
            <p>Price</p>
          </div>
        </div>
        <div className="todoAppCard">
          {/* boshlanish */}
          {selected?.map((v, i) => {
            return (
              <div key={i}>
                <div className="d-flex p-2 align-items-center">
                  <img src={v.img} alt="rasm" className="todoImg" />
                  <div className="sozlar">
                    <div className="h-100">
                      <p className="text-light mb-0 pb-0">{v.name}</p>
                      <p className="imgword2">{v.price}</p>
                    </div>
                  </div>
                  <div className="todoInput ">
                    <input
                      type="text"
                      placeholder="2"
                      className="form-control inp"
                    />
                    <p className="text-light mt-3">{v.price2}</p>
                  </div>
                </div>
                <div className="d-flex w-100">
                  <input
                    type="text"
                    className="form-control inp2"
                    placeholder={v.value}
                  />
                  <button className="btn deleteBtn" onClick={() => Delet(i)}>
                    <RiDeleteBin7Line />
                  </button>
                </div>
              </div>
            );
          })}

          {/* tugashi */}
        </div>
      </div>
    </Home>
  );
};

export default Homes;

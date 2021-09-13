import React from "react";
import { Link, useParams } from "react-router-dom";
import { MainW } from "../styleW/allWrapper";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { IoIosAddCircleOutline, IoIosBarcode } from "react-icons/io";

const Header = () => {

  const links = useParams();
  return (
    <MainW>
      <div>
        <div className="dashboard">
          <ul>
            <li>
              <Link to="/">
                <div className="dashboardSm">
                  <p>
                    <AiOutlineHome />
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/settings">
                <div className="dashboardSm">
                  <p>
                    <AiOutlineSetting />
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/dashboards">
                <div className="dashboardSm">
                  <p>
                    <IoIosBarcode />
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </MainW>
  );
};

export default Header;

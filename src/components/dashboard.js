import React from "react";
import { Link, useParams } from "react-router-dom";
import { MainW } from "../styleW/allWrapper";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";

const Header = () => {
  return (
    <MainW>
      <div>
        <div className="dashboard">
          <ul>
            <li>
              <Link to="/">
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link to="/orders">
                <p>Orders</p>
              </Link>
            </li>
            <li>
              <Link to="/settings">
                <p>Settings</p>
              </Link>
            </li>
            <li>
              <Link to="/dashboards">
                <p>Dashboards</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </MainW>
  );
};

export default Header;

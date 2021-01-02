import React, { Component } from "react";
import "./Navbar.css";
import bluRxWhite from "../assets/images/bluRxWhite.png";
import { Icon } from "semantic-ui-react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="nav__bar">
          <div>
            <Icon className="cart plus" name="mail" />
            <div className="cheet">22</div>
          </div>
          <div className="container">
            <div className="flex">
              <div className="image__wrapper">
                <img src={bluRxWhite} alt="dnfos" />
              </div>

              <div className="right__items">
                <div className="first__dropdown second__dropdown">
                  <input id="check01" type="checkbox" name="menu" />
                  <label for="check01">
                    <i className="angle down icon"></i>Help
                  </label>
                  <ul class="submenu">
                    <div>
                      <li>
                        <div className="btns__wrapper">
                          <button className="sign__up">Sign Up</button>
                          <button className="sign__in">Sign In</button>
                        </div>
                      </li>
                    </div>

                    <li>
                      <div>
                        {" "}
                        <i className="user outline icon" />
                        Accounts
                      </div>
                    </li>
                    <li>
                      <div>
                        <i className="clipboard outline icon" />
                        Orders
                      </div>
                    </li>
                    <li>
                      <div>
                        <i className="bookmark outline icon" />
                        Saved Medications
                      </div>
                    </li>
                    <li>
                      <div>
                        <i className="bell outline icon" />
                        Notification
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="first__dropdown">
                  <input id="check01" type="checkbox" name="menu" />
                  <label for="check01">
                    <i className="angle down icon"></i>Accounts
                  </label>
                  <ul class="submenu">
                    <div>
                      <li>
                        <div className="btns__wrapper">
                          <button className="sign__up">Sign Up</button>
                          <button className="sign__in">Sign In</button>
                        </div>
                      </li>
                    </div>

                    <li>
                      <div>
                        {" "}
                        <i className="user outline icon" />
                        Accounts
                      </div>
                    </li>
                    <li>
                      <div>
                        <i className="clipboard outline icon" />
                        Orders
                      </div>
                    </li>
                    <li>
                      <div>
                        <i className="bookmark outline icon" />
                        Saved Medications
                      </div>
                    </li>
                    <li>
                      <div>
                        <i className="bell outline icon" />
                        Notification
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="search__box__wrapper">
                  <form>
                    <input
                      type="text"
                      name="search"
                      placeholder="Prescriptions"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

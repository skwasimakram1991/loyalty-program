import React from "react";
import userimg from "../images/user-img.png";

function Header() {
  return (
    <div>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 offset-lg-9">
              <ul>
                <li>
                  <a href="#">
                    <div className="img-sec">
                      <img src={userimg} alt="" />
                      <span className="color1"></span>
                    </div>
                    <h3>
                      User Name <span>user@gmail.com</span>
                    </h3>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;

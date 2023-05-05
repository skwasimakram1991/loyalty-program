// import logo from "./logo.svg";
// import "./App.css";

import React from "react";

import Sidebar from "../assets/inc/Sidebar";
import Header from "../assets/inc/Header";

import partnerimg1 from "../assets/images/partner-img1.png";
import partnerimg2 from "../assets/images/partner-img2.png";
import partnerimg3 from "../assets/images/partner-img3.png";
import partnerimg4 from "../assets/images/partner-img4.png";
import partnerimg5 from "../assets/images/partner-img5.png";
import partnerimg6 from "../assets/images/partner-img6.png";

import qrcodeimg from "../assets/images/qr-code.png";
import downloadimg from "../assets/images/download.svg";
import editimg from "../assets/images/edit-icon.svg";

import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";


function PartnerFacilities() {
  return (
    <div>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 p-0">
              <Sidebar />
            </div>
            <div className="col-lg-10 p-0">
              <Header />
              <section className="partner-facilities-page main-page-size">
                <div className="container-fluid">
                  <div className="row align-items-center title-sec">
                    <div className="col-lg-6">
                      <h2>Partner Facilities</h2>
                    </div>
                    <div className="col-lg-6 text-end">
                      <a href="/AddPartner" className="title-btn">
                        Add Partner
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="table-wrap">
                        <table>
                          <tr>
                            <th>partner name</th>
                            <th>Email address</th>
                            <th>Phone no</th>
                            <th>QR Code</th>
                            <th>Download QR</th>
                            <th>Edit</th>
                          </tr>
                          <tr>
                            <td>
                              <img src={partnerimg1} alt="" />
                              McDonald's
                            </td>
                            <td>nathan.roberts@example.com</td>
                            <td>(907) 555-0101</td>
                            <td>
                              <a href="#" className="qr-img">
                                <img src={qrcodeimg} alt="" />
                              </a>
                            </td>
                            <td>
                              <a href="#" className="down-img">
                                <img src={downloadimg} alt="" />
                              </a>
                            </td>
                            <td>
                              <a href="#" className="edit-img">
                                <img src={editimg} alt="" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src={partnerimg2} alt="" />
                              Gillette
                            </td>
                            <td>michelle.rivera@example.com</td>
                            <td>(208) 555-0112</td>
                            <td>
                              <a href="#" className="qr-img">
                                <img src={qrcodeimg} alt="" />
                              </a>
                            </td>
                            <td>
                              <a href="#" className="down-img">
                                <img src={downloadimg} alt="" />
                              </a>
                            </td>
                            <td>
                              <a href="#" className="edit-img">
                                <img src={editimg} alt="" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src={partnerimg1} alt="" />
                              McDonald's
                            </td>
                            <td>tim.jennings@example.com</td>
                            <td>(308) 555-0121</td>
                            <td>
                              <a href="#" className="qr-img">
                                <img src={qrcodeimg} alt="" />
                              </a>
                            </td>
                            <td>
                              <a href="#" className="down-img">
                                <img src={downloadimg} alt="" />
                              </a>
                            </td>
                            <td>
                              <a href="#" className="edit-img">
                                <img src={editimg} alt="" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src={partnerimg3} alt="" />
                              Starbucks
                            </td>
                            <td>dolores.chambers@example.com</td>
                            <td>(303) 555-0105</td>
                            <td>
                              <a href="#" className="qr-img">
                                <img src={qrcodeimg} alt="" />
                              </a>
                            </td>
                            <td>
                              <a href="#" className="down-img">
                                <img src={downloadimg} alt="" />
                              </a>
                            </td>
                            <td>
                              <a href="#" className="edit-img">
                                <img src={editimg} alt="" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src={partnerimg4} alt="" />
                              Mitsubishi
                            </td>
                            <td>jessica.hanson@example.com</td>
                            <td>(480) 555-0103</td>
                            <td>
                              <a href="#" className="qr-img">
                                <img src={qrcodeimg} alt="" />
                              </a>
                            </td>
                            <td>
                              <a href="#" className="down-img">
                                <img src={downloadimg} alt="" />
                              </a>
                            </td>
                            <td>
                              <a href="#" className="edit-img">
                                <img src={editimg} alt="" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src={partnerimg5} alt="" />
                              MasterCard
                            </td>
                            <td>sara.cruz@example.com</td>
                            <td>(603) 555-0123</td>
                            <td>
                              <a href="#" className="qr-img">
                                <img src={qrcodeimg} alt="" />
                              </a>
                            </td>
                            <td>
                              <a href="#" className="down-img">
                                <img src={downloadimg} alt="" />
                              </a>
                            </td>
                            <td>
                              <a href="#" className="edit-img">
                                <img src={editimg} alt="" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src={partnerimg6} alt="" />
                              Louis Vuitton
                            </td>
                            <td>debbie.baker@example.com</td>
                            <td>(209) 555-0104</td>
                            <td>
                              <a href="#" className="qr-img">
                                <img src={qrcodeimg} alt="" />
                              </a>
                            </td>
                            <td>
                              <a href="#" className="down-img">
                                <img src={downloadimg} alt="" />
                              </a>
                            </td>
                            <td>
                              <a href="#" className="edit-img">
                                <img src={editimg} alt="" />
                              </a>
                            </td>
                          </tr>
                        </table>
                      </div>
                      <ul className="page-nation">
                        <li>
                          <a href="#">
                            <BsChevronLeft />
                          </a>
                        </li>
                        <li className="active">
                          <a href="#">1</a>
                        </li>
                        <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                        <li>
                          <a href="#">5</a>
                        </li>
                        <li>
                          <a href="#">
                            <BsChevronRight />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PartnerFacilities;

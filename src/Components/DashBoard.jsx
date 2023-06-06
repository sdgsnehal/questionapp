import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DashBoard = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowwrap">
        <div className="bg-dark col-auto col-md-2 min-vh-100">
          <div className="bg-dark p-2">
            <a className="d-flex  text-decoration-none align-items-center text-white">
              <i className="fs-5 fa fa-guage"></i>
              <span className="fs-4 d-none d-sm-inline">SideMenu</span>
            </a>
            <ul class="nav nav-pills flex-column mt-4">
              <li class="nav-item">
                <a class="nav-link text-white">
                  <i className="fs-5 fa fa-guage"></i><span className="fs-4 d-none d-sm-inline">DashBoard</span>
                </a>
              </li>
              <li class="nav-item">
              <a class="nav-link text-white">
                  <i className="fs-5 fa fa-grid2"></i><span className="fs-4 d-none d-sm-inline">Home</span>
                </a>
              </li>
              <li class="nav-item">
              <a class="nav-link text-white">
                  <i className="fs-5 fa fa-table-list"></i><span className="fs-4 d-none d-sm-inline">Offerings</span>
                </a>
              </li>
              <li class="nav-item">
              <a class="nav-link text-white">
                  <i className="fs-5 fa fa-table-list"></i><span className="fs-4 d-none d-sm-inline">profile</span>
                </a>
              </li>
              <li class="nav-item">
              <a class="nav-link text-white">
                  <i className="fs-5 fa fa-table-list"></i><span className="fs-4 d-none d-sm-inline">Orders</span>
                </a>
              </li>
              <li class="nav-item">
              <a class="nav-link text-white">
                  <i className="fs-5 fa fa-table-list"></i><span className="fs-4 d-none d-sm-inline">Broke Dealer</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

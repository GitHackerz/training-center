import React from "react";

export const Navigationadmin = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#App2">
            <img src="img/vite.png" width="200" 
     height="50"/>
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
           
            <li>
              <a href="#App1" className="page-scroll">
                mes modules
              </a>
            </li>
            <li>
              <a href="#App3" className="page-scroll">
                emploi  du temps
              </a>
            </li>
            
            <li>
              <a href="#App4" className="page-scroll">
                s inscrire a un cours
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

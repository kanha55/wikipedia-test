import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Famous people:</h1>
        <hr className="my-4" />
        <p><Link
          to="/Wilson_Lumpkin"
          className="btn btn-lg custom-button"
          role="button"
        >
          Wilson Lumpkin
        </Link></p>
        <p><Link
          to="/Robert_Toombs"
          className="btn btn-lg custom-button"
          role="button"
        >
          Robert Toombs
        </Link></p>
        <p><Link
          to="/Saxby_Chambliss"
          className="btn btn-lg custom-button"
          role="button"
        >
          Saxby Chambliss
        </Link></p>
        <p><Link
          to="/Wyche_Fowler"
          className="btn btn-lg custom-button"
          role="button"
        >
          Wyche Fowler
        </Link></p>
      </div>
    </div>
  </div>
);
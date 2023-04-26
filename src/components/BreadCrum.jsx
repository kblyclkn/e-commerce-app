import React from "react";
import { Link } from "react-router-dom";

function BreadCrum(props) {
  const { title } = props;
  return (
    <div className="breadcrum py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center">
              <Link to={"/"} className="text-dark">Ana Sayfa</Link>/ {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreadCrum;

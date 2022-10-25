import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div>
      <h3>Here is our Terms And Conditions</h3>
      <p>
        Go back to Register:<Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default TermsAndConditions;

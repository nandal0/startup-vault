import React from "react";
import Card from "./Card";
import Funding from "./Funding";
import {Link} from 'react-router-dom'

const Container4 = () => {
  return (
    <div className="Container4">
      <div className="funding">
      <Funding />
      </div>
      <div className="get-started">
        <div className="get-details">
          <h1>Grow your Startup with StartupVault</h1>

          <Link to="/create-users"> <button className="get-user">Get Started</button></Link>
        </div>
        <div className="get-details-img">
            
        </div>
      </div>
    </div>
  );
};

export default Container4;

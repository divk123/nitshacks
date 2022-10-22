import React from "react";
 import './Home.css';
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="content-container">

<h3>TECHYGEEKS CARBON REDUCTION SOLUTION</h3>
 <h4>LOGIN AS:</h4>

<div className="row">
<button onClick={() => navigate("/User") }className="left-panel box" type='submit'>
      USER
       </button>
       <button onClick={() => navigate("/Management") }className="middle-panel box">
     MANAGEMENT
      
   </button>
   <button onClick={() => navigate("/Municipal") }className="right-panel box">
       MUNICIPAL CORPORATION
      
   </button>

  
</div>
</div>
    </>
  );
};

export default Home;
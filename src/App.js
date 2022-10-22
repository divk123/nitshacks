
// import logo from './logo.svg';
// import './App.css';
//import React from "react";
// import { BrowserRouter as Router, Routes,Switch } from "react-router-dom";

// function App() {
  
  // return <div className="content-container">

  //        <h3>TECHYGEEKS CARBON REDUCTION SOLUTION</h3>
  //         <h4>LOGIN AS:</h4>

  //       <div className="row">
  //       <button className="left-panel box">
  //              <h5>USER</h5> 
  //               <p>(submit your waste entry)</p>
  //               </button>
  //           <button className="middle-panel box">
  //             <h5>MANAGEMENT</h5>
  //               <p>(approve/decline acccess to municipal corporation for action on wastes)</p>
  //           </button>
  //           <button className="right-panel box">
  //               <h5>MUNICIPAL CORPORATION</h5>
  //               <p>(request access to wastes of NITS from the management)</p>
  //           </button>

           
  //      </div>
  //   </div>
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import User from "./user";
import Management from "./Management";
import Municipal from "./Municipal";
import Map from "./Map"

const App = () => {
  return (
    <div style={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/User" element={<User />} />
          <Route path="/Management" element={<Management/>}/>
          <Route path="/Municipal" element={<Municipal/>}/>
          <Route path="/Map" element={<Map/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

const styles = {
  app: {
    padding: 50,
  },
};
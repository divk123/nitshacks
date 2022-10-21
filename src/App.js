import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom";



function App() {
  return <div className="content-container">

         <h3>TECHYGEEKS CARBON REDUCTION SOLUTION</h3>
          <h4>LOGIN AS:</h4>

        <div className="row">
            <div className="left-panel box" >
            <Link to="/user"> 
               <h5>USER</h5> 
                <p>(submit your waste entry)</p>
                </Link>
            </div>
            <div className="middle-panel box">
              <h5>MANAGEMENT</h5>
                <p>(approve/decline acccess to municipal corporation for action on wastes)</p>
            </div>
            <div className="right-panel box">
                <h5>MUNICIPAL CORPORATION</h5>
                <p>(request access to wastes of NITS from the management)</p>
            </div>
       </div>
    </div>
}

export default App;

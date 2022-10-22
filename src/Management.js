import profile from "./nits_hacks_image/download1.png";
import email from "./nits_hacks_image/email.jpg";
import pass from "./nits_hacks_image/download.png";
import './Management';
import './Management.css';
function Management() {
  return (
    <div className = "main">
      <div className = "sub-main">
        <div>
          <div className="imgs">
            <div className= "container-image">
              <img src={profile} alt="profile" className="profile"/>

            </div>

          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <img src={email} alt="email" className="email"/>
              <input type= "text" placeholder="user name" className="name"/>
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email"/>
              <input type= "text" placeholder="password" className="name"/>
            </div>
           <div className="login-button">
           <button>Login</button>
           </div>
            
          </div>
        </div>

      </div>

    </div>
  );
}


export default Management;

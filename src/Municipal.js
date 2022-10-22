import profile from "./nits_hacks_image/download1.png";
import email from "./nits_hacks_image/email.jpg";
import pass from "./nits_hacks_image/download.png";
import './Municipal';
import './Municipal.css';
function Municipal() {
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
            <h1>Login Page

                
            </h1>
            
            <h3>Enter The unique Key</h3>
            <div>
              <img src={email} alt="email" className="email"/>
              <input type= "text" placeholder="Unique Key" className="name"/>
            </div>
            <br></br>
           <div className="login-button">
           <button>Login</button>
           </div>
            
          </div>
        </div>

      </div>

    </div>
  );
}

export default Municipal;
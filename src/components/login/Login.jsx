import './Login.css';
import SignIpimg from "../../images/Login-cuate.svg";
import { useNavigate } from 'react-router-dom';

export default function Login() {
    
  const navigate = useNavigate();
  const coachNavigate = () => {
    navigate("CoachDetail")
  }

    return (

      <div>
        <div className="Signup_main">
          <div className="Signup_wrapper">
            <div className="Signup_left" style={{ background: " #bb8fce " }}>
                <img src={SignIpimg} alt="" />
            </div>
  
            <div className="Signup_right">
              <div className=" mx-auto py-1 text-center">
                <h2 className=" text-primeVoilet font-semibold text-xl">
                  Login Page
                </h2>
              </div>
              
  
              <div className="form_main">
                <form >
                  <div className=" flex-col">
                    <div className=" flex items-center">
                      <span className="FOrm_icon" uk-icon="icon: mail"></span>
                      <input
                        className="uk-input input_field_signup"
                        type="email"
                        placeholder="Enter Email"
                      />
                    </div>
                  </div>
  
                  <div className=" flex-col">
                    <div className=" flex items-center">
                      <span className="FOrm_icon" uk-icon="icon: lock"></span>
                      <input
                        className="uk-input input_field_signup"
                        type="password"
                        placeholder="Enter password"
                      />
                    </div>
                  </div>
                  
                  <div className="btns">
                        <button onClick={coachNavigate}>
                            Course
                        </button>
                    </div>
                </form>
  
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
  
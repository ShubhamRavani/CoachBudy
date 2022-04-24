import SignIpimg from "../../images/coachbudy.jpg";
import './coachDetail.css';
import teacher1 from "../../images/pic01.jpg";
import { useNavigate } from 'react-router-dom';

export default function CoachDetail() {
    
  const navigate = useNavigate();
  const courseNavigate = () => {
    navigate("../Courses")
  }

    return (
        <div>
            
            <div className="coaching">
                <div className="coaching-title">
                    <h1 className="title">Coach Budy</h1>
                </div>
                
                <div className="coaching-content ">
                    
                        <div className="coaching-content-left">
                            <img className="left_img" src={SignIpimg} alt="" />
                        </div>
                   

                    
                        <div className="coaching-content-right">
                           <div className='form_main'>
                                <div className="detail">
                                    <h3 className="detail-info">Address</h3>
                                    <p>Pune, India</p>
                                </div>

                                <div className="detail">
                                    <h3 className="detail-info">Phone Number</h3>
                                    <p>9898061998</p>
                                </div>

                                <div className="detail">
                                    <h3 className="detail-info">Coaching Information</h3>
                                    <p>Web Developer</p>
                                </div>
                            <div className="detail">

                            <div className="container">
                                <div className="row">
                                <h1 className="display-3">Teachers</h1>
                                <div className="col-3">
                                    <div className="card h-100" style={{ width: "10rem" }}>
                                    <img
                                        style={{ minHeight: "100px", maxHeight: "100px" }}
                                        src={teacher1}
                                        alt="Teacher Profile Image"
                                        className="card-img-top"
                                    />
                                    <div className="card-body">
                                        <div className="card-title">Teacher 1</div>
                                        <div className="card-body">
                                            ABCDEFG
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card h-100" style={{ width: "10rem" }}>
                                    <img
                                        style={{ minHeight: "100px", maxHeight: "100px" }}
                                        src={teacher1}
                                        alt="Teacher Profile Image"
                                        className="card-img-top"
                                    />
                                    <div className="card-body">
                                        <div className="card-title">Teacher 2</div>
                                        <div className="card-body">
                                            dfvesgferfe
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-primary" onClick={courseNavigate}>
                                        Course
                                    </button>
                                </div>
                                
                               
                            </div>
                        </div>
                               
                    </div>
                        </div>
                </div>
                        
            </div>
                
                
                
        </div>
        </div>
    );
}
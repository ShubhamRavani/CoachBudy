import React from "react";
import html from "../../images/pic01.jpg";
import { useNavigate } from 'react-router-dom';

export default function Courses() {
    
  const navigate = useNavigate();
  const courseDetNavigate = () => {
    navigate("../CoursesDetail")
  }

    return(
        <div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                    <h1>Offered Courses</h1>
                    <hr />
                    <div className="col" style={{ marginBottom: "2rem" }}>
                        <div class="card  h-100" style={{ width: "18rem" }}>
                        <img
                            style={{ minHeight: "300px", maxHeight: "300px" }}
                            src={html}
                            className="card-img-top"
                            alt="Course Thumbnail"
                        />
                        <div className="card-body">
                            <h5 className="card-title">HTML</h5>
                            <p className="card-text">
                            The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.
                            </p>
                            <button className="btn btn-primary" onClick={courseDetNavigate}>
                                Course Details
                            </button>
                        </div>
                        </div>
                    </div>
                    <div className="col" style={{ marginBottom: "2rem" }}>
                        <div class="card  h-100" style={{ width: "18rem" }}>
                        <img
                            style={{ minHeight: "300px", maxHeight: "300px" }}
                            src={html}
                            className="card-img-top"
                            alt="Course Thumbnail"
                        />
                        <div className="card-body">
                            <h5 className="card-title">CSS</h5>
                            <p className="card-text">
                            Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.
                            </p>
                            <button className="btn btn-primary" onClick={courseDetNavigate}>
                                Course Details
                            </button>
                        </div>
                        </div>
                    </div>
                    <div className="col" style={{ marginBottom: "2rem" }}>
                        <div class="card  h-100" style={{ width: "18rem" }}>
                        <img
                            style={{ minHeight: "300px", maxHeight: "300px" }}
                            src={html}
                            className="card-img-top"
                            alt="Course Thumbnail"
                        />
                        <div className="card-body">
                            <h5 className="card-title">JavaScript</h5>
                            <p className="card-text">
                            JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.
                            </p>
                           
                            <button className="btn btn-primary" onClick={courseDetNavigate}>
                                Course Details
                            </button>
                        </div>
                        </div>
                    </div>
                    <div className="col" style={{ marginBottom: "2rem" }}>
                        <div class="card  h-100" style={{ width: "18rem" }}>
                        <img
                            style={{ minHeight: "300px", maxHeight: "300px" }}
                            src={html}
                            className="card-img-top"
                            alt="Course Thumbnail"
                        />
                        <div className="card-body">
                            <h5 className="card-title">React.js</h5>
                            <p className="card-text">
                           ReactJS is a free and open-source front-end JavaScript library for building user interfaces based on UI components.
                            </p>
                            <button className="btn btn-primary" onClick={courseDetNavigate}>
                                Course Details
                            </button>
                        </div>
                        </div>
                    </div>
                    
                    
                    </div>
                </div>
                
            </div>
        </div>
    );
}
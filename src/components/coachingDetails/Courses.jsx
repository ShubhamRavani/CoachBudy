import React from "react";
import html from "../../images/pic01.jpg";

export default function Courses () {

    return(
        <div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                    <h1>Offered Courses By Us</h1>
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
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                            Go somewhere
                            </a>
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
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                            Go somewhere
                            </a>
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
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                            Go somewhere
                            </a>
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
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                            Go somewhere
                            </a>
                        </div>
                        </div>
                    </div>
                    
                    
                    </div>
                </div>
                
            </div>
        </div>
    );
}
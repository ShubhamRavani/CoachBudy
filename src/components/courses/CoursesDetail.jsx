import React from "react";
import html from "../../images/pic01.jpg";
import './courseDetail.css';

export default function CoursesDetail() {

    return(
        <div>
            <div className="container">

            <div className="row">

            <div className="col-lg-8">
                <h2 className="course-title">HTML Course</h2>
                <div className="course-details-carousel">
                <img src={html} class="img-fluid" alt="" />
                </div>
            </div>

            <div className="col-lg-4 course-info">
                <h3>Project information</h3>
                <ul>
                <li><strong>Batch Strength</strong>: 60</li>
                <li><strong>Timing</strong>: 12:00 PM</li>
                <li><strong>Language</strong>: English</li>
                <li><strong>Test Series</strong>: 5</li>
                </ul>

            </div>

            </div>

            </div>

        </div>
    );
}
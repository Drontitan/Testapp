import React from 'react'
import "./Mainpage.css"
export const Mainpage = () => {
    return (
      <div className="mainpage">
        <div className="leftsidebar">
          <div className="logoorlgado"></div>
          <div className="overview">
            <h2>Overview</h2>
          </div>
          <div className="Exams">
            <h2>Exams</h2>
          </div>
          <div className="Review">
            <h2>Review</h2>
          </div>
          <div className="History">
            <h2>History</h2>
          </div>
        </div>
        <div className="rightsidebar">
          <div className="rightadjust">
            <div className="hellogillo">
              <div className="goodmorning">
                <h1>Good morning SOR</h1>
              </div>
              <div className="time">
                <span>Monday</span>
                <span>2/13/2017</span>
                <span>10.28</span>
              </div>
            </div>
            <div className="line"></div>
            <h2>Whats coming up:</h2>
            <div className="numberofexams">
              <div className="subject">
                <span>CSSS01</span>
                <span2>
                  <h2>#Mid term exam </h2>
                </span2>
              </div>
              <div className="subject">
                <span>CSSS01</span>
                <span2>
                  <h2>#Mid term exam </h2>
                </span2>
              </div>
            </div>
            <h3>Thats it ! Make sure you utilise your time well </h3>
          </div>
        </div>
      </div>
    );
}

import React from 'react'
import Question from './Question';
import "./Questionpage.css"


const Questrionanswer = () => {
const today = new Date();
const date =
  today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
var hours = today.getHours();
var minutes = today.getMinutes();
var ampm = hours >= 12 ? "pm" : "am";
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'
minutes = minutes < 10 ? "0" + minutes : minutes;
const strTime = hours + ":" + minutes + " " + ampm;
return (
  <div className="mainpage">
    <div className="leftsidebar">
      <div className="logoorlgado"></div>
      <div className="overview">
        <h2>NO</h2>
      </div>
      <div className="Exams">
        <h2>Time limit</h2>
      </div>
      <div className="History">
        <h2>hello heko huihibib ohoih </h2>
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
            <span>{date}</span>
            <span>{strTime}</span>
          </div>
        </div>
        <div className="line"></div>
        <div className="numberofexams">
          <Question />
        </div>
      </div>
    </div>
  </div>
);


};

export default Questrionanswer;

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="circle">
        <div className="content">
          <h2 className="en">SugarFree</h2>
          <h1 className="en">WELCOME</h1>
          <p className="th subtitle">
            ตรวจเช็คความเสี่ยงโรคเบาหวานของคุณได้ง่าย ๆ ที่นี่!
          </p>
          <p className="th description">
            ระบบของเราช่วยประเมินความเสี่ยงของโรคเบาหวานผ่านข้อมูลสุขภาพ พร้อมคำแนะนำเพื่อดูแลตัวเอง
          </p>
          <a href="sign.html" className="th start-button">Let's start.</a>
        </div>
      </div>
    </div>
  );
}

export default App;

// src/Sign.js
import React, { useState } from 'react';
import './Sign.css'; // ถ้าคุณมีไฟล์ CSS สำหรับหน้า Sign

function Sign() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('ข้อมูลที่กรอก:', formData);
  };

  return (
    <div className="Sign">
      <h2>กรอกข้อมูลเพื่อประเมินความเสี่ยงโรคเบาหวาน</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">ชื่อ:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">อายุ:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">อีเมล:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">ส่งข้อมูล</button>
      </form>
    </div>
  );
}

export default Sign;

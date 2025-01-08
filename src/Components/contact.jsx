import React, { useState } from 'react'

const Contact = () => {
    const [email, setEmail] = useState("");

    const handleChange = (e) => {
      setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setEmail("");
    };
  return (
    <div className="contact-container">
      <h1 className="contact-header">Contact Us</h1>
      <h1 className="contact-title">Have Question In Mind? Let Us Help You</h1>

      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="email-input"
          />
          <button type="submit" className="form-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact
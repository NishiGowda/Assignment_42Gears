import React, { useState } from "react";
import "./Todo.css";

const App = () => {
  const [emails, setEmails] = useState([]);
  const [currentEmail, setCurrentEmail] = useState("");

  const handleInputChange = (e) => {
    setCurrentEmail(e.target.value);
  };

  const addEmailField = () => {
    if (currentEmail.trim() !== "") {
      setEmails([...emails, currentEmail]);
      setCurrentEmail(""); // Clear the input field
    }
  };

  const removeEmailField = (index) => {
    const newEmails = emails.filter((_, i) => i !== index);
    setEmails(newEmails);
  };

  return (
    <div className="container">
      <h1 className="title">TestProject</h1>
      <div className="content">
        <div className="label">Google EmailId's for FRP</div>
        <div className="form">
          <div className="input-container">
            <input
              type="text"
              value={currentEmail}
              onChange={handleInputChange}
              className="email-input"
              placeholder="Enter email"
            />
            <button className="add-button" onClick={addEmailField}>
              +
            </button>
          </div>
          <ul className="email-list">
            {emails.map((email, index) => (
              <li key={index} className="email-item">
                {email}
                <button
                  className="delete-button"
                  onClick={() => removeEmailField(index)}
                >
                  🗑️
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;

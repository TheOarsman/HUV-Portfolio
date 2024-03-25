import React, { useState } from "react";

// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../../utils/helpers";

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [touchedFields, setTouchedFields] = useState({
    userName: false,
    email: false,
    message: false,
  });

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // touched state
    setTouchedFields((prevTouchedFields) => ({
      ...prevTouchedFields,
      [inputType]: true,
    }));

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Check if any required field is empty
    if (!userName || !email || !message) {
      setErrorMessage("All fields are required.");
      return;
    }

    // Check if email is valid
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      // const response = await fetch("/send-email", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ name: userName, email, message }),
      // });

      // if (!response.ok) {
      //   throw new Error("Failed to send email");
      // }

      setUserName("");
      setMessage("");
      setEmail("");
      setErrorMessage("");
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage("Failed to send email");
    }
  };

  return (
    <section id="reach-out" className="contact">
      <div className="flex-row">
        <h2 className="section-title third-border">Reach Out</h2>
      </div>

      <div className="contact-info">
        <div>
          <h3>Welcome {userName}</h3>
          <p>Want to get into contact?</p>
          <address>
            Bloomfield Hills, MI <br />
            P: <a href="tel:248.752.6619">248.752.6619</a>
            <br />
            E:{" "}
            <a href="mailto://HeinzUlrichV@Gmail.com">HeinzUlrichV@Gmail.com</a>
          </address>
          <p>
            <strong>I would love to hear your feedback!</strong>
          </p>
        </div>

        {/* contact form section  */}
        <div className="contact-form">
          <h3>Contact Me</h3>
          <form className="form">
            {/* Name */}
            <label htmlFor="contact-name">Your Name</label>
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              id="contact-name"
              placeholder="Your Name"
            />

            {/* Email */}
            <label htmlFor="contact-email">Your Email</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              id="contact-email"
              placeholder="Your Email"
            />

            {/* Message */}
            <label htmlFor="contact-message">Message</label>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              type="message"
              id="contact-message"
              placeholder="Your Message"
            />
            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;

import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className="container">
      <h2>Contact</h2>
      <p>
        Email: <a href="mailto:sgmonu007@gmail.com">sgmonu007@gmail.com</a><br />
        Phone: +91-9340357914<br />
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/sparsh-golhani-65a4ba201"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "10px" }}
        >
          <FaLinkedin color="#0077b5" size={20} /> LinkedIn Profile
        </a>
      </p>
    </div>
  );
}

export default Contact;

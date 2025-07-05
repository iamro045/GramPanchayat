import "./Contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message!");
  };

  return (
    <div className="contact-container">
      <h1>📞 Contact Us</h1>

      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required />
        <button type="submit">Send</button>
      </form>

      <div className="contact-info">
        <h2>🏢 Grampanchayat Office</h2>
        <p><strong>Address:</strong> Grampanchayat Dundhe, Taluka Shahada, District Nandurbar, Maharashtra - 425409</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Email:</strong> grampanchayat.dundhe@maha.in</p>
      </div>

      <div className="map-embed">
        <h2>📍 Find Us on Map</h2>
        <iframe
          title="Dundhe Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8677990902994!2d74.3695464!3d20.7243636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddec3c5800010b%3A0xd727e5852581df18!2sDundhe%2C%20Maharashtra%20425409!5e0!3m2!1sen!2sin!4v1720176431459!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;

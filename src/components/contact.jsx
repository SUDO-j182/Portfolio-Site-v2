function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p className="contact-text">
        Want to reach out about a project, debugging help, or just to connect?
      </p>
      <div className="contact-links">
        <a href="mailto:your-email@example.com">Email</a>
        <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noreferrer">
          GitHub
        </a>
        {/* add Fiverr / portfolio links later */}
      </div>
    </section>
  );
}

export default Contact;

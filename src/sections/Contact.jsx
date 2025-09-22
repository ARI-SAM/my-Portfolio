import React, { useRef } from "react";
import emailjs from "emailjs-com";
//import "./Contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("❌ Something went wrong. Try again.");
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="container">
      <h2 className="section-title">Contact Me</h2>
      <p className="section-subtitle">Feel free to reach out 🚀</p>

      {/* Contact Form */}
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="from_name" placeholder="Your Name" required />
        <input type="email" name="from_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" className="btn">Send</button>
      </form>

      {/* Social Links */}
      <div className="social-links-responsive">

        <a href="https://www.linkedin.com/in/ari-sam100/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ verticalAlign: 'middle' }}>
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z" />
          </svg>
          LinkedIn
        </a>
        <a href="https://github.com/ARI-SAM" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg height="24" width="24" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" style={{ verticalAlign: 'middle' }}>
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
          GitHub
        </a>
      </div>

      {/* Responsive Social Links CSS */}
      <style>{`
        .social-links-responsive {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }
        .social-links-responsive a {
          font-size: 1.2rem;
          text-decoration: none;
          color: #333;
          background: #f5f5f5;
          padding: 0.75rem 1.5rem;
          border-radius: 30px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          transition: background 0.2s, color 0.2s;
        }
        .social-links-responsive a:hover {
          background: #0077b5;
          color: #fff;
        }
        @media (max-width: 600px) {
          .social-links-responsive {
            gap: 1rem;
          }
          .social-links-responsive a {
            font-size: 1rem;
            padding: 0.5rem 1rem;
          }
        }
      `}</style>
    </section>
  );
}

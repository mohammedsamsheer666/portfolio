import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white px-6"
    >
      {/* TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-400">Contact Me</h2>
        <p className="text-gray-400 mt-3">
          Let’s build something amazing together 🚀
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          <h3 className="text-2xl font-semibold">
            Get in Touch
          </h3>

          <p className="text-gray-400 leading-relaxed">
            I’m open to internships, freelance work, and AI/ML opportunities.
          </p>

          {/* EMAIL */}
          <a
            href="mailto:mohammedsamsheer39@gmail.com"
            className="flex items-center gap-3 p-4 bg-slate-900 border border-white/10 rounded-xl
                       hover:scale-105 hover:border-blue-500 transition duration-300 cursor-pointer"
          >
            <FaEnvelope className="text-blue-400" />
            <span>Email: mohammedsamsheer39@gmail.com</span>
          </a>

          {/* PHONE */}
          <a
            href="tel:+919746758733"
            className="flex items-center gap-3 p-4 bg-slate-900 border border-white/10 rounded-xl
                       hover:scale-105 hover:border-blue-500 transition duration-300 cursor-pointer"
          >
            <FaPhone className="text-blue-400" />
            <span>Phone: +91 9746758733</span>
          </a>

          {/* LOCATION (NOT CLICKABLE) */}
          <div
            className="flex items-center gap-3 p-4 bg-slate-900 border border-white/10 rounded-xl
                       hover:scale-105 hover:border-blue-500 transition duration-300"
          >
            <span>📍 Kerala, India</span>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 text-2xl mt-6">

            <a
              href="https://github.com/mohammedsamsheer666"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/mohammed-samsheer-40a6583aa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:mohammedsamsheer39@gmail.com"
              className="hover:text-blue-400 transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* RIGHT FORM */}
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-blue-500/20 transition">

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-slate-800 border border-white/10 focus:outline-none focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-slate-800 border border-white/10 focus:outline-none focus:border-blue-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-slate-800 border border-white/10 focus:outline-none focus:border-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;
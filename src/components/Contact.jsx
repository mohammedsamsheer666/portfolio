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

          {/* CONTACT DETAILS */}
          <div className="space-y-4">

            <div className="p-4 bg-slate-900 border border-white/10 rounded-xl">
              📧 mohammedsamsheer39@gmail.com
            </div>

            <div className="p-4 bg-slate-900 border border-white/10 rounded-xl flex items-center gap-2">
              <FaPhone className="text-blue-400" />
              +91 9746758733
            </div>

            <div className="p-4 bg-slate-900 border border-white/10 rounded-xl">
              📍 Kerala, India
            </div>

          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 text-2xl mt-6">

            <a
              href="https://github.com/mohammedsamsheer666"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/mohammed-samsheer-40a6583aa"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

            {/* FIXED EMAIL LINK */}
            <a
              href="mailto:mohammedsamsheer39@gmail.com"
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              <FaEnvelope />
              <span className="text-sm">Email Me</span>
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
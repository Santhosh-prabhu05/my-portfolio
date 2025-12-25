const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-20">
      <div className="max-w-3xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-6">
          Get in Touch
        </h2>

        <p className="text-center text-slate-600 mb-14">
          I’m open to opportunities, collaborations, and discussions.
        </p>

        <div className="space-y-10">

          {/* EMAIL */}
          <div className="flex items-center gap-6">
            <svg
              className="w-8 h-8 text-indigo-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 8l9 6 9-6" />
              <rect x="3" y="4" width="18" height="16" rx="2" />
            </svg>

            <a
              href="mailto:santhoshprabhu591@example.com"
              className="text-lg text-slate-700 hover:text-indigo-600 transition"
            >
              santhoshprabhu591@example.com
            </a>
          </div>

          {/* LINKEDIN */}
          <div className="flex items-center gap-6">
            <svg
              className="w-8 h-8 text-blue-600"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 8.98h4v12H3zM9 8.98h3.8v1.6h.05c.53-.95 1.83-1.95 3.75-1.95 4 0 4.75 2.63 4.75 6.05v6.3h-4v-5.6c0-1.34-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7H9z" />
            </svg>

            <a
              href="https://www.linkedin.com/in/santhosh-prabhu-895a0627b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-slate-700 hover:text-blue-600 transition"
            >
              linkedin
            </a>
          </div>

          {/* WHATSAPP */}
          <div className="flex items-center gap-6">
            <svg
              className="w-8 h-8 text-green-600"
              viewBox="0 0 32 32"
              fill="currentColor"
            >
              <path d="M16.04 2.003c-7.73 0-14 6.27-14 14 0 2.47.65 4.88 1.89 7.01L2 30l7.19-1.88A13.93 13.93 0 0016.04 30c7.73 0 14-6.27 14-14s-6.27-13.997-14-13.997zm0 25.61a11.56 11.56 0 01-5.9-1.6l-.42-.25-4.27 1.11 1.14-4.15-.28-.43a11.61 11.61 0 01-1.78-6.13c0-6.4 5.21-11.61 11.61-11.61 6.41 0 11.61 5.21 11.61 11.61 0 6.4-5.2 11.61-11.61 11.61z" />
            </svg>

            <a
              href="https://wa.me/917845788082"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-slate-700 hover:text-green-600 transition"
            >
              WhatsApp  
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Briefcase, MapPin, Code, Clock, Download } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function Contact() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Resume 25 dec.pdf'; // Ensure this matches the actual file path in public directory
    link.download = 'Arshpreet_Singh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.section
      id="contact"
      className="w-full bg-[#0B1120] text-white pt-24 border border-[#1E293B] rounded-t-3xl md:rounded-t-none md:border-x-0 md:border-b-0 mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="w-full max-w-[80%] mx-auto px-6 lg:px-0">

        {/* Top Header Section */}
        <div className="mb-16">
          <p className="text-[#7477FF] font-semibold text-[11px] tracking-[0.2em] uppercase mb-4">
            Contact
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            Let's build something
          </h2>
          <p className="text-gray-400 text-[16px] leading-relaxed max-w-[650px]">
            I'm open to backend and full-stack roles. If you're working on something interesting — <span className="text-gray-200">especially high-scale systems, payments, or real-time infrastructure</span> — I'd love to hear about it.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#1E293B] mb-12"></div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">

          {/* Left Column (Reach Out Via) */}
          <div className="md:pr-12 md:border-r border-[#1E293B]">
            <h3 className="text-gray-500 font-bold text-xs uppercase tracking-widest mb-6">Reach Out Via</h3>

            <div className="flex flex-col gap-4">
              {/* Email Card */}
              <a href="mailto:arshpreet.singh.dev@gmail.com" className="group border border-[#272B36] bg-[#141A28] rounded-xl p-4 flex items-center gap-4 hover:border-gray-500 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#7477FF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#7477FF]/20 transition-colors">
                  <Mail className="text-[#7477FF]" size={20} />
                </div>
                <div className="flex-1 overflow-hidden">
                  <h4 className="text-gray-200 text-sm font-medium truncate">arshpreet.singh.dev@gmail.com</h4>
                  <p className="text-gray-500 text-xs mt-1">Best for job inquiries and collabs</p>
                </div>
                <ExternalLink className="text-gray-600 group-hover:text-gray-400 transition-colors" size={16} />
              </a>

              {/* LinkedIn Card */}
              <a href="https://linkedin.com/in/arshpreet-singh-mern" target="_blank" rel="noopener noreferrer" className="group border border-[#272B36] bg-[#141A28] rounded-xl p-4 flex items-center gap-4 hover:border-gray-500 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#7477FF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#7477FF]/20 transition-colors">
                  <Linkedin className="text-[#7477FF]" size={20} />
                </div>
                <div className="flex-1 overflow-hidden">
                  <h4 className="text-gray-200 text-sm font-medium truncate">linkedin.com/in/arshpreet-singh-mern</h4>
                  <p className="text-gray-500 text-xs mt-1">Connect professionally</p>
                </div>
                <ExternalLink className="text-gray-600 group-hover:text-gray-400 transition-colors" size={16} />
              </a>

              {/* GitHub Card */}
              <a href="https://github.com/Arsh-Coding" target="_blank" rel="noopener noreferrer" className="group border border-[#272B36] bg-[#141A28] rounded-xl p-4 flex items-center gap-4 hover:border-gray-500 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#7477FF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#7477FF]/20 transition-colors">
                  <Github className="text-[#7477FF]" size={20} />
                </div>
                <div className="flex-1 overflow-hidden">
                  <h4 className="text-gray-200 text-sm font-medium truncate">github.com/arshpreet-singh-mern</h4>
                  <p className="text-gray-500 text-xs mt-1">See my code and projects</p>
                </div>
                <ExternalLink className="text-gray-600 group-hover:text-gray-400 transition-colors" size={16} />
              </a>
            </div>
          </div>

          {/* Right Column (Availability) */}
          <div className="md:pl-12">
            <h3 className="text-gray-500 font-bold text-xs uppercase tracking-widest mb-6">Availability</h3>

            <div className="border border-[#272B36] bg-[#141A28] rounded-xl p-5 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-green-500 font-medium text-[15px]">Open to opportunities</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Currently employed at JungleWorks, actively exploring new roles for the right opportunity.
              </p>
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <Briefcase className="text-gray-600 mt-0.5 flex-shrink-0" size={18} />
                <p className="text-[14.5px]"><span className="text-gray-300">Role type</span> <span className="text-gray-600 mx-1">—</span> <span className="text-gray-500">Backend or full-stack engineer</span></p>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-gray-600 mt-0.5 flex-shrink-0" size={18} />
                <p className="text-[14.5px]"><span className="text-gray-300">Location</span> <span className="text-gray-600 mx-1">—</span> <span className="text-gray-500">Mohali · Remote · Open to relocation</span></p>
              </div>
              <div className="flex items-start gap-4">
                <Code className="text-gray-600 mt-0.5 flex-shrink-0" size={18} />
                <p className="text-[14.5px]"><span className="text-gray-300">Stack</span> <span className="text-gray-600 mx-1">—</span> <span className="text-gray-500">Node.js, MERN, microservices</span></p>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-gray-600 mt-0.5 flex-shrink-0" size={18} />
                <p className="text-[14.5px]"><span className="text-gray-300">Notice</span> <span className="text-gray-600 mx-1">—</span> <span className="text-gray-500">Available to discuss immediately</span></p>
              </div>
            </div>

            <button
              onClick={handleDownloadResume}
              className="w-full py-3.5 bg-[#7477FF] hover:bg-[#6b6de5] text-white rounded-lg flex items-center justify-center gap-2 font-medium transition-colors"
            >
              <Download size={18} />
              Download resume
            </button>
          </div>

        </div>

        {/* Footer */}
        <div className="w-full h-px bg-[#1E293B] mt-16"></div>
        <div className="py-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm gap-4 md:gap-0">
          <p>Arshpreet Singh Esher · Backend Engineer</p>
          <p>© 2026</p>
        </div>

      </div>
    </motion.section>
  );
}

'use client';

import { motion } from 'framer-motion';

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

export default function About() {
  return (
    <motion.section
      id="about"
      className="w-full bg-transparent text-white py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="w-full max-w-[80%] mx-auto px-6 lg:px-0">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <motion.div
            className="flex flex-col"
            variants={fadeInUp}
          >
            <div className="mb-6">
              <p className="text-[#7477FF] font-semibold text-xs tracking-[0.2em] uppercase mb-3">
                About Me
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                The person behind the code
              </h2>
            </div>

            <p className="text-gray-400 text-[15px] leading-relaxed max-w-[420px] mb-4">
              Backend-focused engineer building <span className="text-white font-medium">Node.js microservices</span> at JungleWorks. Promoted to full-time in 9 months. Focused on reliability at scale — payments, real-time systems, and clean APIs.
            </p>

            <p className="text-gray-400 text-[15px] leading-relaxed max-w-[420px] mb-8">
              Prior experience building full-stack applications using the <span className="text-white font-medium">MERN stack</span> across client-facing products. Passionate about solving complex problems and integrating third-party systems seamlessly.
            </p>

            <p className="text-gray-500 text-[14px]">
              B.Tech CSE - Rayat Bahra University, 2025
            </p>
          </motion.div>

          {/* Right Column (Cards) */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={fadeInUp}
          >
            {/* Card 1 */}
            <div className="border border-[#272B36] bg-[#141A28] rounded-xl p-5 hover:border-gray-500 transition-colors">
              <h3 className="text-white font-bold text-[17px]">~30% API latency</h3>
              <p className="text-gray-500 text-sm mt-1">ride-hailing backend</p>
            </div>
            {/* Card 2 */}
            <div className="border border-[#272B36] bg-[#141A28] rounded-xl p-5 hover:border-gray-500 transition-colors">
              <h3 className="text-white font-bold text-[17px]">10K+ transactions</h3>
              <p className="text-gray-500 text-sm mt-1">zero dup-charge</p>
            </div>
            {/* Card 3 */}
            <div className="border border-[#272B36] bg-[#141A28] rounded-xl p-5 hover:border-gray-500 transition-colors">
              <h3 className="text-white font-bold text-[17px]">50+ bugs fixed</h3>
              <p className="text-gray-500 text-sm mt-1">distributed systems</p>
            </div>
            {/* Card 4 */}
            <div className="border border-[#272B36] bg-[#141A28] rounded-xl p-5 hover:border-gray-500 transition-colors">
              <h3 className="text-white font-bold text-[17px]">99%+ delivery</h3>
              <p className="text-gray-500 text-sm mt-1">async event handling</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

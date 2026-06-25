'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Car, Briefcase, MessageSquare, Plus } from 'lucide-react';

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

const Project = () => {
  return (
    <section id="projects" className="w-full bg-transparent text-white py-24">
      <div className="w-full max-w-[80%] mx-auto px-6 lg:px-0">

        {/* Section Header */}
        <motion.div
          className="mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <p className="text-[#7477FF] font-bold text-[11px] tracking-[0.2em] uppercase mb-2">
            Work
          </p>
          <h2 className="text-3xl font-bold text-white">
            Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Card 1 */}
          <motion.div
            className="border border-[#272B36] bg-[#141A28] rounded-2xl p-8 flex flex-col hover:border-gray-600 transition-colors"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
            variants={fadeInUp}
          >
            <div className="w-12 h-12 rounded-xl bg-[#7477FF]/10 flex items-center justify-center mb-6">
              <Car className="text-[#7477FF]" size={24} />
            </div>
            <h3 className="text-white font-bold text-[19px] mb-3 leading-tight">Ride Hailing Platform</h3>
            <p className="text-gray-400 text-[14px] leading-relaxed mb-8 flex-grow">
              Scheduled booking, driver matching, Google Maps integration
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-md border border-[#272B36] text-gray-300 text-[12px] font-medium bg-transparent">Next.js</span>
              <span className="px-3 py-1 rounded-md border border-[#272B36] text-gray-300 text-[12px] font-medium bg-transparent">Node</span>
              <span className="px-3 py-1 rounded-md border border-[#272B36] text-gray-300 text-[12px] font-medium bg-transparent">Stripe</span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="border border-[#272B36] bg-[#141A28] rounded-2xl p-8 flex flex-col hover:border-gray-600 transition-colors"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
            variants={fadeInUp}
          >
            <div className="w-12 h-12 rounded-xl bg-[#7477FF]/10 flex items-center justify-center mb-6">
              <Briefcase className="text-[#7477FF]" size={22} />
            </div>
            <h3 className="text-white font-bold text-[19px] mb-3 leading-tight">Women at Workforce</h3>
            <p className="text-gray-400 text-[14px] leading-relaxed mb-8 flex-grow">
              MERN job portal · 200+ users · JWT auth, RBAC
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-md border border-[#272B36] text-gray-300 text-[12px] font-medium bg-transparent">React</span>
              <span className="px-3 py-1 rounded-md border border-[#272B36] text-gray-300 text-[12px] font-medium bg-transparent">MongoDB</span>
              <span className="px-3 py-1 rounded-md border border-[#272B36] text-gray-300 text-[12px] font-medium bg-transparent">Redux</span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="border border-[#272B36] bg-[#141A28] rounded-2xl p-8 flex flex-col hover:border-gray-600 transition-colors"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={3}
            variants={fadeInUp}
          >
            <div className="w-12 h-12 rounded-xl bg-[#7477FF]/10 flex items-center justify-center mb-6">
              <MessageSquare className="text-[#7477FF]" size={22} />
            </div>
            <h3 className="text-white font-bold text-[19px] mb-3 leading-tight">Real-Time Chat</h3>
            <p className="text-gray-400 text-[14px] leading-relaxed mb-8 flex-grow">
              Socket.io · 100+ concurrent users · bcrypt auth
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-md border border-[#272B36] text-gray-300 text-[12px] font-medium bg-transparent">Socket.io</span>
              <span className="px-3 py-1 rounded-md border border-[#272B36] text-gray-300 text-[12px] font-medium bg-transparent">Node</span>
            </div>
          </motion.div>

          {/* Card 4 (More on GitHub) */}
          <motion.a
            href="https://github.com/Arsh-Coding"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#7477FF]/20 bg-[#141A28] rounded-2xl p-8 flex flex-col justify-center items-start hover:border-[#7477FF]/50 transition-colors cursor-pointer group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={4}
            variants={fadeInUp}
          >
            <div className="w-12 h-12 rounded-xl bg-[#7477FF]/15 flex items-center justify-center mb-6 group-hover:bg-[#7477FF]/25 transition-colors">
              <Plus className="text-[#7477FF]" size={26} />
            </div>
            <h3 className="text-[#7477FF] font-bold text-[19px] mb-2 leading-tight">More on GitHub</h3>
            <p className="text-gray-500 text-[14px]">
              View all repositories &rarr;
            </p>
          </motion.a>

        </div>
      </div>
    </section>
  );
};

export default Project;
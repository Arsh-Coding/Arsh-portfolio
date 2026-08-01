'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Car, Briefcase, MessageSquare, Plus, ArrowRight } from 'lucide-react';
import Image from 'next/image';

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

const projects = [
  {
    id: 1,
    title: 'Ride Hailing Platform',
    description: 'Scheduled booking, driver matching, Google Maps integration',
    icon: Car,
    tags: ['Next.js', 'Node', 'Stripe'],
    image: '/assets/chatproject.jpg', // Placeholder for Ride Hailing
    link: '#',
  },
  {
    id: 2,
    title: 'Women at Workforce',
    description: 'MERN job portal · 200+ users · JWT auth, RBAC',
    icon: Briefcase,
    tags: ['React', 'MongoDB', 'Redux'],
    image: '/assets/projectW.jpg',
    link: 'https://women-at-work.vercel.app/',
  },
  {
    id: 3,
    title: 'Real-Time Chat',
    description: 'Socket.io · 100+ concurrent users · bcrypt auth',
    icon: MessageSquare,
    tags: ['Socket.io', 'Node'],
    image: '/assets/chatproject.jpg',
    link: '#',
  },
];

const ProjectCard = ({ project, customIndex }) => {
  const Icon = project.icon;
  
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] rounded-2xl p-8 flex flex-col overflow-hidden transition-all duration-[350ms] ease-out hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)] cursor-pointer min-h-[320px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={customIndex}
      variants={fadeInUp}
    >
      {/* Background Image Layer (Hover) */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-25 translate-y-4 group-hover:translate-y-0 scale-105 group-hover:scale-100 transition-all duration-[400ms] ease-out">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      
      {/* Gradient Scrim (Hover) */}
      <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-all duration-[400ms] ease-out" 
           style={{ background: 'linear-gradient(to top, rgba(10,10,20,0.95), rgba(10,10,20,0.4))' }} />

      {/* Content Container */}
      <div className="relative z-20 flex flex-col h-full justify-between">
        <div>
          {/* Icon Badge */}
          <div className="w-12 h-12 rounded-2xl bg-[#6366f1]/15 flex items-center justify-center mb-6 transition-all duration-[350ms] ease-out group-hover:opacity-0 group-hover:scale-90 group-hover:-translate-y-2 origin-top-left">
            <Icon className="text-[#818cf8]" size={24} />
          </div>
          
          <div className="transition-all duration-[350ms] ease-out group-hover:-translate-y-12">
            <h3 className="text-white font-bold text-[22px] mb-3 leading-tight drop-shadow-sm">
              {project.title}
            </h3>
            
            <p className="text-[#a5b4fc] text-[14px] leading-relaxed mb-6 drop-shadow-sm line-clamp-2">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-full border border-[rgba(255,255,255,0.15)] text-[#e0e7ff] text-[11px] uppercase tracking-wide font-semibold bg-[rgba(255,255,255,0.05)] backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA (Hover) */}
        <div className="absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-[350ms] ease-out delay-75">
          <span className="flex items-center text-[#818cf8] font-bold text-[14px] uppercase tracking-wide">
            View project <ArrowRight size={18} className="ml-2 transition-transform duration-[350ms] group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </motion.a>
  );
};

const Project = () => {
  return (
    <section id="projects" className="w-full bg-[#0a0a12] text-white py-24">
      <div className="w-full max-w-[80%] mx-auto px-6 lg:px-0">
        {/* Section Header */}
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <p className="text-[#6366f1] font-bold text-[12px] tracking-[0.2em] uppercase mb-3">
            Selected Work
          </p>
          <h2 className="text-4xl font-bold text-white tracking-tight">
            Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} customIndex={index + 1} />
          ))}

          {/* Card 4 (More on GitHub) */}
          <motion.a
            href="https://github.com/Arsh-Coding"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative border border-[rgba(99,102,241,0.2)] bg-[rgba(99,102,241,0.02)] rounded-2xl p-8 flex flex-col justify-center items-center text-center transition-all duration-[350ms] ease-out hover:-translate-y-1 hover:border-[rgba(99,102,241,0.5)] hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)] cursor-pointer min-h-[320px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={4}
            variants={fadeInUp}
          >
            <div className="w-14 h-14 rounded-2xl bg-[#6366f1]/15 flex items-center justify-center mb-6 transition-colors duration-[350ms] group-hover:bg-[#6366f1]/30">
              <Plus className="text-[#818cf8]" size={28} />
            </div>
            <h3 className="text-[#e0e7ff] font-bold text-[22px] mb-2 leading-tight transition-all duration-[350ms] group-hover:text-white">
              More on GitHub
            </h3>
            <p className="text-[#a5b4fc] text-[14px] transition-colors duration-[350ms] group-hover:text-[#c7d2fe]">
              View all repositories &rarr;
            </p>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Project;
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

const projectsData = [
    {
        id: 1,
        title: 'Women In Workforce',
        description:
            'The premier platform dedicated to empowering and promoting women in the workplace. Our platform is designed to connect talented and ambitious women with diverse employment opportunities across the United Kingdom, Europe, and India.',
        image: '/assets/projectW.jpg',
        link: 'https://women-at-work.vercel.app/',
        github: '#',
        tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Job Portal'],
    },
    {
        id: 2,
        title: 'Chat App Socket.io',
        description:
            'Chat application built with the power of MERN Stack and Socket.io for real-time communication. This app allows users to create accounts, exchange messages instantly with other users in a seamless and interactive environment.',
        image: '/assets/chatproject.jpg',
        link: '#',
        github: '#',
        tags: ['MERN Stack', 'Socket.io', 'Real-time'],
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            variants={cardVariants}
            className="bg-[#1E293B] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full border border-slate-700/50"
        >
            <div className="relative w-full h-64 overflow-hidden group">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-slate-900 hover:bg-blue-500 hover:text-white transition-colors"
                        title="View Live"
                    >
                        <ExternalLink size={20} />
                    </a>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-slate-900 hover:bg-blue-500 hover:text-white transition-colors"
                        title="View Code"
                    >
                        <Github size={20} />
                    </a>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-6 flex-grow leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-[#0F172A]">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4 inline-block border-b-4 border-blue-500 pb-2">
                        Featured Projects
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mt-4">
                        Here are some of the projects I've worked on. Each one was a unique challenge that helped me grow as a developer.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

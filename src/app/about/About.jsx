'use client';

import { motion } from 'framer-motion';
import { Download, Code, Database, Palette, Zap, Briefcase, GraduationCap, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const skills = [
    {
        icon: Code,
        title: 'Frontend Development',
        description: 'React.js, Next.js, Material UI, Tailwind CSS',
        technologies: ['React.js', 'Next.js', 'HTML', 'CSS', 'JavaScript'],
        color: 'blue',
    },
    {
        icon: Database,
        title: 'Backend Development',
        description: 'Node.js, Express.js, RESTful APIs',
        technologies: ['Node.js', 'Express.js', 'MongoDB', 'MySQL'],
        color: 'green',
    },
    {
        icon: Palette,
        title: 'Real-time Systems',
        description: 'Socket.io for live chat and notifications',
        technologies: ['Socket.io', 'WebSockets', 'Real-time APIs'],
        color: 'purple',
    },
    {
        icon: Zap,
        title: 'Tools & Practices',
        description: 'Git, RESTful APIs, Agile Development',
        technologies: ['Git', 'REST APIs', 'Agile', 'Code Reviews'],
        color: 'yellow',
    },
];

const experience = [
    {
        year: 'April 2026 – Present',
        role: 'Associate Software Engineer',
        company: 'JungleWorks',
        location: 'Mohali, Punjab',
        description: [
            'Designed and optimized Node.js backend services for ride-hailing workflows including ride lifecycle management, dynamic fare computation, and automated payout systems, reducing average API response latency by ˜30%.',
            'Built and integrated payment gateway solutions using Stripe and Square with idempotent REST APIs and robust error handling, supporting 10,000+ monthly transactions with zero duplicate-charge incidents.',
            'Engineered asynchronous processing pipelines for push notifications, job scheduling, and subscription management using event-driven architecture, improving overall system reliability by 25%.',
            'Resolved 50+ production bugs related to service availability, timezone edge cases, vehicle allocation logic, and geospatial map-view rendering across distributed microservices.',
            'Collaborated cross-functionally with product and QA teams following Agile/Scrum methodology to deliver features on schedule.'
        ],
    },
    {
        year: 'July 2025 – April 2026',
        role: 'Associate Software Developer Trainee',
        company: 'JungleWorks',
        location: 'Mohali, Punjab',
        description: [
            'Built and enhanced ride, fare, and payout workflows, implementing city-level business logic using Node.js APIs and AngularJS',
            'Integrated external APIs and notifications, including wallet recharge, SMS gateway, and automated mail/push flows with reliable async handling',
            'Improved platform stability and operations by fixing availability, subscription, timezone, map-view, and vehicle-assignment issues'
        ],
    },
    {
        year: 'January 2025 – July 2025',
        role: 'MERN Stack Developer — Intern',
        company: 'SDNA Tech',
        location: 'Mohali, Punjab',
        description: [
            'Contributing to the development of full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js)',
            'Collaborated with a team to design 10+ RESTful APIs ensuring seamless communication between front-end interfaces and backend services',
            'Maintained 100% Git commit hygiene and contributed to 5+ code reviews weekly'
        ],
    },
];

const education = [
    {
        degree: 'B. Tech in Computer Science',
        institution: 'Rayat Bahra University',
        location: 'Mohali',
        year: '2021 – 2025',
    },
    {
        degree: '12th Non-Medical',
        institution: 'DAV Sr Sec School',
        location: 'Mohali',
        year: '2019 – 2021',
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

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export default function About() {
    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/Resume 25 dec.pdf';
        link.download = 'Arshpreet_Singh_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="about" className="min-h-screen bg-[#0F172A] py-20">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Introduction Section (Matching Screenshot Layout) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-20"
                >
                    <motion.h1
                        className="text-4xl font-bold w-fit mb-12 border-b-4 border-blue-500 pb-2 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        About Me
                    </motion.h1>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Column (Text & Tech) */}
                        <div className="space-y-12">
                            <div className="space-y-6 text-[15px] leading-relaxed text-gray-200 font-medium">
                                <p>
                                    I am a MERN Stack Developer with a strong passion for building web
                                    apps using modern technologies. I love clean code, building
                                    UI/UX-friendly designs, and learning new frameworks.
                                </p>
                                <p>
                                    Over the past year, I've worked with various tools and libraries
                                    including React, Node.js, Express, and MongoDB, while keeping my
                                    skills sharp in frontend styling using TailwindCSS and Bootstrap.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg mb-6 text-white">
                                    Technologies I've Worked With:
                                </h3>

                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 text-sm font-medium text-gray-300">
                                    <div className="flex items-center gap-3">
                                        <Code className="text-blue-400 w-5 h-5" />
                                        HTML
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 border-2 border-blue-400 rounded-sm"></div>
                                        CSS
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-yellow-400 font-bold text-lg">{"{}"}</span>
                                        JavaScript
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-cyan-400 font-bold text-lg">{"</>"}</span>
                                        React.js
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Palette className="text-pink-400 w-5 h-5" />
                                        Tailwind Css
                                    </div>
                                    <div className="flex items-center gap-3 col-span-2 lg:col-span-1">
                                        <span className="text-green-400 font-bold text-lg">{">_"}</span>
                                        Node.js, Express
                                    </div>
                                    <div className="flex items-center gap-3 col-span-2 lg:col-span-2">
                                        <Database className="text-purple-400 w-5 h-5" />
                                        MongoDB
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column (Image) */}
                        <div className="flex justify-center md:justify-end">
                            <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
                                <img
                                    src={'/assets/about-img.png'}
                                    alt="Developer illustration"
                                    className="object-contain rounded-full w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">
                        My <span className="text-[#7477FF]">Skills</span>
                    </h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {skills.map((skill, index) => {
                            const Icon = skill.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className="bg-[#1E293B] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-700/50"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                                        <Icon className="text-blue-400" size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {skill.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-3">
                                        {skill.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1">
                                        {skill.technologies.slice(0, 3).map((tech, i) => (
                                            <span key={i} className="text-xs text-blue-300 bg-blue-500/5 px-2 py-1 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>

                {/* Experience Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">
                        My <span className="text-[#7477FF]">Experience</span>
                    </h2>
                    <div className="space-y-6">
                        {experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                                whileHover={{ x: 10 }}
                                className="bg-[#1E293B] rounded-xl p-6 shadow-lg border-l-4 border-[#7477FF] hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">
                                            {exp.role}
                                        </h3>
                                        <p className="text-slate-300 font-medium flex items-center gap-2 mt-1">
                                            <Briefcase size={16} className="text-[#7477FF]" />
                                            {exp.company} • {exp.location}
                                        </p>
                                    </div>
                                    <span className="text-[#7477FF] font-semibold mt-2 md:mt-0">
                                        {exp.year}
                                    </span>
                                </div>
                                <ul className="text-slate-400 leading-relaxed space-y-2 mt-4">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex gap-2">
                                            <span className="text-[#7477FF] mt-1">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Education Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">
                        My <span className="text-[#7477FF]">Education</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                                whileHover={{ scale: 1.03 }}
                                className="bg-[#1E293B] rounded-xl p-6 shadow-lg border border-slate-700/50 hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-[#7477FF]/10 flex items-center justify-center flex-shrink-0">
                                        <GraduationCap className="text-[#7477FF]" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-slate-300 font-medium mb-1">
                                            {edu.institution}
                                        </p>
                                        <div className="flex items-center gap-3 text-sm text-slate-400">
                                            <span>{edu.location}</span>
                                            <span>•</span>
                                            <span className="text-[#7477FF]">{edu.year}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Technologies */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    className="bg-[#1E293B] rounded-xl p-8 shadow-lg border border-slate-700/50"
                >
                    <h2 className="text-3xl font-bold text-white mb-6 text-center">
                        Technologies I <span className="text-[#7477FF]">Work With</span>
                    </h2>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {['JavaScript', 'React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'HTML', 'CSS', 'Material UI', 'Tailwind CSS', 'Socket.io', 'Git', 'REST APIs', 'AngularJS', 'C', 'SQL'].map((tech, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 1.1 + index * 0.05 }}
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="px-4 py-2 text-sm font-medium text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20 hover:bg-blue-500/20 transition-all duration-300 cursor-default"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* Soft Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="mt-12 bg-gradient-to-r from-[#1E293B] to-[#1E293B]/80 rounded-xl p-8 shadow-lg border border-slate-700/50"
                >
                    <h2 className="text-2xl font-bold text-white mb-6 text-center">
                        Soft <span className="text-[#7477FF]">Skills</span>
                    </h2>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {['Effective Communication', 'Teamwork', 'Leadership', 'Analytical Thinking'].map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 1.3 + index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="px-5 py-3 bg-[#7477FF]/10 text-white rounded-lg border border-[#7477FF]/30 hover:bg-[#7477FF]/20 transition-all duration-300"
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

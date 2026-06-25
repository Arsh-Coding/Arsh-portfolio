'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, MapPin, Send, User, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const contactInfo = [
    {
        icon: Mail,
        label: 'Email',
        value: 'arshpreet.singh.dev@gmail.com',
        href: 'mailto:arshpreet.singh.dev@gmail.com',
        color: 'blue',
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '+91 6280938771',
        href: 'tel:+916280938771',
        color: 'green',
    },
    {
        icon: MapPin,
        label: 'Location',
        value: 'Mohali, Punjab, India',
        href: null,
        color: 'purple',
    },
];

const socialLinks = [
    {
        icon: Github,
        label: 'GitHub',
        href: 'https://github.com/Arsh-Coding',
        color: 'hover:text-gray-400',
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/arshpreet-singh-mern/',
        color: 'hover:text-blue-400',
    },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: '',
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });

            // Clear success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="min-h-screen bg-[#0F172A] text-white py-20">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold text-white mb-4 inline-block border-b-4 border-[#7477FF] pb-2">
                        Get In Touch
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto mt-6 text-lg">
                        Have a project in mind or just want to chat? Feel free to reach out!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Let's <span className="text-[#7477FF]">Connect</span>
                            </h2>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                I'm a passionate Full Stack Developer with hands-on experience building scalable,
                                performance-driven web applications. I specialize in JavaScript/TypeScript, React,
                                Node.js, and MongoDB, with a strong understanding of RESTful APIs, modern UI/UX
                                practices, and backend architecture.
                            </p>
                            <p className="text-slate-300 leading-relaxed">
                                💡 I take pride in writing clean, maintainable code and continuously learning new
                                technologies. I thrive in collaborative environments and I'm always excited to work
                                on challenging projects.
                            </p>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => {
                                const Icon = info.icon;
                                const content = (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                        whileHover={{ x: 10, scale: 1.02 }}
                                        className="bg-[#1E293B] rounded-xl p-5 shadow-lg border border-slate-700/50 hover:shadow-2xl transition-all duration-300 flex items-center gap-4"
                                    >
                                        <div className="w-12 h-12 rounded-lg bg-[#7477FF]/10 flex items-center justify-center flex-shrink-0">
                                            <Icon className="text-[#7477FF]" size={24} />
                                        </div>
                                        <div>
                                            <p className="text-slate-400 text-sm">{info.label}</p>
                                            <p className="text-white font-medium">{info.value}</p>
                                        </div>
                                    </motion.div>
                                );

                                return info.href ? (
                                    <a key={index} href={info.href} className="block">
                                        {content}
                                    </a>
                                ) : (
                                    content
                                );
                            })}
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, y: -5 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-14 h-14 rounded-full bg-[#1E293B] border border-slate-700/50 flex items-center justify-center hover:bg-[#7477FF] hover:border-[#7477FF] transition-all duration-300 shadow-lg"
                                            aria-label={social.label}
                                        >
                                            <Icon size={24} />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#1E293B] rounded-xl p-8 shadow-lg border border-slate-700/50"
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Send Me a <span className="text-[#7477FF]">Message</span>
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-slate-300 mb-2 font-medium">
                                    Your Name *
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full bg-[#0F172A] text-white pl-12 pr-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-slate-600'
                                            } focus:border-[#7477FF] focus:outline-none transition-colors`}
                                        placeholder="John Doe"
                                    />
                                </div>
                                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-slate-300 mb-2 font-medium">
                                    Your Email *
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full bg-[#0F172A] text-white pl-12 pr-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-slate-600'
                                            } focus:border-[#7477FF] focus:outline-none transition-colors`}
                                        placeholder="john@example.com"
                                    />
                                </div>
                                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                            </div>

                            {/* Subject Field */}
                            <div>
                                <label htmlFor="subject" className="block text-slate-300 mb-2 font-medium">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={`w-full bg-[#0F172A] text-white px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-500' : 'border-slate-600'
                                        } focus:border-[#7477FF] focus:outline-none transition-colors`}
                                    placeholder="Project Inquiry"
                                />
                                {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-slate-300 mb-2 font-medium">
                                    Your Message *
                                </label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-3 top-3 text-slate-400" size={20} />
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        className={`w-full bg-[#0F172A] text-white pl-12 pr-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-slate-600'
                                            } focus:border-[#7477FF] focus:outline-none transition-colors resize-none`}
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>
                                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-3 px-6 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 ${isSubmitting
                                    ? 'bg-slate-600 cursor-not-allowed'
                                    : 'bg-[#7477FF] hover:bg-white hover:text-[#1E293B] shadow-lg'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        Send Message
                                    </>
                                )}
                            </motion.button>

                            {/* Success Message */}
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-green-500/10 border border-green-500/50 text-green-400 px-4 py-3 rounded-lg text-center"
                                >
                                    ✓ Message sent successfully! I'll get back to you soon.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

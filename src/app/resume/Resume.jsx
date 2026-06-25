'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { motion } from 'framer-motion';
import { Download, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Maximize2, Minimize2, X } from 'lucide-react';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1.0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const pdfUrl = '/Arshpreet_Singh_Esher_resume.pdf';

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Arshpreet_Singh_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const goToPrevPage = () => {
        setPageNumber((prev) => Math.max(prev - 1, 1));
    };

    const goToNextPage = () => {
        setPageNumber((prev) => Math.min(prev + 1, numPages || 1));
    };

    const zoomIn = () => {
        setScale((prev) => Math.min(prev + 0.2, 2.0));
    };

    const zoomOut = () => {
        setScale((prev) => Math.max(prev - 0.2, 0.6));
    };

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
        if (!isFullscreen) {
            setScale(1.2);
        } else {
            setScale(1.0);
        }
    };

    return (
        <section className="min-h-screen bg-[#0F172A] py-20">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-5xl font-bold text-white mb-4 inline-block border-b-4 border-[#7477FF] pb-2">
                        My Resume
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto mt-6 text-lg">
                        View and download my professional resume
                    </p>
                </motion.div>

                {/* Controls Bar */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-[#1E293B] rounded-xl p-4 mb-6 shadow-lg border border-slate-700/50"
                >
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        {/* Page Navigation */}
                        <div className="flex items-center gap-3">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={goToPrevPage}
                                disabled={pageNumber <= 1}
                                className={`p-2 rounded-lg transition-all duration-300 ${pageNumber <= 1
                                    ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                                    : 'bg-[#7477FF] text-white hover:bg-white hover:text-[#1E293B]'
                                    }`}
                                aria-label="Previous page"
                            >
                                <ChevronLeft size={20} />
                            </motion.button>

                            <div className="text-white font-medium px-4 py-2 bg-[#0F172A] rounded-lg border border-slate-600">
                                Page {pageNumber} of {numPages || '...'}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={goToNextPage}
                                disabled={pageNumber >= (numPages || 1)}
                                className={`p-2 rounded-lg transition-all duration-300 ${pageNumber >= (numPages || 1)
                                    ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                                    : 'bg-[#7477FF] text-white hover:bg-white hover:text-[#1E293B]'
                                    }`}
                                aria-label="Next page"
                            >
                                <ChevronRight size={20} />
                            </motion.button>
                        </div>

                        {/* Zoom Controls */}
                        <div className="flex items-center gap-3">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={zoomOut}
                                disabled={scale <= 0.6}
                                className={`p-2 rounded-lg transition-all duration-300 ${scale <= 0.6
                                    ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                                    : 'bg-[#7477FF] text-white hover:bg-white hover:text-[#1E293B]'
                                    }`}
                                aria-label="Zoom out"
                            >
                                <ZoomOut size={20} />
                            </motion.button>

                            <div className="text-white font-medium px-4 py-2 bg-[#0F172A] rounded-lg border border-slate-600 min-w-[80px] text-center">
                                {Math.round(scale * 100)}%
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={zoomIn}
                                disabled={scale >= 2.0}
                                className={`p-2 rounded-lg transition-all duration-300 ${scale >= 2.0
                                    ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                                    : 'bg-[#7477FF] text-white hover:bg-white hover:text-[#1E293B]'
                                    }`}
                                aria-label="Zoom in"
                            >
                                <ZoomIn size={20} />
                            </motion.button>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={toggleFullscreen}
                                className="p-2 bg-[#7477FF] text-white rounded-lg hover:bg-white hover:text-[#1E293B] transition-all duration-300"
                                aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                            >
                                {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleDownload}
                                className="flex items-center gap-2 px-4 py-2 bg-[#7477FF] text-white font-bold rounded-lg hover:bg-white hover:text-[#1E293B] transition-all duration-300 shadow-lg"
                            >
                                <Download size={20} />
                                <span className="hidden sm:inline">Download</span>
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* PDF Viewer */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={`bg-[#1E293B] rounded-xl shadow-2xl border border-slate-700/50 overflow-hidden relative ${isFullscreen ? 'fixed inset-4 z-50' : ''
                        }`}
                >
                    {isFullscreen && (
                        <button
                            onClick={toggleFullscreen}
                            className="absolute top-4 right-4 p-2 bg-[#7477FF] text-white rounded-lg hover:bg-white hover:text-[#1E293B] transition-all duration-300 z-50"
                            aria-label="Close fullscreen"
                        >
                            <X size={24} />
                        </button>
                    )}
                    <div className={`overflow-auto ${isFullscreen ? 'h-full' : 'max-h-[800px]'} flex justify-center p-6`}>
                        <Document
                            file={pdfUrl}
                            onLoadSuccess={onDocumentLoadSuccess}
                            loading={
                                <div className="flex flex-col items-center justify-center py-20">
                                    <div className="w-16 h-16 border-4 border-[#7477FF] border-t-transparent rounded-full animate-spin mb-4"></div>
                                    <p className="text-slate-400 text-lg">Loading PDF...</p>
                                </div>
                            }
                            error={
                                <div className="flex flex-col items-center justify-center py-20">
                                    <div className="text-red-400 text-xl mb-4">⚠️ Error loading PDF</div>
                                    <p className="text-slate-400">Please try refreshing the page</p>
                                </div>
                            }
                            className="flex justify-center"
                        >
                            <Page
                                pageNumber={pageNumber}
                                scale={scale}
                                loading={
                                    <div className="flex items-center justify-center py-10">
                                        <div className="w-12 h-12 border-4 border-[#7477FF] border-t-transparent rounded-full animate-spin"></div>
                                    </div>
                                }
                                className="shadow-2xl"
                                renderTextLayer={true}
                                renderAnnotationLayer={true}
                            />
                        </Document>
                    </div>
                </motion.div>

                {/* Info Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-8 bg-[#1E293B] rounded-xl p-6 shadow-lg border border-slate-700/50"
                >
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-3">
                            Need a <span className="text-[#7477FF]">Copy</span>?
                        </h3>
                        <p className="text-slate-400 mb-4">
                            Download my resume to learn more about my experience, skills, and projects
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleDownload}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#7477FF] text-white font-bold rounded-lg hover:bg-white hover:text-[#1E293B] transition-all duration-300 shadow-lg"
                        >
                            <Download size={20} />
                            Download Resume (PDF)
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section >
    );
}

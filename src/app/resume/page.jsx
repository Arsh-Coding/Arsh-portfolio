'use client';

import Navbar from '../components/Navbar';
import dynamic from 'next/dynamic';

const Resume = dynamic(() => import('./Resume'), {
    ssr: false,
});
// import Footer from '../components/Footer';

export default function ResumePage() {
    return (
        <div className="bg-[#0F172A] min-h-screen text-white">
            <div className="w-full flex justify-center">
                <div className="w-full max-w-[1200px]">
                    <Navbar />
                    <Resume />
                    {/* <Footer /> */}
                </div>
            </div>
        </div>
    );
}

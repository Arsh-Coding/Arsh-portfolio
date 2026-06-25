import Navbar from '../components/Navbar';
import Contact from './Contact';
// import Footer from '../components/Footer';

export default function ContactPage() {
    return (
        <div className="bg-[#0F172A] min-h-screen text-white">
            <div className="w-full flex justify-center">
                <div className="w-full max-w-[1200px]">
                    <Navbar />
                    <Contact />
                    {/* <Footer /> */}
                </div>
            </div>
        </div>
    );
}

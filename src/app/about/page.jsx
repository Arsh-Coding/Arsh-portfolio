import Navbar from '../components/Navbar';
import About from './About';
// import Footer from '../components/Footer';

export default function AboutPage() {
    return (
        <div className="bg-[#0F172A] min-h-screen text-white">
            <div className="w-full flex justify-center">
                <div className="w-full max-w-[1200px]">
                    <Navbar />
                    <About />
                    {/* <Footer /> */}
                </div>
            </div>
        </div>
    );
}

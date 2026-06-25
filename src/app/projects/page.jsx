import Projects from './Projects';
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

export default function ProjectsPage() {
    return (
        <div className="bg-[#0F172A] min-h-screen text-white">
            <div className="w-full flex justify-center">
                <div className="w-full max-w-[1200px]">
                    <Navbar />
                    <Projects />
                    {/* <Footer /> */}
                </div>
            </div>
        </div>
    );
}

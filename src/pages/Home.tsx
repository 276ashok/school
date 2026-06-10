import { ArrowRight, BookOpen, Users, Trophy, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-indigo-900 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-indigo-900/90 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 bg-indigo-800 text-indigo-100 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              Welcome to Excellence
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Empowering Minds, <br className="hidden md:block" />
              <span className="text-yellow-400">Shaping Futures.</span>
            </h1>
            <p className="text-lg md:text-xl text-indigo-100 mb-8 max-w-xl">
              King Universe Matric Higher Secondary School is dedicated to fostering academic excellence, moral integrity, and holistic development in every student.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/admissions" className="inline-flex justify-center items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-6 py-3 rounded-lg font-bold transition-colors" id="home-admi">
                Apply Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/about" className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-lg font-medium transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-24 relative z-20">
            <div className="bg-white p-8 rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="bg-indigo-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Academic Excellence</h3>
              <p className="text-slate-600 mb-4 line-clamp-3">Comprehensive curriculum designed to challenge students and inspire a lifelong love for learning across all disciplines.</p>
              <Link to="/courses" className="text-indigo-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">Explore Curriculum <ChevronRight className="w-4 h-4" /></Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="bg-yellow-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Expert Faculty</h3>
              <p className="text-slate-600 mb-4 line-clamp-3">Dedicated and experienced educators committed to mentoring students and providing personalized attention.</p>
              <Link to="/faculty" className="text-yellow-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">Meet Our Teachers <ChevronRight className="w-4 h-4" /></Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Holistic Growth</h3>
              <p className="text-slate-600 mb-4 line-clamp-3">Rich extracurricular programs including sports, arts, and clubs to develop well-rounded, confident individuals.</p>
              <Link to="/news" className="text-emerald-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">View Student Life <ChevronRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome / Mission */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
                alt="Students studying"
                className="rounded-2xl shadow-2xl object-cover w-full h-[400px]"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <div className="text-indigo-600 font-bold tracking-wider uppercase text-sm">About Our School</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">A Legacy of Educational Leadership</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Founded on the principles of integrity, perseverance, and intellectual curiosity, King Universe Matric Higher Secondary School provides an environment where students thrive.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our approach integrates traditional values with modern teaching methodologies, ensuring that every student is equipped with the knowledge, skills, and character necessary to succeed in a rapidly changing world.
              </p>
              <div className="pt-4">
                <Link to="/about" className="inline-flex justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Read Our Full Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-50 py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">About Us</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Discover the history, vision, and educational philosophy that drives King Universe.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Story Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our History</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Established over two decades ago, King Universe Matric Higher Secondary School began with a simple yet profound vision: to provide high-quality education accessible to all children in our community.
                </p>
                <p>
                  What started as a modest primary school has grown organically into a premier higher secondary institution, thanks to the unwavering dedication of our founders, the trust of our parents, and the hard work of our students and staff.
                </p>
                <p>
                  Over the years, we have continuously upgraded our infrastructure, adopted innovative teaching methodologies, and expanded our curriculum to meet global standards while remaining deeply rooted in our cultural values.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" alt="Historical school building" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-indigo-50 p-8 md:p-12 rounded-2xl border border-indigo-100">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">Our Vision</h3>
            <p className="text-indigo-800/80 leading-relaxed text-lg">
              To be a center of excellence that nurtures global citizens who are intellectually capable, socially responsible, and ethically sound, ready to lead and serve the society.
            </p>
          </div>
          <div className="bg-yellow-50 p-8 md:p-12 rounded-2xl border border-yellow-100">
            <h3 className="text-2xl font-bold text-yellow-900 mb-4">Our Mission</h3>
            <p className="text-yellow-800/80 leading-relaxed text-lg">
              To provide a dynamic and inclusive learning environment that fosters critical thinking, creativity, and character development, empowering every student to reach their full potential.
            </p>
          </div>
        </div>

        {/* Philosophy */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Educational Philosophy</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-12">
            At King Universe, we believe that education is not merely about accumulating facts, but about awakening curiosity and developing a lifelong passion for learning. Our child-centric approach ensures that we nurture the unique talents and abilities of each individual student.
          </p>
        </div>
      </div>
    </div>
  );
}

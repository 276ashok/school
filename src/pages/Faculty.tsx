const FACULTY = [
  {
    name: "Dr. Sarah Jenkins",
    role: "Principal",
    department: "Administration",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Prof. Michael Arisan",
    role: "Vice Principal",
    department: "Science Dept.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Emily Chen",
    role: "Senior Teacher",
    department: "Mathematics",
    image: "https://images.unsplash.com/photo-1580820267675-9728f6f890eb?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Robert Davis",
    role: "Head of Humanities",
    department: "Social Sciences",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Anita Sharma",
    role: "Language Expert",
    department: "English & Literature",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "David Kim",
    role: "Director of Athletics",
    department: "Physical Education",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Faculty() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Faculty & Staff</h1>
          <p className="text-lg text-slate-600">
            Meet the dedicated educators and administrators who make King Universe a center of excellence. Our teachers are mentors, guides, and lifelong learners.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACULTY.map((person, idx) => (
            <div key={idx} className="group flex flex-col items-center">
              <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden shadow-lg border-4 border-slate-50 group-hover:border-indigo-100 transition-colors">
                <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{person.name}</h3>
              <p className="text-indigo-600 font-medium mb-1">{person.role}</p>
              <p className="text-sm text-slate-500 uppercase tracking-wide">{person.department}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

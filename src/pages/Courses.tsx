import { CheckCircle2 } from "lucide-react";

const PROGRAMS = [
  {
    level: "Primary School",
    grades: "Grade 1 - 5",
    description: "Building a strong foundation in literacy, numeracy, and environmental awareness through interactive and playful learning.",
    features: ["Foundational Literacy & Numeracy", "Activity-Based Learning", "Art & Craft Integration", "Basic Computer Skills"]
  },
  {
    level: "Middle School",
    grades: "Grade 6 - 8",
    description: "Fostering critical thinking, scientific inquiry, and language proficiency to prepare students for higher academic challenges.",
    features: ["Advanced Sciences & Math", "Multiple Language Options", "Project-Based Learning", "Sports & Athletics"]
  },
  {
    level: "High School (Matric)",
    grades: "Grade 9 - 10",
    description: "Rigorous academic preparation focusing on board examinations while continuing holistic development.",
    features: ["Comprehensive Board Prep", "Career Counseling", "Science & Computer Labs", "Co-curricular Leadership"]
  },
  {
    level: "Higher Secondary",
    grades: "Grade 11 - 12",
    description: "Specialized streams offering deep subject knowledge required for university admissions and professional careers.",
    features: ["Science Stream (Bio/Math)", "Commerce Stream", "Professional Mentorship", "Competitive Exam Coaching"]
  }
];

export default function Courses() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-indigo-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Programs</h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto">
            Comprehensive curriculum designed to nurture intellect, character, and lifelong learning.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROGRAMS.map((program, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-slate-800">{program.level}</h2>
                <span className="bg-indigo-100 text-indigo-700 text-sm font-bold px-3 py-1 rounded-full">{program.grades}</span>
              </div>
              <p className="text-slate-600 mb-8 h-16">{program.description}</p>
              
              <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Key Curriculum Highlights</h4>
              <ul className="space-y-3">
                {program.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

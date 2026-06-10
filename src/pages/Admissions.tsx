import { CheckCircle2, Download, FileText, CalendarDays } from "lucide-react";

export default function Admissions() {
  return (
    <div className="bg-slate-50 pb-24">
      {/* Header */}
      <div className="bg-indigo-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto">
            Join the King Universe family. Learn about our enrollment process and start your journey today.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Admission Process</h2>
              <div className="space-y-6 relative border-l-2 border-indigo-100 pl-8 ml-4">
                <div className="relative">
                  <div className="absolute -left-[41px] bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md">1</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Registration</h3>
                  <p className="text-slate-600">Obtain the application form from the school office or download it from our website. Submit the filled form along with necessary documents.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md">2</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Entrance Evaluation</h3>
                  <p className="text-slate-600">Registered candidates will be called for a basic proficiency assessment (varies by grade level) to understand their learning needs.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md">3</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Interactive Session</h3>
                  <p className="text-slate-600">An interaction between the Principal, parents, and the student to ensure alignment of educational goals.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md">4</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Enrollment Confirmation</h3>
                  <p className="text-slate-600">Upon successful selection, parents must complete the fee payment and submit final documentation to secure admission.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Required Documents</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Recent Passport Size Photographs",
                  "Birth Certificate (Original & Copy)",
                  "Previous School Report Card",
                  "Transfer Certificate (TC)",
                  "Aadhar Card / Identity Proof",
                  "Medical Fitness Certificate"
                ].map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                    <span className="text-slate-700 font-medium">{doc}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
              <FileText className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Application Form</h3>
              <p className="text-slate-600 mb-6 text-sm">Download the registration form for the upcoming academic session.</p>
              <button className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg font-bold transition-colors">
                <Download className="w-4 h-4" /> Download PDF Form
              </button>
            </div>

            <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-100">
              <CalendarDays className="w-10 h-10 text-yellow-600 mb-4" />
              <h3 className="text-lg font-bold text-yellow-900 mb-2">Important Dates</h3>
              <ul className="space-y-3 text-sm text-yellow-800/80">
                <li className="flex justify-between border-b border-yellow-200 pb-2">
                  <span>Admissions Open:</span>
                  <span className="font-semibold">March 1st</span>
                </li>
                <li className="flex justify-between border-b border-yellow-200 pb-2">
                  <span>First Evaluation:</span>
                  <span className="font-semibold">April 15th</span>
                </li>
                <li className="flex justify-between">
                  <span>Session Begins:</span>
                  <span className="font-semibold">June 1st</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-900 p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-2">Have Questions?</h3>
              <p className="text-slate-400 mb-6 text-sm">Our admissions office is here to help you through every step.</p>
              <a href="/contact" className="block text-center bg-white text-slate-900 hover:bg-slate-100 px-4 py-2.5 rounded-lg font-semibold transition-colors">
                Contact Admissions
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

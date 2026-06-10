import { Calendar, AlertCircle } from "lucide-react";

const NEWS = [
  {
    title: "Annual Sports Meet 2026 Configured",
    date: "June 15, 2026",
    category: "Event",
    description: "Get ready for the biggest sporting event of the year. Registrations for inter-house athletics are now open.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Science Exhibition Winners Announced",
    date: "May 28, 2026",
    category: "Achievement",
    description: "Congratulations to out High School team for winning the district level science innovation award.",
    image: "https://images.unsplash.com/photo-1564053489984-ff1515ea72d7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Parent-Teacher Meeting Schedule",
    date: "May 10, 2026",
    category: "Notice",
    description: "The term-end PTM will be held this Saturday. Detailed schedules will be emailed to your registered accounts.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function News() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">News & Events</h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              Stay updated with the latest happenings, announcements, and achievements at King Universe.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <span className="flex items-center gap-2 text-indigo-600 bg-indigo-50 px-4 py-2 rounded-lg font-semibold">
              <AlertCircle className="w-5 h-5" /> Recent Announcements
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 flex flex-col">
              <div className="h-48 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-slate-500 font-medium">
                    <Calendar className="w-4 h-4" /> {item.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{item.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow">{item.description}</p>
                <div className="mt-auto">
                  <button className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
                    Read More &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

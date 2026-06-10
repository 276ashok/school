import { MapPin, Phone, Mail, Clock } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitted">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitted");
    setTimeout(() => setFormStatus("idle"), 3000);
  };

  return (
    <div className="bg-white pb-24">
      {/* Header */}
      <div className="bg-slate-50 py-16 md:py-24 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 -m-20 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 -m-20 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            We are always here to listen. Reach out to us for admission queries, general information, or feedback.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Get In Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-50 p-4 rounded-xl text-indigo-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Campus Address</h3>
                  <p className="text-slate-600">123 Academic Avenue,<br />Education District, City 10001<br />State, Country</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-50 p-4 rounded-xl text-emerald-600 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Phone Numbers</h3>
                  <p className="text-slate-600">Admissions: +1 (555) 123-4567<br />General: +1 (555) 123-4568</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-50 p-4 rounded-xl text-yellow-600 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Email Addresses</h3>
                  <p className="text-slate-600">info@kinguniverse.edu<br />admissions@kinguniverse.edu</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-rose-50 p-4 rounded-xl text-rose-600 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Office Hours</h3>
                  <p className="text-slate-600">Mon - Fri: 8:00 AM - 4:00 PM<br />Saturday: 9:00 AM - 1:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-50 p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
            {formStatus === "submitted" ? (
              <div className="bg-emerald-100 border border-emerald-200 text-emerald-800 rounded-lg p-6 text-center shadow-sm">
                <h4 className="font-bold text-lg mb-2">Message Received!</h4>
                <p>Thank you for reaching out. Our team will get back to you shortly.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
                    <input type="text" required className="block w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                    <input type="email" required className="block w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Subject / Inquiry Type</label>
                  <select className="block w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-white">
                    <option>General Inquiry</option>
                    <option>Admissions</option>
                    <option>Careers</option>
                    <option>Fees & Accounts</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea required rows={4} className="block w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                  Submit Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

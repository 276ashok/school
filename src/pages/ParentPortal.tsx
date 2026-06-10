import { Lock, User } from "lucide-react";

export default function ParentPortal() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24 flex items-center justify-center">
      <div className="max-w-md w-full px-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Parent Portal</h1>
            <p className="text-sm text-slate-600">Secure access to student records, attendance, and fee payments.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Registration ID / Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-400" />
                </div>
                <input 
                  type="text" 
                  className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-slate-50 focus:bg-white transition-colors" 
                  placeholder="Enter your ID"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input 
                  type="password" 
                  className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-slate-50 focus:bg-white transition-colors" 
                  placeholder="••••••••"
                />
              </div>
              <div className="flex justify-end mt-2">
                <a href="#" className="text-sm text-indigo-600 font-medium hover:text-indigo-800">Forgot Password?</a>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-colors focus:ring-4 focus:ring-indigo-100"
            >
              Sign In to Portal
            </button>
          </form>

          <div className="mt-8 text-center border-t border-slate-100 pt-6">
            <p className="text-sm text-slate-600">
              Don't have an account? <br/>
              <span className="text-slate-500 text-xs">Please contact the administration office for setup.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

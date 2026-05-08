"use client";

import { useState } from "react";
import { Play, Mail, Lock, CheckCircle2, UserPlus, LogIn } from "lucide-react";

export default function LoginSection() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUp) {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log("Registering:", { email, password });
    } else {
      console.log("Logging in:", { email, password });
    }
  };

  return (
    <section id="login-section" className="py-16 bg-[#000c2a]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[550px]">
          
          {/* Left side - Dynamic High-Quality Image Cover */}
          <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-auto overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop"
              alt="Skill Assessment Hub"
              className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Soft overlay gradient to blend the text nicely */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 text-white">
              <h2 className="text-3xl font-extrabold tracking-wide drop-shadow-md">
                <span className="text-[#f73e5d]">SKILL</span>{" "}
                <span className="text-[#00a8e8]">ASSESSMENT</span>{" "}
                <span className="text-[#f6c648]">LIBRARY</span>
              </h2>
              <p className="mt-2 text-sm text-gray-200 drop-shadow-sm max-w-sm">
                Unlock your potential, practice complex scenarios, and map your growth with our automated diagnostics engine.
              </p>
            </div>
          </div>

          {/* Right side - Dynamic Form (Sign In / Sign Up) */}
          <div className="w-full md:w-1/2 bg-[#00418d] p-8 flex items-center transition-all duration-300">
            <div className="w-full">
              {/* Heading */}
              <h2 className="text-2xl font-bold text-white mb-1 transition-all">
                {isSignUp ? "Create your account" : "Sign in to Skill Kwiz"}
              </h2>
              <p className="text-gray-300 text-sm mb-6">
                {isSignUp ? "Get started in seconds" : "Enter your credentials to continue"}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Input */}
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </span>
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-100 text-gray-900 pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a8e8] transition-all"
                  />
                </div>

                {/* Password Input */}
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </span>
                  <input
                    type="password"
                    required
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-gray-100 text-gray-900 pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a8e8] transition-all"
                  />
                </div>

                {/* Confirm Password (Only visible during Sign Up) */}
                {isSignUp && (
                  <div className="relative animate-fadeIn">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <CheckCircle2 className="h-5 w-5 text-gray-400" />
                    </span>
                    <input
                      type="password"
                      required
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full bg-gray-100 text-gray-900 pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a8e8] transition-all"
                    />
                  </div>
                )}

                {/* Remember Me / Forgot Password links (Hide if Sign Up) */}
                {!isSignUp && (
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center text-white cursor-pointer select-none">
                      <input type="checkbox" className="h-4 w-4 mr-2 accent-[#f73e5d]" />
                      Remember me
                    </label>
                    <a href="#" className="text-white hover:underline">
                      Forgot Password?
                    </a>
                  </div>
                )}

                {/* Submit Action Button */}
                <button
                  type="submit"
                  className="w-full bg-[#f73e5d] text-white py-3 rounded-md font-semibold hover:bg-opacity-95 transform active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
                >
                  {isSignUp ? (
                    <>
                      <UserPlus className="w-5 h-5" />
                      Sign Up
                    </>
                  ) : (
                    <>
                      <LogIn className="w-5 h-5" />
                      Sign In
                    </>
                  )}
                </button>

                {/* Toggle Link Between Login and Register */}
                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSignUp(!isSignUp);
                      // Reset passwords on mode change
                      setPassword("");
                      setConfirmPassword("");
                    }}
                    className="text-gray-200 text-sm hover:text-white underline transition-colors"
                  >
                    {isSignUp
                      ? "Already have an account? Sign In"
                      : "New to Skill Kwiz? Sign Up Now"}
                  </button>
                </div>

                {/* OAuth Block */}
                <div className="text-center text-white pt-2">
                  <p className="text-xs text-gray-300 mb-3">— Or continue with —</p>
                  <div className="flex justify-center space-x-4">
                    <button type="button" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </button>
                    <button type="button" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.0532 12.5282C17.0699 14.0268 17.6762 15.4512 18.7212 16.4962C18.7678 16.5428 18.7911 16.6077 18.7857 16.6733C18.5987 17.6267 18.2697 18.5467 17.8122 19.3992C17.4222 20.1372 16.5372 21.0792 15.6392 21.0852C14.8042 21.0912 14.5022 20.6142 13.5372 20.6142C12.5722 20.6142 12.2342 21.0672 11.4522 21.0912C10.6042 21.1152 9.63221 20.0702 9.23421 19.3362C8.0022 17.3882 7.0252 13.7852 8.3042 11.3582C8.9342 10.1522 10.1042 9.3882 11.3642 9.3642C12.1762 9.3402 12.9342 9.8702 13.4582 9.8702C13.9822 9.8702 14.9232 9.2342 15.9192 9.3402C16.7372 9.3882 17.4702 9.7782 17.9822 10.4022C17.9941 10.4156 18.0026 10.4319 18.0069 10.4496C18.0112 10.4673 18.0111 10.4857 18.0067 10.5033C17.7647 11.1953 17.0622 12.0073 17.0532 12.5282Z" fill="black"/>
                        <path d="M15.0002 8.0002C15.0002 7.0722 14.6372 6.1802 14.0002 5.5372C13.3692 4.9002 12.4862 4.5312 11.5702 4.5002C11.5522 4.5002 11.5342 4.5092 11.5222 4.5212C11.5102 4.5332 11.5042 4.5512 11.5042 4.5692V4.5692C11.5042 5.4872 11.8672 6.3792 12.5042 7.0222C13.1352 7.6592 14.0182 8.0282 14.9342 8.0592C14.9522 8.0592 14.9702 8.0502 14.9822 8.0382C14.9942 8.0262 15.0002 8.0082 15.0002 7.9902V8.0002Z" fill="black"/>
                      </svg>
                    </button>
                  </div>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
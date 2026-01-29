"use client";

import { useState } from "react";

interface SendEmailSectionProps {
  title?: string;
  subtitle?: string;
}

export default function SendEmailSection({
  title = "Get or Promo Code by",
  subtitle = "Subscribing To our Newsletter",
}: SendEmailSectionProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    setTimeout(() => {
      setMessage("Thank you for subscribing!");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-10 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/default.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-pink-900/80" />

          <div className="relative z-10 py-12 px-6">
            <div className="max-w-4xl mx-auto text-center font-bold">
              <h2 className="text-4xl font-bold text-white leading-tight">
                {title}
              </h2>
              {subtitle && (
                <p className="text-3xl text-white/90 mb-8">{subtitle}</p>
              )}

              <form
                onSubmit={handleSubmit}
                className="flex items-center bg-white rounded-xl overflow-hidden w-full md:w-md mx-auto shadow-lg"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent text-base"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 m-2 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 focus:outline-none transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? "Sending..." : "Send it to us"}
                </button>
              </form>

              {message && (
                <p className="mt-4 text-cyan-300 font-medium text-lg">
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

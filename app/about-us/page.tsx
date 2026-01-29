import AboutSection from "@/components/about-section";
import BusinessModelSection from "@/components/business-model-section";
import SendEmailSection from "@/components/send-email-section";
import TeamMembersSection from "@/components/team-members-section";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutUsPage() {
  return (
    <>
      <section className="relative">
        <div
          className="relative h-[550px] bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 max-w-7xl mx-auto rounded-t-2xl overflow-hidden"
          style={{ clipPath: "ellipse(110% 100% at 50% 0%)" }}
        >
          <div className="absolute inset-0">
            <Image
              src="/images/default.jpg"
              alt="Background"
              fill
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-linear-to-br from-gray-900/90 via-blue-900/80 to-gray-900/90" />
          </div>

          <div className="relative h-full max-w-5xl mx-auto px-12 z-10">
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-4 h-full items-center">
              <div className="flex flex-col justify-center text-center md:text-right">
                <div className="space-y-1">
                  <h1 className="text-white text-xl md:text-2xl font-medium tracking-wide">
                    A TRUSTED
                  </h1>
                  <p className="text-white/80 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                    ITO PARTNER OF YOUR
                  </p>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-purple-400 to-pink-500 mt-2 mb-8">
                  AI TRANSFORMATION
                </h2>

                <div className="relative flex flex-col items-center md:items-end">
                  <div className="absolute top-1/2 left-1/2 md:left-full -translate-x-1/2 md:-translate-x-[90%] h-px bg-linear-to-r from-transparent via-cyan-400/30 to-transparent -translate-y-1/2 w-[140%] pointer-events-none" />

                  <div className="relative z-10 inline-block border-2 border-cyan-400/40 rounded-full px-6 py-2 bg-[#020617]/80 backdrop-blur-sm shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                    <p className="text-white text-sm md:text-base font-bold tracking-wider">
                      Mr. GIANG PHUNG | CEO
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden md:flex items-end justify-start h-full relative">
                <div className="absolute bottom-0 w-[450px] h-[550px] z-0 bg-radial-at-center from-blue-600/20 via-transparent to-transparent blur-3xl" />
                <div className="relative w-[300px] h-[450px] z-10 transform translate-y-10 group transition-transform duration-700 hover:scale-105">
                  <Image
                    src="/images/default.jpg"
                    alt="Mr. Giang Phung - CEO"
                    fill
                    className="object-cover object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative -mt-16 mx-auto w-3xl z-10">
          <div className="bg-white rounded-t-2xl shadow-xl border border-gray-100 p-2 pb-8">
            <h3 className="text-center text-lg font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-600 mb-6">
              Our Company Is Relatively New, But Our Founders Were Co-Founders
              Of
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <div className="text-center pt-4 md:pt-0 px-6 font-bold">
                <p className="text-sm text-gray-800">
                  <span>TMA Is #1 Software Outsourcing Company In</span>
                  <br />
                  QTSP, HoChiMinh City
                </p>
              </div>
              <div className="text-center pt-4 md:pt-0 px-6 font-bold">
                <p className="text-sm text-gray-800">
                  <span>PSG Was The #1 Pioneer</span>
                  <br />
                  Software Outsourcing In Vietnam
                </p>
              </div>
              <div className="text-center pt-4 md:pt-0 px-6 font-bold">
                <p className="text-sm text-gray-800">
                  <span>DMX Was SESDAQ Listed #1</span>
                  <br />
                  Company By Marketcap, Singapore
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutSection />
      <BusinessModelSection />

      <TeamMembersSection />

      <SendEmailSection title="CAREERS" subtitle="We're ready, ain't you" />
    </>
  );
}

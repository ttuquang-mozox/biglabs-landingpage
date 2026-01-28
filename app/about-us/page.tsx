import AboutSection from "@/components/about-section";
import BusinessModelSection from "@/components/business-model-section";
import SendEmailSection from "@/components/send-email-section";
import TeamMembersSection from "@/components/team-members-section";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="relative">
        <div
          className="relative h-[550px] bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 mx-6 rounded-t-2xl overflow-hidden"
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

          <div className="relative h-full flex">
            <div className="flex-1 flex flex-col justify-center px-12 text-right">
              <h1 className="text-white text-xl font-medium leading-relaxed">
                A TRUSTED
                <br />
                ITO PARTNER OF YOUR
              </h1>
              <h2 className="text-3xl font-black italic text-transparent bg-clip-text bg-linear-to-r from-pink-400 via-purple-400 to-pink-400 mt-2">
                AI TRANSFORMATION
              </h2>
              <div className="inline-block border border-white/50 rounded-full px-6 py-2 mt-6 w-fit ml-auto">
                <p className="text-white text-sm md:text-base font-medium">
                  Mr. GIANG PHUNG | CEO
                </p>
              </div>
            </div>

            <div className="hidden md:flex items-end justify-end pr-12">
              <div className="relative w-80 h-[450px]">
                <Image
                  src="/images/default.jpg"
                  alt="Mr. Giang Phung - CEO"
                  fill
                  className="object-contain object-bottom"
                />
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
    </div>
  );
}

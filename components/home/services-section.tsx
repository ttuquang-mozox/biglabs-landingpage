import SectionHeader from "../section-header";

const servicesTop = [
  { id: 1, name: "CYBER-\nSERCURITY" },
  { id: 2, name: "ARTIFICIAL\nINTELLIGENCE" },
  { id: 3, name: "BIG DATA\n& ANALYTICS" },
  { id: 4, name: "MACHINE\nLEARNING" },
];

const servicesBottom = [
  { id: 5, name: "APP\nDEVELOPMENT" },
  { id: 6, name: "CUSTOM\nPRODUCT\nDEVELOPMENT" },
  { id: 7, name: "SYSTEM\nINTERGRATION" },
  { id: 8, name: "QA &\nTESTING" },
];

function DiamondCard({ title }: { title: string }) {
  return (
    <div className="group relative z-10 transition-transform duration-500 hover:scale-110">
      <div className="size-20 md:size-28 lg:size-32 rotate-45 overflow-hidden rounded-2xl border border-white/10 backdrop-blur-xl bg-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center">
        <div className="-rotate-45 p-4">
          <h3 className="text-white font-bold text-center text-[10px] md:text-sm tracking-widest leading-tight uppercase">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="py-10 bg-[#0a0c14] relative overflow-hidden rounded-2xl max-w-7xl mx-auto">
      <div
        className="absolute inset-0 opacity-20 bg-[url('/services-bg.jpg')] bg-cover bg-center"
        style={{ filter: "blur(4px)" }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-gray-900 via-transparent to-gray-900" />

      <div className="container px-4 relative z-10">
        <SectionHeader title="OUR SERVICES" color="white" />

        <div className="max-w-3xl mx-auto relative mt-10">
          <div className="relative mb-10 md:mb-16">
            <svg
              className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 pointer-events-none"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
              style={{ overflow: "visible" }}
            >
              <path
                d="M 0 50 L 125 110 L 250 50 L 375 -10 L 500 50 L 625 110 L 750 50 L 875 -10 L 1000 50"
                fill="none"
                stroke="#ec4899"
                strokeWidth="4"
                strokeLinecap="round"
                className="opacity-70"
              />
            </svg>

            <div className="flex justify-between items-center relative z-10">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={`container-top-${i}`}
                  className="flex items-center gap-2 md:gap- lg:gap-6 w-full justify-between last:w-auto"
                >
                  <div className="size-3 md:size-4 bg-pink-500 rounded-full shadow-[0_0_15px_#ec4899] shrink-0" />
                  {i < 4 && (
                    <div className="flex-1 flex justify-center translate-y-[-5px] group-even:translate-y-[5px]">
                      <DiamondCard title={servicesTop[i].name} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <svg
              className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 pointer-events-none"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
              style={{ overflow: "visible" }}
            >
              <path
                d="M 0 50 L 125 110 L 250 50 L 375 -10 L 500 50 L 625 110 L 750 50 L 875 -10 L 1000 50"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="3"
                strokeLinecap="round"
                className="opacity-70"
              />
            </svg>

            <div className="flex justify-between items-center relative z-10">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={`container-bottom-${i}`}
                  className="flex items-center gap-2 md:gap-4 lg:gap-6 w-full justify-between last:w-auto"
                >
                  <div className="size-3 md:size-4 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee] shrink-0" />
                  {i < 4 && (
                    <div className="flex-1 flex justify-center translate-y-[-5px] group-even:translate-y-[5px]">
                      <DiamondCard title={servicesBottom[i].name} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import SectionHeader from "@/components/section-header";

export default function TeamMembersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader title="TEAM MEMBERS" />

        <div className="max-w-3xl mx-auto space-y-2">
          <div className="flex items-start gap-4">
            <span className="text-pink-500 text-lg mt-1">•</span>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our software developers make up the bulk of the company. They are
              hired and paid according to industry norm; organized under
              projects and managed by project managers.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-pink-500 text-lg mt-1">•</span>
            <p className="text-lg text-gray-700 leading-relaxed">
              We have five (5) capable pm. One pm is also our QC Manager, and
              another in Cybersecurity Red Team.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-pink-500 text-lg mt-1">•</span>
            <p className="text-lg text-gray-700 leading-relaxed">
              With current Team as shown below, we can handle project(s) up to
              50 developers, i.e. During 2026, we only need to hire developers.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-pink-500 text-lg mt-1">•</span>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are using industry standard tools to design, develop, and
              manage our software development projects. New tools are easily
              learnt and adopted by our Team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

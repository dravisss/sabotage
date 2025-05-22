import Link from "next/link";
import { manualSections, ManualSection, sectionEmojis } from "@/lib/manual-content";

export default function ManualSectionsGallery() {
  const sectionsToExclude = ["sabotador-interno", "encerramento"];
  const filteredSections = manualSections.filter(
    (section: ManualSection) => !sectionsToExclude.includes(section.slug)
  );

  return (
    <section className="my-16">
      <h2 className="font-title text-3xl text-red-700 text-center mb-8">Seções do Manual</h2>
      <div className="max-w-2xl mx-auto mb-10">
        <div className="flex items-start gap-3 bg-yellow-50 border-l-4 border-yellow-400 rounded-md p-4 shadow-sm">
          <span className="text-2xl">💡</span>
          <div className="text-zinc-700 text-base font-title">
Explore as principais áreas do manual. Cada seção reúne táticas que podem ser usadas para desestabilizar organizações de todos os tipos. <br/>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {filteredSections.map((section: ManualSection) => (
          <Link
            key={section.slug}
            href={`/manual/${section.slug}`}
            className="block group rounded-xl border border-zinc-200 bg-white shadow hover:shadow-lg transition-all duration-200 p-6 cursor-pointer hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl" aria-label={section.navTitle}>{sectionEmojis[section.slug as keyof typeof sectionEmojis]}</span>
              <h3 className="text-lg font-semibold text-zinc-800 group-hover:text-red-700 transition-colors font-title">
                {section.navTitle}
              </h3>
            </div>
            <p className="text-sm text-zinc-600 group-hover:text-zinc-700 font-title">
              {section.introSubtitle || ""} 
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

import PageHeader from '../components/PageHeader.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import { projetsRealises as projectImages } from '../assets/paths/index.js';

export default function ProjetsRealises() {
  const { t } = useLanguage();
  const p = t.projetsRealises;

  return (
    <div>
      <PageHeader title={p.title} />
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">
          {p.projects.map((proj, i) => (
            <ProjectBlock key={i} project={proj} image={projectImages[i]} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}

function ProjectBlock({ project, image, index }) {
  const n = String(index + 1).padStart(2, '0');
  const imageLeft = index % 2 === 0;

  return (
    <article className="border-t border-neutral-200 pt-12 first:border-t-0 first:pt-0">
      <div
        className={`flex flex-col gap-8 md:flex-row md:items-stretch md:gap-10 ${
          imageLeft ? '' : 'md:flex-row-reverse'
        }`}
      >
        <div className="w-full md:w-[45%] shrink-0">
          <img
            src={image}
            alt={project.title}
            className="w-full h-full min-h-[200px] max-h-[320px] rounded-lg object-cover bg-neutral-100 shadow-sm border border-neutral-100"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        </div>
        <div className="flex-1 flex flex-col gap-4 min-w-0">
          <p className="text-3xl font-extralight text-neutral-400 tabular-nums leading-none">{n}</p>
          <h2 className="text-2xl font-bold text-neutral-700" style={{ fontFamily: 'Georgia, serif' }}>
            {project.title}
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
            {project.text}
          </p>
        </div>
      </div>
    </article>
  );
}

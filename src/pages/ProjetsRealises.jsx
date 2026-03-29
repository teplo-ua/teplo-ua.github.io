import PageHeader from '../components/PageHeader.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function ProjetsRealises() {
  const { t } = useLanguage();
  const p = t.projetsRealises;

  return (
    <div>
      <PageHeader title={p.title} />
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          {p.projects.map((proj, i) => (
            <ProjectBlock key={i} project={proj} />
          ))}
        </div>
      </section>
    </div>
  );
}

function ProjectBlock({ project }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-neutral-700" style={{ fontFamily: 'Georgia, serif' }}>
        {project.title}
      </h2>
      <p className="text-lg text-neutral-600 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
        {project.text}
      </p>
    </div>
  );
}

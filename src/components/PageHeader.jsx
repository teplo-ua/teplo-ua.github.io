export default function PageHeader({ title, subtitle }) {
  return (
    <section className="bg-[#FAF7E8] py-10 px-4 text-center border-b border-neutral-200">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-light text-neutral-800 tracking-wide">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-neutral-600 text-lg font-extralight leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import { home, actualites } from '../assets/paths/index.js';

const CAROUSEL_IMAGES = home.carousel;

const BLOG_IMAGES = {
  consortium: actualites.consortium,
  emdr: actualites.emdr,
  colloque: actualites.colloque,
  synergie: actualites.synergie,
  assemblee: actualites.assemblee,
  diviser: actualites.diviser,
};

export default function Home() {
  const { t } = useLanguage();
  const posts = t.blog.posts;

  return (
    <div>
      <HeroCarousel />
      <AboutSection t={t} />
      <NewsSection t={t} posts={posts} />
      <EventSection t={t} />
      <ContactSection t={t} />
    </div>
  );
}

function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const slideCount = CAROUSEL_IMAGES.length;

  const next = useCallback(() => {
    if (!slideCount) return;
    setCurrent((c) => (c + 1) % slideCount);
  }, [slideCount]);
  const prev = () => {
    if (!slideCount) return;
    setCurrent((c) => (c - 1 + slideCount) % slideCount);
  };

  useEffect(() => {
    if (!slideCount) return undefined;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next, slideCount]);

  return (
    <section className="relative overflow-hidden bg-neutral-900" style={{ height: '75vh', maxHeight: '680px' }}>
      {CAROUSEL_IMAGES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {slideCount > 0 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors"
          >
            ›
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {CAROUSEL_IMAGES.map((_, i) => (
              <button
                type="button"
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Slide ${i + 1}`}
                className="w-2 h-2 rounded-full transition-colors"
                style={{ background: i === current ? 'white' : 'rgba(255,255,255,0.45)' }}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

function AboutSection({ t }) {
  return (
    <section className="py-14 px-4 bg-[#FAF7E8]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-light text-neutral-700 mb-6 tracking-wide">
          {t.home.aboutTitle}
        </h2>
        <p className="text-base text-neutral-600 leading-relaxed font-extralight">{t.home.aboutText}</p>
      </div>
    </section>
  );
}

function NewsSection({ t, posts }) {
  return (
    <section className="py-14 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-neutral-700 text-center mb-10 tracking-wide">
          {t.home.newsTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} t={t} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/actualites"
            className="inline-block border border-[#265642] text-[#265642] hover:bg-[#265642] hover:text-white px-6 py-2.5 text-sm font-light tracking-wide transition-colors"
          >
            {t.home.readMore}
          </Link>
        </div>
      </div>
    </section>
  );
}

function BlogCard({ post, t }) {
  const img = BLOG_IMAGES[post.id] || BLOG_IMAGES.colloque;
  return (
    <article className="bg-[#FAF7E8] border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow group">
      <div className="aspect-video overflow-hidden">
        <img
          src={img}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <p className="text-xs text-neutral-500 mb-2 font-light">{post.date}</p>
        <h3 className="text-sm font-light text-neutral-700 mb-2 leading-snug line-clamp-3">
          {post.title}
        </h3>
        <p className="text-xs text-neutral-500 line-clamp-3 leading-relaxed font-extralight">{post.excerpt}</p>
        <Link
          to={`/actualites/${post.slug}`}
          className="inline-block mt-3 text-xs text-[#F2693A] hover:underline font-light"
        >
          {t.home.readMore} →
        </Link>
      </div>
    </article>
  );
}

function EventSection({ t }) {
  return (
    <section
      className="relative py-20 px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${home.eventSectionBackground})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative max-w-3xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-wide">
          {t.home.eventTitle}
        </h2>
        <p className="text-base text-[#fae68a] italic font-extralight mb-6">{t.home.eventSubtitle}</p>
        <div className="bg-white/10 backdrop-blur p-6 max-w-xl mx-auto">
          <img
            src={home.eventFeaturedImage}
            alt="Colloque"
            className="w-full mb-4 object-cover"
            style={{ maxHeight: '200px' }}
          />
          <h3 className="text-lg font-light mb-2">Colloque scientifique et pratique international</h3>
          <p className="text-sm text-neutral-200 font-extralight mb-1">29 nov. 2024, 09:00</p>
          <p className="text-sm text-neutral-200 font-extralight mb-4">Le Taurus, centre d'accueil et de restauration, 34140 Mèze, France</p>
          <Link
            to="/colloque"
            className="inline-block bg-[#F2693A] hover:bg-[#e05520] text-white px-6 py-2.5 text-sm font-light transition-colors"
          >
            {t.home.learnMore}
          </Link>
        </div>
      </div>
    </section>
  );
}

function ContactSection({ t }) {
  return (
    <section className="py-16 px-4 bg-[#FAF7E8]">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-light text-neutral-700 mb-4 tracking-wide">
          {t.home.contactTitle}
        </h2>
        <a
          href={`mailto:${t.home.contactEmail}`}
          className="text-lg font-light text-[#265642] hover:text-[#F2693A] transition-colors"
        >
          {t.home.contactEmail}
        </a>
        <div className="mt-10 border border-neutral-200 p-6 bg-white">
          <h3 className="text-lg font-light text-neutral-700 mb-4">{t.home.subscribeTitle}</h3>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder={t.home.subscribePlaceholder}
              className="flex-1 border border-neutral-300 px-3 py-2 text-sm font-extralight focus:outline-none focus:border-[#265642]"
            />
            <button
              type="submit"
              className="bg-[#265642] hover:bg-[#2f6b52] text-white px-5 py-2 text-sm font-light transition-colors"
            >
              {t.home.subscribeBtn}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

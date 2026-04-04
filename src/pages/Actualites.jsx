import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import { actualites } from '../assets/paths/index.js';

const BLOG_IMAGES = {
  consortium: actualites.consortium,
  emdr: actualites.emdr,
  colloque: actualites.colloque,
  synergie: actualites.synergie,
  assemblee: actualites.assemblee,
  diviser: actualites.diviser,
};

export default function Actualites() {
  const { t } = useLanguage();
  const posts = t.blog.posts;

  return (
    <div>
      <PageHeader title={t.actualites.title} />
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} t={t} />
          ))}
        </div>
      </section>
    </div>
  );
}

function BlogCard({ post, t }) {
  const img = BLOG_IMAGES[post.id] || BLOG_IMAGES.colloque;
  return (
    <article className="bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow group">
      <div className="aspect-video overflow-hidden">
        <img
          src={img}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <p className="text-xs text-neutral-500 mb-2">{post.date}</p>
        <h2 className="text-base font-semibold text-neutral-700 mb-2 leading-snug line-clamp-3" style={{ fontFamily: 'Georgia, serif' }}>
          {post.title}
        </h2>
        <p className="text-sm text-neutral-600 line-clamp-3 leading-relaxed">{post.excerpt}</p>
        <Link
          to={`/actualites/${post.slug}`}
          className="inline-block mt-3 text-sm text-[#F2693A] hover:underline font-medium"
        >
          {t.actualites.readMore} →
        </Link>
      </div>
    </article>
  );
}

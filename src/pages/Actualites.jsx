import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

const BLOG_IMAGES = {
  consortium: '/.original-site/assets/static.wixstatic.com/media/946bd9_87221d73574246a09e6fa246b4a50101~mv2.png/v1/6692d7ecf116b78c.webp',
  emdr: '/.original-site/assets/static.wixstatic.com/media/946bd9_912f0079af5b4028a3ca4c1540f1bd02~mv2.jpg/v1/217bdd430c8c5130.webp',
  colloque: '/.original-site/assets/static.wixstatic.com/media/946bd9_275710f046ca4385a9a8562b5e0529e1~mv2.jpg/v1/6dd14cea9bdf19df.webp',
  synergie: '/.original-site/assets/static.wixstatic.com/media/946bd9_54d20bc693dc475ab6099eae47838efc~mv2.jpg/v1/b64b49999b829bac.webp',
  assemblee: '/.original-site/assets/static.wixstatic.com/media/946bd9_32723dadc62642d2a26111e6d3b112c4~mv2.png/v1/8f000445799db853.webp',
  diviser: '/.original-site/assets/static.wixstatic.com/media/946bd9_b3dab61619244e7ab06c899304e9bb7c~mv2.jpg/v1/96fe78feacdacf5e.webp',
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

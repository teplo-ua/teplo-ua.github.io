import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import PageHeader from '../components/PageHeader.jsx';

const BLOG_IMAGES = {
  consortium: '/.original-site/assets/static.wixstatic.com/media/946bd9_87221d73574246a09e6fa246b4a50101~mv2.png/v1/6692d7ecf116b78c.webp',
  emdr: '/.original-site/assets/static.wixstatic.com/media/946bd9_912f0079af5b4028a3ca4c1540f1bd02~mv2.jpg/v1/217bdd430c8c5130.webp',
  colloque: '/.original-site/assets/static.wixstatic.com/media/946bd9_275710f046ca4385a9a8562b5e0529e1~mv2.jpg/v1/6dd14cea9bdf19df.webp',
  synergie: '/.original-site/assets/static.wixstatic.com/media/946bd9_54d20bc693dc475ab6099eae47838efc~mv2.jpg/v1/b64b49999b829bac.webp',
  assemblee: '/.original-site/assets/static.wixstatic.com/media/946bd9_32723dadc62642d2a26111e6d3b112c4~mv2.png/v1/8f000445799db853.webp',
  diviser: '/.original-site/assets/static.wixstatic.com/media/946bd9_b3dab61619244e7ab06c899304e9bb7c~mv2.jpg/v1/96fe78feacdacf5e.webp',
};

const BLOG_CONTENT = {
  consortium: {
    fr: `Restant le « pont » le plus fiable entre les spécialistes ukrainiens et ceux de l'Europe de l'Ouest en traitement des traumatismes de guerre, l'association TEPLO a lancé un consortium international réunissant des organisations de cinq pays européens pour soutenir les psychothérapeutes ukrainiens travaillant avec les victimes de traumatismes liés à la guerre.

Ce consortium représente une étape majeure dans notre mission de relier les professionnels de santé mentale à travers l'Europe pour aider les personnes souffrant du syndrome de stress post-traumatique.

Les partenaires du consortium œuvrent ensemble pour développer des protocoles de traitement adaptés, partager les meilleures pratiques et renforcer les capacités des thérapeutes ukrainiens.`,
    uk: `Залишаючись найнадійнішим «мостом» між українськими фахівцями та їхніми колегами із Західної Європи у лікуванні травм, асоціація TEPLO запустила міжнародний консорціум, що об'єднує організації з п'яти європейських країн для підтримки українських психотерапевтів, які працюють з жертвами травм, пов'язаних з війною.

Цей консорціум є важливим кроком у нашій місії — пов'язувати фахівців з психічного здоров'я по всій Європі для надання допомоги особам, які страждають від посттравматичного стресового розладу.`,
  },
  emdr: {
    fr: `En mai 2025, Oksana Konnorova, représentante de l'association TEPLO, a participé à la conférence annuelle EMDR Europe, l'une des plus importantes conférences dans le domaine du traitement des traumatismes psychologiques.

Cette participation a permis à TEPLO de présenter ses travaux et d'établir de nouveaux partenariats avec des thérapeutes européens spécialisés dans le traitement EMDR (Eye Movement Desensitization and Reprocessing).

La conférence a rassemblé des centaines de spécialistes du monde entier et a offert l'occasion de partager les dernières avancées dans le traitement des traumatismes de guerre.`,
    uk: `У травні 2025 року Оксана Коннорова, представниця асоціації TEPLO, взяла участь у щорічній конференції EMDR Europe — одній з найважливіших конференцій у галузі лікування психологічних травм.

Ця участь дозволила TEPLO представити свою роботу та встановити нові партнерські відносини з європейськими терапевтами, які спеціалізуються на лікуванні методом EMDR.`,
  },
  colloque: {
    fr: `ASSOCIATION LOI 1901 TEPLO, en collaboration avec le créateur du concept Roger S. Ulrich, la Fédération Française Jardin Nature Santé a organisé un colloque scientifique et pratique international sur le thème des jardins thérapeutiques.

Le colloque s'est tenu au Taurus, centre d'accueil et de restauration, à 34140 Mèze, France, le 29 novembre 2024.

Cet événement a réuni des experts internationaux pour explorer les méthodes innovantes de thérapie par les jardins, notamment pour les personnes souffrant de syndromes traumatiques.`,
    uk: `АСОЦІАЦІЯ TEPLO, у співпраці зі засновником концепції Роджером С. Улріхом та Французькою федерацією Jardin Nature Santé організувала міжнародний науково-практичний колоквіум на тему терапевтичних садів.

Колоквіум відбувся в Taurus, центрі прийому та ресторації, 34140 Mèze, Франція, 29 листопада 2024 року.`,
  },
  synergie: {
    fr: `Les associations Teplo et Les Apres commencent une série de projets communs dans le domaine de l'application pratique de méthodes innovantes pour le soutien psychologique des personnes traumatisées.

Surmonter une segmentation excessive qui prive différentes initiatives d'une synergie potentielle est l'objectif central de cette collaboration. En unissant nos forces, nous pouvons offrir un soutien plus complet et plus efficace aux personnes qui en ont besoin.`,
    uk: `Асоціації Teplo та Les Apres розпочинають серію спільних проєктів у галузі практичного застосування інноваційних методів психологічної підтримки травмованих осіб.

Подолання надмірної фрагментації, яка позбавляє різні ініціативи потенційної синергії, є центральною метою цієї співпраці.`,
  },
  assemblee: {
    fr: `La dernière assemblée générale des participants de l'association a eu lieu et les résultats des activités pour 2023-2024 ont été présentés.

Lors de cette assemblée, les membres ont pu faire le bilan des actions accomplies durant l'année, discuter des projets en cours et planifier les activités futures de l'association.

Les résultats ont démontré une croissance significative de l'impact de l'association auprès des réfugiés ukrainiens en France et en Europe.`,
    uk: `Відбулися чергові загальні збори учасників асоціації та були представлені результати діяльності за 2023-2024 роки.

Під час цих зборів члени мали можливість підбити підсумки виконаної за рік роботи, обговорити поточні проєкти та спланувати майбутню діяльність асоціації.`,
  },
  diviser: {
    fr: `Surmonter une segmentation excessive, privant différentes branches françaises d'une synergie potentielle, est à nouveau devenu pour la communauté des professionnels de la santé mentale travaillant avec les réfugiés ukrainiens un défi majeur.

L'association TEPLO s'engage à promouvoir la collaboration et la coopération entre toutes les organisations œuvrant pour le bien-être des réfugiés, plutôt que la compétition et la division.`,
    uk: `Подолання надмірної фрагментації, яка позбавляє різні французькі відділення потенційної синергії, знову стало головним викликом для спільноти фахівців з психічного здоров'я, які працюють з українськими біженцями.

Асоціація TEPLO прагне сприяти співпраці та кооперації між всіма організаціями, що піклуються про добробут біженців.`,
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const { t, language } = useLanguage();
  const posts = t.blog.posts;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="py-20 text-center">
        <p className="text-neutral-500">Article non trouvé.</p>
        <Link to="/actualites" className="text-[#F2693A] hover:underline mt-4 inline-block">
          ← Retour aux actualités
        </Link>
      </div>
    );
  }

  const img = BLOG_IMAGES[post.id] || BLOG_IMAGES.colloque;
  const content = BLOG_CONTENT[post.id]?.[language] || post.excerpt;

  return (
    <div>
      <PageHeader title={post.title} />
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-2">
            <Link to="/actualites" className="text-sm text-[#F2693A] hover:underline">
              ← {t.actualites.title}
            </Link>
          </div>
          <p className="text-sm text-neutral-500 mb-6">{post.date}</p>
          <img
            src={img}
            alt={post.title}
            className="w-full rounded-xl mb-8 object-cover"
            style={{ maxHeight: '400px' }}
          />
          <div
            className="prose max-w-none text-neutral-600 text-lg leading-relaxed space-y-4"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {content.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

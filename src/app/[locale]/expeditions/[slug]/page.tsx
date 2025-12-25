import Navbar from '@/components/Navbar';
import styles from './expedition.module.css';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Map slugs to expedition keys
const slugToKey: Record<string, string> = {
  'via-sedna': 'montBlanc',
  'rock-n-road': 'patagonia',
  'usa-2019': 'himalayan',
  'kishtwar-expedition-2019': 'norwegian',
  'kishtwar-first-ascents-2016': 'kishtwar2016',
  'dolomites-via-ferrata': 'dolomites',
  'swiss-alps-traverse': 'swiss',
  'iceland-glacier-expedition': 'iceland',
  'scottish-highlands-winter-climb': 'scottish',
};

const expeditionImages: Record<string, string> = {
  montBlanc: '/images/expedition-1.jpg',
  patagonia: '/images/expedition-2.jpg',
  himalayan: '/images/expedition-3.jpg',
  norwegian: '/images/expedition-4.jpg',
  kishtwar2016: '/images/expedition-5.jpg',
  dolomites: '/images/expedition-5.jpg',
  swiss: '/images/expedition-6.jpg',
  iceland: '/images/expedition-7.jpg',
  scottish: '/images/expedition-8.jpg',
};

interface ExpeditionPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(slugToKey).map((slug) => ({
    slug,
  }));
}

export default async function ExpeditionPage({ params }: ExpeditionPageProps) {
  const { slug } = params;
  const expeditionKey = slugToKey[slug];

  if (!expeditionKey) {
    notFound();
  }

  const t = await getTranslations('expeditions');

  const title = t(`${expeditionKey}.title`);
  const description = t(`${expeditionKey}.description`);
  const date = t(`${expeditionKey}.date`);
  const image = expeditionImages[expeditionKey];

  return (
    <>
      <Navbar />
      <div className={styles.expeditionPage}>
        <div
          className={styles.heroImage}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.date}>{date}</p>
            </div>
          </div>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.content}>
            {description.split('\n\n').map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

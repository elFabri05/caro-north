import Navbar from '@/components/Navbar';
import styles from './expeditions.module.css';
import { getTranslations, getLocale } from 'next-intl/server';
import Link from 'next/link';

// Order: Via Sedna, Rock'n'Road, USA 2019, Kishtwar 2019, Kishtwar 2016
const expeditionKeys = [
  'montBlanc',
  'patagonia',
  'himalayan',
  'norwegian',
  'kishtwar2016'
];

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

// Slugs for URL paths
const expeditionSlugs: Record<string, string> = {
  montBlanc: 'via-sedna',
  patagonia: 'rock-n-road',
  himalayan: 'usa-2019',
  norwegian: 'kishtwar-expedition-2019',
  kishtwar2016: 'kishtwar-first-ascents-2016',
  dolomites: 'dolomites-via-ferrata',
  swiss: 'swiss-alps-traverse',
  iceland: 'iceland-glacier-expedition',
  scottish: 'scottish-highlands-winter-climb',
};

// Extract year from date string
function extractYear(dateString: string): string {
  const match = dateString.match(/\d{4}/);
  return match ? match[0] : dateString;
}

export default async function Expeditions() {
  const t = await getTranslations('expeditions');
  const homeT = await getTranslations('home');
  const locale = await getLocale();

  return (
    <>
      <Navbar />
      <div className={styles.expeditionsPage}>
        <div className={styles.header}>
          <h1 className={styles.pageTitle}>{t('pageTitle')}</h1>
          <p className={styles.pageSubtitle}>
            {t('pageSubtitle')}
          </p>
        </div>

        <div className={styles.expeditionsContainer}>
          <div className={styles.expeditionsGrid}>
            {expeditionKeys.map((key) => {
              const year = extractYear(t(`${key}.date`));
              return (
                <div key={key} className={styles.expeditionCard}>
                  <div
                    className={styles.expeditionImage}
                    style={{ backgroundImage: `url(${expeditionImages[key]})` }}
                  >
                    <div className={styles.dateTag}>{year}</div>
                  </div>
                  <div className={styles.expeditionContent}>
                    <h3 className={styles.expeditionTitle}>{t(`${key}.title`)}</h3>
                    <p className={styles.expeditionDescription}>
                      {homeT(`expeditions.${key}.description`)}
                    </p>
                    <Link href={`/${locale}/expeditions/${expeditionSlugs[key]}`} className={styles.readMore}>
                      {homeT('readMore')} →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

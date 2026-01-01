import Navbar from '@/components/Navbar';
import styles from './adventures.module.css';
import { getTranslations, getLocale } from 'next-intl/server';
import Link from 'next/link';
import { getFirstAdventureImage } from '@/lib/getAdventureImages';

// All adventures in chronological order (newest first)
const adventureKeys = [
  'turbio25',       // Turbio IV - 2025
  'viaSedna',       // Via Sedna - Summer 2022
  'iAmNorth',       // I am North - 2021
  'swissRoad',      // Rock'n'Road - Summer 2020
  'antarticaSailing', // Antarctica Sailing/Skiing Expedition - 2019
  'usa2019',        // USA 2019
  'kishtwar2019',   // Kishtwar Expedition 2019
  'freyFirstAscents', // Patagonia First ascents Frey - 2017
  'kishtwar2016',   // Kishtwar First Ascents 2016
  'astroman',       // Onsighting Astroman, Yosemite 2015
  'northfaceschamonix', // North Faces Chamonix 2015
  'adschalaga',     // India - Adschalaga! 2015
  'cerrotorre',     // Cerro Torre 2015
  'patagonia2014',  // Patagonia 2014
  'patagonia2013',  // 2 Girls in Patagonia 2013
];

// Slugs for URL paths
const adventureSlugs: Record<string, string> = {
  turbio25: 'turbio25',
  viaSedna: 'via-sedna',
  iAmNorth: 'i-am-north',
  swissRoad: 'rock-n-road',
  antarticaSailing: 'antartica-sailing',
  usa2019: 'usa-2019',
  kishtwar2019: 'kishtwar-expedition-2019',
  freyFirstAscents: 'frey',
  kishtwar2016: 'kishtwar-first-ascents-2016',
  astroman: 'onsighting-astroman-yosemite-2015',
  northfaceschamonix: 'north-faces-chamonix',
  adschalaga: 'india-adschalaga',
  cerrotorre: 'cerro-torre',
  patagonia2014: 'patagonia-2014',
  patagonia2013: 'patagonia-2013',
};

// Film availability for adventures
const adventureHasFilm: Record<string, boolean> = {
  turbio25: false,
  viaSedna: true,
  iAmNorth: true,
  swissRoad: false,
  antarticaSailing: true,
  usa2019: false,
  kishtwar2019: false,
  freyFirstAscents: true,
  kishtwar2016: false,
  astroman: false,
  northfaceschamonix: false,
  adschalaga: false,
  cerrotorre: false,
  patagonia2014: false,
  patagonia2013: false,
};

// Extract year from date string
function extractYear(dateString: string): string {
  const match = dateString.match(/\d{4}/);
  return match ? match[0] : dateString;
}

export default async function Adventures() {
  const t = await getTranslations('expeditions');
  const homeT = await getTranslations('home');
  const locale = await getLocale();

  return (
    <>
      <Navbar />
      <div className={styles.adventuresPage}>
        <div className={styles.header}>
          <h1 className={styles.pageTitle}>{t('pageTitle')}</h1>
        </div>

        <div className={styles.adventuresContainer}>
          <div className={styles.adventuresGrid}>
            {adventureKeys.map((key) => {
              const year = extractYear(t(`${key}.date`));
              const description = t(`${key}.description`);
              const truncatedDescription = description.length > 250
                ? description.substring(0, 250) + '...'
                : description;
              const slug = adventureSlugs[key];
              const image = getFirstAdventureImage(slug);
              const hasFilm = adventureHasFilm[key] || false;

              return (
                <Link
                  key={key}
                  href={`/${locale}/adventures/${slug}`}
                  className={styles.adventureCard}
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className={styles.adventureImage}
                    style={{ backgroundImage: `url(${image})` }}
                  >
                    <div className={styles.dateTag}>{year}</div>
                    {hasFilm && (
                      <div className={styles.filmTag}>{homeT('filmTag')}</div>
                    )}
                  </div>
                  <div className={styles.adventureContent}>
                    <h3 className={styles.adventureTitle}>{t(`${key}.title`)}</h3>
                    <p className={styles.adventureDescription}>
                      {truncatedDescription}
                    </p>
                    <span className={styles.readMore}>
                      {homeT('readMore')} →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

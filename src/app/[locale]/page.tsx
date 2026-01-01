import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import styles from './page.module.css';
import { getFirstAdventureImage } from '@/lib/getAdventureImages';

// Extract year from date string
function extractYear(dateString: string): string {
  const match = dateString.match(/\d{4}/);
  return match ? match[0] : dateString;
}

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });
  const tExpeditions = await getTranslations({ locale, namespace: 'expeditions' });

  const adventures = [
    {
      id: 1,
      key: 'turbio25',
      slug: 'turbio25',
      image: getFirstAdventureImage('turbio25'),
      hasFilm: false,
    },
    {
      id: 2,
      key: 'viaSedna',
      slug: 'via-sedna',
      image: getFirstAdventureImage('via-sedna'),
      hasFilm: true,
    },
    {
      id: 3,
      key: 'iAmNorth',
      slug: 'i-am-north',
      image: getFirstAdventureImage('i-am-north'),
      hasFilm: true,
    },
    {
      id: 4,
      key: 'swissRoad',
      slug: 'rock-n-road',
      image: getFirstAdventureImage('rock-n-road'),
      hasFilm: false,
    },
  ];

  return (
    <>
      <Navbar />
      <div className={styles.hero}></div>
      <div className={styles.heroSecond}>
        <div className={styles.textContainer}>
          <p className={styles.description}>
            {t('description')}
          </p>
        </div>
      </div>

      <section className={styles.guidingSection}>
        <div className={styles.guidingContainer}>
          <div className={styles.guidingHeader}>
            <Image
              src="/images/uiagm-logo.png"
              alt="UIAGM Mountain Guide Certification"
              width={100}
              height={100}
              className={styles.guidingLogo}
            />
            <h2 className={styles.guidingTitle}>{t('guidingTitle')}</h2>
          </div>
          <div className={styles.guidingContent}>
            <p className={styles.guidingText}>{t('guidingText')}</p>
          </div>
          <Link href={`/${locale}/guiding`} className={styles.guidingReadMore}>
            {t('readMore')} →
          </Link>
        </div>
      </section>

      <div className={styles.heroThird}>
        <div className={styles.supportedByContainer}>
          <h2 className={styles.supportedByTitle}>{t('supportedBy')}</h2>

          {/* Catenary Layout - Three Layers */}
          <div className={styles.catenaryContainer}>
            {/* Top Layer - Yeti, The North Face, Scarpa */}
            <a
              href="https://www.yeti.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.catenarySponsor} ${styles.topLayer} ${styles.topLeft}`}
              aria-label="Yeti"
            >
              <Image
                src="/images/sponsors/yeti.png"
                alt="Yeti"
                width={170}
                height={115}
                className={styles.topLayerLogo}
              />
            </a>
            <a
              href="https://www.thenorthface.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.catenarySponsor} ${styles.topLayer} ${styles.topCenter}`}
              aria-label="The North Face"
            >
              <Image
                src="/images/sponsors/the-north-face.png"
                alt="The North Face"
                width={280}
                height={185}
                className={`${styles.topLayerLogo} ${styles.topCenterLogo}`}
              />
            </a>
            <a
              href="https://www.scarpa.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.catenarySponsor} ${styles.topLayer} ${styles.topRight}`}
              aria-label="Scarpa"
            >
              <Image
                src="/images/sponsors/scarpa.png"
                alt="Scarpa"
                width={190}
                height={130}
                className={`${styles.topLayerLogo} ${styles.scarpaLogo}`}
              />
            </a>

            {/* Middle Layer - Julbo, Petzl, Trek'n Eat, Marker */}
            <a
              href="https://www.julbo.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.catenarySponsor} ${styles.middleLayer} ${styles.middle1}`}
              aria-label="Julbo"
            >
              <Image
                src="/images/sponsors/julbo.png"
                alt="Julbo"
                width={130}
                height={85}
                className={styles.middleLayerLogo}
              />
            </a>
            <a
              href="https://www.petzl.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.catenarySponsor} ${styles.middleLayer} ${styles.middle2}`}
              aria-label="Petzl"
            >
              <Image
                src="/images/sponsors/petzl.png"
                alt="Petzl"
                width={130}
                height={85}
                className={styles.middleLayerLogo}
              />
            </a>
            <a
              href="https://www.trek-n-eat.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.catenarySponsor} ${styles.middleLayer} ${styles.middle3}`}
              aria-label="Trek'n Eat"
            >
              <Image
                src="/images/sponsors/trek-n-eat.png"
                alt="Trek'n Eat"
                width={130}
                height={85}
                className={styles.middleLayerLogo}
              />
            </a>
            <a
              href="https://www.marker.net"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.catenarySponsor} ${styles.middleLayer} ${styles.middle4}`}
              aria-label="Marker"
            >
              <Image
                src="/images/sponsors/marker.png"
                alt="Marker"
                width={130}
                height={85}
                className={styles.middleLayerLogo}
              />
            </a>

            {/* Bottom Layer - Bergfreunde, Volkl, OneDay, Supernatural */}
            <a
              href="https://www.bergfreunde.eu/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.catenarySponsor} ${styles.bottomLayer} ${styles.bottom1}`}
              aria-label="Bergfreunde"
            >
              <Image
                src="/images/sponsors/bergfreunde.png"
                alt="Bergfreunde"
                width={120}
                height={80}
                className={styles.bottomLayerLogo}
              />
            </a>
            <a
              href="https://www.volkl.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.catenarySponsor} ${styles.bottomLayer} ${styles.bottom2}`}
              aria-label="Volkl"
            >
              <Image
                src="/images/sponsors/volkl.png"
                alt="Volkl"
                width={120}
                height={80}
                className={styles.bottomLayerLogo}
              />
            </a>
            <a
              href="https://www.oneday.ch/en"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.catenarySponsor} ${styles.bottomLayer} ${styles.bottom3}`}
              aria-label="OneDay"
            >
              <Image
                src="/images/sponsors/oneday.png"
                alt="OneDay"
                width={120}
                height={80}
                className={styles.bottomLayerLogo}
              />
            </a>
            <a
              href="https://www.supernatural.cc"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.catenarySponsor} ${styles.bottomLayer} ${styles.bottom4}`}
              aria-label="Supernatural"
            >
              <Image
                src="/images/sponsors/supernatural_logo.png"
                alt="Supernatural"
                width={160}
                height={110}
                className={`${styles.bottomLayerLogo} ${styles.supernaturalLogo}`}
              />
            </a>
          </div>
        </div>
      </div>

      <section className={styles.adventuresSection}>
        <div className={styles.adventuresContainer}>
          <div className={styles.sectionHeader}>
            <Link href={`/${locale}/adventures`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <h2 className={styles.sectionTitle}>{t('expeditionsTitle')}</h2>
            </Link>
          </div>
          <div className={styles.adventuresGrid}>
            {adventures.map((adventure) => {
              const year = extractYear(tExpeditions(`${adventure.key}.date`));
              return (
                <Link
                  key={adventure.id}
                  href={`/${locale}/adventures/${adventure.slug}`}
                  className={styles.adventureCard}
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className={styles.adventureImage}
                    style={{ backgroundImage: `url(${adventure.image})` }}
                  >
                    <div className={styles.dateTag}>{year}</div>
                    {adventure.hasFilm && (
                      <div className={styles.filmTag}>{t('filmTag')}</div>
                    )}
                  </div>
                  <div className={styles.adventureContent}>
                    <h3 className={styles.adventureTitle}>{tExpeditions(`${adventure.key}.title`)}</h3>
                    <p className={styles.adventureDescription}>
                      {tExpeditions(`${adventure.key}.description`).length > 200
                        ? tExpeditions(`${adventure.key}.description`).substring(0, 200) + '...'
                        : tExpeditions(`${adventure.key}.description`)}
                    </p>
                    <span className={styles.readMore}>
                      {t('readMore')} →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <Link href={`/${locale}/adventures`} className={styles.seeAllLink}>
            {t('seeAll')} →
          </Link>
        </div>
      </section>

      <div className={styles.heroFourth}>
        <div className={styles.contactContainer}>
          <h2 className={styles.contactTitle}>{t('contactTitle')}</h2>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <p className={styles.contactLabel}>{t('emailLabel')}</p>
              <a href="mailto:caro.mountain@gmail.com" className={styles.contactLink}>
                caro.mountain@gmail.com
              </a>
            </div>
            <div className={styles.contactItem}>
              <p className={styles.contactLabel}>{t('phoneLabel')}</p>
              <a href="tel:+41 774723094" className={styles.contactLink}>
                +41 774723094
              </a>
            </div>
            <div className={styles.socialLinks}>
              <a
                href="https://instagram.com/caronorthofficial"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#425b72">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/ca.north.9"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#425b72">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import Navbar from '@/components/Navbar';
import Link from 'next/link';
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
      key: 'viaSedna',
      slug: 'via-sedna',
      image: getFirstAdventureImage('via-sedna'),
      hasFilm: true,
    },
    {
      id: 2,
      key: 'iAmNorth',
      slug: 'i-am-north',
      image: getFirstAdventureImage('i-am-north'),
      hasFilm: true,
    },
    {
      id: 3,
      key: 'swissRoad',
      slug: 'rock-n-road',
      image: getFirstAdventureImage('rock-n-road'),
      hasFilm: false,
    },
    {
      id: 4,
      key: 'antarticaSailing',
      slug: 'antartica-sailing',
      image: getFirstAdventureImage('antartica-sailing'),
      hasFilm: true,
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
          <h2 className={styles.guidingTitle}>{t('guidingTitle')}</h2>
          <div className={styles.guidingContent}>
            <p className={styles.guidingText}>{t('guidingText')}</p>
          </div>
        </div>
      </section>

      <div className={styles.heroThird}>
        <div className={styles.supportedByContainer}>
          <h2 className={styles.supportedByTitle}>{t('supportedBy')}</h2>
          <div className={styles.sponsorsGrid}>
            <a
              href="https://www.thenorthface.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sponsorLink}
              aria-label="The North Face"
            >
              <img
                src="/images/sponsors/the-north-face.png"
                alt="The North Face"
                className={styles.sponsorLogo}
              />
            </a>
            <a
              href="https://www.julbo.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sponsorLink}
              aria-label="Julbo"
            >
              <img
                src="/images/sponsors/julbo.png"
                alt="Julbo"
                className={styles.sponsorLogo}
              />
            </a>
            <a
              href="https://www.petzl.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sponsorLink}
              aria-label="Petzl"
            >
              <img
                src="/images/sponsors/petzl.png"
                alt="Petzl"
                className={styles.sponsorLogo}
              />
            </a>
            <a
              href="https://www.scarpa.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sponsorLink}
              aria-label="Scarpa"
            >
              <img
                src="/images/sponsors/scarpa.png"
                alt="Scarpa"
                className={styles.sponsorLogo}
              />
            </a>
            <a
              href="https://www.bergfreunde.de"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sponsorLink}
              aria-label="Bergfreunde"
            >
              <img
                src="/images/sponsors/bergfreunde.png"
                alt="Bergfreunde"
                className={styles.sponsorLogo}
              />
            </a>
            <a
              href="https://www.marker.net"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sponsorLink}
              aria-label="Marker"
            >
              <img
                src="/images/sponsors/marker.png"
                alt="Marker"
                className={styles.sponsorLogo}
              />
            </a>
            <a
              href="https://www.dalbello.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sponsorLink}
              aria-label="Dalbello"
            >
              <img
                src="/images/sponsors/dalbello.png"
                alt="Dalbello"
                className={styles.sponsorLogo}
              />
            </a>
            <a
              href="https://www.volkl.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sponsorLink}
              aria-label="Volkl"
            >
              <img
                src="/images/sponsors/volkl.png"
                alt="Volkl"
                className={styles.sponsorLogo}
              />
            </a>
            <a
              href="https://www.protectourwinters.org"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sponsorLink}
              aria-label="POW Protect Our Winters"
            >
              <img
                src="/images/sponsors/pow.png"
                alt="POW Protect Our Winters"
                className={styles.sponsorLogo}
              />
            </a>
            <a
              href="https://www.trek-n-eat.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sponsorLink}
              aria-label="Trek'n Eat"
            >
              <img
                src="/images/sponsors/trek-n-eat.png"
                alt="Trek'n Eat"
                className={styles.sponsorLogo}
              />
            </a>
            <a
              href="https://www.biozeit.de"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sponsorLink}
              aria-label="Oskri"
            >
              <img
                src="/images/sponsors/oskri.png"
                alt="Oskri"
                className={styles.sponsorLogo}
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

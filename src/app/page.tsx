import Navbar from '@/components/Navbar';
import Link from 'next/link';
import styles from './page.module.css';

const expeditions = [
  {
    id: 1,
    title: 'Mont Blanc Summit',
    description: 'An unforgettable journey to the highest peak in the Alps.',
    image: '/images/expedition-1.jpg',
  },
  {
    id: 2,
    title: 'Patagonia Ice Climbing',
    description: 'Exploring the stunning glaciers and peaks of Patagonia.',
    image: '/images/expedition-2.jpg',
  },
  {
    id: 3,
    title: 'Himalayan Adventure',
    description: 'Trekking through the majestic Himalayan mountain range.',
    image: '/images/expedition-3.jpg',
  },
  {
    id: 4,
    title: 'Norwegian Fjords',
    description: 'Climbing and exploring the dramatic Norwegian landscape.',
    image: '/images/expedition-4.jpg',
  },
];

const films = [
  {
    id: 1,
    title: 'Summit Stories',
    description: 'A documentary about the challenges and triumphs of alpine climbing.',
    image: '/images/film-1.jpg',
  },
  {
    id: 2,
    title: 'Ice & Fire',
    description: 'Exploring volcanic peaks and glacial landscapes around the world.',
    image: '/images/film-2.jpg',
  },
  {
    id: 3,
    title: 'The Vertical World',
    description: "Stories from the world's most challenging climbing routes.",
    image: '/images/film-3.jpg',
  },
  {
    id: 4,
    title: 'Mountain Spirit',
    description: 'The culture and traditions of mountain communities worldwide.',
    image: '/images/film-4.jpg',
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.hero}></div>
      <div className={styles.heroSecond}>
        <div className={styles.textContainer}>
          <p className={styles.description}>
            Caro North is a mountain guide, alpinist, climber and speaker who runs expeditions around the globe.
          </p>
        </div>
      </div>

      <section className={styles.expeditionsSection}>
        <div className={styles.expeditionsContainer}>
          <h2 className={styles.sectionTitle}>Expeditions</h2>
          <div className={styles.expeditionsGrid}>
            {expeditions.map((expedition) => (
              <div key={expedition.id} className={styles.expeditionCard}>
                <div
                  className={styles.expeditionImage}
                  style={{ backgroundImage: `url(${expedition.image})` }}
                />
                <div className={styles.expeditionContent}>
                  <h3 className={styles.expeditionTitle}>{expedition.title}</h3>
                  <p className={styles.expeditionDescription}>{expedition.description}</p>
                  <Link href="/expeditions" className={styles.readMore}>
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.heroThird}></div>

      <section className={styles.filmsSection}>
        <div className={styles.filmsContainer}>
          <h2 className={styles.filmsSectionTitle}>Films</h2>
          <div className={styles.filmsGrid}>
            {films.map((film) => (
              <div key={film.id} className={styles.filmCard}>
                <div
                  className={styles.filmImage}
                  style={{ backgroundImage: `url(${film.image})` }}
                />
                <div className={styles.filmContent}>
                  <h3 className={styles.filmTitle}>{film.title}</h3>
                  <p className={styles.filmDescription}>{film.description}</p>
                  <Link href="/films" className={styles.readMore}>
                    Watch Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.heroFourth}>
        <div className={styles.contactContainer}>
          <h2 className={styles.contactTitle}>Contact</h2>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <p className={styles.contactLabel}>Email</p>
              <a href="mailto:info@caronorth.com" className={styles.contactLink}>
                info@caronorth.com
              </a>
            </div>
            <div className={styles.contactItem}>
              <p className={styles.contactLabel}>Phone</p>
              <a href="tel:+1234567890" className={styles.contactLink}>
                +1 (234) 567-890
              </a>
            </div>
            <div className={styles.socialLinks}>
              <a
                href="https://instagram.com/caronorth"
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
                href="https://facebook.com/caronorth"
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

        <div className={styles.additionalLinks}>
          <Link href="/guiding" className={styles.additionalLink}>
            Guiding
          </Link>
          <Link href="/talks" className={styles.additionalLink}>
            Talks
          </Link>
        </div>
      </div>
    </>
  );
}

import Navbar from '@/components/Navbar';
import styles from './expeditions.module.css';

const expeditions = [
  {
    id: 1,
    title: 'Mont Blanc Summit',
    description: 'An unforgettable journey to the highest peak in the Alps. Experience breathtaking views and challenging climbs.',
    image: '/images/expedition-1.jpg',
    date: 'June 2024',
  },
  {
    id: 2,
    title: 'Patagonia Ice Climbing',
    description: 'Exploring the stunning glaciers and peaks of Patagonia. A once-in-a-lifetime adventure through pristine wilderness.',
    image: '/images/expedition-2.jpg',
    date: 'March 2024',
  },
  {
    id: 3,
    title: 'Himalayan Adventure',
    description: 'Trekking through the majestic Himalayan mountain range. Discover ancient trails and stunning vistas.',
    image: '/images/expedition-3.jpg',
    date: 'October 2023',
  },
  {
    id: 4,
    title: 'Norwegian Fjords',
    description: 'Climbing and exploring the dramatic Norwegian landscape. From coastal cliffs to mountain peaks.',
    image: '/images/expedition-4.jpg',
    date: 'August 2023',
  },
  {
    id: 5,
    title: 'Dolomites Via Ferrata',
    description: 'Tackling the legendary via ferratas of the Italian Dolomites. Steel cables and stunning mountain scenery.',
    image: '/images/expedition-5.jpg',
    date: 'July 2023',
  },
  {
    id: 6,
    title: 'Swiss Alps Traverse',
    description: 'Multi-day traverse through the heart of the Swiss Alps. Experience alpine culture and pristine peaks.',
    image: '/images/expedition-6.jpg',
    date: 'September 2023',
  },
  {
    id: 7,
    title: 'Iceland Glacier Expedition',
    description: 'Exploring the otherworldly glaciers of Iceland. Ice caves, crevasses, and volcanic landscapes.',
    image: '/images/expedition-7.jpg',
    date: 'February 2023',
  },
  {
    id: 8,
    title: 'Scottish Highlands Winter Climb',
    description: 'Winter climbing in the rugged Scottish Highlands. Technical routes and dramatic weather.',
    image: '/images/expedition-8.jpg',
    date: 'January 2023',
  },
];

export default function Expeditions() {
  return (
    <>
      <Navbar />
      <div className={styles.expeditionsPage}>
        <div className={styles.header}>
          <h1 className={styles.pageTitle}>Expeditions</h1>
          <p className={styles.pageSubtitle}>
            Explore my adventures across the world's most challenging peaks and remote landscapes
          </p>
        </div>

        <div className={styles.expeditionsContainer}>
          <div className={styles.expeditionsGrid}>
            {expeditions.map((expedition) => (
              <div key={expedition.id} className={styles.expeditionCard}>
                <div
                  className={styles.expeditionImage}
                  style={{ backgroundImage: `url(${expedition.image})` }}
                >
                  <div className={styles.dateTag}>{expedition.date}</div>
                </div>
                <div className={styles.expeditionContent}>
                  <h3 className={styles.expeditionTitle}>{expedition.title}</h3>
                  <p className={styles.expeditionDescription}>{expedition.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

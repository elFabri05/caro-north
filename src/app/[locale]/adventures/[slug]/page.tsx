import Navbar from '@/components/Navbar';
import ImageGallery from '@/components/ImageGallery';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import styles from './adventure.module.css';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAdventureImages, getFirstAdventureImage } from '@/lib/getAdventureImages';

// Map slugs to adventure keys
const slugToKey: Record<string, string> = {
  'turbio25': 'turbio25',
  'via-sedna': 'viaSedna',
  'i-am-north': 'iAmNorth',
  'rock-n-road': 'swissRoad',
  'antartica-sailing': 'antarticaSailing',
  'usa-2019': 'usa2019',
  'kishtwar-expedition-2019': 'kishtwar2019',
  'frey': 'freyFirstAscents',
  'kishtwar-first-ascents-2016': 'kishtwar2016',
  'onsighting-astroman-yosemite-2015': 'astroman',
  'north-faces-chamonix': 'northfaceschamonix',
  'india-adschalaga': 'adschalaga',
  'cerro-torre': 'cerrotorre',
  'patagonia-2014': 'patagonia2014',
  'patagonia-2013': 'patagonia2013',
};

interface AdventurePageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(slugToKey).map((slug) => ({
    slug,
  }));
}

export default async function AdventurePage({ params }: AdventurePageProps) {
  const { slug, locale } = await params;
  const adventureKey = slugToKey[slug];

  if (!adventureKey) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: 'expeditions' });

  const title = t(`${adventureKey}.title`);
  const description = t(`${adventureKey}.description`);
  const date = t(`${adventureKey}.date`);

  // Get images for this adventure
  const images = getAdventureImages(slug);
  const heroImage = getFirstAdventureImage(slug);

  // Split description into paragraphs and handle URLs
  const formatParagraph = (text: string) => {
    // Check if paragraph contains a URL
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlPattern);

    return parts.map((part, i) => {
      if (urlPattern.test(part)) {
        return (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <>
      <Navbar />
      <div className={styles.adventurePage}>
        <div
          className={styles.heroImage}
          style={{ backgroundImage: `url(${heroImage})` }}
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
            {description.split('\n\n').map((paragraph, index) => {
              // Check if paragraph starts with special markers for quotes/headings
              if (paragraph.startsWith('Quotes:') || paragraph.startsWith('Text excerpt')) {
                return (
                  <blockquote key={index} className={styles.quote}>
                    {formatParagraph(paragraph)}
                  </blockquote>
                );
              }

              return (
                <p key={index} className={styles.paragraph}>
                  {formatParagraph(paragraph)}
                </p>
              );
            })}

            {/* Image Gallery */}
            <ImageGallery images={images} adventureSlug={slug} />

            {/* YouTube Videos */}
            {slug === 'antartica-sailing' && (
              <>
                <YouTubeEmbed videoId="NBaCMo6lS-I" title={title} />
                <YouTubeEmbed videoId="BTdJoyE771w" title={title} />
                <YouTubeEmbed videoId="RD5fH7vZY1s" title={title} />
                <YouTubeEmbed videoId="zOBuEqGO5m8" title={title} />
                <YouTubeEmbed videoId="zg-f1ojm0jk" title={title} />
              </>
            )}

            {slug === 'frey' && (
              <YouTubeEmbed videoId="OGMEnCLuwg8" title={title} />
            )}

            <div className={styles.navigation}>
              <Link href={`/${locale}/adventures`} className={styles.backButton}>
                ← {t('pageTitle')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

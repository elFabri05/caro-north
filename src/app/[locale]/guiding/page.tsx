import Navbar from '@/components/Navbar';
import GuidingImageGallery from '@/components/GuidingImageGallery';
import styles from './guiding.module.css';
import { getTranslations } from 'next-intl/server';
import { getGuidingImages } from '@/lib/getGuidingImages';

export default async function Guiding() {
  const t = await getTranslations('guiding');
  const images = getGuidingImages();

  return (
    <>
      <Navbar />
      <div className={styles.guidingPage}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <img
              src="/images/uiagm-logo.png"
              alt="UIAGM Mountain Guide Certification"
              className={styles.logo}
            />
            <h1 className={styles.pageTitle}>{t('pageTitle')}</h1>
          </div>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.textContent}>
            <p className={styles.contentText}>{t('content')}</p>
          </div>

          {/* Image Gallery */}
          <GuidingImageGallery images={images} />
        </div>
      </div>
    </>
  );
}

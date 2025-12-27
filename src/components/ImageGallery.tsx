'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './ImageGallery.module.css';

interface ImageGalleryProps {
  images: string[];
  adventureSlug: string;
}

export default function ImageGallery({ images, adventureSlug }: ImageGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) return null;

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <>
      <div className={styles.gallery}>
        <div className={styles.galleryGrid}>
          {images.map((image, index) => (
            <div
              key={index}
              className={styles.galleryItem}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={`/images/adventures/${adventureSlug}/${image}`}
                alt={`Adventure photo ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.galleryImage}
              />
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className={styles.lightbox}
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-label="Image gallery lightbox"
        >
          <button
            className={styles.closeButton}
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            ✕
          </button>

          <button
            className={styles.navButton + ' ' + styles.navButtonPrev}
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/images/adventures/${adventureSlug}/${images[currentIndex]}`}
              alt={`Adventure photo ${currentIndex + 1}`}
              fill
              sizes="100vw"
              className={styles.lightboxImage}
              priority
            />
          </div>

          <button
            className={styles.navButton + ' ' + styles.navButtonNext}
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Next image"
          >
            ›
          </button>

          <div className={styles.imageCounter}>
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}

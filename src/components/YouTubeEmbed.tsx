import styles from './YouTubeEmbed.module.css';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

export default function YouTubeEmbed({ videoId, title = "YouTube video player" }: YouTubeEmbedProps) {
  return (
    <div className={styles.videoContainer}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className={styles.video}
      />
    </div>
  );
}

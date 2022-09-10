import "./styles.scss";

type YoutubeEmbedProps = {
  embedId: string;
  className?: string;
};

const YoutubeEmbed = ({ embedId, className }: YoutubeEmbedProps) => (
  <div className={`video-responsive ${className}`}>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}?modestbranding=1&showinfo=0&rel=1`}
      frameBorder="0"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;

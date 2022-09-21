import YoutubeEmbed from "../../components/YoutubeEmbed"
import "./styles.scss";

function News() {
  return (
    <article className="news-content">
      <YoutubeEmbed embedId="wlaVfc8NZ08" className="video" />
      <hr className="news-separator"/>
      <h2 className="news-title">Avance de obra - Noviembre</h2>
      <YoutubeEmbed embedId="PPF3E2YfVtQ" className="video" />
      <h2 className="news-title">Avance de obra - Agosto</h2>
      <YoutubeEmbed embedId="om8cekCjTIk" className="video" />
    </article>
  )
}

export default News

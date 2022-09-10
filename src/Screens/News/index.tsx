import YoutubeEmbed from "../../components/YoutubeEmbed"
import "./styles.scss";

function News() {
  return (
    <article className="content">
      <YoutubeEmbed embedId="KHkydFOHmzY" className="video" />
      <hr className="separator"/>
      <h2 className="news-title">Avance de obra - Noviembre</h2>
      <YoutubeEmbed embedId="YDBkowXh78I" className="video" />
      <h2 className="news-title">Avance de obra - Agosto</h2>
      <YoutubeEmbed embedId="k1NzMVzdfzA" className="video" />
    </article>
  )
}

export default News

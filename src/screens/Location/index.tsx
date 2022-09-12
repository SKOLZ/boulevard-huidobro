import { Map, Marker } from 'pigeon-maps'
import "./styles.scss";

function Location() {
  return (
    <article>
      <div className="map-wrapper">
        <Map defaultCenter={[-34.5508, -58.4867]} defaultZoom={16}>
          <Marker width={60} anchor={[-34.5512, -58.4864]} color="#1E4B0F" />
        </Map>
      </div>
    </article>
  )
}

export default Location

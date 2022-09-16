import Arrow from '../../../../assets/arrow.svg';
import X from '../../../../assets/x.svg';

import './styles.scss';

type ImageDisplayerProps = {
  onClose: () => void;
  image: {
    id: number;
    src: string;
  };
  onPrevious: () => void;
  onNext: () => void;
}

function ImageDisplayer({onClose, image, onPrevious, onNext}: ImageDisplayerProps) {
  return (
    <div className="carousel-modal" onClick={(event) => {event.currentTarget == event.target && onClose()}}>
      <div className="carousel">
        <button className="close-carousel" onClick={onClose}>
          <img src={X} alt="" />
        </button>
        <button className="arrow arrow-left" onClick={onPrevious}>
          <img src={Arrow} alt="" />
        </button>
        <div className="carousel-image-wrapper">
          <img src={image.src} alt="presented image" className='carousel-image' />
        </div>
        <button className="arrow arrow-right" onClick={onNext}>
          <img src={Arrow} alt="" />
        </button>
      </div>
    </div>
  );
}

export default ImageDisplayer;

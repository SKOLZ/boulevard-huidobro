import { useState } from 'react';
import ImageDisplayer from './components/ImageDisplayer';
import images from './images';
import "./styles.scss";

function Photos() {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [isOpen, setIsOpen] = useState(false);

  const onImageSelected = (image: {id: number, src:string}) => {
    setCurrentImage(image);
    setIsOpen(true);
  }

  const handlePrevious = () => {
    setCurrentImage((current) => {
      const newId = (images.length + current.id - 2)%images.length;
      return images[newId];
    });
  }
  
  const handleNext = () => {
    setCurrentImage((current) => {
      return images[current.id%images.length];
    });
  }

  return (
    <article className="photos-content">
      <div className="photo-grid">
        {
          images.map(image => {
            return (
              <button key={image.id} onClick={() => onImageSelected(image)}>
                <img src={image.src} className="photo-thumbnail" alt="" />
              </button>
            );
          })
        }
      </div>
      {
        isOpen && (
          <ImageDisplayer
            onClose={() => setIsOpen(false)}
            image={currentImage}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )
      }
    </article>
  )
}

export default Photos

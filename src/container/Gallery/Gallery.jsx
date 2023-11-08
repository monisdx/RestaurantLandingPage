import React from 'react';
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const galleryimages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if(direction === 'left') {
      current.scrollLeft -= 300;
    }
    else{
      current.scrollLeft += 300;
    }
  }


  return (
    <div className='app_gallery flex__center'>
      <div className='app_gallery-content'>
        <SubHeading title="Instagram" />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{ color: '#aaa', marginTop: '2rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type="button" className='custom__button'>View More</button>
      </div>

      <div className='app_gallery-images'>
        <div className='app_gallery-images-container' ref={scrollRef}>
          {galleryimages.map((image, index) => (
            <div className='app_gallery-images-card flex__center' key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery" />
              <BsInstagram className='gallery_image-icon' />
            </div>
          ))}
        </div>
        <div className='app_gallery-images-arrow'>
          <BsArrowLeftShort className='gallery_arrow-icons' onClick={() => scroll('left')}/>
          <BsArrowRightShort className='gallery_arrow-icons' onClick={() => scroll('right')}/>
        </div>

      </div>
    
    </div>
  );
}

export default Gallery;

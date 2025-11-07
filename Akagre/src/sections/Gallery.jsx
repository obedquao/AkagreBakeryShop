import React, { useState } from 'react';
import './Gallery.css';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

function Gallery() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery categories
  const galleries = [
    {
      id: 1,
      title: 'Master Class',
      coverImage: 'images/gallery/master1.jpeg',
      images: [
        { id: 1, src: 'images/gallery/master1.jpeg', alt: 'Cake 1' },
        { id: 2, src: 'images/gallery/master2.jpeg', alt: 'Cake 2' },
        { id: 3, src: 'images/gallery/master3.jpeg', alt: 'Cake 3' },
        { id: 4, src: 'images/gallery/master4.jpeg', alt: 'Cake 4' },
        { id: 5, src: 'images/gallery/master5.jpeg', alt: 'Cake 5' },
        { id: 6, src: 'images/gallery/master6.jpeg', alt: 'Cake 6' },
      ]
    },
    {
      id: 2,
      title: 'Regular Class',
      coverImage: 'images/gallery/regular1.jpeg',
      images: [
        { id: 1, src: 'images/gallery/regular1.jpeg', alt: 'Bread 1' },
        { id: 2, src: 'images/gallery/regular2.jpeg', alt: 'Bread 2' },
        { id: 3, src: 'images/gallery/regular3.jpeg', alt: 'Bread 3' },
        { id: 4, src: 'images/gallery/regular4.jpeg', alt: 'Bread 4' },
        { id: 5, src: 'images/gallery/regular5.webp', alt: 'Bread 5' },
      ]
    }
  ];

  const openGallery = (galleryIndex) => {
    setCurrentGallery(galleryIndex);
    setCurrentImageIndex(0);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setCurrentGallery(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (currentGallery !== null) {
      const totalImages = galleries[currentGallery].images.length;
      setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    }
  };

  const prevImage = () => {
    if (currentGallery !== null) {
      const totalImages = galleries[currentGallery].images.length;
      setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    }
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, currentGallery]);

  const currentImages = currentGallery !== null ? galleries[currentGallery].images : [];

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Gallery</h2>

      {/* Gallery Category Cards */}
      <div className="gallery-categories">
        {galleries.map((gallery, index) => (
          <div
            key={gallery.id}
            className="gallery-category-card"
            onClick={() => openGallery(index)}
          >
            <img src={gallery.coverImage} alt={gallery.title} />
            <div className="category-overlay">
              <h3>{gallery.title}</h3>
              <p>{gallery.images.length} Photos</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && currentGallery !== null && (
        <div className="lightbox-gallery" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={32} />
          </button>

          <div className="lightbox-gallery-content" onClick={(e) => e.stopPropagation()}>
            {/* Main Image Display */}
            <div className="main-image-container">
              <button className="nav-btn nav-prev" onClick={prevImage}>
                <ChevronLeft size={40} />
              </button>

              <div className="main-image-wrapper">
                <img 
                  src={currentImages[currentImageIndex].src} 
                  alt={currentImages[currentImageIndex].alt} 
                />
              </div>

              <button className="nav-btn nav-next" onClick={nextImage}>
                <ChevronRight size={40} />
              </button>
            </div>

            {/* Thumbnail Grid */}
            <div className="thumbnail-grid">
              {currentImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => selectImage(index)}
                >
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>

            {/* Image Counter */}
            <p className="image-counter">
              {currentImageIndex + 1} / {currentImages.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
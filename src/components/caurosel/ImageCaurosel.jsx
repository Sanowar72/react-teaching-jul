import React, { useEffect, useRef, useState } from "react";
const images = [
  "https://picsum.photos/id/1011/600/300",
  "https://picsum.photos/id/1015/600/300",
  "https://picsum.photos/id/1018/600/300",
  "https://picsum.photos/id/1025/600/300",
  "https://picsum.photos/id/1033/600/300",
  "https://picsum.photos/id/1028/600/300",
  "https://picsum.photos/id/1035/600/300",
  "https://picsum.photos/id/1065/600/300",
  "https://picsum.photos/id/1029/600/300",
  "https://picsum.photos/id/1011/600/300",
  "https://picsum.photos/id/1015/600/300",
  "https://picsum.photos/id/1018/600/300",
];
const ImageCaurosel = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const carouselRef = useRef();
  const scrollToIndex = (index) => {
    const { current } = carouselRef;
    if (current) {
      current.scrollTo({
        left: index * current.offsetWidth,
        behavior: "smooth",
      });
    }
    setSelectedImage(index);
  };
  useEffect(() => {
    if (isImageHovered) {
      return;
    }
    const intervalId = setInterval(() => {
      const nextIndex = (selectedImage + 1) % images.length;
      scrollToIndex(nextIndex);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [isImageHovered, selectedImage]);

  return (
    <>
      <h3>this is imahe caurosel</h3>

      <div className="caurosel-container">
        <div
          className="caurosel"
          ref={carouselRef}
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          {images.map((image, index) => (
            <div className="caurosel-item">
              <img src={image} alt="image" />
            </div>
          ))}
        </div>
        <div className="dot-container">
          {images.map((_, index) => (
            <span
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`dot ${
                index === selectedImage ? "selected-image" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageCaurosel;

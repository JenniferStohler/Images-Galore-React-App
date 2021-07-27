import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard.js';
import ImageSearch from './components/ImageSearch.js';
// import ImageModal from './components/ImageModal.js';


function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');
  const [index, setIndex] = useState('');
  const [displayModal, setDisplayModal] = useState(false);
  const next = () => {
    setIndex((i) => (i + 1) % images.length);
  };
  const prev = () => {
    setIndex((i) => ((i - 1) % images.length) % images.length);
  };
  const onClickOutside = (e) => {
    if (e.target.localName !== "button") {
      setDisplayModal(false);
    }
  };
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  useEffect(() => {
    window.addEventListener("click", onClickOutside);
    return () =>
      window.removeEventListener("click", onClickOutside);
  }, []);
  return (
    <div className="container mx-auto">
      <button onClick={() => setDisplayModal(true)}>
      <ImageSearch searchText={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && <h1 className="text-6xl text-center mx-auto mt-32">No Images Found</h1>}
      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">...Loading...</h1> : <div className="grid grid-cols-3 gap-4">
        {images.map(image =>
          <ImageCard key={image.id} image={image} />
          )}
      </div>}
        </button>
        </div>
  );
}

export default App;

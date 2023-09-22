import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'; 
import './ProdDesc.css'; 

const ProdDesc = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 2); // Change 2 to the total number of images in the carousel
    }, 3000); // Adjust the interval (in milliseconds) for automatic sliding

    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      <header className="bg-dark py-2">
        {/* Rest of the header content */}
        <div class="container-fluid vh-50 d-flex flex-column justify-content-center align-items-center">
        <h1
          class="text-white mb-0"
          onclick="window.location.href = 'index.html';"
        >
        </h1>
        
      </div>
      </header>

      <marquee scrollamount="10" height="23px">
        {/* Rest of the marquee content */}
        One donation brings smiles to many faces. Thank you
      <u>Person name</u> for your donation
      </marquee>

      <br />
      <div className="container-fluid vh-50 d-flex flex-column justify-content-center align-items-center">
        {/* Rest of the container content */}
        <div className="row">
          <div className="col-md-6">
            <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgSxuILsL8fMNKseMEkYQC9GBN8aT2t7WWA&usqp=CAU"
                  alt="Image 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgSxuILsL8fMNKseMEkYQC9GBN8aT2t7WWA&usqp=CAU"
                  alt="Image 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgSxuILsL8fMNKseMEkYQC9GBN8aT2t7WWA&usqp=CAU"
                  alt="Image 3"
                />
              </Carousel.Item>
            </Carousel>

            <div className="carousel-thumbnail">
              <img
                className={index === 0 ? "img-fluid active" : "img-fluid"}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgSxuILsL8fMNKseMEkYQC9GBN8aT2t7WWA&usqp=CAU"
                alt="Thumbnail 1"
                onClick={() => handleSelect(0)}
              />
              <img
                className={index === 1 ? "img-fluid active" : "img-fluid"}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgSxuILsL8fMNKseMEkYQC9GBN8aT2t7WWA&usqp=CAU"
                alt="Thumbnail 2"
                onClick={() => handleSelect(1)}
              />
            </div>
          </div>
        <div class="col-md-6 d-flex flex-column justify-content-between">
          <div class="product-details" style={{ height: '250px', width:'500px' }}>
            <h2>Product Name</h2>
            <p class="description">Product description goes here.</p>
            <button class="btn btn-primary ml-2">Choose</button>
          </div>
          <div class="donators-information" style={{ height: '200px', width:'500px' }}>
            <h2 >Donator's Name</h2>
            <h3>Details of Donor</h3>
            <p class="details">Details of the donor will be visible here</p>
            <button class="btn btn-primary ml-2">Contact Donor</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProdDesc;

import React, { useState, useEffect } from 'react';
import './Donation_Details.css';
import { Link } from 'react-router-dom';

const Donation_Details = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setButtonDisabled(false);
  };

  const handlePostButtonClick = () => {
    if (!selectedCategory) {
      alert("Please select a product category.");
      return;
    }

    const productName = document.getElementById('productName').value;
    const ownerEmail = document.getElementById('ownerEmail').value;
    const ownerName = document.getElementById('ownerName').value;

    // Validate other fields if needed
    if (!productName || !ownerEmail || !ownerName) {
      alert("Please fill in all required fields.");
      return;
    }

    // Redirect to the Thank You page with query parameters
    const categoryValue = encodeURIComponent(selectedCategory.value);
    const productNameValue = encodeURIComponent(productName);
    const ownerEmailValue = encodeURIComponent(ownerEmail);
    const ownerNameValue = encodeURIComponent(ownerName);

    const thankYouUrl =
      'After_Post.html' +
      '?productCategory=' + categoryValue +
      '&productName=' + productNameValue +
      '&ownerEmail=' + ownerEmailValue +
      '&ownerName=' + ownerNameValue;

    window.location.href = thankYouUrl;
  };

  useEffect(() => {
    // Enable "Post" button when a radio button is checked
    const postButton = document.getElementById('postButton');

    postButton.addEventListener('click', handlePostButtonClick);

    // Clean up event listener when the component unmounts
    return () => {
      postButton.removeEventListener('click', handlePostButtonClick);
    };
  }, [selectedCategory]);

    return(
        <div className="container-fluid vh-50 d-flex flex-column justify-content-center align-items-center mt-4 ">
          <h2 className="text-center mb-4">Donation Details</h2>
          <form>
        {/* Form fields */}
        {/* ... (other form fields) */}
            <div className="form-group">
                <label for="productName">What is the name of the product?</label>
                <input
                   type="text" 
                   className="form-control" 
                   id="productName" 
                   placeholder="Product Name" 
                   required pattern="[A-Za-z\s]+"
                   title="Please enter only alphabets and spaces"/>
            </div>
            <div className="form-group">
                <label for="ownerEmail">Please enter your E-mail</label>
                <input type="email" className="form-control" id="ownerEmail" placeholder="Owner Email" required/>
            </div>
            <div className="form-group">
                <label for="ownerName">What should we call you?</label>
                <input type="text" class="form-control" id="ownerName" placeholder="Owner's Full Name" required pattern="[A-Za-z\s]+"
                    title="Please enter only alphabets and spaces"/>
            </div>

        {/* Radio buttons for product category */}
        <div className="form-group">
          <label>Which category does the product belong to from the following list?</label><br />
          {/* Radio buttons */}
          {/* Example: */}
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              name="productCategory"
              id="cloths"
              value="Cloths"
              onChange={handleCategoryChange}
              checked={selectedCategory === 'Cloths'}
            />
            <label className="form-check-label" htmlFor="cloths">
              Cloths
            </label>
          </div>
          {/* Add other radio buttons similarly */}
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              name="productCategory"
              id="Food"
              value="Food"
              onChange={handleCategoryChange}
              checked={selectedCategory === 'Food'}
            />
            <label className="form-check-label" htmlFor="Food">
              Food
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              name="productCategory"
              id="Furniture"
              value="Furniture"
              onChange={handleCategoryChange}
              checked={selectedCategory === 'Furniture'}
            />
            <label className="form-check-label" htmlFor="food">
              Furniture
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              name="productCategory"
              id="School Essentials"
              value="School Essentials"
              onChange={handleCategoryChange}
              checked={selectedCategory === 'School Essentials'}
            />
            <label className="form-check-label" htmlFor="food">
              School Essentials
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              name="productCategory"
              id="Stationery"
              value="Stationery"
              onChange={handleCategoryChange}
              checked={selectedCategory === 'Stationery'}
            />
            <label className="form-check-label" htmlFor="food">
              Stationery
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              name="productCategory"
              id="Medicines"
              value="Medicines"
              onChange={handleCategoryChange}
              checked={selectedCategory === 'Medicines'}
            />
            <label className="form-check-label" htmlFor="food">
              Medicines
            </label>
          </div>
        </div>
        <div className="form-group">
                <label for="address">Where does our precious Donor live?</label>
                <textarea className="form-control" id="address" rows="4" placeholder="Address" required/>
        </div>
        <div className="form-group">
                <label for="productdescription">Please describe the product</label>
                <textarea className="form-control" id="productDescription" rows="4" placeholder="Product Description" required/>
        </div>
        <div className="form-group">
                <label for="timeUsed">How much time has the product been used?</label>
                <input type="number" className="form-control" id="timeUsed" rows="4" placeholder="Time (in years)" required/>
        </div>
        <div className="form-group">
                <label for="productImage">Upload the Image of the product</label><br/>
                <input type="file" className="form-control-file" id="productImage" accept="image/*" required/>
        </div>
        <div className="form-group">
                <label for="comments">Any comments or anything that we should know?</label>
                <input type="text" className="form-control" id="comments" required/>
        </div>
        {/* "Post" button to trigger the form submission */}
        <div className="form-group">
        <Link to="/After_Post">
          <button
           id="postButton"
           className="btn btn-primary"
           disabled={isButtonDisabled}
          >
            Post
          </button>
        </Link>
        </div>
      </form>
    </div>
  );
}

export default Donation_Details;

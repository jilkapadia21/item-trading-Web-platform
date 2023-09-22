import React from 'react';
import './After_Post.css';
import { Link } from 'react-router-dom';
const After_Post = () => {
  return (
    <>
      <header>
        
      </header>

      <marquee scrollamount="10" height="23px">
        One donation brings smiles to many faces. Thank you <u>Person name</u> for your donation
      </marquee>

      <br />
      <br />

      <div className="appreciation">
        <h2>Thanks for your submission</h2>
        <p>
          We appreciate your kindness and would like to share the next few steps before your product reaches its location:-
          <ol type="a">
            <li>Our team will verify the product and whether or not it is appropriate</li>
            <li>
              Next, after certification we would like you to ship the product to our NGO (the address can be found on our about us page)
            </li>
            <li>After successfully receiving your product we will put up your post for public viewing</li>
            <li>At last, when the product is been given to the person/people in need you will receive a certificate and a proof of Donation</li>
          </ol>
        </p>
        <h5>We can't thank you enough for this kind donation! Someone, Somewhere, thanks you too!</h5>
        <div className="d-flex justify-content-center">
        <Link to="/Header" className="btn btn-primary ml-2">Home Page</Link>
        </div>
      </div>
    </>
  );
};

export default After_Post;

    
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function MainContent() {
    const categories = ['Clothes', 'Food', 'Money', 'Appliances', 'Furniture', 'School Essentials', 'Stationery', 'Medicines'];
    const categoryStyle = {
        textAlign: 'left',  // Align text to the left
        paddingLeft: '5px',
        // Add some padding to create space from the left edge
    };
  return (
    <main style={{ backgroundColor: '#fff' }}>
          <div className="container">
              <div className="row">
                  <div className="col-md-4" style={categoryStyle}>
                      <DropdownButton id="categoriesDropdown" title="Categories">
                          {categories.map((category, index) => (
                              <Dropdown.Item key={index} href="index.html">{category}</Dropdown.Item>
                          ))}
                      </DropdownButton>
                  </div>
                  
            <div className="text-center mb-4 ">
                <br />
                <h2 className="popular">Popular Items</h2>
            </div>

            </div>

          </div>
      <div className="card-container">
                  
              </div>
              <div className="card-container">
                  <div className="card product">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgSxuILsL8fMNKseMEkYQC9GBN8aT2t7WWA&usqp=CAU" className="card-img-top" alt="Product 1" />
                      <div className="card-body">
                        <p className="card-text">Product 1</p>
                        <Link to="/ProdDesc" className="btn btn-primary ml-2">View Product</Link>
                      </div>
                  </div>

                  <div class="card product">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgSxuILsL8fMNKseMEkYQC9GBN8aT2t7WWA&usqp=CAU" className="card-img-top" alt="Product 2" />
                      <div class="card-body">
                          <p class="card-text">Product 2</p>
                          <Link to="/ProdDesc" className="btn btn-primary ml-2">View Product</Link>
                      </div>
                  </div>

                  <div class="card product">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgSxuILsL8fMNKseMEkYQC9GBN8aT2t7WWA&usqp=CAU" class="card-img-top" alt="Product 3" />
                      <div class="card-body">
                          <p class="card-text">Product 3</p>
                          <Link to="/ProdDesc" className="btn btn-primary ml-2">View Product</Link>
                      </div>
                  </div>
              </div>
              <div class="card-container">
                  <div class="card product">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgSxuILsL8fMNKseMEkYQC9GBN8aT2t7WWA&usqp=CAU" class="card-img-top" alt="Product 1" />
                      <div class="card-body">
                          <p class="card-text">Product 4</p>
                          <Link to="/ProdDesc" className="btn btn-primary ml-2">View Product</Link>
                      </div>
                  </div>
                  <div class="card product">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgSxuILsL8fMNKseMEkYQC9GBN8aT2t7WWA&usqp=CAU" class="card-img-top" alt="Product 3" />
                      <div class="card-body">
                          <p class="card-text">Product 5</p>
                          <Link to="/ProdDesc" className="btn btn-primary ml-2">View Product</Link>
                      </div>
                  </div>
                  
              </div>
          

    </main>
  );
}

export default MainContent;

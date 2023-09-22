import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function Dropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const dropdownStyle = {
    textAlign: 'left', // Align dropdown to the left
    marginLeft: '0', // Remove margin
  };
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-md-4 p-0" style={dropdownStyle}>
            <Dropdown show={dropdownOpen} onClick={toggleDropdown}>
              <Dropdown.Toggle variant="secondary" id="categoriesDropdown">
                Categories
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="index.html">Clothes</Dropdown.Item>
                <Dropdown.Item href="index.html">Food</Dropdown.Item>
                <Dropdown.Item href="index.html">Money</Dropdown.Item>
                <Dropdown.Item href="index.html">Appliances</Dropdown.Item>
                <Dropdown.Item href="index.html">Furniture</Dropdown.Item>
                <Dropdown.Item href="index.html">School Essentials</Dropdown.Item>
                <Dropdown.Item href="index.html">Stationery</Dropdown.Item>
                <Dropdown.Item href="index.html">Medicines</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          
        </div>
      </div>

    </main>
  );
}

export default Dropdown;


import React, { useState } from 'react';
import "./Button.css"

const Button = () => {
    const [activeSection, setActiveSection] = useState(null);

    // Handler for button clicks
    const handleButtonClick = (section) => {
      setActiveSection(section);
    };
  
    return (
      <div className="App">
        <h1>Information Sections</h1>
  
        {/* Buttons */}
        <div className="button-container">
          <button onClick={() => handleButtonClick('baku')}>Bakı</button>
          <button onClick={() => handleButtonClick('regions')}>Regionlar</button>
          <button onClick={() => handleButtonClick('georgia')}>Gürcüstan</button>
        </div>
  
        {/* Sections */}
        <div className="content-container">
          {activeSection === 'baku' && (
            <div className="content">
              <div className="part5">
                <span>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasssssssss ffffffffff vvvvvvvvvvvvvvvvvvvvvv</span>
                <p>aaaaaaaaaaaaaa bbbbbbbbbbbb fffffffffffffff</p>
              </div>
            </div>
          )}
          {activeSection === 'regions' && (
            <div className="content">
            
            </div>
          )}
          {activeSection === 'georgia' && (
            <div className="content">
            
            </div>
          )}
        </div>
      </div>
    );
}

export default Button

import React, { useState } from 'react';

function App() {
  // =========================================== //
  // Active or Inactive button
  const [isActive, setIsActive] = useState(false);

  let buttonText = "";

  if (isActive) {
    buttonText = 'Active';
  } else {
    buttonText = 'Inactive';
  }

  // This is a more concise way of writing a simple if-else statement
  // const buttonText = isActive ? 'Active' : 'Inactive';

  const handleIsActiveOnClick = () => {
    setIsActive(!isActive)
  };

  // ======================================= //
  // Increase, decrease, or reset count

  const [count, setCount] = useState(0);

  const handleIncreaseCountOnClick = () => {
    setCount(count + 1);
  }

  const handleDecreaseCountOnClick = () => {
    setCount(count - 1);
  }

  const handleResetCountOnClick = () => {
    setCount(0);
  }

  // ======================================= //
  // City and Country Location

  const [location, setLocation] = useState({
    city: '',
    country: '',
  });

  function handleCityChange(event) {
    setLocation({
      ...location, city: event.target.value
    });
  };

  function handleCountryChange(event) {
    setLocation({
      ...location, country: event.target.value
    });
  };

  return (
    <>
      <button onClick={handleIsActiveOnClick}>
        { buttonText }
      </button>

      <button onClick={handleIncreaseCountOnClick}>
        Increase Count
      </button>
      <button onClick={handleDecreaseCountOnClick}>
        Decrease Count
      </button>
      <button onClick={handleResetCountOnClick}>
        Reset Count
      </button>
      <h1>{count}</h1>

      <form>
        <div>
          <input 
            type='text'
            placeholder='City'
            value={location.city}
            onChange={handleCityChange}
          />
        </div>
        <div>
          <input 
            type='text'
            placeholder='Country'
            value={location.country}
            onChange={handleCountryChange}
          />
        </div>
        <div>
          You live in { `${location.city}, ${location.country}...` }
        </div>
      </form>
    </>
  );
}

export default App;

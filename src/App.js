import React, { useState } from 'react';

function App() {
  const [isActive, setIsActive] = useState(false);

  // This is more concise
  // const buttonText = isActive ? 'Active' : 'Inactive';

  let buttonText = "";

  if (isActive) {
    buttonText = 'Active';
  } else {
    buttonText = 'Inactive';
  }

  const handleIsActiveOnClick = () => {
    setIsActive(!isActive)
  };

  const [count, setCount] = useState(0);

  const handleIncreaseCountOnClick = () => {
    console.log("Current count: " + count);
    setCount(count + 1);
  }

  const handleDecreaseCountOnClick = () => {
    console.log("Current count: " + count);
    setCount(count - 1);
  }

  console.log("Updated count: " + count);

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
      <h1>{count}</h1>
    </>
  );
}

export default App;

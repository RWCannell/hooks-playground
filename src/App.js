import React, { useState } from 'react';

function App() {
  const [isActive, setIsActive] = useState(false);
  const buttonText = isActive ? 'Active' : 'Inactive';

  return (
    <button onClick={() => setIsActive(!isActive)}>
      { buttonText }
    </button>
  );
}

export default App;

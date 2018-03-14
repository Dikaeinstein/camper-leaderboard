import React from 'react';

const Title = () => {
  const style = {
    background: '#006400',
  };

  return (
    <header
      className="text-center text-light p-2"
      style={style}
    >
      <h2>FreeCodeCamp Leaders Board</h2>
    </header>
  );
};

export default Title;

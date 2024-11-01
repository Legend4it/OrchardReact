import React from 'react';
import ContentList from './Contents/ContentList'; // Import ContentList here
import ProductImage from './Contents/ProductImage'; // Import ContentList here

const App = () => {
  return (
    <div>
      <h1>Content from Orchard Core CMS</h1>
      <ContentList />
      <ProductImage />
    </div>
  );
};

export default App;

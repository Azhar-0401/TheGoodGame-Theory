import React from 'react';
import BeerList from './components/BeerList';

function App() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Beer Catalog</h1>
      <BeerList />
    </div>
  );
}

export default App;

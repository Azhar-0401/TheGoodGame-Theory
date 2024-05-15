import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BeerList = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.punkapi.com/v2/beers');
        setBeers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Beers..."
        className="border border-gray-300 rounded-md p-2 mb-4"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBeers.map((beer) => (
          <div key={beer.id} className="bg-white rounded-md p-4 shadow-md">
            <img src={beer.image_url} alt={beer.name} className="mb-4" />
            <h3 className="text-xl font-semibold">{beer.name}</h3>
            <p className="text-gray-600">{beer.tagline}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeerList;

import React, { useState } from 'react';
import SearchBar from '../components/SearchBar'; // Import SearchBar Component

// Example list of chemicals
const chemicals = [
  { id: 1, name: 'Sulfuric Acid', grade: '98%', concentration: 'High' },
  { id: 2, name: 'Hydrochloric Acid', grade: '36%', concentration: 'Medium' },
  { id: 3, name: 'Nitric Acid', grade: '65%', concentration: 'High' },
  { id: 4, name: 'Sodium Hydroxide', grade: '100%', concentration: 'High' },
];

export default function ChemicalsList() {
  const [searchTerm, setSearchTerm] = useState('');

  // Handle the change in search input
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    o
  };

  // Filter the chemicals based on the search term
  const filteredChemicals = chemicals.filter(chemical => {
    return (
      chemical.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chemical.grade.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chemical.concentration.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      {/* Search bar component */}
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />

      {/* List of filtered chemicals */}
      <div>
        {filteredChemicals.length === 0 ? (
          <p>No chemicals found</p>
        ) : (
          filteredChemicals.map((chemical) => (
            <div key={chemical.id} className="border-b py-4">
              <h3 className="text-xl font-semibold">{chemical.name}</h3>
              <p>Grade: {chemical.grade}</p>
              <p>Concentration: {chemical.concentration}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

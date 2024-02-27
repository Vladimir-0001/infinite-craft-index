// src/App.jsx
import React, { useState } from 'react';
import TreeNode from './components/TreeNode';
import { findBaseItemsTree } from './utils/searchHelpers';
import './App.css'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const baseComponentsTree = findBaseItemsTree(searchTerm);
    setResults([baseComponentsTree]); // Wrap in array for consistent mapping
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for an item"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        <h2>Crafting Tree:</h2>
        {results.map((result, index) => (
          <TreeNode key={index} node={result} />
        ))}
      </div>
    </div>
  );
};

export default App;

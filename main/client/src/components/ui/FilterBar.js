import React from 'react';
import { filterOptions } from '../../data/projects';
import './FilterBar.css';

const FilterBar = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="filter-bar">
      {filterOptions.map(option => (
        <button
          key={option.value}
          className={`filter-btn ${activeFilter === option.value ? 'active' : ''}`}
          onClick={() => onFilterChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;

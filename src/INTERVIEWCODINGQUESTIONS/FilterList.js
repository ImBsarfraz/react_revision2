import React, { useState } from 'react';

export default function FilterList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [list, setList] = useState([
    'Apple',
    'Banana',
    'Orange',
  ]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const filteredList = list.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={handleChange} 
      />
      <ul>
        {filteredList.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
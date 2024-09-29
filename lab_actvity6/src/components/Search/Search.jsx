import React, { useState } from 'react';
import profiles from "../../data/profiles";
import UserProfile from '../UserProfile/UserProfile';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);

  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value.toLowerCase();
    const filtered = profiles.filter(profile => 
      profile.name.toLowerCase().includes(newSearchTerm)
    );
    setFilteredProfiles(filtered);
    setSearchTerm(newSearchTerm);
  }

  return (
    <div className="search">
      <input 
        type="text" 
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for profiles..."
      />
      <div className="results">
        {filteredProfiles.map((profile) => (
          <UserProfile key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default Search;
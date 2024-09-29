import React from 'react';

const UserProfile = ({ profile }) => {
  return (
    <div className="profile-page">
      <h1>{profile.name}</h1>
      <p>Age: {profile.age}</p>
      <p>Bio:</p>
      <p>{profile.bio}</p>
    </div>
  );
};

export default UserProfile;
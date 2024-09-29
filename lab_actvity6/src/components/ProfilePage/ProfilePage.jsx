import React from 'react';
import "./ProfilePage.css"

const ProfilePage = () => {
  const profileData = {
    name: "AMAN",
    age: 24,
    bio: "Enthuziast in leaning new technologies"
  };

  return (
    <div className="profile-page">
      <h1>{profileData.name}</h1>
      <p>Age: {profileData.age}</p>
      <p>Bio:</p>
      <p>{profileData.bio}</p>
    </div>
  );
};

export default ProfilePage;
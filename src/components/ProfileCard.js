import React from 'react';
import { Link } from 'react-router-dom';
import './profile-img.css';

function ProfileCard({ profile, onSummaryClick }) {
  return (
    <div className="card">
      <Link to={`/profile/${profile.id}`} className="card-link">
        <img
          src={`/images/${profile.image}`}
          alt={profile.name}
          className="profile-img"
        />
        <h3>{profile.name}</h3>
        <p>{profile.title}</p>
        <p>{profile.location}</p>
      </Link>
      <div className="summary-container">
        <button
          className="summary-btn"
          onClick={() => {
             const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(profile.location)}`;
            window.open(mapUrl, '_blank');
          }}
        >
          Summary
        </button>
      </div>
      <p>{profile.email}</p>
    </div>
  );
}

export default ProfileCard;

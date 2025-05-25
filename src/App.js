import React, { useState } from 'react';
import profilesData from './data/profiles';
import MapView from './components/MapView';
import AdminPanel from './components/AdminPanel';
import ProfileCard from './components/ProfileCard';
import ProfileDetails from './components/ProfileDetails';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  const [profiles, setProfiles] = useState(profilesData);
  const [selected, setSelected] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
     
      <nav style={{ padding: '10px', backgroundColor: '#f2f2f2' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/admin">Admin Panel</Link>
      </nav>

      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <input
                type="text"
                placeholder="Search by name or location"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ margin: '20px', padding: '10px', width: '300px' }}
              />

              <div className="card h-64 w-64 p-4 shadow rounded bg-white">
                <div className="profile-container">
                  {profiles
                    .filter(profile =>
                      profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      profile.location.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map(profile => (
                      <ProfileCard
                        key={profile.id}
                        profile={profile}
                        onSummaryClick={setSelected}
                      />
                    ))}
                </div>
                {selected && (
                  <div style={{ padding: '20px' }}>
                    <MapView lat={selected.lat} lng={selected.lng} />
                  </div>
                )}
              </div>
            </>
          }
        />

        <Route
          path="/admin"
          element={
            <AdminPanel profiles={profiles} setProfiles={setProfiles} />
          }
        />
        <Route
    path="/profile/:id"
    element={<ProfileDetails profiles={profiles} />}
/>
      </Routes>
    </Router>
  );
}

export default App;

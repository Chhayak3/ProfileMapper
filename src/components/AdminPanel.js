import React, { useState } from 'react';

function AdminPanel({ profiles, setProfiles }) {
  const [form, setForm] = useState({
    name: '',
    title: '',
    location: '',
    lat: '',
    lng: '',
    email: '',
    company: '',
    image: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    
    if (!form.name || !form.title || !form.location || !form.email || !form.image) {
      alert("Please fill all required fields.");
      return;
    }

    if (isNaN(form.lat) || isNaN(form.lng)) {
      alert("Please enter valid numeric latitude and longitude.");
      return;
    }

    const newProfile = {
      ...form,
      id: Date.now(),
      lat: parseFloat(form.lat),
      lng: parseFloat(form.lng)
    };

    setProfiles([...profiles, newProfile]);

    
    setForm({
      name: '',
      title: '',
      location: '',
      lat: '',
      lng: '',
      email: '',
      company: '',
      image: ''
    });

    alert("Profile added successfully ✅");
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this profile?");
    if (confirmDelete) {
      setProfiles(profiles.filter(profile => profile.id !== id));
    }
  };

  return (
    <div class="admin-panel">
      <h2>Admin Panel</h2>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginBottom: '20px',
        maxWidth: '400px'
      }}>
        <input type="text" name="name" placeholder="Name *" value={form.name} onChange={handleChange} />
        <input type="text" name="title" placeholder="Title *" value={form.title} onChange={handleChange} />
        <input type="text" name="location" placeholder="Location *" value={form.location} onChange={handleChange} />
        <input type="text" name="lat" placeholder="Latitude *" value={form.lat} onChange={handleChange} />
        <input type="text" name="lng" placeholder="Longitude *" value={form.lng} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email *" value={form.email} onChange={handleChange} />
        <input type="text" name="company" placeholder="Company" value={form.company} onChange={handleChange} />
        <input type="text" name="image" placeholder="Image Filename *" value={form.image} onChange={handleChange} />
        <button onClick={handleAdd}>Add Profile</button>
      </div>

      <ul>
        {profiles.map(profile => (
          <li key={profile.id} >
            <strong>{profile.name}</strong> – {profile.title}
            <button
              onClick={() => handleDelete(profile.id)}
             
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;

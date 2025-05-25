import { useParams } from 'react-router-dom';

function ProfileDetails({ profiles }) {
  const { id } = useParams();
  const profile = profiles.find(p => p.id === parseInt(id));

  if (!profile) return <p>Profile not found.</p>;

  return (
    <div className="profile-details">
      <img src={`/images/${profile.image}`} alt={profile.name} className="profile-img" />
      <h2>{profile.name}</h2>
      <p><strong>Title:</strong> {profile.title}</p>
      <p><strong>Location:</strong> {profile.location}</p>
      <p><strong>Email:</strong> <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
      <p><strong>Company:</strong> {profile.company}</p>
      <p><strong>Interests:</strong> Fullstack, Tech Talks</p> 
    </div>
  );
}

export default ProfileDetails;

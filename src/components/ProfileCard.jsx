import './ProfileCard.css'

function ProfileCard({ name, program, school, tagline, skills, isFeatured }) {
  return (
    <div className="profile-card">
            {isFeatured && <span className="featured-badge">⭐ Featured</span>}
      <h1>{name}</h1>
      <h2>{program}</h2>
      <p>{school}</p>
      <p className="tagline">"{tagline}"</p>

      <ul className="skills">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProfileCard
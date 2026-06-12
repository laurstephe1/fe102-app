import './ProfileCard.css'

function ProfileCard({ name, program, school, tagline, skills }) {
  return (
    <div className="profile-card">
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
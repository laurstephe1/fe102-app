import ProfileCard from './components/ProfileCard.jsx'
import './App.css'

const profiles = [
  {
    id: 1,
    name: "Lauren Stephens",
    program: "AI Software Engineering",
    school: "Maestro AI University",
    tagline: "Building real things, one line at a time.",
    skills: ["Python", "JavaScript", "React", "HTML & CSS"],
    isFeatured: true,
  },
  {
    id: 2,
    name: "Ada Lovelace",
    program: "Computer Science",
    school: "University of London",
    tagline: "The first programmer.",
    skills: ["Algorithms", "Mathematics", "Logic"],
    isFeatured: false,
  },
  {
    id: 3,
    name: "Grace Hopper",
    program: "Software Engineering",
    school: "Yale University",
    tagline: "The most dangerous phrase is we've always done it this way.",
    skills: ["COBOL", "Compilers", "Leadership"],
    isFeatured: false,
  },
]

function App() {
  return (
    <div>
      <h1>Student Profiles</h1>
      <p className="subtitle">FE102 — React Fundamentals</p>
      <div className="card-grid">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            program={profile.program}
            school={profile.school}
            tagline={profile.tagline}
            skills={profile.skills}
            isFeatured={profile.isFeatured}
          />
        ))}
      </div>
    </div>
  )
}

export default App
import ProfileCard from './components/ProfileCard.jsx'

function App() {
  const skills = [
    "Python",
    "JavaScript",
    "React",
    "HTML & CSS",
    "AI Software Engineering",
  ]

  return (
    <div>
      <ProfileCard
        name="Lauren Stephens"
        program="AI Software Engineering"
        school="Maestro AI University"
        tagline="Building real things, one line at a time."
        skills={skills}
      />
    </div>
  )
}

export default App
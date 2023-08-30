import './App.css'
import UserProfileCard from './components/UserProfileCard'

function App() {
  const user = {
    name: 'Abhishek',
    picture: 'https://avatars.githubusercontent.com/u/70791598?v=4',
    bio:'Senio Frontend Developer'
  }

  return (
    <div className='App'>
        <UserProfileCard name={user.name} picture={user.picture} bio={user.bio}/>
    </div>
  )
}

export default App

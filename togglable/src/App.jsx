import Toggleable from './components/Toggleable'
import './App.css'

function App() {
  return (
    <div className='app'>
      <h1>Toggleable Component</h1>
      <Toggleable content={<p>You can toggle this</p>}/>
    </div>
  )
}

export default App

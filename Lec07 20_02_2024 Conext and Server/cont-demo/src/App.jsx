import AddHobby from './AddHobby'
import './App.css'
import HobbiesList from './HobbiesList'
import HobbyContextProvider from './HobbyContextProvider'

function App(props) {


  return (
    <>
      <HobbyContextProvider>
        <HobbiesList />
        <AddHobby />
      </HobbyContextProvider>
    </>
  )
}

export default App

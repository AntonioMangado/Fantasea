import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import { UserContext } from './context/UserContext'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'


function App() {

  const [ username, setUsername ] = useState("")

  const updateUsername = (newUsername) => {
    setUsername(newUsername)
  }

  const userData = { username, updateUsername }

  return (
    <>
      <BrowserRouter >
        <UserContext.Provider value={ userData }>
          <Header/>
          <Main/>
        </UserContext.Provider>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App

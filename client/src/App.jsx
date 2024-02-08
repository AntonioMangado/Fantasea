import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import { AuthProvider } from './context/AuthProvider'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'


function App() {

  const [ username, setUsername ] = useState("")

  const userData = { username, setUsername }

  return (
    <>
      <BrowserRouter >
        <AuthProvider>
          <Header/>
          <Main/>
        </AuthProvider>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App

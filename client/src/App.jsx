import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <BrowserRouter >
        <AuthProvider>
          <Header/>
          <Main/>
          <Footer/>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App

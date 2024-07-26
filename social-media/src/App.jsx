import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import Footer from './components/Footer'
import Post from './components/Post'
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost'
function App() {

  return (
    <>
      <div className="app-container">
        <Sidebar />
        <div className="app-content">
          <Header />
          <CreatePost/>
          <Post/>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App

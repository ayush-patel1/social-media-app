import './App.css'
import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import Footer from './components/Footer'
import Post from './components/Post'
import PostList from './components/PostList'
import Sidebar from './components/Sidebar'
import PostListProvider from './store/post-list-store'
import CreatePost from './components/CreatePost'
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  const handleClick = (e) => {
    setSelectedTab(e);
  }
  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <Sidebar selectedTab={selectedTab} clickHandler={handleClick} />
          <div className="app-content">
            <Header />
            {selectedTab === 'Home' ? <PostList /> : <CreatePost />}
            <Footer />
          </div>
        </div>
      </PostListProvider>
    </>
  )
}

export default App

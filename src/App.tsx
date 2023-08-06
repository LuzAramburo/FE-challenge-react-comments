import './App.css'
import {CommentList} from "./components/comments/CommentList.tsx";

function App() {

  return (
    <div className="bg-blue-50 py-10 min-h-screen">
    <div className="container mx-auto px-4">
      <CommentList />
    </div>
    </div>
  )
}

export default App

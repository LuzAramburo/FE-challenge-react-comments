import './App.css';
import { CommentList } from './components/comments/CommentList.tsx';
import { useEffect, useState } from 'react';
import { AuthContext } from './contexts/AuthContext.tsx';
import { IComment } from './interfaces/comments.interfaces';
import { CommentsListContext } from './contexts/CommentListContext.tsx';
import { ICurrentUser } from './interfaces/user.interfaces';

// TODO use reducer
// const commentsList: IComment[] = data.comments;

function App() {
  const [currentUser, setUser] = useState<null | ICurrentUser>(null);
  const [comments, setComments] = useState([] as IComment[]);

  const fetchJson = () => {
    fetch('./data/data.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setComments(data.comments);
        setUser(data.currentUser);
      })
      .catch((e: Error) => {
        console.log(e.message);
      });
  };

  useEffect(() => {
    fetchJson();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setUser }}>
      <CommentsListContext.Provider value={{ comments }}>
        <div className="bg-blue-50 py-10 min-h-screen">
          <div className="max-w-3xl mx-auto px-4">{comments.length > 0 && <CommentList comments={comments} />}</div>
        </div>
      </CommentsListContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;

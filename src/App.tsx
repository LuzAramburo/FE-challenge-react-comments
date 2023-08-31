import './App.css';
import { CommentList } from './components/comments/CommentList.tsx';
import { useEffect, useState } from 'react';
import { AuthContext } from './contexts/AuthContext.tsx';
import { CommentsProvider } from './contexts/CommentListContext.tsx';
import { IUser } from './interfaces/user.interfaces.ts';

function App() {
  const [currentUser, setUser] = useState<null | IUser>(null);

  const fetchJson = () => {
    fetch('./data/data.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUser(data.currentUser);
      })
      .catch((e: Error) => {
        console.log(e.message);
      });
  };

  useEffect(() => {
    fetchJson();
  }, []);

  if (currentUser === null) return <div>Loading...</div>;

  return (
    <AuthContext.Provider value={{ currentUser, setUser }}>
      <CommentsProvider>
        <div className="bg-blue-50 py-10 min-h-screen">
          <div className="max-w-3xl mx-auto px-4">
            <CommentList />
          </div>
        </div>
      </CommentsProvider>
    </AuthContext.Provider>
  );
}

export default App;

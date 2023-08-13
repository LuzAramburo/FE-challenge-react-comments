import './App.css';
import { CommentList } from './components/comments/CommentList.tsx';
import { useState } from 'react';
import { OwnerContext } from './store/OwnerContext.tsx';

function App() {
  const [owned, setOwned] = useState(false);
  return (
    <OwnerContext.Provider value={{ owned, setOwned }}>
      <div className="bg-blue-50 py-10 min-h-screen">
        <div className="max-w-3xl mx-auto px-4">
          <button onClick={() => setOwned(!owned)} className="border border-gray-400 py-2 px-4 mb-4">
            Toggle Ownership: {`${owned}`}
          </button>
          <CommentList />
        </div>
      </div>
    </OwnerContext.Provider>
  );
}

export default App;

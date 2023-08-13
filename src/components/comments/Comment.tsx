import { CommentVotes } from './CommentVotes.tsx';
import { CommentUser } from './CommentUser.tsx';
import { ItemContainer } from '../UI/ItemContainer.tsx';
import { CommentActions } from './CommentActions/CommentActions.tsx';
import { useState } from 'react';
import { CommentForm } from './CommentForm.tsx';
import { CommentContext } from '../../store/CommentContext.tsx';
import { useOwnerContext } from '../../store/OwnerContext.tsx';

const commentText = `Impressive! ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam asperiores consequuntur delectus distinctio nam quisquam quos. Aliquam animi impedit inventore quae. A exercitationem molestiae quas? Iste perferendis tempora vitae!`;

export const Comment = () => {
  const { owned } = useOwnerContext();
  const [editing, setEditing] = useState(false);
  return (
    <CommentContext.Provider value={{ editing, setEditing }}>
      <ItemContainer>
        <CommentVotes />
        <div className="flex-grow">
          <div className="flex justify-between">
            <CommentUser owned={owned} />
            <CommentActions owned={owned} />
          </div>
          {!editing && <div className="mt-2 text-gray-500">{commentText}</div>}
          {editing && <CommentForm commentText={commentText} />}
        </div>
      </ItemContainer>
    </CommentContext.Provider>
  );
};

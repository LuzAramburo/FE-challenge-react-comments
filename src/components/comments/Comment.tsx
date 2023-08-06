import { CommentVotes } from './CommentVotes.tsx';
import { CommentUser } from './CommentUser.tsx';
import { ItemContainer } from '../UI/ItemContainer.tsx';
import { CommentActions } from './CommentActions/CommentActions.tsx';
import { useState } from 'react';
import { CommentForm } from './CommentForm.tsx';

export const Comment = () => {
  const [owned] = useState(true);
  return (
    <ItemContainer>
      <CommentVotes />
      <div>
        <div className="flex justify-between">
          <CommentUser owned={owned} />
          <CommentActions owned={owned} />
        </div>
        {!owned && (
          <div className="mt-2 text-gray-500">
            Impressive! ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam asperiores consequuntur
            delectus distinctio nam quisquam quos. Aliquam animi impedit inventore quae. A exercitationem molestiae
            quas? Iste perferendis tempora vitae!
          </div>
        )}
        {owned && <CommentForm />}
      </div>
    </ItemContainer>
  );
};

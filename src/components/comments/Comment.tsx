import {CommentVotes} from "./CommentVotes.tsx";
import {CommentUser} from "./CommentUser.tsx";

export const Comment = () => {
  return (
      <div className="bg-white rounded-lg p-4 flex">
        <CommentVotes />
        <div>
          <div className="flex justify-between">
            <CommentUser />
            <div>Actions</div>
          </div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam asperiores consequuntur delectus distinctio nam quisquam quos. Aliquam animi impedit inventore quae. A exercitationem molestiae quas? Iste perferendis tempora vitae!</div>
        </div>
      </div>
  )
}

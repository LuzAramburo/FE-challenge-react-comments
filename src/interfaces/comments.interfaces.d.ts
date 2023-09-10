import { IUser } from './user.interfaces.d.ts';

export interface IComment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: IUser;
  replies: IReply[];
}

export interface IReply extends Omit<IComment, 'replies'> {
  replyingTo: string;
}

export interface ICommentsList {
  comments: IComment[];
}

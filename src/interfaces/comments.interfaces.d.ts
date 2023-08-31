import { IUser } from './user.interfaces.ts';

export interface IComment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: IUser;
  replies: IReply[];
}

export interface IReply extends IComment {
  replyingTo: string;
}

export interface ICommentsList {
  comments: IComment[];
}

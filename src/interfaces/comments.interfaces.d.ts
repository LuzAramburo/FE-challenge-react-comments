import { IImage } from './image.interfaces';

export interface IUser {
  image: IImage;
  username: string;
}

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

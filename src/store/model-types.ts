type ContentType = "text" | "blockquote" | "image" | "code";
export interface Content {
  id: number;
  type: ContentType;
  body: string;
  index: number;
}

export interface DataContent {
  id: string;
  slug: string;
  title: string;
  uuid: string;
  tag: string;
  username: string;
  description: string;
  createdAt: any;
  updateAt: any;
}

export type AuthMethod = "google" | "facebook" | "twitter" | "github" | "basic";
export interface User {
  username: string;
  email: string;
  uuid: any;
  password: string;
  createdAt: any;
  updatedAt: any;
  authMethod: AuthMethod;
}
export interface Result {
  message: any;
  success: boolean;
}

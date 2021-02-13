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
  content: Array<Content>;
  createdAt: any;
  updateAt: any;
}

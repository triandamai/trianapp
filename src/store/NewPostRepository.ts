type ContentType =
  | "text"
  | "paragraf"
  | "blockquote"
  | "code"
  | "heading"
  | "image"
  | "quote";

interface Content {
  name: string;
  type: ContentType;
  id: any;
  body?: any;
  index?: number;
}
export const ContentType: Array<Content> = [
  { name: "Paragraf", id: 1, type: "text", body: "" },
  { name: "BlockQuote", id: 2, type: "blockquote", body: "" },
  { name: "Code Preview", id: 3, type: "code", body: "" },
  { name: "Gambar", id: 4, type: "image", body: "" },
  { name: "Heading", id: 5, type: "heading", body: "" },
  { name: "Kutipan", id: 6, type: "quote", body: "" }
];

export const savePost = async (): Promise<any> => {
  return new Promise(resolve => {
    resolve({});
  });
};

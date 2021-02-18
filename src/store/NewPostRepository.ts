import { reactive } from "vue";

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
  { name: "Paragraf", id: 1, type: "text", body: "", index: 0 },
  { name: "BlockQuote", id: 2, type: "blockquote", body: "", index: 0 },
  { name: "Code Preview", id: 3, type: "code", body: "", index: 0 },
  { name: "Gambar", id: 4, type: "image", body: "", index: 0 },
  { name: "Heading", id: 5, type: "heading", body: "", index: 0 },
  { name: "Kutipan", id: 6, type: "quote", body: "", index: 0 }
];

const DataContent = reactive<Array<Content>>([
  { name: "Paragraf", id: 1, type: "text", body: "", index: 0 },
  { name: "Paragraf", id: 1, type: "text", body: "", index: 0 }
]);
export const usePost = () => {
  const onClone = (data: any) => {
    return data;
  };
  const onDrop = (evt: any) => {
    console.log(evt);
  };

  return {
    ContentType,
    onClone,
    onDrop,
    DataContent
  };
};

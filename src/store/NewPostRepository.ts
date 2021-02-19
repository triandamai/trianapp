import { reactive, ref } from "vue";
import { dbTutorial, storage } from "@/store/firbaseDatabase";

/**
 * ===== type
 *
 */
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
interface DataContent {
  title: string;
  id: string;
  slug: string;
  headerUrl: string;
  tag: Array<string>;
  editor: string;
  content: Array<Content>;
  createdAt: any;
  updatedAt: any;
}
interface imageHeader {
  url: string;
  progress: any;
}
export const ContentType: Array<Content> = [
  { name: "Paragraf", id: 1, type: "text", body: "", index: 0 },
  { name: "BlockQuote", id: 2, type: "blockquote", body: "", index: 0 },
  { name: "Code Preview", id: 3, type: "code", body: "", index: 0 },
  { name: "Gambar", id: 4, type: "image", body: "", index: 0 },
  { name: "Heading", id: 5, type: "heading", body: "", index: 0 },
  { name: "Kutipan", id: 6, type: "quote", body: "", index: 0 }
];

/**
 * ========== state section ===========
 */
const content = reactive<DataContent>({
  id: "",
  title: "",
  slug: "",
  tag: ["tutorial"],
  editor: "",
  headerUrl: "",
  content: [],
  createdAt: "",
  updatedAt: ""
});
const urlImageHeader = reactive<imageHeader>({
  url: "",
  progress: 0
});
/**
 * ======== function ===========
 */

export const usePost = () => {
  const onClone = (data: any) => {
    return data;
  };
  const onDrop = (evt: any) => {
    console.log(evt);
  };

  const uploadImageHeader = (data: { slug: string; file: File }) => {
    storage
      .ref("tutorial")
      .child(data.slug + ".jpg")
      .put(data.file)
      .then(res => {
        urlImageHeader.url = `${res.ref.fullPath}`;
        urlImageHeader.progress = res.bytesTransferred;
      })
      .catch(e => {
        console.log(e);
      });
  };
  const uploadContent = () => {
    dbTutorial
      .doc(content.id)
      .set(content, { merge: true })
      .then(res => {})
      .catch(e => {});
  };
  const deleteContent = () => {
    dbTutorial
      .doc(content.id)
      .delete()
      .then(res => {})
      .catch(e => {});
  };
  return {
    ContentType,
    onClone,
    onDrop,
    content
  };
};

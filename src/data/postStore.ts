import { reactive } from "vue";
import { IPost, IFilter } from "../utils/Types";
const postState = reactive<Array<IPost>>([
  {
    id: "324rsfd",
    title: "Flutter Firebase App from Scratch",
    description:
      "Build complex production-ready from scratch with Flutter and Firebase",
    image: "https://fireship.io/courses/flutter-firebase/img/featured.jpg",
    date: "03 Apr 2021",
    tags: ["Flutter", "Firebase"],
  },
  {
    id: "324rsfd",
    title: "Angular 9 Firebase ",
    description:
      "Build complex production-ready from scratch with Flutter and Firebase",
    image: "https://fireship.io/courses/angular/img/featured.jpg",
    date: "03 Apr 2021",
    tags: ["Angular"],
  },
  {
    id: "324rsfd",
    title: "Coinbase",
    description:
      "Build complex production-ready from scratch with Flutter and Firebase",
    image:
      "https://fireship.io/lessons/crypto-payments-web-firebase/img/featured.webp",
    date: "03 Apr 2021",
    tags: ["Crypto"],
  },
]);
const filterState = reactive<IFilter>({
  tags: [
    "VueJs",
    "TypeScript",
    "Java",
    "Android",
    "Javascript",
    "Firebase",
    "Flutter",
  ],
  tagselected: "",
  search: "",
});
export function usePost() {
  return {
    postState,
    filterState,
  };
}

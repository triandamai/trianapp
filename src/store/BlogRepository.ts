import { DataContent } from "@/store/module/model-types";
import { reactive } from "vue";
import { dbTutorial } from "@/store/firbaseDatabase";
const dataTutorial = reactive<Array<DataContent>>([]);

export function useBlog() {
  const addTutorial = (payload: any) => {
    const exist = dataTutorial.some(tutorial => (tutorial.id = payload.id));
    if (!exist) return dataTutorial.push(payload);
    else
      Object.assign(
        dataTutorial[dataTutorial.map(item => item.id).indexOf(payload.id)],
        payload
      );
  };

  const changeTutorial = (payload: any) => {
    Object.assign(
      dataTutorial[
        dataTutorial.map(tutorial => tutorial.id).indexOf(payload.id)
      ],
      payload
    );
  };
  const removeTutorial = (payloadId: any) => {
    dataTutorial.splice(
      dataTutorial.map(tutorial => tutorial.id).indexOf(payloadId)
    );
  };
  const getAlltutorial = () => {
    dbTutorial.get().then(doc => {
      doc.forEach(snapshot => {
        if (snapshot.exists) {
          addTutorial(snapshot.data());
        } else {
          //error
        }
      });
    });
  };
  const listenTutorial = () => {
    dbTutorial.onSnapshot(doc => {
      doc.docChanges().forEach(change => {
        if (change.type == "added") {
          addTutorial(change.doc.data());
        }
        if (change.type == "removed") {
          removeTutorial(change.doc.data());
        }
        if (change.type == "modified") {
          changeTutorial(change.doc.data());
        }
      });
    });
  };

  return {
    dataTutorial,
    getAlltutorial,
    changeTutorial,
    removeTutorial,
    addTutorial,
    listenTutorial
  };
}

import { DataContent } from "@/store/model-types";
import { reactive } from "vue";
import { dbTutorial } from "@/store/firbaseDatabase";
import { Result } from "@/store/model-types";
const dataTutorial = reactive<Array<DataContent>>([]);

export function useBlog() {
  function uploadTutorial(data: { id: string; payload: any }): Promise<Result> {
    return new Promise(resolve => {
      dbTutorial
        .doc(data.id)
        .set(data.payload, { merge: true })
        .then(res => {
          resolve({
            success: true,
            message: res
          });
        })
        .catch(e => {
          resolve({ success: false, message: e });
        });
    });
  }
  function addTutorial(payload: any) {
    const exist = dataTutorial.some(tutorial => (tutorial.id = payload.id));
    if (!exist) return dataTutorial.push(payload);
    else
      Object.assign(
        dataTutorial[dataTutorial.map(item => item.id).indexOf(payload.id)],
        payload
      );
  }

  function changeTutorial(payload: any) {
    Object.assign(
      dataTutorial[
        dataTutorial.map(tutorial => tutorial.id).indexOf(payload.id)
      ],
      payload
    );
  }
  function removeTutorial(payloadId: any) {
    dataTutorial.splice(
      dataTutorial.map(tutorial => tutorial.id).indexOf(payloadId)
    );
  }
  function getAlltutorial() {
    dbTutorial.get().then(doc => {
      doc.forEach(snapshot => {
        if (snapshot.exists) {
          addTutorial(snapshot.data());
        } else {
          //error
        }
      });
    });
  }
  function listenTutorial() {
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
  }

  return {
    dataTutorial,
    getAlltutorial,
    changeTutorial,
    removeTutorial,
    addTutorial,
    listenTutorial,
    uploadTutorial
  };
}

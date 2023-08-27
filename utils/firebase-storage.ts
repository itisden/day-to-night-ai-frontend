import firebaseApp from "./firebase";
import { getStorage, ref } from "firebase/storage";

const storage = getStorage(firebaseApp);

const ROOT_FOLDER = "day-to-night";

export const rootRef = ref(storage, ROOT_FOLDER);

export const createFileRef = (file: File) => ref(rootRef, file.name);

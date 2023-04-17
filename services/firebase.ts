import { updateDoc, getDocs, getDoc, doc, collection, query, where, addDoc } from 'firebase/firestore';

import { database } from "../firebaseConfig";
import { Todo, TodoWOId } from '../pages/types';

const dbInstance = collection(database, 'todos');

export const getInfo = async () => {
  const data = await getDocs(dbInstance);

  const listOfTodos = data?.docs?.map((item)=>({
    ...item.data(),
    id: item.id
  }));

  return listOfTodos;
}

export const updateDocument = async (newValues: Todo, id: string) => {
  const reference = doc(dbInstance, id);
  return await updateDoc(reference, { ...newValues });
}

export const createDoc = async (info: TodoWOId) => {
  const response = await addDoc(dbInstance, {...info})
  
  return response?.id;
}

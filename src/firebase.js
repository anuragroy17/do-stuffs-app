import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  setDoc,
  Timestamp,
  updateDoc,
  where,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC1U7Z5Ny7xptTxaPEZRQvio4MzEJ6uhyo',
  authDomain: 'do-stuffs-app.firebaseapp.com',
  projectId: 'do-stuffs-app',
  storageBucket: 'do-stuffs-app.appspot.com',
  messagingSenderId: '497498517213',
  appId: '1:497498517213:web:5eb04080ab568620e2b534',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const userCollectionRef = collection(db, 'users');
const userDataRef = collection(db, 'userData');

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(userCollectionRef, where('uid', '==', user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(userCollectionRef, {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      });
    }
  } catch (err) {
    throw new Error(err);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    throw new Error(err);
  }
};

const addTask = async (taskName) => {
  try {
    const saveTask = {
      taskName: taskName,
      uid: auth.currentUser.uid,
      date: Timestamp.fromDate(new Date()),
      lastEdited: Timestamp.fromDate(new Date()),
    };
    const tasksRef = collection(userDataRef, auth.currentUser.uid, 'tasks');
    await setDoc(doc(tasksRef), saveTask);
  } catch (err) {
    throw new Error(err);
  }
};

const getAllTasks = async () => {
  try {
    const tasksRef = collection(userDataRef, auth.currentUser.uid, 'tasks');
    const q = query(tasksRef, orderBy('lastEdited', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot;
  } catch (err) {
    throw new Error(err);
  }
};

const getTodosByTaskId = async (taskId) => {
  try {
    const todosRef = collection(
      userDataRef,
      auth.currentUser.uid,
      'tasks',
      taskId,
      'todos'
    );
    const q = query(todosRef, orderBy('date'));
    const querySnapshot = await getDocs(q);
    return querySnapshot;
  } catch (err) {
    throw new Error(err);
  }
};

const addTodo = async (todoName, taskId) => {
  try {
    const saveTodo = {
      todoName: todoName,
      uid: auth.currentUser.uid,
      date: Timestamp.fromDate(new Date()),
      isCompleted: false,
    };
    const taskRef = doc(userDataRef, auth.currentUser.uid, 'tasks', taskId);
    const todosRef = collection(taskRef, 'todos');
    await setDoc(doc(todosRef), saveTodo);

    const taskUpdate = {
      lastEdited: Timestamp.fromDate(new Date()),
    };
    await updateDoc(taskRef, taskUpdate);
  } catch (err) {
    throw new Error(err);
  }
};

const updateTodo = async (td, taskId) => {
  const saveTodo = {
    isCompleted: td.isCompleted,
  };

  const taskUpdate = {
    lastEdited: Timestamp.fromDate(new Date()),
  };

  const taskRef = doc(userDataRef, auth.currentUser.uid, 'tasks', taskId);
  const todosRef = doc(taskRef, 'todos', td.id);
  await updateDoc(todosRef, saveTodo);
  await updateDoc(taskRef, taskUpdate);
};

export {
  auth,
  db,
  signInWithGoogle,
  logout,
  addTask,
  getAllTasks,
  addTodo,
  updateTodo,
  getTodosByTaskId,
};

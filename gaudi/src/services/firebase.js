// Firebase
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  where,
  query,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAg4fXYYMtnZK18fHzo3jHybr2OAiExtnk",
  authDomain: "ecommerce-react-coderhouse-123.firebaseapp.com",
  projectId: "ecommerce-react-coderhouse-123",
  storageBucket: "ecommerce-react-coderhouse-123.appspot.com",
  messagingSenderId: "502932635835",
  appId: "1:502932635835:web:b0311c523241040e96699e",
};

const appFirebase = initializeApp(firebaseConfig);

const db = getFirestore(appFirebase);

async function getData() {
  const productsRef = collection(db, "products");
  const documentsSnapshot = await getDocs(productsRef);
  const documents = documentsSnapshot.docs;
  const docsData = documents.map((item) => {
    return { ...item.data(), id: item.id };
  });
  return docsData;
}

async function getProductData(id) {
  const docRef = doc(db, "products", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } else {
    throw new Error("No encontramos ese producto.");
  }
}

async function getCategoryData(categoryId) {
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("category", "==", categoryId));
  const documentsSnapshot = await getDocs(q);

  const documents = documentsSnapshot.docs;

  return documents.map((item) => ({ ...item.data(), id: item.id }));
}

async function createOrder(orderData) {
  const collectionRef = collection(db, "orders");
  const docCreated = await addDoc(collectionRef, orderData);

  return docCreated.id;
}

async function getOrder(id) {
  const docRef = doc(db, "orders", id);
  const docSnapshot = await getDoc(docRef);

  return { ...docSnapshot.data(), id: docSnapshot.id };
}

export { getData, getOrder, getProductData, getCategoryData, createOrder };

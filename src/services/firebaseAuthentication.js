import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyBGmrl68Xj3iXNh_5BMiWHvujN8gpvDMcw",
  authDomain: "solofertiladm-ae735.firebaseapp.com",
  databaseURL: "https://solofertiladm-ae735-default-rtdb.firebaseio.com",
  projectId: "solofertiladm-ae735",
  storageBucket: "solofertiladm-ae735.appspot.com",
  messagingSenderId: "737930469242",
  appId: "1:737930469242:web:ddd928b117e569250500c3",
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getDatabase();

export { auth, db };
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDtm3qGPIglGcEEnM_A_K3FVrly5rwA3UA",
    authDomain: "restaurantapp-f6f32.firebaseapp.com",
    databaseURL: "https://restaurantapp-f6f32-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-f6f32",
    storageBucket: "restaurantapp-f6f32.appspot.com",
    messagingSenderId: "1079534088898",
    appId: "1:1079534088898:web:daf1ebcdbdd4d1005b815b"
  };

  const app=getApps.length>0?getApp():initializeApp(firebaseConfig);
  const firestore=getFirestore(app)
  const storage=getStorage(app);

  export {app,firestore,storage};
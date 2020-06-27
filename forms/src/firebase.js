import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB8DL-VBfSIANBnzkk0so9n1_qWFVgiafY",
    authDomain: "forms-fa95a.firebaseapp.com",
    databaseURL: "https://forms-fa95a.firebaseio.com",
    projectId: "forms-fa95a",
    storageBucket: "forms-fa95a.appspot.com",
    messagingSenderId: "269518055517",
    appId: "1:269518055517:web:191c13beb9bb16712545b4",
    measurementId: "G-231Z19WK54"
  };

  firebase.initializeApp(firebaseConfig);
  const firebaseDB = firebase.database();

  export{
    firebaseDB
  }
  // .ref('users').orderByChild('age').once('value')
  // .then((snapshot)=>{
  //     const users = [];
  //     snapshot.forEach((childSnapshot)=>{
  //       users.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       })
  //     })
  //     console.log(users);
  // })
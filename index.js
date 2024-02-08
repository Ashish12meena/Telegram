 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
 import { getDatabase, set, get, ref } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
     apiKey: "AIzaSyBX_8dH5kq0TOVO32wG3SxRAjzp1fI_hAs",
     authDomain: "myfirstproject-ef90d.firebaseapp.com",
     projectId: "myfirstproject-ef90d",
     storageBucket: "myfirstproject-ef90d.appspot.com",
     messagingSenderId: "143281964881",
     appId: "1:143281964881:web:f8c5cda9da359a4c93b570"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getDatabase(app);
 console.log(db);
 function writeUserData(userID, name, email, count) {
     set(ref(db, 'users/' + userID), {
         name: name,
         email: email,
         count: count
     })
 }
 // writeUserData(1, "Ashish", "ashish@gmail.com", 7)
 function readData() {
     return new Promise((resolve, reject) => {
         const userRef = ref(db, 'users');
         get(userRef).then((snapshot) => {
             let result = 0;
             snapshot.forEach((chilsnapShot) => {
                 const data = chilsnapShot.val();
                 result = data.count;
                 document.getElementById('clickCount').textContent = result;
                 console.log("my name " + result);
             })
             resolve(result);
         }).catch(reject);
     })
 }
 // readData();

 // var ashish = document.getElementById('clickCount').innerHTML;
 // console.log("hellp "+ ashish);
 const link = document.getElementsByClassName('myLink');
 for (let links of link) {
     links.addEventListener('click', async () => {
         try {
             let count = await readData();
             console.log(count);
             count++; // Increment the count
             writeUserData(1, "Ashish", "ashish@gmail.com", count);
         } catch (error) {
             console.error("Error:", error);
         }
     });
 }
 readData();
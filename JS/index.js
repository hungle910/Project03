const init =() =>{
    var firebaseConfig = {
        apiKey: "AIzaSyDOP44IiZ1_HyxhnLNo07KrDYPTuLTE6Y4",
        authDomain: "mangax-2f3a0.firebaseapp.com",
        projectId: "mangax-2f3a0",
        storageBucket: "mangax-2f3a0.appspot.com",
        messagingSenderId: "618426965799",
        appId: "1:618426965799:web:0285c6ef81e0f26eb49302"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);



      firebase.auth().onAuthStateChanged(function(user){
          
      })
}
const init = () => {
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
  const db = firebase.firestore();

  console.log("đã chạy hàm init");

  firebase.auth().onAuthStateChanged(function (user) {
    if (user && user.emailVerified) {
      model.currentUser = {
        displayName: user.displayName,
        email: user.email
      };
      console.log("chạy vào if");
      view.setActiveScreen('homeScreen2');
      // visualViewport là cái gì nhỉ !!
    }
    else {
      console.log("chạy vào else");
      view.setActiveScreen('homeScreen');
    
      
    }
  })


}

//  có hàm init() nhưng chưa chạy hàm !!
window.onload = init;

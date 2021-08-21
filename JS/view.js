const view = {};
view.chainSawMan = {};
let temp;


function LR(){
  const signUp = document.getElementById("signUp")
  const signIn = document.getElementById("signIn");
  
  signUp.addEventListener("click", () => {
    view.setActiveScreen('registerScreen');
  })

  signIn.addEventListener("click", () => {
    view.setActiveScreen('loginScreen');
  })
}

function navBar() {
  const home = document.getElementById("home");

home.addEventListener("click", () => {
    view.setActiveScreen('homeScreen');
  }
  )

}


view.chainSawMan.chapter = (chapter) => {
  switch (chapter) {
    case "chap1":
      document.getElementById("app").innerHTML = components.chainSawMan.chap1;
      changeChap();
      navBar()
      


      break;

    case "chap2":
      document.getElementById("app").innerHTML = components.chainSawMan.chap2;
      console.log(temp);
      changeChap()
      navBar();
      

      
      break;
  }
}

view.setActiveScreen = (screenName) => {
  // hiểu đây là 1 function
  switch (screenName) {
    case "homeScreen":
      console.log(view);
      document.getElementById("app").innerHTML = components.homeScreen;
      document.getElementById('anhchinh').addEventListener('click', () => {
        view.chainSawMan.chapter('chap1');
      })

      document.getElementById("signIn").
      addEventListener("click",()=>{
        view.setActiveScreen("loginScreen");
      });

      document.getElementById("signUp").
      addEventListener("click",()=>{
        view.setActiveScreen("registerScreen");
      });


      document.getElementById("signUp").
      addEventListener("click",()=>{
        view.setActiveScreen("registerScreen");
      });

      document.getElementById("thaoluan").
      addEventListener("click",()=>{
        view.setActiveScreen("aboutScreen");
      });


      break;

    case "loginScreen":
      console.log("into loginScreen");
      document.getElementById("app").innerHTML = components.loginScreen; // chèn nội dung từ component


      document
        .getElementById("redirect-to-register")
        .addEventListener("click", () => {
          view.setActiveScreen("registerScreen");
        });

      // lấy ra thẻ form
      const loginForm = document.getElementById('login-form');
      loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // khoong load lai trang
        loginForm.email.value = loginForm.email.value.trim(); // làm cho người dùng nhập 
        //không bị thừa dấu cách bên trái or phải
        const dataLogin = {
          email: loginForm.email.value,
          password: loginForm.password.value
        }
        controller.login(dataLogin); // gọi tới hàm controller để xử lý chính tả khi người dùng nhập

      })
      break;

    case "registerScreen":
      document.getElementById("app").innerHTML = components.registerScreen;
      const registerForm = document.getElementById("register-form");

      registerForm.addEventListener("submit", (e) => {
        e.preventDefault(); // loại bỏ tính năng restart trang web
        const data = { // tạo ra 1 đối tượng để lưu những thông tin mình nhập vào
          firstName: registerForm.firstName.value,
          lastName: registerForm.lastName.value,
          email: registerForm.email.value,
          password: registerForm.password.value,
          confirmPassword: registerForm.confirmPassword.value,
        };
        console.log(data);
        controller.register(data);
      });

      document
        .getElementById("redirect-to-login")
        .addEventListener("click", () => {
          view.setActiveScreen("loginScreen");
        });
      break;

      case "homeScreen2":
        document.getElementById("app").innerHTML = components.homeScreen2;
        document.getElementById("welcome-user").innerText = + model.currentUser.displayName  ;
        document.getElementById('sign-out-button').addEventListener('click', () => {
          firebase.auth().signOut();
        });
        break;
  }
};
const view = {};
view.chainSawMan = {};
let temp;


function LR() {
    const signUp = document.getElementById("signUp")
    const signIn = document.getElementById("signIn");

    signUp.addEventListener("click", () => {
        view.setActiveScreen('registerScreen');
    })

    signIn.addEventListener("click", () => {
        view.setActiveScreen('loginScreen');
    })
}


// function changeChap() {
//     const changeChap = document.getElementById('changeChap');
//     changeChap.addEventListener('submit', change = (e) => {
//         e.preventDefault();
//         const chapterName = {
//             chap: changeChap.chap.value
//         }
//         console.log(chapterName.chap);
//         console.log(changeChap);


//         if (chapterName.chap == 1) {

//             view.billyBat.chapter('chap1');
//         } else if (chapterName.chap == 2) {
//             view.billyBat.chapter('chap2');
//         }

//         if (chapterName.chap == 3) {
//             view.billyBat.chapter('chap3');
//         }
//         console.log("this one");

//     });
// }

function navBar() {
    const home = document.getElementById("home");

    home.addEventListener("click", () => {
        view.setActiveScreen('homeScreen');
    })

}


view.chainSawMan.chapter = (chapter) => {
    switch (chapter) {
        case "chap1":
            document.getElementById("app").innerHTML = components.chainSawMan.chap1;
            console.log("da vao chap 1 chainSawMan");
            // changeChap();
            navBar();
            SubmitChap();

            break;

        case "chap2":
            document.getElementById("app").innerHTML = components.chainSawMan.chap2;
            console.log(temp);
            // changeChap()
            navBar();
            SubmitChap();
            break;
    }
}

//  Ham ho tro chuyen chap
function chuyenChap(chapter) {
    console.log("run SubmitChap");
    const select = document.getElementById("chapters");
    for (let i = 1; i < select.length; i++) {
        if (`chap${chapter}` === `chap${i}`) {
            view.chainSawMan.chapter(`chap${i}`);
        }
    }
}


// Ham bam chuyen chap
function SubmitChap() {
    const thanhchuyenchap = document.getElementById("thanhchuyenchap");

    thanhchuyenchap.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = {
            chapList: thanhchuyenchap.chapList.value
        }
        console.log(data.chapList);
        chuyenChap(data.chapList);

    })
}



view.setActiveScreen = (screenName, db) => {

    // hiểu đây là 1 function
    switch (screenName) {
        case "homeScreen":
            document.getElementById("app").innerHTML = components.homeScreen;
            document.getElementById('anhchinh').addEventListener('click', () => {
                view.chainSawMan.chapter('chap1');
            })

            LR()



            /* document.getElementById("thaoluan").
        addEventListener("click", () => {
          console.log("about screen");
          view.setActiveScreen("aboutScreen");
        });
*/
            document.getElementById("anhchinh").
            addEventListener("click", () => {
                console.log("đã click vào anhchinh");
                view.setActiveScreen("pageScreen");
            });

            comment(db);

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
                // loginForm.email.value = loginForm.email.value.trim(); // làm cho người dùng nhập 
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

        case "pageScreen":
            console.log("đã vào màn hình pageScreen");
            document.getElementById("app").innerHTML = components.chainSawMan.chap1;
            LR()
            break;

            /* case "aboutScreen":
               document.getElementById("app").innerHTML = components.aboutScreen;
               navBar()
               break;
               */


        case "homeScreen2":
            document.getElementById("app").innerHTML = components.homeScreen2;
            document.getElementById("welcome-user").innerText = model.currentUser.displayName;
            document.getElementById('sign-out-button').addEventListener('click', () => {
                firebase.auth().signOut();
            });

            document.getElementById("anhchinh").
            addEventListener("click", () => {
                console.log("đã click vào anhchinh");
                // view.setActiveScreen("");
                view.chainSawMan.chapter("chap1")
            });

            comment(db);
            break;

    }
};


// view.footer = (footer) => {
//     switch (footer) {
//         case "thanhchuyenchapvinhvien":
//             document.getElementById("thanhchuyenchapvinhvien").innerHTML = components.thanhchuyenchapvinhvien;
//             console.log("da co thanh chuyen chap vinh vien");
//             break;

//         default:
//             break;
//     }
// }
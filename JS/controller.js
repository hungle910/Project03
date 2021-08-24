const controller = {};
controller.register = (data) => {

  if (data.firstName.trim() === "") {
    document.getElementById("first-name-error").innerText =
      "Làm ơn hãy thêm tên của bạn";
  } else {
    document.getElementById("first-name-error").innerText = "";
  }

  if (data.lastName.trim() === "") {
    document.getElementById("last-name-error").innerText =
      "thêm cả họ nữa";
  } else {
    document.getElementById("last-name-error").innerText = "";
  }

  if (data.email.trim() === "") {
    document.getElementById("email-error").innerText =
      "nhập email của bạn";
  } else {
    document.getElementById("email-error").innerText = "";
  }

  if (data.password.trim() === "") {
    document.getElementById("password-error").innerText =
      "nhập mật khẩu của bạn";
  } else {
    document.getElementById("password-error").innerText = "";
  }
  if (data.confirmPassword.trim() === "") {
    document.getElementById("confirm-password-error").innerText =
      "nhập lại mật khẩu đi";
  } else if (data.confirmPassword.trim() !== data.password.trim()) {
    document.getElementById("confirm-password-error").innerText =
      "Mật khẩu nhập lại không giống nhau";
  } else {
    document.getElementById("confirm-password-error").innerText = "";
  }

  if (data.firstName.trim() !== "" &&
    data.lastName.trim() !== "" &&
    data.email.trim() !== "" &&
    data.password.trim() !== "" &&
    data.password.trim() === data.confirmPassword.trim()
  ) {
    model.register(data);
  }
}

controller.login = (dataLogin) => {
  if (dataLogin.email.trim() === "") {
    document.getElementById("email-error").
      innerText = `*Please input email`
  }
  else {
    document.getElementById("email-error").
      innerText = '';
  }
  if (dataLogin.password === "") {
    document.getElementById("password-error").
      innerText = `*Please type password`
  }
  else {
    document.getElementById("password-error").
      innerText = '';
  }

  /// Phần kiểm tra email và pass != "". 
  // Nếu khác rỗng thì mình đi vào phần model.login(dataLogin)
  if (dataLogin.email !== "" &&
    dataLogin.password !== "") {
    model.login(dataLogin);
  }

}
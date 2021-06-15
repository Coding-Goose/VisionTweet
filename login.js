function triggerDisabledState() {
    const mail = document.getElementById("login-mail").value;
    const password = document.getElementById("login-password").value;
    const checkbox = document.getElementById("dsgvo-checkbox").checked;
    const button = document.getElementById("login-button");
    if (!mail || !password || !checkbox || mail === "" || password === "" || !validateEmail(mail)) {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}

function login() {
    alert("login");
}

function validateEmail(email) {
    const re = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return re.test(String(email).toLowerCase());
}

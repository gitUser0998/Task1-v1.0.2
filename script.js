// lines 2 - 71 are for showing test user dialogues
function showPStyle() {
    /* 
     $('#point').hide()
     $('#protShow').hide()
     $('#protHide').show()
     $('#sHide').show() */

    var dots = document.getElementById("point");
    var showMoreTrigger = document.getElementById("protShow");
    var moreText = document.getElementById("sHide");

    dots.style.display = "none";
    showMoreTrigger.style.display = "none";
    moreText.style.display = "inline";
}

function hidePStyle() {
    /* 
    $('#protHide').hide()
    $('#sHide').hide()
    $('#point').show()
    $('#protShow').show() */

    var dots = document.getElementById("point");
    var showMoreTrigger = document.getElementById("protShow");
    var moreText = document.getElementById("sHide");

    moreText.style.display = "none";
    dots.style.display = "inline";
    showMoreTrigger.style.display = "inline";
}

function showSpStyle() {
    /*
    $('#point3').hide()
    $('#stepShow').hide()
    $('#stHide').show() */
    var dots = document.getElementById("point3");
    var showMoreTrigger = document.getElementById("stepShow");
    var moreText = document.getElementById("stHide");

    dots.style.display = "none";
    showMoreTrigger.style.display = "none";
    moreText.style.display = "inline";
}

function hideSpStyle() {
    /*
    $('#stHide').hide()
    $('#point3').show()
    $('#stepShow').show() */
    var dots = document.getElementById("point3");
    var showMoreTrigger = document.getElementById("stepShow");
    var moreText = document.getElementById("stHide");


    moreText.style.display = "none";
    dots.style.display = "inline";
    showMoreTrigger.style.display = "inline";
}

function ShowDialog() {
    /* $("#testUserChoose").toggle(); */
    var divToShow = document.getElementById("testUserChoose");
    if (divToShow.style.visibility === "hidden") {
        divToShow.style.visibility = "visible";
    } else {
        divToShow.style.visibility = "hidden";
    }
}


// test user account
function authTestUser() {
    window.location.href = "../Interface/interface.html";
}

// Registered Credentials array, valid user has matching index from usernames array and passwords array
let users = [
    {
        "username": "markwalt",
        "password": "mark1234",
        "id": "01780112456",
        "phoneNum": "599848484",
        "email": "m.walters@mail.com",
        "tasks": []
    },
    {
        "username": "jongossy",
        "password": "flomaygo",
        "id": "56846547685",
        "phoneNum": "567512562",
        "email": "g.jon@gmail.com",
        "tasks": []
    },
    {
        "username": "lisacain",
        "password": "lisa1234",
        "id": "21325498785",
        "phoneNum": "597513215",
        "email": "lisacain@yahoo.com",
        "tasks": []
    },
    {
        "username": "jenndemp",
        "password": "jenny1234",
        "id": "32548562321",
        "phoneNum": "547154321",
        "email": "jenjendem@gmail.com",
        "tasks": []
    }
]


// User class to create user object
class User {
    constructor(userNM, userPW) {
        this.userName = userNM;
        this.password = userPW;
    }
}

// save existing users credentials in session storage
for (var i = 0; i < users.length; i++) {
    user = new User(users[i].username, users[i].password);
    sessionStorage.setItem(user.userName, user.password);
}

/* Validate credentials in registration form so there will be no two users with the same name;
*  password matches with re-entered password, no required fields are left out and 
*  all the inputs match with required patterns. non required field validaitons are indicated inline in registration.html
*/
function validateRegistrationForm() {
    var userNM = document.getElementById("txtUserName_inputID").value;
    var passwd = document.getElementById("txtPassword_inputID").value;
    var repasswd = document.getElementById("txtReenterPassword_inputID").value;

    if (sessionStorage.getItem(userNM) != null) {
        alert("username already exists");
        return false;
    }

    if (userNM == null || userNM == "") {
        alert("Name can't be blank");
        return false;
    } else if (passwd.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    if (passwd == repasswd) {
        return true;
    }
    else {
        alert("password must be same!");
        return false;
    }
}

/* Once the registration form is validated new user is created, credentials are saved in session storage
*  with other user credentials 
*/
function registerUser() {
    if (validateRegistrationForm()) {
        newUser = new User(document.getElementById("txtUserName_inputID").value, document.getElementById("txtPassword_inputID"));
        sessionStorage.setItem(newUser.userName, newUser.password);
        window.location.href = "../login/login.html";
    } else {
        document.getElementById("txtUserName_inputID").value = "";
        document.getElementById("txtPassword_inputID").value = "";
        document.getElementById("txtReenterPassword_inputID").value = "";
        document.getElementById("username").focus();
    }
}

/*  login form checks whether the user exists with given credentials and the window is redirected
*   to the account which is to-do-list
*/
function Authenticate() {
    var un = document.getElementById("username").value;
    var pw = document.getElementById("password").value;
    var valid = -1;

    if (sessionStorage.getItem(un) == pw) {
        window.location.href = "../Interface/interface.html";
    }
    else {
        alert("Invalid Username and/or Password! Please try again. You will not be able to submit this form without a successful login");
        document.getElementById("password").value = "";
        document.getElementById("username").value = "";
        document.getElementById("username").focus();
    }
}


/*   todolist script
*
*/
validate task if it already exists or No
somehow store to do list for a user 

let getBtn = document.getElementById("btn-users");
if(getBtn) getBtn.addEventListener('click',getAllUsers);
function getAllUsers()
{
fetch('http://localhost:3000/users/test').
then((res)=>res.json()).
then((data)=>console.log(data))
.catch((err) => console.log(err));
}
const login_m = document.getElementById("login");
const reg = document.getElementById("formreg");
const msg = document.getElementById("pst");
if (login_m) login_m.addEventListener('submit', loginpage)
if (reg) reg.addEventListener('submit', registerpage)
if (msg) msg.addEventListener('submit', postpage)
    class User {
        constructor(user1, email1, password1) {
            this.username = user1;
            this.email = email1;
            this.password = password1;
        }

        getusername() {
            return this.username;
        }
        getemail() {
            return this.email;
        }
        getpassword() {
            return this.password;
        }
        setusername(user1) {
            this.username = user1;
        }
        setemail(email1) {
            this.email = email1;
        }
        setpassword(password1) {
            this.password = password1;
        }
    }
    function registerpage(e) {
        e.preventDefault();
        let username1 = document.getElementById('username').value;
        let emailaddress = document.getElementById('email').value;
        let passwrd = document.getElementById('password').value;
        let regi= new User(username1,emailaddress,passwrd);
        console.log(regi);
}
function loginpage(e) {
    e.preventDefault()
    let u_name = document.getElementById("username").value;
    let pswd = document.getElementById("password").value;
    let user1 = new User(u_name, pswd);
    console.log(user1);
}

function postpage(e) {
    e.preventDefault()
    let psth = document.getElementById('post').value;
    let user1 = new User(psth);
    console.log(user1);
}

// Fetch method implementation:
async function fetchData(route = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:3000${route}`, {
      method: methodType, // *POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if(response.ok) {
      return await response.json(); // parses JSON response into native JavaScript objects
    } else {
      throw await response.json();
    }
  } 
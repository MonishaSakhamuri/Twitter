const login_m=document.getElementById("login");
const reg=document.getElementById("formreg");
const msg=document.getElementById("pst");
if(login_m) login_m.addEventListener('submit',loginpage)
if(reg) reg.addEventListener('submit',registerpage)
if(msg) msg.addEventListener('submit',postpage)
function registerpage(e){
    e.preventDefault();
    let username1=document.getElementById('username').value;
    let emailaddress=document.getElementById('email').value;
    let passwrd=document.getElementById('password').value;

class User{
    constructor(user1,email1,password1)
   {
        this.username=user1;
        this.email=email1;
        this.password=password1;
    }
    
    getusername(){
      return this.username;
    }
    getemail()
    {
        return this.email;
    }
    getpassword()
    {
        return this.password;
    }
    setusername(user1)
   {
    this.username=user1;
   }
    setemail(email1)
    {
        this.email=email1;
    }
    setpassword(password1)
    {
        this.password=password1;
    }
}
let regi= new User(username1,emailaddress,passwrd);
     console.log(regi);
}  
function loginpage(e)
{
    e.preventDefault()

    let u_name=document.getElementById("username").value;
    let pswd=document.getElementById("password").value;
   
    class User{
        constructor(user1,password1)
        {
           
            this.username=user1;
            this.password=password1;
        }

        getusername(){
            return this.username;
          }
       getpassword()
    {
        return this.password;
    }
    setusername(user1)
    {
     this.username=user1;
    }
    setpassword(password1)
    {
        this.password=password1;
    }
       }
   
    const user1=new User(u_name,pswd);
    console.log(user1);
}

function postpage(e)
{
    e.preventDefault()
   
    let psth=document.getElementById('post').value;
   
   
    class User{
        constructor(posthere)
        {
           
            this.posthere=posthere;
           
        }
        getposthere(){
            return this.posthere;
        }
        setposthere(posthere){
            this.posthere = posthere;
        }
    }

    const user1=new User(psth);
    console.log(user1);
}


const login1=document.getElementById("login");
const reg=document.getElementById("formreg");
const note=document.getElementById("pst");
if(login1) login1.addEventListener('submit',funlogin)
if(reg) reg.addEventListener('submit',funregister)
if(note) note.addEventListener('submit',funnote)
function funregister(e){
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
function funlogin(e)
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

function funnote(e)
{
    e.preventDefault()
   
    let note1=document.getElementById('post').value;
   
   
    class User{
        constructor(note)
        {
           
            this.note=note;
           
        }
        getnote(){
            return this.note;
        }
        setnote(newnote){
            this.note = newnote;
        }
    }

    const user1=new User(note1);
    console.log(user1);
}


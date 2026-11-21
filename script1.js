function bck(){
    window.location.href = "http://127.0.0.1:5500/Entry.html";
}

function sub(){

    let name=document.getElementById("nam1").value;
    let age=document.getElementById("ag1").value;
    let dob=document.getElementById("dob1").value;
    let email=document.getElementById("em1").value;
    let role=document.getElementById("rol1").value;


    let store={
        name:name,
        age:age,
        dob:dob,
        email:email,
        role:role
 }

 let getdata1=localStorage.getItem("userdata1");
 let pass1=getdata1 ? JSON.parse(getdata1) :[];


let already= pass1.some((data1)=>{
  return data1.email===email;
 })


    if(already)
    {
      
        window.alert("Already Registered..!!")
        window.location.reload();
    }

    else{

        pass1.push(store);
        localStorage.setItem("userdata1",JSON.stringify(pass1));
        window.alert("Successfully Registered..!!")
        window.location.href="http://127.0.0.1:5500/Entry.html";


    }

}
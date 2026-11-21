function bck1() {
    window.location.href = "http://127.0.0.1:5500/Entry.html";
}

function sub1() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;


    let store1 = {
        name: name,
        email: email
    }


    let getdata1 = localStorage.getItem("userdata1");
    let pass1 = getdata1 ? JSON.parse(getdata1) : [];

    let exist=pass1.find((user)=>{
        return user.name === name && user.email===email;
    })

 if(exist){
    if(exist.role === "Student")
    {
         let studentlog=localStorage.getItem("studentlogin");
         let det1=studentlog ? JSON.parse(studentlog) : [];+
         det1.push(exist);
         localStorage.setItem("studentlogin",JSON.stringify(det1));
         localStorage.setItem("logname",exist.name);
         window.location.href="http://127.0.0.1:5500/student.html";
        
        
    }

    else if (exist.role === "Staff")
    {
        let stafflog=localStorage.getItem("stafflogin");
        let det2=stafflog ? JSON.parse(stafflog) : [];
        det2.push(exist);
        localStorage.setItem("stafflogin",JSON.stringify(det2));
         localStorage.setItem("staffname",exist.name);
         window.location.href="http://127.0.0.1:5500/staff.html";
}

else if (exist.role === "Admin")
{
     window.location.href="http://127.0.0.1:5500/admin.html";
}


}

}
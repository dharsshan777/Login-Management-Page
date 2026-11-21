function studet1(){

    let tabody=document.getElementById("studdet");

    let out1="";

    let userdetail=localStorage.getItem("studentlogin");
    let detail1=userdetail ? JSON.parse(userdetail) : [];

    detail1.map((datas1)=>{


        out1 +=`
        <tr>
        <td>${datas1.name}</td>
        <td>${datas1.age}</td>
        <td>${datas1.dob}</td>
        <td>${datas1.email}</td>
        <td>${datas1.role}</td>
        
</tr>`





    });

    tabody.innerHTML=out1;

}

studet1()




function staffdet1(){

    let tabody1=document.getElementById("staffdet");

    let out2="";

    let userdetail1=localStorage.getItem("stafflogin");
    let detail2=userdetail1 ? JSON.parse(userdetail1) : [];

    detail2.map((datas2)=>{


        out2 +=`
        <tr>
        <td>${datas2.name}</td>
        <td>${datas2.age}</td>
        <td>${datas2.dob}</td>
        <td>${datas2.email}</td>
        <td>${datas2.role}</td>
        
</tr>`





    });

    tabody1.innerHTML=out2;

}

staffdet1()


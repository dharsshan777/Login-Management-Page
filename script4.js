function  stafflog(){

    

    let tabody=document.getElementById("studdet1");

    let out17="";

    let userdetail=localStorage.getItem("studentlogin");
    let detail1=userdetail ? JSON.parse(userdetail) : [];

    detail1.map((datas1)=>{


        out17 +=`
        <tr>
        <td>${datas1.name}</td>
        <td>${datas1.age}</td>
        <td>${datas1.dob}</td>
        <td>${datas1.email}</td>
        <td>${datas1.role}</td>
        
</tr>`





    });

    tabody.innerHTML=out17;

}

stafflog()






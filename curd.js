const myForm=document.querySelector("#my-form");
const userList=document.querySelector("#users");



myForm.addEventListener("submit",onSubmit)


function displayOnScreen(){

    axios.get(`https://crudcrud.com/api/432fa108ba14416e871b796a0e71864c/practice`)
    .then((res)=>{
        console.log(res)
        userList.innerHTML='';
        res.data.forEach((item)=>{
            const li =document.createElement('li')
            li.appendChild(document.createTextNode(`Name:${item.name}, Email:${item.email}`))
            
            let delbtn=document.createElement("button")
            delbtn.className='btn btn-outline-danger btn-sm'
            delbtn.appendChild(document.createTextNode("Delete"));
            li.append(delbtn)

            let editbtn=document.createElement("button")
            editbtn.className='btn btn-outline-info btn-sm'
            editbtn.appendChild(document.createTextNode("Edit"));
            li.append(editbtn)

            

            delbtn.addEventListener('click',()=>del(item._id,li))
            editbtn.addEventListener('click',()=>edit(item._id,item))
            
            userList.appendChild(li)
        })
    })
    .catch((err)=>{
        console.log(err);
    })
}

function onSubmit(e){
    e.preventDefault();

    const name=e.target.username.value
    const email=e.target.email.value

    let data={
        name,
        email,
    }
    


    const li=document.createElement('li')
    li.appendChild(document.createTextNode(`Name:${e.target.username.value}, Email:${e.target.email.value}`))
    userList.appendChild(li)

    
    

    axios.post(`https://crudcrud.com/api/432fa108ba14416e871b796a0e71864c/practice`,data)
    .then((res)=>{
        console.log(res)
        console.log(data);
        displayOnScreen()
    })
    .catch((err)=>{
        console.log(err);
    })
    
    e.target.username.value=''
    e.target.email.value=''
}
function del(id,li){
    li.remove()
    axios.delete(`https://crudcrud.com/api/432fa108ba14416e871b796a0e71864c/practice/${id}`)
    .then((res)=>{
        console.log(res)
        
    })
    .catch((err)=>{
        console.log(err);
    })
}
function edit(id,item){
    
    // let updatedData={
    //     name: item.name,
    //     email: item.email 
    // }
    axios.delete(`https://crudcrud.com/api/432fa108ba14416e871b796a0e71864c/practice/${id}`)
    .then((res)=>{
        console.log(res.data)
        // document.getElementById('username').value = item.name;
        // document.getElementById('email').value = item.email;
    })
    .catch((err)=>{
        console.log(err)
    })
    username.value=item.name;
    email.value=item.email
}


displayOnScreen()
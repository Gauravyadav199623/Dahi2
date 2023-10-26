const myForm=document.querySelector("#my-form");
const userList=document.querySelector("#users");



myForm.addEventListener("submit",onSubmit)

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

    
    

    axios.post(`https://crudcrud.com/api/002adcea66094657a990fabc97dad309/practice`,data)
    .then((res)=>{
        console.log(res)
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })
    
    e.target.username.value=''
    e.target.email.value=''
}
function displayOnScreen(){

}
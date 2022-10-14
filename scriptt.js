const form = document.getElementById('form1');
//const name = form.ge
form.addEventListener('submit',saveContent);
const ul = document.getElementById('userlist');

function saveContent(event){

            event.preventDefault();
            let myobj = {

                name : event.target.name.value,
                email : event.target.eid.value,
                phone : event.target.pno.value,
                date : event.target.dt.value

            }
            
            let myobj_serial = JSON.stringify(myobj);
            localStorage.setItem(myobj.email,myobj_serial); 
            displayUser(myobj);
 }

function  displayUser(user){

         
         const newlistitem = document.createElement('li');
         newlistitem.setAttribute('data-email',user.email);
         newlistitem.innerHTML = `${user.name} ${user.email} <button onclick = deleteUser('${user.email}')>Delete User</button>
         <button onclick = editUser('${user.name}','${user.email}','${user.phone}')>Edit User</button>`;
         ul.appendChild(newlistitem);


}            //New div
            
function deleteUser(email){

        const userTodel = ul.querySelector('[data-email="'+email+'"]');
        //ddelete from local storage;
        localStorage.removeItem(email);
        //delete from UI
        userTodel.remove();
}
            

function editUser(name,email,phone){

        document.getElementById('fname').value = name;
        document.getElementById('eid').value = email;
        document.getElementById('pno').value = phone;
        //delete user
        deleteUser(email);

}
            

            

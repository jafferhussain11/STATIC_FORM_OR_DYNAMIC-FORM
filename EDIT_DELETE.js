const form = document.getElementById('form1');
//const name = form.ge
form.addEventListener('submit',saveContent);


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
           
            //New div
            const newDiv = document.createElement('div');
            newDiv.id = 'output';
            
            //create text node
            const newDivText = document.createTextNode('User Name : ' + myobj.name);
            //creating button edit
            const editbutton = document.createElement('button');
            editbutton.id = 'editbutton';
            const editbuttonText = document.createTextNode('Edit');
            editbutton.appendChild(editbuttonText);
            newDiv.appendChild(editbutton);
            //creating button Delete
            const delbutton = document.createElement('button');
            delbutton.id = 'deletebutton';
            const delButtonText = document.createTextNode('Delete');
            delbutton.appendChild(delButtonText);
            newDiv.appendChild(delbutton);
            //append to new div

            newDiv.appendChild(newDivText);
            newDiv.style.color = 'white';
            form.insertAdjacentElement('afterend',newDiv);

            //button eventlistners..
            delbutton.addEventListener('click',deleteuser);

            function deleteuser(event){

                event.preventDefault();
                //ddelete from local storage;
               localStorage.removeItem(myobj.email);

                //delete from UI
                newDiv.remove();
            }
            editbutton.addEventListener('click',editusername);

            function editusername(event){

                event.preventDefault();
                newDiv.remove();  
                
            }
            

            
}

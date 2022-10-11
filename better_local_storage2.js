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
           
            //display
            const newDiv = document.createElement('div');
            newDiv.id = 'output';
            
            //create text node
            const newDivText = document.createTextNode(myobj.name);
            
            //append to new div
            newDiv.appendChild(newDivText);
            newDiv.style.color = 'white';

            form.insertAdjacentElement('afterend',newDiv);
            
}

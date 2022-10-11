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
            localStorage.setItem('userData',myobj_serial);
           
            
}

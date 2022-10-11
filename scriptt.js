

const form = document.getElementById('form1');
//const name = form.ge
form.addEventListener('submit',saveContent);


function saveContent(event){

            event.preventDefault();
            localStorage.setItem('name',event.target.name.value);
            localStorage.setItem('Email ID',event.target.eid.value);
            localStorage.setItem('phone num',event.target.pno.value);
            localStorage.setItem('Date',event.target.dt.value);
            
}

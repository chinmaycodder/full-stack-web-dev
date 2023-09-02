let namastebtn = document.querySelector('button');
namastebtn.addEventListener('click', inputmsg);


function inputmsg(){
    let name = prompt('enter name of student');
    namastebtn.textContent = 'roll no.1:' + name;



}

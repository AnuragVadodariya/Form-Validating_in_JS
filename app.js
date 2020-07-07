const fname=document.getElementById('fnm');
const lname=document.getElementById('lnm');
const email=document.getElementById('email');
const pnumber=document.getElementById('pnumber');
const password=document.getElementById('pass');

function AutoEmail(ele){
const lName=ele.value;
const lnmTolower=lName.toLowerCase();
const fName=fname.value;
const fnmTolower=fName.toLowerCase();

email.value=fnmTolower+lnmTolower+'@gmail.com';
}

function chk_phoneNumber(){
    const pnum=pnumber.value;
    if(pnum < 0){
        alert('Enter Positive Number')
        pnumber.value=''; }

    if(!pnum.match(/^[0-9]{10}$/)){
        alert('Enter 10 digit Phone-Number')
        pnumber.value=''; }
}

function chk_password(){
    const userPassword=password.value.length;
    if(userPassword <= 8){
        alert('Enter 8 char or more')
        password.value='';
    }
}

function success_fun(){
    alert('Register SuccessFully')
}

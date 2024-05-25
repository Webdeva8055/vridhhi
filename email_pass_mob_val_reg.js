
//for email and password validation
function ValidateP()
{
   let valpas=document.getElementById("passr").value;
   // let passformat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
if( /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(valpas))
{
return true;
}
else
{
alert("  password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character");
pass.focus();
return false;
}
}

function ValidateM()
{
let valMob=document.getElementById("Mobiler").value;

if(/^\d{10}$/.test(valMob))
{
return true;
}
else
{
alert(" invalid Mobile Number");
email.focus();
return false;
}}

function ValidateE()
{
let valemail=document.getElementById("emailr").value;
// let mailformat = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/";
if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(valemail))
{
return true;
}
else
{
alert(" invalid email address!");
email.focus();
return false;
}}






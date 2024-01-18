// Genrate OTP in js

function genrateOTP(length){

    let otp='';
    for(let i=0;i<=length;i++){
        otp+=Math.floor(Math.random()*10).toString()
    }
    return otp;
}
console.log(genrateOTP(2))
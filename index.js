function calculate(){

    let y;
    let m;
    let d;
    let currYear=parseInt(cd.value.slice(0,4));
    let currMonth=parseInt(cd.value.slice(5,7));
    let currDate=parseInt(cd.value.slice(8,10));
    console.log(currYear, currMonth, currDate)

    let birthYear=parseInt(dob.value.slice(0,4));
    let birthMonth=parseInt(dob.value.slice(5,7));
    let birthDate=parseInt(dob.value.slice(8,10));
    console.log(birthYear, birthMonth, birthDate);

    if(currDate>=birthDate){
        d=currDate - birthDate;
    }else{
        d=currDate + new Date(currYear, currMonth).getDate() - birthDate;
        currMonth--;
    }

    if(currMonth>=birthMonth){
        m=currMonth-birthMonth;
    }else{
        m=currMonth+12-birthMonth;
        currYear--;
    }
    y=currYear-birthYear;

    if(y<0){
        agetext.innerHTML="Select to a valid date";
    }else{
        agetext.innerHTML=y+" years "+m+" months "+d+" days";
    }
}
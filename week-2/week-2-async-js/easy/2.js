let c=0;

function timer(){
    console.log(c);
    c++;
    setTimeout(() => timer(), 1000);
}
timer()
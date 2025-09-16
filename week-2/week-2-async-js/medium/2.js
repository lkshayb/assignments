const date = new Date();
let hrs = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log(hrs,":",min,":",sec)

setInterval(() => {
    if(sec == 60){
        sec = 0;
        if(min==60){
            min = 0;
            if(hrs == 24) hrs=0
            else hrs++
        }
        else min++;
    }
    else sec++
    console.log(hrs,":",min,":",sec)
}, 1000);
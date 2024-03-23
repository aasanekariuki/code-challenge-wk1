function speedDector(speed){
     if  (speed <= 70 ){
        return  "OK";
     }
     else if ((demeritpoints = (speed - 70) / 5) <=12){
        return `points :${demeritpoints}`;
     }
     else {
        return "License suspended";
     }

}
console.log(speedDector());
function OurRandomRange(Ourmin,Ourmax){
    return Math.floor(Math.random()*(Ourmax-Ourmin+1))+Ourmin;
}
console.log(OurRandomRange(1,9));
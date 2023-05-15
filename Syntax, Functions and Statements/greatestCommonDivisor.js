function greatestComDev(a, b) {

    while (a !== b) {
        if(a > b){
            a-=b
        }else{
            b-=a
        }
        
    }
    console.log(a);
    
}

greatestComDev(2154, 458)
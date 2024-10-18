function rangePrime(s,e){
    for(i=s;i<e;i++){
        let count=0
        for(j=1;j<=i;j++){
            if(i%j==0){
                count++
            }
        }
        if(count==2){
            console.log(i)
        }
    }
}
rangePrime(10,25)
rangePrime(60,100)
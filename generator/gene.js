function* gene(){
    let i=1;
    while(true){
        yield(i++);
    }
}
let gene1=gene();


for(let j=0;j<=5;j++){
    console.log(gene1.next().value);
}
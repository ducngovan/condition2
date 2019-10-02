function getAcreage() {
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let x;
    // let result = (width * height)/2;
    if(a==0 && b==0){
        document.getElementById('result').innerHTML=("pt vo so nghiem: ");
    }else if(a != 0){
        x = (-b)/a;
        document.getElementById('result').innerHTML=("pt co nghiem: " +x);
    }else{
        document.getElementById('result').innerHTML=("pt vo nghiem" );
    }

}
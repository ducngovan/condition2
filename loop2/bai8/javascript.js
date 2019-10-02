function getAge() {
    let age = parseInt(document.getElementById('age').value);
    if(0<age && age <120){
        document.getElementById('result').innerHTML="tuoi cua ban la: "+age;
    }else{
        alert("ban hay nhap lai !");
    }
}
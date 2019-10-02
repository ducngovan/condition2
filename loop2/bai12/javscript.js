function get_safary() {
    let safary = parseInt(document.getElementById('safary').value);
    let result;
    if (safary>5000000 && safary<=10000000){
        result = safary * 0.05;
        document.getElementById('result').value=result;
    }else if (safary > 10000000){
        result = safary * 0.1;
        document.getElementById('result').value=result;
    }else if (0<safary && safary<=5000000){
        alert("khong co lai");
    }else {
        alert("nhap lai so tien!")
    }
}
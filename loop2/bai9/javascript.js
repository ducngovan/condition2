function checkTriangle() {
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let c = parseInt(document.getElementById('c').value);
    (a>0 && b>0 && c>0 && a+b>c && b+c>a && a+c>b)? alert(a+" "+b+" "+c+" la 3 canh tam giac"):alert("\"khong phai 3 canh tam giac\"");
}
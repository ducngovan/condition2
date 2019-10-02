let a=parseInt(prompt("nhap so a:"));
let b=parseInt(prompt("nhap so b:"));
let c=parseInt(prompt("nhap so c:"));
let x1,x2,x3,delta;
delta=(b*b-4*a*c);
alert("delta: "+delta);
if (a !== 0 && delta>0){
    x2=((-b+Math.sqrt(a)/2*a));
    x3=((-b+Math.sqrt(a)/2*a));
    alert('Nghiem cua phuong trinh la X1 : '+x2);
    alert('Nghiem cua phuong trinh la X2 : '+x3);
}else if(a!==0  && delta==0) {
    x1 = (-b / a);
    alert('Phuong trinh co nghiem la X:' + x1);
}else if(a==0&&b==0&&c==0){
    alert('Phuong trinh vo so nghiem !');
}else {
    alert('Phuong trinh vo nghiem');
}
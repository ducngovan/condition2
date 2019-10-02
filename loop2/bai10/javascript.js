function getMonny() {
    let num = parseInt(document.getElementById('num').value);
    let result;
    if(0< num && num<=50){
        result = num * 1549;
        document.getElementById('result').value=result;
    }else if(51<=num && num <= 100){
        result= (50*1549) + (100-num)*1600;
        document.getElementById('result').value=result;
    }else if(101<=num && num <= 200){
        result = 50*(1549+1600) + (200-num)*1858;
        document.getElementById('result').value=result;
    }else if(201<=num && num <= 300){
        result = 50*(1549+1600+1858) + (300 - num)*2340;
        document.getElementById('result').value=result;
    }else if(301<=num && num <= 400){
        result = 50*(1549+1600+1858+2340) + (400 - num)*2615;
        document.getElementById('result').value=result;
    }else if(num => 401){
        result = 50*(1549+1600+1858+2340+2625) + (num-400)*2701;
        document.getElementById('result').value=result
    }else{
        alert("nhap lai so dien!")

    }
}
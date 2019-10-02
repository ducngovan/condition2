function getAcreage() {
    let square = parseInt(document.getElementById('square').value);
    let result = square * square;
    document.getElementById('result').value=result;

}
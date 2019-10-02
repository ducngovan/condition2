function getAcreage() {
    let width = parseInt(document.getElementById('width').value);
    let height = parseInt(document.getElementById('height').value);
    let result = (width * height)/2;
    document.getElementById('result').value=result;
}
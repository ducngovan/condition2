function getAcreage() {
   let width = parseInt(document.getElementById('width').value);
    let height = parseInt(document.getElementById('height').value);
    let result = width * height;
    document.getElementById('result').value=result;
}
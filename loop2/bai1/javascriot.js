// F  =  ( °C × 1.8 ) +  32
function getConvertcf() {
    let doc = parseInt(document.getElementById('doc').value);
    let result= (doc * 1.8) + 32;
    document.getElementById('result').value=result;

}
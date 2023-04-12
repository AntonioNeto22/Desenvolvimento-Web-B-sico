function sortear(){
    let min= document.getElementById('min').value;
    let max= document.getElementById('max').value;
    let result = parseInt(Math.random() * (max - min) + min);
    document.getElementById('sorteado').innerHTML= `${result}`;
}
/*let min= parseInt(document.getElementById('min').value);*/
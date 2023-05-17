function salvar3(){
    let tb = document.querySelector('.table');
    let row = tb.insertRow();
    let cel0 = row.insertCell(0);
    let cel1 = row.insertCell(1);
    let cel2 = row.insertCell(2);
    let cel3 = row.insertCell(3);
    let cel4 = row.insertCell(4);
    cel0.innerHTML = document.getElementById('nome').value;
    cel1.innerHTML = document.getElementById('email').value;
    cel2.innerHTML = document.getElementById('nascimento').value;
    cel3.innerHTML = document.getElementById('estado').value;
    cel4.innerHTML = '<i class="bi bi-pen"></i>';
    limpar()

}

function limpar(){
    document.getElementById('nome').value ='';
    document.getElementById('email').value ='';
    document.getElementById('nascimento').value ='';
    document.getElementById('estado').value ='';
}

function pegDado(){

}


/*
function adicionar(){
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
}*/
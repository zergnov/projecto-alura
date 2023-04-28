
function encriptar(text){
    var arreglo = text.split('');
    var frase_encriptada = ''
    for(var i = 0; i < arreglo.length; i++){
        if (arreglo[i] == 'e'){
            frase_encriptada += 'enter';
        } 
        else if (arreglo[i] == 'i'){
            frase_encriptada += 'imes';
        }
        else if(arreglo[i] == 'a'){
            frase_encriptada += 'ai';
        }
        else if(arreglo[i] == 'o'){
            frase_encriptada += 'ober';
        }
        else if(arreglo[i] == 'u'){
            frase_encriptada += 'ufat';
        }
        else{
            frase_encriptada += arreglo[i];
        }
    }
    return frase_encriptada
}

function desencriptar_enter(palabra_encriptada){
    var palabra_desencriptada = ''
    if(palabra_encriptada.includes('enter')){
        var arreglo = palabra_encriptada.split('enter');
        for(var i = 0; i < arreglo.length - 1; i++){
            var nueva_parte = '';
            nueva_parte = arreglo[i] + 'e';
            palabra_desencriptada += nueva_parte;
        }
        return palabra_desencriptada + arreglo[arreglo.length-1];
    }
    else {
        return palabra_encriptada;
        }    
    
}

function desencriptar_imes(palabra_encriptada){
    var palabra_desencriptada = ''
    if(palabra_encriptada.includes('imes')){
        var arreglo = palabra_encriptada.split('imes');
        for(var i = 0; i < arreglo.length - 1; i++){
            var nueva_parte = '';
            nueva_parte = arreglo[i] + 'i';
            palabra_desencriptada += nueva_parte;
        }
        return palabra_desencriptada + arreglo[arreglo.length-1];
    }
    else {
        return palabra_encriptada;
        }    
    
}

function desencriptar_ai(palabra_encriptada){
    var palabra_desencriptada = ''
    if(palabra_encriptada.includes('ai')){
        var arreglo = palabra_encriptada.split('ai');
        for(var i = 0; i < arreglo.length - 1; i++){
            var nueva_parte = '';
            nueva_parte = arreglo[i] + 'a';
            palabra_desencriptada += nueva_parte;
        }
        return palabra_desencriptada + arreglo[arreglo.length-1];
    }
    else {
        return palabra_encriptada;
        }    
    
}

function desencriptar_ober(palabra_encriptada){
    var palabra_desencriptada = ''
    if(palabra_encriptada.includes('ober')){
        var arreglo = palabra_encriptada.split('ober');
        for(var i = 0; i < arreglo.length - 1; i++){
            var nueva_parte = '';
            nueva_parte = arreglo[i] + 'o';
            palabra_desencriptada += nueva_parte;
        }
        return palabra_desencriptada + arreglo[arreglo.length-1];
    }
    else {
        return palabra_encriptada;
        }    
    
}

function desencriptar_ufat(palabra_encriptada){
    var palabra_desencriptada = ''
    if(palabra_encriptada.includes('ufat')){
        var arreglo = palabra_encriptada.split('ufat');
        for(var i = 0; i < arreglo.length - 1; i++){
            var nueva_parte = '';
            nueva_parte = arreglo[i] + 'u';
            palabra_desencriptada += nueva_parte;
        }
        return palabra_desencriptada + arreglo[arreglo.length-1];
    }
    else {
    return palabra_encriptada;
    }
    
}

function desencripcion_palabra(palabra_encriptada){
    valor1 = desencriptar_enter(palabra_encriptada);
    console.log(valor1)
    valor2 = desencriptar_imes(valor1);
    console.log(valor2)
    valor3 = desencriptar_ai(valor2);
    console.log(valor3)
    valor4 = desencriptar_ober(valor3);
    console.log(valor4)
    valor5 = desencriptar_ufat(valor4);
    return valor5;
}


function desencriptar_frase(frase){
    var arreglo = frase.split(' ');
    var frase_desencriptada = ''
    for(var i = 0; i < arreglo.length; i++){
        nueva_palabra = desencripcion_palabra(arreglo[i])
        frase_desencriptada += nueva_palabra + ' ';
    }
    return frase_desencriptada;
}

console.log(desencriptar_frase('fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober'));


function boton_desencriptar() {
    texto = document.getElementById('text').value;
    console.log(desencriptar_frase(texto));
    document.getElementById('muneco').style.visibility = 'hidden';
    document.getElementById("mensaje-no-encontrado").style.visibility = 'hidden';
    document.getElementById('ingresa-texto').style.visibility = 'hidden';
    campo_texto = document.createElement('textarea');
    campo_texto.style.width = '100%';
    campo_texto.value = desencriptar_frase(texto);
    document.getElementById('resultado').appendChild(campo_texto);
}


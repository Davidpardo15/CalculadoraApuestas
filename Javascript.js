function Calculadora(){
    var x = document.getElementById("precio").value;
    document.getElementById("cal").innerHTML = x;
    if (x<=9999 || x>1000000){
        alert("valor ingresado no valido")
    }else{
        var ele = document.getElementsByName('apuestas');           
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked){
                var result = ele[i].value*x
                var ga =document.getElementById("gana")
                ga.value="$"+result
    
                console.log(result)
            }
        }
    }
    
}
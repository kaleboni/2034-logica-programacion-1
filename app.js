let numSecreto = 5;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximoIntentos = 3;
while (numeroUsuario != numSecreto) {
    numeroUsuario = prompt("Ingrese un numero entre 1 y 10 por favor:");

        console.log(numeroUsuario);

        if (numeroUsuario == numSecreto) {
            alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hicistes en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
            } else{
               if(numeroUsuario > numSecreto){
                alert(`El numero secreto es menor`);   
            }else{
                alert(`El numero secreto es mayor`);
            }

            intentos++;
            palabraVeces = 'veces';
            if (intentos > maximoIntentos){
                alert(`Llegaste al numero maximo de ${maximoIntentos} intentos`);
                break;
            }
        } 
           
        }
    
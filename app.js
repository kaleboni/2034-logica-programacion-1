//Variables
let numeroMaximoPosible = 100;
let numSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;

//let palabraVeces = 'vez';
let maximoIntentos = 3;

console.log(numSecreto);
while (numeroUsuario != numSecreto) {
    numeroUsuario = parseInt(prompt(`Ingrese un numero entre 1 y ${numeroMaximoPosible}  por favor:`));

        console.log(numeroUsuario);

        if (numeroUsuario == numSecreto) {
            alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hicistes en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
            } else{
               if(numeroUsuario > numSecreto){
                alert(`El numero secreto es menor`);   
            }else{
                alert(`El numero secreto es mayor`);
            }
            //incrementadores
            intentos++;
            palabraVeces = 'veces';
            if (intentos > maximoIntentos){
                alert(`Llegaste al numero maximo de ${maximoIntentos} intentos`);
                break;
            }
        } 
           
        }
    
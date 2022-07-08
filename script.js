
const calcular = document.getElementById('calcular')


function imc(){ 
    const nome= document.getElementById('nome').value
    const altura= document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado= document.getElementById('resultado')

    if(nome !== '' && altura !== '' && peso !== ''){
        
        const valorImc= (peso / (altura*altura)).toFixed(2)

        let classificacao=''

        if (valorImc < 18.5){
            classificacao='Abaixo do Peso'

        }else if(valorImc < 25){
            classificacao='Seu peso está ideal'

        }else if(valorImc < 30){
            classificacao='Você está um pouco acima do peso'

        }else if(valorImc < 35){
            classificacao='Você está com obesidade gráu I'

        }else if(valorImc < 40){
            classificacao='Você está com obesidade gráu II'

        }else{
            classificacao='Você está com obesidade gráu III CUIDADO!!!'

        }

        resultado.textContent=`${nome} seu IMC é: ${valorImc} e você está 
        ${classificacao}`


    } else{
        resultado.textContent='Preencha todos os campos'
    }
}

calcular.addEventListener('click', imc)
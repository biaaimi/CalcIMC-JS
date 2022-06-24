const altura = document.getElementById('altura');
const peso = document.getElementById('peso'); 
const message = document.querySelector('.message');

const exibirMesssage  = (imcParamentro, mensagem) => {

    message.classList.remove('off');

    message.innerText = `Seu imc é ${imcParamentro},  ${mensagem} !`;

    setTimeout(()=>{
        message.classList.add('off')
    },4000)
}

const limparCampos = () =>{
    altura.value =  " ";
    peso.value =  "";
}

const iniciar = () =>{

    let alturaResult = parseFloat((altura.value  ** 2));
    let imc = parseFloat(peso.value) / alturaResult;
    console.log(imc)
    
    if(imc < 17)
    {
        exibirMesssage(imc.toFixed(2), "Abaixo do peso");
    }
    if(imc >= 17 && imc < 18.49)
    {
        exibirMesssage(imc.toFixed(2), "Abaixo do peso");
    }
    if(imc >= 18.5 && imc  <= 24.99)
    {
        exibirMesssage(imc.toFixed(2),"Peso normal");
    }
    if(imc >= 25 && imc  <= 29.99)
    {
        exibirMesssage(imc.toFixed(2), "Acima do peso");
    }
    if(imc >= 30 && imc  <= 34.99)
    {
        exibirMesssage(imc.toFixed(2),"Obesidade I");
    }
    if(imc >= 35 && imc  <= 39.99)
    {
        exibirMesssage(imc.toFixed(2),"Obesidade II (severa)");
    }
    if(imc > 40 )
    {
        exibirMesssage(imc.toFixed(2),"Obesidade III (mórbida)");
    }


}

const form = document.getElementById('form-imc').addEventListener('submit' , (e)=>{
    e.preventDefault();
    iniciar();
    limparCampos();
})
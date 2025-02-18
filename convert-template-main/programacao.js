//cotacoes do dia
const USD = 5.71
const EUR = 5.98
const GBP = 7.20
//area das variáveis

const input_valor = document.querySelector("#amount")
const select_moeda = document.querySelector("#currency")
const form = document.querySelector("form")
const footer = document.querySelector("main footer")
const description = document.querySelector("#description")
const result = document.querySelector("#result")
//fim variaveis

//Create area about capture just numbers in input 
input_valor.addEventListener("input",(e) =>{
    e.preventDefault()
    const hasCaracteresRegex = /\D+/g //string

    input_valor.value = input_valor.value.replace(hasCaracteresRegex,"")

})

//outro modo para lidar com evento arrow function também
//caputrando submite do formulario

form.onsubmit = (event) =>{
    event.preventDefault()

    switch(select_moeda.value){
        case "USD": 
            convert(input_valor.value,USD,"$")
            break
        case "EUR":
             convert(input_valor.value,EUR,"€")
             break
        case "GBP":
             convert(input_valor.value,GBP,"£")
             break
    }

    
}

//funcao converter moeda e colocar ela exibindo no footer

function convert(amount, price, symbol){
    try{
    let total = amount * price

     description.textContent = ` 1${symbol} = ${formatCurrencyBRL(price)} `   
     
     result.textContent = `${formatCurrencyBRL(total.toFixed(2))}`

     footer.classList.add("show-result")
   
    } catch(error){
        alert("erros inesperado na funcionalidade, por favor atualize a página e tente novamente")
    }
}

//isso é padrao, como ele formata moeda em real
function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR",{
    style : "currency",
    currency: "BRL"
    })
}

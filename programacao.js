//cotacoes do dia
let USD, EUR, GBP

const url = 'https://economia.awesomeapi.com.br/last/'
const coins = 'USD-BRL,EUR-BRL,GBP-BRl'

fetch(url + coins)
 .then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    USD = parseFloat(data.USDBRL.high)
    EUR =  parseFloat(data.EURBRL.high)
    GBP =  parseFloat(data.GBPBRL.high)
})

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
        default:
            alert("moeda nao encontrada")
    }

    
}





//funcao converter moeda e colocar ela exibindo no footer

function convert(amount, price, symbol){
    try{
    let total = amount * price

     description.textContent = ` 1${symbol} = ${formatCurrencyBRL(price)} `   
     
     result.textContent = `${formatCurrencyBRL(total.toFixed(2))}` //substitui o que esta escrito

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

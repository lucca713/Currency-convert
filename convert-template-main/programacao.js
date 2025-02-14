//area das variáveis
const input_valor = document.querySelector("#amount")
const select_moeda = document.querySelector("#currency")
const form = document.querySelector("form")
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

    console.log(select_moeda.value)
}


/*hello world
const mensagem = "Olá, mundo!"

{
   const mensagem = "olá eu"
   console.log(mensagem)
}
console.log(mensagem);*/

/*arrays, objetos
let meta = {
   value: 'ler um livro por mês',
   address: 2,
   checked: false,
   log: (info) => {
      console.log(info)
   }
}

let meta = {
   value: 'ler um livro por mês',
   checked: false
}
let metas = [
   meta,
   {
      value: "caminhar  20 minutos todos os dias",
      checked: false
   }
]

console.log(metas[1].value)
console.log(meta.value)

//meta.value = "não é mais ler um livro"
//meta.log(meta.value)

//function // arrow function
//const criarMeta = () => {}

//function criarMeta() {}*/


/*function start() {
   console.log('comecou')
}

start()

// OU

const start = () => {
   console.log('comecou')
}

start()*/

/*const start = () => {
   let count = 0
   while (count < 10) {
         console.log(count)
         count++     // OU count = count + 1  
   }
}

start()*/

const{ select } = require('@inquirer/prompts')

const start = async () => {
   
   while (true) {
      
      const opcao = await select({
         message: "Menu >",
         choices: [
            {
               name: "Cadastrar meta",
               value: "cadastrar"
            },
            {
               name: "Listar metas",
               value: "listar"
            },
            {
               name: "Sair",
               value: "sair"
            }
         ]
      })
      

      switch (opcao) {
         case "cadastrar":
            console.log("vamos cadastrar")
            break
         case "listar":
            console.log("vamos listar")
            break
         case "sair":
            console.log("Até a próxima!")
            return
      }
   }
}

start()
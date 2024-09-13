/*hello world
const mensagem = "Olá, mundo!"

{
   const mensagem = "oá eu"
   console.log(mensagem)l
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

const{ select, input, checkbox } = require('@inquirer/prompts')

let meta = {
   value: 'Tomar 3L de água por dia',
   checked: false,
}

let metas = [ meta ]

const cadastrarMeta = async () => {
   const meta = await input({ message: "Digite a meta:"})

   if (meta.length == 0) {
      console.log('A meta não pode ser vazia.')
      return
   }

   metas.push(
      { value: meta, checked: false}
   )
}

const listarMetas = async () => {
   const respostas = await checkbox({
      message: "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o Enterpara finalizar essa etapa",
      choices: [...metas],
      instructions: false,
   })

   metas.forEach((m) => {
      m.checked = false
   })

   if (respostas.length == 0) {
      console.log("Nenhuma meta selecionada")
      return
   }

   

   respostas.forEach((resposta) => {
      const meta = metas.find((m) => {
         return m.value == resposta
      })

      meta.checked = true
   })

   console.log('Meta(s) marcadas como concluídas(s)')
}

const metasRealizadas = async () => {
   const realizadas = metas.filter((meta) => {
      return meta.checked
   })

   if (realizadas.length == 0) {
      console.log('Não existe metas realizadas! :(')
      return
   }

   await select({
      message: "Metas Realizadas: " + realizadas.length,
      choices: [...realizadas]
   })
}

const metasAbertas = async () => {
   const abertas = metas.filter((meta) => {
      return meta.checked != true
   })

   if (abertas.length == 0) {
      console.log("Não existem metas abertas! :)")
      return
   }

   await select ({
      message: "Metas Aberta: " + abertas.length,
      choices: [...abertas]
   })
}

const deletarMetas = async () => {
   const metasDesmarcadas = metas.map((meta) => {
      return { value: meta.value, checked: false }
   })

   const itemADeletar = await checkbox({
      message: "Selecione item para deletar",
      choices: [...metasDesmarcadas],
      instructions: false,
   })

   if(itemADeletar.length == 0) {
   console.log("Nenhum item para deletar!")
   return
   }

   itemADeletar.forEach((item) => {
      metas = metas.filter((meta) => {
         return meta.value != item
      })
   })

   console.log("Meta(s) deleta(s) com sucesso!")
}

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
               name: "Metas realizadas",
               value: "realizadas"
            },
            {
               name: "Metas abertas",
               value: "abertas"
            },
            {
               name: "Deletar metas",
               value: "deletar"
            },
            {
               name: "Sair",
               value: "sair"
            }
         ]
      })


      switch (opcao) {
         case "cadastrar":
            await cadastrarMeta()
            console.log(metas)
            break
         case "listar":
            await listarMetas()
            break
         case "realizadas":
            await metasRealizadas()
            break
            case "abertas":
               await metasAbertas()
               break
               case "deletar":
                  await deletarMetas()
                  break
         case "sair":
            console.log("Até a próxima!")
            return
      }
   }
}

start()
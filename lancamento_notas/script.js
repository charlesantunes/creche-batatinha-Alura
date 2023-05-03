/*
let patas = document.querySelectorAll(".star-icon")
//let patas2 = document.querySelectorAll(".star-icon")

document.addEventListener('click', function (e) {
    let patasSelect = e.target.classList //peguei todas classes de onde foi clicado

    let classDoClick = e.target.classList[1] //peguei a segunda classe
    let num = e.target.getAttribute('data-avaliacao') // imprime o valor do data-avaliacao
    let nomeId = `${classDoClick}${num}` //juntei o nome da segunda classe da tag mais o nº da data-avaliaao = id 

    console.log(patasSelect)
    console.log(classDoClick)
    console.log(nomeId)

   

    if (nomeId == 'soc1') {
        document.getElementById(`${nomeId}`).classList.add("ativo")
        console.log('estou no s5')
    }
    if (nomeId == 'soc2') {
        document.getElementById(`${nomeId}`).classList.add("ativo")
        console.log('estou no s5')
    }
    if (nomeId == 'soc3') {
        document.getElementById(`${nomeId}`).classList.add("ativo")
        console.log('estou no s5')
    }
    if (nomeId == 'soc4') {
        document.getElementById(`${nomeId}`).classList.add("ativo")
        console.log('estou no s5')
    }
    if (nomeId == 'soc5') {
        document.getElementById(`${nomeId}`).classList.add("ativo")
        console.log('estou no s5')
    }
   

    // if (patasSelect.contains("ativo")) {
    //     patas.forEach((e)=>e.classList.remove('ativo'))
    //     console.log('pintado')        
    //     console.log(classDoClick)
    // }
    //patasSelect.classList.add('ativo')
    // if (!patasSelect.contains("ativo") && patasSelect.contains("son")) {
    //     patas2.forEach((e)=>e.classList.remove('ativo'))
    //     console.log('pintado')        
    //     console.log(classDoClick)
    //     return patas2
    // }

    
    if(e.target.value == null){ //se o clica for fora das classes
        patas.forEach((e)=>e.classList.remove('ativo'))
        patas.forEach((e)=>e.classList.add('ativo'))
        console.log('nada')
    }
    console.log(e.target.getAttribute('data-avaliacao')) // avaliação p/ banco de dados
})

*/

//
document.addEventListener('click', function (e) {
    const nomeClasse = e.target.classList[0] //peguei a primeira classe da lista pelo click do mouse

    const patas = document.querySelectorAll(`.patas${nomeClasse} li`)

    patas.forEach((element,indice1)=>{
        element.addEventListener('click',()=>{
            patas.forEach((element,indice2)=>{
                indice1 >= indice2 ? element.classList.add("active") : element.classList.remove("active")
            })
        })
    })
    console.log(e.target.getAttribute('data-avaliacao')) // avaliação p/ banco de dados
})
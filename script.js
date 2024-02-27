const $ = document

 const inputElem = $.querySelector("#inp-word")
 const btn = $.querySelector("#search-btn")

 const resultElem = $.querySelector("#result")
 const audio = $.querySelector("#sound")
 const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'


 btn.addEventListener("click", ()=>{
    let inputWord = inputElem.value

    fetch(`${url}${inputWord}`)
        .then(res => res.json())
        .then(data => console.log(data))
    
 })
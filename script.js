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
        .then(data => {
            let datas = data[0]
            console.log(datas);
            resultElem.innerHTML = `   <div class="word">
            <h3>${datas.word}</h3>
            <button onclick="palySound()">
              <i class="fas fa-volume-up"></i>
            </button>
          </div>
          <div class="details">
            <p>${datas.meanings[0].partOfSpeech}</p>
            <p>${datas.phonetics[1].text}</p>
          </div>
          <p class="word-meaning">
              ${datas.meanings[0].definitions[0].definition}
          </p>
          <p class="word-example">
          ${datas.meanings[0].definitions[0].example || ""}
          </p>`

        
          audio.setAttribute("src" , datas.phonetics[1].audio || datas.phonetics[0].audio || datas.phonetics[2].audio || "")
          inputElem.value = ''
        })
        .catch(()=>{
            resultElem.innerHTML = `<h3 class="error">Could't Find The Word</h3>`
        })
    
    
 })

 function palySound(){
    audio.play()
 }
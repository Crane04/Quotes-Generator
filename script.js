const button=document.querySelector("button")
const quote=document.querySelector(".quote")
const named=document.querySelector(".name")

const inputEl=document.querySelector("input")


button.addEventListener("click",function(){
    let goIndex=Math.floor(Math.random()*1643)
    fetch("https://type.fit/api/quotes")
        .then(res=>res.json())
            .then(data=>{
            quote.innerHTML=`"${data[goIndex].text}"`
            named.innerHTML=`~${data[goIndex].author}~`
            inputEl.value=quote.innerText + named.innerText
            
      })
})

function copyQuote() {
     /* Select the text field */
    copyText=inputEl
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Your Quote has been Copied!" );
    
  }
  
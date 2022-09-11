const button=document.querySelector("button")
const quote=document.querySelector(".quote")
const named=document.querySelector(".name")
const container=document.querySelector(".container")
const inputEl=document.querySelector("input")


let x=setInterval(() => {
    let imageIndex=Math.floor(Math.random()*30+1)
    container.style.background=`url("Images/img${imageIndex}.jpg")`
    container.style.backgroundRepeat="no-repeat"
    container.style.backgroundSize="cover"
    container.style.transition="background 3s"
    
}, 4000);

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
  
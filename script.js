const button=document.querySelector("button")
const quote=document.querySelector(".quote")
const name=document.querySelector(".name")




button.addEventListener("click",function(){
    let goIndex=Math.floor(Math.random()*1643)
    fetch("https://type.fit/api/quotes")
        .then(res=>res.json())
            .then(data=>{
            quote.innerHTML=`"${data[goIndex].text}"`
            name.innerHTML=`~${data[goIndex].author}~`
      })
})
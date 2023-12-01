let a = document.querySelectorAll('div')
a.forEach((b)=>{
    b.addEventListener('click',(e) =>{
        e.target.parentNode.remove()
    })
})
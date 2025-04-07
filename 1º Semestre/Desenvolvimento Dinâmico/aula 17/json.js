fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data=>{
    preencherLista(data)
})

function preencherLista(data){
    const listContainer= document.getElementById('lista-container')
    const ul = document.createElement('ul')
    data.forEach(element => {
        const li=document.createElement('li')
        li.textContent = element.name
        ul.appendChild(li)
    });
    listContainer.appendChild(ul)
}

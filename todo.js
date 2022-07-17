
submit = document.getElementById('submit')
submit.addEventListener('click', function () {
    let text = document.getElementById('input').value
    if (text == '') {
        alert('First add your text')
        return;
    }
    let li = document.createElement('li');
    let node = document.createTextNode(text)
    li.append(node)
    ul = document.getElementById("uledit")
    ul.appendChild(li)
    li.classList = 'list-group-item'
    console.log(node)

    let btn = document.createElement('button')
    // console.log(btn.classList)
    btn.appendChild(document.createTextNode('X'))
    btn.classList = 'btn btn-danger btn-sm float-right delete'
    li.appendChild(btn)
    console.log(text)
    document.getElementById("input").value = ''
   
    
})
// 
function removeitem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('you have clicked on delete button')) {
            console.log('are you alright')
            uledit.removeChild(e.target.parentElement)
        }
        else {
            alert('what are you doing man')
        }

    } else {
        "click on somewhere"
    }
}
uledit.addEventListener('click', removeitem)

function showsearch(e) {
    text = e.target.value.toLowerCase()
    let search = document.getElementById('search').value
    console.log(search)
    let uledit = document.getElementById('uledit')
    let lioful = uledit.getElementsByTagName('li')
    // console.log(lioful)
    Array.from(lioful).forEach(function (value) {
        let itemName = value.firstChild.textContent
        console.log(itemName.toLowerCase().includes(search))
        if (itemName.includes(search)) {
            value.style.display = 'block'
        }
        else {
            value.style.display = 'none'
        }
    })
    

}

search.addEventListener('input', showsearch)

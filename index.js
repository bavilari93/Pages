window.onload = (() => {
    const navigation = document.getElementById('navigation'),
        aTag = navigation.querySelectorAll('a');
    aTag.forEach((e) => {
        e.addEventListener('click', (() => {
            let name = e.getAttribute('name');
            viewRender(name);
        }))
    })

})

const viewRender = ((name)=> {
    var renderChoice = ['home', 'about', 'portafolio', 'contact'];
    renderChoice.forEach((e) => {
        name === e ?
            document.querySelector(`.${name}`).style.display = "flex" :
            document.querySelector(`.${e}`).style.display = "none"


    })
})
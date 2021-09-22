const panelss = documen.querySelectorAll('.panels');

panelss.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panelss.forEach(function(panel){
        panel.classList.remove('active')
    })
}
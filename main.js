//abre e fecha o menu/
const nav = document.querySelector('#header1 nav')
const toggle = document.querySelectorAll('nav .toggle')
const

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}
//NOTA: O toggle em "nav.classlist.toggle" (função do JS) é diferente do "const toggle" (variável);

//Quando clicar em item do MENU, fechar menu//
const itensmenu = document.querySelectorAll('nav ul li a')

for (const link of itensmenu) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

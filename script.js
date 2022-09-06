let boton = document.querySelector('button')
let descripcion = document.querySelector('#descripcion')
let grados = document.querySelector('#grados')
let input = document.querySelector('input')
let img = document.querySelector('#wicon') 
let nombreCiudad = document.querySelector('#ciudad')
let temperatura   = document.querySelector('#temperatura')

function cargarCiudad() {
    let ciudad = input.value.toLowerCase()

    if (ciudad != false) {
        $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=fdd533266e28101881f610f2b8f1ebe1`,
        data => {
            document.querySelector('.container').style.visibility = 'visible'

            nombreCiudad.textContent = data.name

            temperatura.textContent = Math.floor(data.main.temp - 273.15) + '°C'

            img.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)

            descripcion.textContent = data.weather[0].description

            input.value = ''
        })
    } else {
        alert('Ingrese una ciudad')
    }

    let pedido = $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=fdd533266e28101881f610f2b8f1ebe1`)

    pedido.fail(function () {
        alert('Ciudad inexistente')
    })
}

boton.addEventListener('click', cargarCiudad)
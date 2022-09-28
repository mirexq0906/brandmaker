document.addEventListener('DOMContentLoaded', function(){
    let products = [
        {
            name: "Стол руководителя",
            price: 27900,
        },
        {
            name: "Брифинг-приставка",
            price: 14600,
        },
        {
            name: "Тумба с ящиками",
            price: 10500,
        },
        {
            name: "Шкаф для одежды",
            price: 55000,
        },
        {
            name: "Кресло руководителя",
            price: 43800,
        },
        {
            name: "Кресло посетителя",
            price: 13500,
        },
    ]
    sum = 0;
    tooltipsSwiper = document.querySelectorAll('.section-offices__tooltip-swiper')
    price = document.getElementById('total-price')
    document.querySelectorAll('.section-offices__cell-calculate').forEach(function(product, id) {
        product.querySelector('.section-offices__cell-name').textContent = products[id].name
        product.querySelector('.section-offices__cell-price').textContent = products[id].price.toLocaleString() + ' руб'
        sum = sum + product.querySelector('.section-offices__item-input').value * products[id].price
        price.textContent = sum.toLocaleString() + ' руб'
    })
    document.querySelectorAll('.section-offices__item-number').forEach(function(inputClick, id) {
        inputClick.querySelector('.section-offices__arrow-top').addEventListener('click', function() {
            sum = sum + (inputClick.querySelector('.section-offices__item-input').value / inputClick.querySelector('.section-offices__item-input').value * products[id].price)
            price.textContent = sum.toLocaleString() + ' руб'
            inputClick.querySelector('.section-offices__arrow-bottom').removeAttribute('disabled', true)
        })
        inputClick.querySelector('.section-offices__arrow-bottom').addEventListener('click', function() {
            if (inputClick.querySelector('.section-offices__item-input').value === '0') {
                sum = sum - products[id].price
                inputClick.querySelector('.section-offices__arrow-bottom').setAttribute('disabled', true)
            } else {
                sum = sum - (inputClick.querySelector('.section-offices__item-input').value / inputClick.querySelector('.section-offices__item-input').value * products[id].price)
            }
            price.textContent = sum.toLocaleString() + ' руб'
        })
    })
    for(i = 0; i < tooltipsSwiper.length; i++) {
        document.querySelectorAll('.section-offices__swiper-popup')[i].innerHTML = products[i].name + '<span>' + products[i].price + ' руб</span>'
        if (i === 5) {
            break
        }
    }
    document.querySelectorAll('.section-offices__item-tooltip').forEach(function(tooltip, id) {
        tooltip.querySelector('.section-offices__item-popup').innerHTML = products[id].name + '<span>' + products[id].price.toLocaleString() + ' руб</span>'
    })
    document.querySelector('.section-offices__overflow-link').addEventListener('click', function() {
        let overflow = document.querySelector('.section-offices__overflow')
        let overflowClass = overflow.className
        if (overflowClass === 'section-offices__overflow section-offices__overflow-active') {
            overflow.classList.remove('section-offices__overflow-active')
            overflow.style.height = 245 + 'px'
            document.querySelector('.section-offices__overflow-link').textContent = 'Читать полностью'
        } else {
            overflow.classList.add('section-offices__overflow-active')
            overflow.style.height = overflow.scrollHeight + 'px'
            document.querySelector('.section-offices__overflow-link').textContent = 'Скрыть'
        }
        
    })
})
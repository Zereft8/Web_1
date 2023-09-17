
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        
        console.log(entry)
        if (entry.isIntersecting) 
        {
            entry.target.classList.add('show');
        }
        else
        {
            entry.target.classList.remove('show');
        }
    });


});

const hiddensElements = document.querySelectorAll('.tarjetas');

hiddensElements.forEach((el) => observer.observe(el));


const observer2 = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        
        console.log(entry)
        if (entry.isIntersecting) 
        {
            entry.target.classList.add('pie');
        }
        else
        {
            entry.target.classList.remove('pie');
        }
    });


});


const pieDePagina = document.querySelectorAll('.caja');

pieDePagina.forEach((el) => observer2.observe(el));
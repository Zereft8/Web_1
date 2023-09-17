
const observer = new IntersectionObserver((entries) => {

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

pieDePagina.forEach((el) => observer.observe(el));
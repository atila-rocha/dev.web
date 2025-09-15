document.addEventListener('DOMContentLoaded', function(){
    const mainpage=document.getElementById('Main');
    //funcao das setas para rolagem
    function setupArrows() {
        // ✅ Aguardar elementos existirem
        const checkAndSetup = () => {
            const arrowUp = document.getElementById('arrow-up');
            const arrowDown = document.getElementById('arrow-down');


            if (arrowUp && arrowDown) {
                // ✅ Buscar novamente após clonagem
                const newArrowUp = document.getElementById('arrow-up');
                const newArrowDown = document.getElementById('arrow-down');

                newArrowUp.addEventListener('click', function(e) {
                    e.preventDefault();
                    window.scrollBy({
                        top: -window.innerHeight * 0.2,
                        behavior: 'smooth'
                    });
                });

                newArrowDown.addEventListener('click', function(e) {
                    e.preventDefault();
                    window.scrollBy({
                        top: window.innerHeight * 0.2,
                        behavior: 'smooth'
                    });
                });

            } else {
                console.log('Setas não encontradas');
            }
        };

        checkAndSetup();
    }
    setupArrows();
    //verifica se está no modo escuro anteriormente
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        console.log('DARK');
    }
    //ao clicar na logo volta a homepage
    document.querySelector(".navbar-brand").addEventListener('click', function(){
        window.location.href='index.html';
    });
    //altera a "página"
    const curriculumelements= document.querySelectorAll('button.nav-link.curriculum, #Botao-Curriculo');
    curriculumelements.forEach(element => {
        element.addEventListener('click', function() {
            mainpage.classList.add('hidden');
            document.getElementById('curriculum').classList.remove('hidden');
            
        })
    });
    //faz a animação dos elementos
    const animatedElements = document.querySelectorAll('.hidden-animation');
    const observerOptions = {
        root: null, // null significa que o viewport é o root
        rootMargin: '0px', // Margem ao redor do root
        threshold: 0.1 // 10% do elemento deve estar visível para disparar
    };
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Se o elemento está visível
                entry.target.classList.add('fade-in-element');
                // Opcional: Parar de observar o elemento depois que ele animar uma vez
                observer.unobserve(entry.target);
            }
        });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    //aciona o dark mode
    document.getElementById('dark-mode-toggle').addEventListener('click', function(){
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'true');
        } else {
            localStorage.setItem('darkMode', 'false');
        }
    });
    

});


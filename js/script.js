document.addEventListener('DOMContentLoaded', function(){
    const mainpage=document.getElementById('Main');
    document.getElementById('Botao-Curriculo').addEventListener('click', function(){
        mainpage.innerHTML='';
    });
        
    document.getElementById('Botao-Cases').addEventListener('click', function(){
        console.log('It works!');
    });
});


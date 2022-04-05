$( document ).ready(() =>{

//  $('#ciao').html('pluto');
//  $('.container p').html('pluto');
//  console.log('jquery', $('p'))

    $('p').on('click', () => {
        $('p').hide();
    })


});
























window.addEventListener('load', () =>{                                               // ha la stessa funzione delle jquery sopra ripotate 
    
console.log('vanilla', document.getElementsByTagName('p'));

[...document.getElementsByTagName('p')].forEach(p=> p.innerHTML = 'paperino')

// document.querySelectorAll ha lo stesso funzionamento del getElementsByTagName ma scritto in un altra maniera
});
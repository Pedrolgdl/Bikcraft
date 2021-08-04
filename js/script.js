if(window.SimpleSlide) {

  new SimpleSlide({
    slide: "quote", // nome do atributo data-slide="nome"
    //nav: true, // se deve ou não mostrar a navegação
    //auto: true, // se o slide deve passar automaticamente // por padrão já é true
    time: 5000 // tempo de transição dos slides
  });

  new SimpleSlide({
    slide: "portifolio",
    time: 5000,
    nav: true
  });
}

if(window.SimpleAnime) {

  new SimpleAnime();
}
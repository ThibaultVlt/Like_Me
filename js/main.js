"use strict";
    const likeButtons = document.querySelectorAll('.like');

    //Pour tous les liens
    likeButtons.forEach(button => {
        button.addEventListener('click', function () {
            //Trouver l'élément en direction du haut du code (vers la racine)
        const textElement = button.closest('a').querySelector('.jaime');
        //Si c'est click "l'état" de l'image et de l'écriture changent
        if (textElement) {
            //Si le nom ('miniature_unlike.png') est dans le src
            if (button.src.includes('miniature_unlike.png')) {
            button.src = '/img/miniature_like.png';
            textElement.style.color = 'blue';
            } else {
            button.src = '/img/miniature_unlike.png';
            textElement.style.color = '';
                }

            }
        });
    });



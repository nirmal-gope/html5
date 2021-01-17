

// JQUERY
$(document).ready(function() {
    var mesImagesChevron = $('#slider-chevron img');

var monInterval;

var mesIcones = $('i.fas');

var chevronGauche = mesIcones[0];
var chevronDroit = mesIcones[1];

function afficheImage(indexImageAAfficher, indexImageACacher) {
    $(mesImagesChevron[indexImageAAfficher]).addClass('active');
    $(mesImagesChevron[indexImageACacher]).removeClass('active');
};

function gererClic(elementClique) {
    indexAncienneImage = indexImageActuelle;

    if(elementClique.hasClass('fa-chevron-left')) {
        indexImageActuelle--;
        if(indexImageActuelle < 0){
            indexImageActuelle = (mesImagesChevron.length - 1);
        };
    } else if(elementClique.hasClass('fa-chevron-right')) {
        indexImageActuelle++;
        if(indexImageActuelle >= mesImagesChevron.length) {
            indexImageActuelle = 0;
        };
    };
    afficheImage(indexImageActuelle, indexAncienneImage);

};

function initialiseInterval() {
    monInterval = setInterval(function() {
        indexAncienneImage = indexImageActuelle;
        indexImageActuelle++;
        if(indexImageActuelle >= mesImagesChevron.length) {
            indexImageActuelle = 0;
        }

        afficheImage(indexImageActuelle, indexAncienneImage);
    }, 2000)
};

var indexAncienneImage;
var indexImageActuelle = 0;

initialiseInterval();


$(chevronGauche).on('click', function(evenementSouris) {
    gererClic($(evenementSouris.currentTarget))
    clearInterval(monInterval);
    initialiseInterval();
});

$(chevronDroit).on('click', function(evenementSouris) {
    gererClic($(evenementSouris.currentTarget))
    clearInterval(monInterval);
    initialiseInterval();
});

   
});


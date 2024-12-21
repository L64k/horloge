/* canvas.js
 *
 * Librairie de fonctions pour dessiner dans les <canvas> HTML
 * 
 * Les fonctions dont le nom commence par '_' sont inspirées de fonctions du même nom en P5js
 * 
 */


let cnv, ctx;   // Canvas et contexte
const _360 = Math.PI*2;
const _270 = Math.PI*3/2;
const _180 = Math.PI;
const _120 = Math.PI*2/3;
const _90 = Math.PI/2;
const _60 = Math.PI/3;
const _45 = Math.PI/4;
const _30 = Math.PI/6;


// === Fonctions à la mode P5js ================================================================

/* _createCanvas(w,h)
 * Fonction qui comme dans P5js est à appeler une seule fois pour définir le canvas.
 * Si elles ne sont pas données, le dimensione par défaut sont celles de la fenêtre -3.
 * -3 pour éviter les barres de défilements
 */
function _createCanvas( w = window.innerWidth-3, h = window.innerHeight-3 ) {
    cnv = document.getElementById("canvas1");
    cnv.width = w;
    cnv.height = h;
    ctx = cnv.getContext("2d");
}

/* _background( couleur)
 * Fonction à celle du P5js pour modifier la couleur de fond du canvas
 */
function _background( couleur) {
    cnv.style.background = couleur;
}

/* redimensionne le canvas, utile pour s'adapter aux redimensionnements des fenêtres
 * en particulier au changement de position des smartphone (portrait ou paysage)
 */
function _resizeCanvas( w, h) {
    cnv.width = w;
    cnv.height = h;
}

function _map(v, min1, max1, min2, max2) {
    let r;
    r = min2 + (max2-min2)*(v-min1)/(max1-min1);
    return r;
}

function _norm(v, min, max) {
    let r;
    r = (v-min)/(max-min);
    return r;
}

// =======================================================================================

/* Affichage des dimensions de l'écran, de la fenêtre et du canvas
 */
function debugDim() {
    console.info("Dimensions de l'écran = "+screen.width+" & " + screen.height );
    console.info("Dimensions de la fenêtre = "+ window.innerWidth + " & " + window.innerHeight );
    console.info("Dimensions du canvas = " +  cnv.width + "  " + cnv.height );
}

window.onresize = cnvResize;
function cnvResize() {
    redim = true;
    draw();
}
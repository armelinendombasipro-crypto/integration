/* =========================================
   VARIABLES GLOBALES
   ========================================= */
let ctx, W, H;

/* =========================================
   FONCTIONS UTILITAIRES
   ========================================= */
// Fonction pour effacer tout le canvas avant de redessiner
function clearCanvas() {
    if (ctx) {
        ctx.clearRect(0, 0, W, H);
    }
}

/* =========================================
   FIGURE 1 : LA CIBLE
   ========================================= */
function drawTarget() {
    clearCanvas();
    
    const centerX = W / 2;
    const centerY = H / 2;
    const numCircles = 6; 
    // Rayon max = la moitié de la plus petite dimension du canvas
    const maxRadius = Math.min(W, H) / 2; 
    const ringWidth = maxRadius / numCircles; 

    // On dessine du plus grand au plus petit pour la superposition
    for (let i = numCircles; i >= 1; i--) {
        const radius = i * ringWidth;
        
        let color;
        if (i === 1) {
            color = 'red'; // Le centre
        } else if (i % 2 === 0) {
            color = 'black'; // Anneaux pairs
        } else {
            color = 'white'; // Anneaux impairs
        }
        
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }
}

/* =========================================
   FIGURE 2 : LE POULET (Grille)
   ========================================= */

   function drawChicken() {
    clearCanvas();
    const gridSize = 10;
    const step = W / gridSize;

    // --- 1. Grille de fond (Optionnelle) ---
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 1;
    for(let i = 0; i <= gridSize; i++) {
        ctx.beginPath();
        ctx.moveTo(i * step, 0); ctx.lineTo(i * step, H);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i * step); ctx.lineTo(W, i * step);
        ctx.stroke();
    }

    // --- 2. Tracé du corps (Points exacts de la grille) ---
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.lineJoin = 'miter'; 
    ctx.beginPath();

    // On suit les coordonnées (x, y) de l'image
    ctx.moveTo(3 * step, 2 * step); // Haut-gauche tête
    ctx.lineTo(4 * step, 2 * step); // Haut-droit tête
    ctx.lineTo(5 * step, 3 * step); // Début dos
    ctx.lineTo(7 * step, 3 * step); // Dos
    ctx.lineTo(8 * step, 2 * step); // Queue (pointe haut)
    ctx.lineTo(8 * step, 3 * step); 
    ctx.lineTo(9 * step, 3 * step); // Queue (pointe milieu)
    ctx.lineTo(8 * step, 4 * step); 
    ctx.lineTo(9 * step, 4 * step); // Queue (pointe bas)
    ctx.lineTo(7 * step, 6 * step); // Arrière-train
    ctx.lineTo(5 * step, 6 * step); // Ventre
    ctx.lineTo(4 * step, 5 * step); // Poitrine
    ctx.lineTo(4 * step, 4 * step); // Gorge
    ctx.lineTo(3 * step, 3 * step); // Menton / Bas de tête
    ctx.closePath(); // Ferme le tracé proprement vers le point (3,2)
    ctx.stroke();

    // --- 3. Les Détails ---

    // Bec triangle (attaché à gauche de la ligne 3,2 -> 3,3)
    ctx.beginPath();
    ctx.moveTo(3 * step, 2 * step); 
    ctx.lineTo(2 * step, 2 * step); 
    ctx.lineTo(3 * step, 3 * step); 
    ctx.stroke();

    // Crête zigzag sur le sommet de la tête
    ctx.beginPath();
    ctx.moveTo(3 * step, 2 * step);
    ctx.lineTo(3 * step, 1.5 * step);
    ctx.lineTo(3.3 * step, 1.8 * step);
    ctx.lineTo(3.6 * step, 1.5 * step);
    ctx.lineTo(4 * step, 1.8 * step);
    ctx.lineTo(4 * step, 2 * step);
    ctx.stroke();

    // Œil (petit point noir)
    ctx.beginPath();
    ctx.arc(3.3 * step, 2.3 * step, 3, 0, Math.PI * 2);
    ctx.fillStyle = 'black';
    ctx.fill();

    // Pattes (Regroupées en un seul chemin)
    ctx.beginPath();
    // Patte gauche
    ctx.moveTo(5 * step, 6 * step);
    ctx.lineTo(5 * step, 7.5 * step);
    ctx.moveTo(4 * step, 7 * step);
    ctx.lineTo(5 * step, 7 * step);
    ctx.lineTo(4.4 * step, 7.4 * step);
    // Patte droite
    ctx.moveTo(7 * step, 6 * step);
    ctx.lineTo(7 * step, 7.5 * step);
    ctx.moveTo(6 * step, 7 * step);
    ctx.lineTo(7 * step, 7 * step);
    ctx.lineTo(6.4 * step, 7.4 * step);
    ctx.stroke();
}
/* =========================================
   FIGURE 3 : LE DAMIER
   ========================================= */
function drawCheckerboard() {
    clearCanvas();
    
    const numSquares = 8; 
    const squareSize = W / numSquares; // Taille calculée dynamiquement
    
    for (let row = 0; row < numSquares; row++) {
        for (let col = 0; col < numSquares; col++) {
            // Alternance noir/blanc selon la parité de la somme row+col
            const isBlack = (row + col) % 2 !== 0; 
            
            ctx.fillStyle = isBlack ? 'black' : 'white';
            ctx.fillRect(col * squareSize, row * squareSize, squareSize, squareSize);
        }
    }
    
    // Cadre autour
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.strokeRect(0, 0, W, H);
}

/* =========================================
   FIGURE 4 : QUADRILLAGE / COURBES
   ========================================= */
function drawCurveQuadrillage() {
    clearCanvas();
    
    const PADDING = 20; 
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;

    const gridSize = Math.min(W, H) - 2 * PADDING; 
    const numLines = 20; // Densité
    
    const offsetX = PADDING; 
    const offsetY = PADDING;
    
    // 1ère courbe (Coin inférieur gauche)
    for (let i = 0; i <= numLines; i++) {
        const ratio = i / numLines;
        
        // Ligne part de l'axe X (bas) vers l'axe Y (gauche)
        const startX = offsetX + (gridSize * ratio);
        const startY = offsetY + gridSize; 
        
        const endX = offsetX; 
        const endY = offsetY + (gridSize * (1 - ratio));

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    }

    // 2ème courbe (Coin supérieur droit)
    for (let i = 0; i <= numLines; i++) {
        const ratio = i / numLines;
        
        // Ligne part de l'axe X (haut) vers l'axe Y (droite)
        const startX = offsetX + (gridSize * ratio);
        const startY = offsetY; 
        
        const endX = offsetX + gridSize; 
        const endY = offsetY + (gridSize * (1 - ratio));

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    }
}

/* =========================================
   INITIALISATION (DOMContentLoaded)
   ========================================= */
document.addEventListener('DOMContentLoaded', function() {
    // 1. Récupération des éléments HTML
    const canvas = document.getElementById('canvas_unique');
    const button = document.getElementById('nextFigureBtn');
    
    if (!canvas || !button) {
        console.error("Canvas ou bouton introuvable !");
        return;
    }

    // 2. Initialisation du contexte
    ctx = canvas.getContext('2d');
    W = canvas.width;
    H = canvas.height;
    
    // 3. Liste des figures
    const drawFunctions = [
        { name: "Cible", func: drawTarget },
        { name: "Poulet", func: drawChicken },
        { name: "Damier", func: drawCheckerboard },
        { name: "Quadrillage", func: drawCurveQuadrillage }
    ];
    
    let currentFigureIndex = 0;

    // 4. Fonction pour afficher la figure en cours
    function renderFigure() {
        // Exécute la fonction de dessin
        drawFunctions[currentFigureIndex].func();
        
        // Met à jour le texte du bouton pour savoir où on en est
        button.textContent = `Figure Suivante (${currentFigureIndex + 1}/${drawFunctions.length}) →`;
    }

    // 5. Gestion du clic
    button.addEventListener('click', function() {
        // Passe à l'index suivant (boucle grâce au modulo %)
        currentFigureIndex = (currentFigureIndex + 1) % drawFunctions.length; 
        renderFigure();
    });

    // 6. Premier affichage au chargement
    renderFigure();
});
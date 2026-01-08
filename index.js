// Liste précise de tes fichiers selon ton arborescence

const analyses = {
    1: [
        `Analyse TP1 EX 1 : Cet exercice m’a permis de découvrir Flexbox et ses principales propriétés (display: flex, flex-direction, flex-wrap, etc.). Le tableau aide à bien comprendre à quoi sert chaque propriété et à les visualiser clairement, surtout comme on n’avait pas encore vraiment les bases du CSS. C’était difficile pour un premier exercice. Il fallait bien placer les éléments, gérer plusieurs tableaux et comprendre Flexbox en même temps. Je ne l’aurais pas mis en premier exercice. Le fait que le professeur nous ait donné une partie du tableau a beaucoup aidé surtout pour la construction du code, sinon ça aurait été très compliqué de finir l’exercice. Niveaux de difficulté 8/10`,
        `Analyse TP1 EX 2 : Cet exercice m’a permis de refaire une page de site et de mieux comprendre comment placer des éléments dans un CSS. Ce n’était pas un exercice hyper compliqué. Le plus dur était de bien placer les images, surtout dans le header et le footer. Pour le code ça allait comme on avait déjà des infos dans TP. Une fois le header et le footer bien placés, le reste du site devient plus simple à organiser. C’est un exercice intéressant car ça nous montre comment faire une mise en page classique. Niveau de difficulté : 6/10`
    ],
    2: [
        `Analyse TP2 EX 2 : Heureusement qu’on avait fait l’exercice des grenouilles avant, ça m’a vraiment aidé à comprendre le fonctionnement des grids. J’ai appris à placer les éléments en fonction des lignes et des colonnes. Ce n’était pas facile au début de placer les éléments correctement, mais c’est un des exercices les moins compliqués. Il suffisait surtout d’utiliser l’inspecteur et de compter pour voir où chaque item était placé. Le code était simple à écrire. Une fois la logique de la grille comprise, tout devient assez clair et cohérent. Exercice très utile pour comprendre CSS Grid. Il aide à bien visualiser la structure d’une page et à organiser les blocs correctement. Niveau de difficulté : 3/10`,
        "Analyse TP2 EX 3 : Une fois qu’on comprend l’exercice 2, l’exercice 3 est très similaire. On revoit encore la logique des CSS Grid, avec les zones et la disposition des éléments.Le code se ressemble beaucoup avec l’exo 2, donc une fois qu’on maîtrise le 2, le 3 se fait facilement.Le code était simple et logique. Les noms des zones rendent le placement très clair. Bon exercice pour la compréhension des grids et la disposition des blocs dans une page. Niveau de difficulté : 3 / 10"
    ],
    3: ["Analyse TP3 EX 1 : Très facile, juste un rectangle qui change de couleur selon la largeur de l’écran. Le code était facile a faire.L’exercice à permis  de me familiariser avec les media queries et le concept de responsive design. Niveau de difficulté : 1 / 10 ", 
        
        "Analyse TP3 EX 2 : La difficulté résidait surtout dans la gestion des différentes largeurs pour le responsive. Une partie du code était fournie, ce qui facilite l’exercice. Parcontre ne suis pas arrivé a revenir sur 3 colonne au départ. L’exercice à permis de me familiariser avec CSS Grid responsive et les bonnes pratiques pour adapter un layout selon la largeur de l’écran. Niveau de difficulté :4 / 10"
    ],
    4: ["Analyse TP4 EX 1 : La partie sur li:nth-child(1) était celle que j’ai eu du mal à comprendre et à utiliser correctement. Il y avait aussi la fonction :target, surtout la syntaxe, qui n’était pas facile donc j’ai eu du mal a écrire le code. L’exercice permet de voir comment cibler précisément un élément au clic. J’ai pu comprendre l’utilisation des pseudo-classes et sélecteurs pour gérer l’affichage d’élément précis. Niveau de difficulté :5 / 10",
         "Analyse TP4 EX 2 : Le plus gros problème avec cette exercice était de gérer les chemins afin de retrouver les images. C’est quelque chose que j’aurai déjà maitriser mais ce que je savais pas c’était que du a certains chemin les image peuvent être vu seulement si le site et héberger. J’ai eu des soucis au niveau de synthaxe de mon code surtout pour cette partie : li:has(a... On était toujours sur la compréhension des pseudo-classes  cette fois-ci pour une liste de liens. Niveau de difficulté : 6 / 10 "],

    5: ["Analyse TP5 EX 2 : L’exercice était plus compliqué qu’il n’y paraît car il faut calculer la progression du scroll et définir la couleur de départ et de fin. C’était intéressant de voir le changement d’état d’un élément (scrollTop) de façon visuelle. Comme je n’étais pas familier avec JavaScript, ça m’a pris du temps de comprendre l’usage de chaque fonction.C’était pas facile d’écrire le code en javascript. L’exercice était utile pour apprendre à manipuler le DOM, les événements scroll, et changer dynamiquement le style de changement. Niveau de difficulté :8 / 10", 
        "Analyse TP5 EX 6 : L'exercice est plus facile qu’il n’y paraît. Je n’ai pas eu trop de difficultés à le réaliser. C’était un bon exercice pour comprendre le parallaxe et voir comment les images peuvent rester fixes pendant que le contenu défile. Niveau de difficulté : 2/10"],

    6: ["Analyse TP6 EX 1 : C’est un exercice pas trop compliqué qui montre comment on peut créer une sorte de rideau avec le CSS. La partie la moins facile était de bien utiliser les translate pour préciser quel carré part à gauche et quel carré part à droite. Le code n’était pas compliqué à écrire et reste assez simple à comprendre. ’ai aussi appris à utiliser la propriété transform avec translateX et les transition pour créer une animation fluide. L’utilisation du :hover m’a permis de déclencher une animation au passage de la souris. Niveau de difficulté : 2/10",
        "Analyse TP6 EX 2 : Dans cet exercice, j’ai appris à réaliser des animations CSS simples comme la rotation, l’agrandissement des formes et les animations en hauteur. J’ai utilisé les @keyframes et les animation-delay pour créer un effet de mouvement. Le code est compréhensible malgré quelques répétitions et comme le profs avait donné beaucoup de code dans le cours j’ai pu les réutilisé. Cet exercice est utile pour s’entraîner aux animations CSS. Même si toutes les animations n’ont pas été réalisées, j’ai préféré me concentrer sur celles que j’ai réussies et les faire fonctionner correctement. Niveau de difficulté : 2/10 ", 
        "Analyse TP6 EX 5 : Cet exercice était un peu plus compliqué, car il fallait faire défiler le texte sans qu’il touche l’image située à droite. Le texte devait arriver au centre de la bannière, disparaître, puis repartir à gauche pour recommencer l’animation. J’ai appris à utiliser les @keyframes, le positionnement absolu et la gestion de l’opacité pour contrôler le déplacement du texte.Niveau de difficulté : 4/10 "],
    7: ["Analyse TP7 EX 1 : Ce que j'en dirais, c'est que c'était loin d'être simple ! Une fois qu'on comprend bien ctx.fillStyle pour le remplissage et ctx.strokeStyle pour les contours, c'était plutôt facile de faire la première et la trosième figure. Par contre, pour le poulet et la quatrième figure, c'était vraiment dur et long. Pour le poulet, il fallait trouver chaque point de la grille un à un pour que ça ressemble à quelque chose. Et la dernière figure, je ne l'ai pas du tout réussie du premier coup, mais je la pose quand même dans le projet. Je ne sais si le code est bon partout je sais juste que j'ai fait de mon mieux. je pense que pour la dernière figure le code est à revoir. C'était vraiment cool d'apprendre qu'on pouvait sois disant dessiner avec du JavaScript, je ne savais pas que c'était possible . Niveau de difficulté : 9/10",
        "Analyse TP7 EX 2 :  Comme j'avais bien maîtrisé certaines figures du premier exercice, j'ai pu réutiliser du code pour celui-là. Franchement, ce n'était pas compliqué ! J'ai aussi repris le code du cours pour refaire le cercle avec une partie en moins (pour la bouche). Au final, le code n'était pas dur à écrire du tout. j'ai continué mon aprentissage de canvas en utilisant ctx.arc() avec les angles en Math.PI pour ouvrir la bouche et  j'ai pu aprendre comment gerer des calques (dessiner l'œil par-dessus le corps). Niveau de difficulté : 4/10"],
    8: ["Analyse TP8 Exo 4 : C'était un exercice plus dure qu’il n’y parait  car la fonction pour isoler les couleurs m'a posé problème au départ. J'ai dû approfondir le cours pour maîtriser retrait des données pixels avec ctx.getImageData(x, y, 1, 1).data et le système de coordonnées RVB.  Finalement, j'ai réussi à convertir ces données en HEX pour identifier la couleur exacte au clic. C'est très instructif de voir qu'une image est en fait une grille de données numériques manipulables. Niveau de difficulté : 6,5/10", 
        "Analyse TP8 Exo 5 :  Cet exercice consistait à créer une loupe dynamique et c'était plutôt intéressant à coder. J'ai dû apprendre à utiliser ctx.clip() pour donner cette forme ronde au deuxième canvas et bien gérer le mousemove pour que la loupe suive la souris. Le plus dur a été de calculer la récupération des pixels avec les variables scaleX et scaleY pour que le zoom soit précis par rapport à l'image originale. J'ai aussi découvert comment utiliser save() et restore() pour ne pas casser le reste du dessin. Au final, ça donne un effet visuel plutot sympa. Niveau de difficulté : 6/10"]
};

const tpData = {
    1: ["TP1/EX1/EX1.html", "TP1/EX2/EX2.html"],
    2: ["TP2/EX2/EX2.html", "TP2/EX3/EX3.html"],
    3: ["TP3/EX1/EX1.html", "TP3/EX2/EX1.html"],
    4: ["TP4/EX1/EX1.html", "TP4/EX2/EX2.html"],
    5: ["TP5/EX2/EX2.html", "TP5/EX6/EX6.html"],
    6: ["TP6/EX1/ex1.html", "TP6/EX2/EX2.html", "TP6/EX5/EX5.html"],
    7: ["TP7/EX1/EX1.html", "TP7/EX2/EX2.html"], 
    8: ["TP8/EX4/EX4.html", "TP8/EX5/EX5.html"]  
};

let currentTPIndex = 0;

function init() {
    const nav = document.getElementById('nav-tp-links');
    const welcomeButtons = document.getElementById('welcome-buttons');

    for (let i = 1; i <= 8; i++) {
        // Création liens menu
        const link = document.createElement('a');
        link.href = "#";
        link.innerText = `TP${i}`;
        link.onclick = (e) => { e.preventDefault(); loadTP(i); };
        nav.appendChild(link);

        // Création boutons accueil
        const btn = document.createElement('button');
        btn.innerText = `TP ${i}`;
        btn.onclick = () => loadTP(i);
        welcomeButtons.appendChild(btn);
    }
}

function loadTP(num) {
    currentTPIndex = num;

    // Masquer l'accueil, afficher le viewer
    document.getElementById('welcome-area').classList.add('hidden');
    document.getElementById('tp-viewer').classList.remove('hidden');

    // Mettre à jour le titre
    document.getElementById('current-tp-title').innerText = `Travaux Pratiques n°${num}`;

    // Vider et remplir les exercices
    const container = document.getElementById('exercises-container');
    container.innerHTML = "";

    const paths = tpData[num];
    const comments = analyses[num] || [];

    if (!paths || paths.length === 0) {
        container.innerHTML = "<p>Aucun exercice disponible pour ce TP.</p>";
    } else {
        paths.forEach((path, index) => {
            // On cherche le numéro après "EX" dans le chemin du fichier
            const match = path.match(/EX(\d+)/i);
            // Si on trouve un chiffre (ex: 5), on l'utilise. Sinon, on garde l'ordre (1, 2, 3...)
            const exoNumber = match ? match[1] : index + 1;

            const div = document.createElement('div');
            div.className = "exo-block";
            div.innerHTML = `
                <h3>Exercice ${exoNumber}</h3>
                <iframe src="${path}"></iframe>
            `;
            container.appendChild(div);
        });
    }

    if (comments.length > 0) {
        const commentSection = document.createElement('div');
        commentSection.className = "comment-section-bottom";
        commentSection.innerHTML = "<h2>📝 Mes Commentaires</h2>";
        
        // On crée une petite grille pour les commentaires
        const grid = document.createElement('div');
        grid.className = "comment-grid";
        
        comments.forEach((text, index) => {
            const match = paths[index] ? paths[index].match(/EX(\d+)/i) : null;
            const exoNumber = match ? match[1] : index + 1;

            const box = document.createElement('div');
            box.className = "comment-box";
            box.innerHTML = `<h4>EX ${exoNumber}</h4><p>${text}</p>`;
            grid.appendChild(box);
        });


        commentSection.appendChild(grid);
        container.appendChild(commentSection);
    }

    // Gérer l'état des flèches
    document.getElementById('btn-prev').disabled = (num === 1);
    document.getElementById('btn-next').disabled = (num === 8);

    // Remonter en haut
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function changeTP(direction) {
    const nextTP = currentTPIndex + direction;
    if (nextTP >= 1 && nextTP <= 8) {
        loadTP(nextTP);
    }
}

// Initialisation au chargement
window.onload = init;

// Fonction qui met à jour la couleur de fond en fonction du scroll
function updateBackgroundColor() {
    const scrollableElement = document.getElementById('exo2_scrollable_content');
    if (!scrollableElement) return; // si l'élément n'existe pas, on quitte

    // Hauteur totale du contenu scrollable moins la hauteur visible
    const scrollHeight = scrollableElement.scrollHeight - scrollableElement.clientHeight;
    const scrollTop = scrollableElement.scrollTop; // position actuelle du scroll

    // Calculer la progression du scroll (0 = en haut, 1 = en bas)
    let scrollProgress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
    scrollProgress = Math.max(0, Math.min(1, scrollProgress)); // on s'assure que c'est entre 0 et 1

    // Définir la couleur : blanc au début, rouge à la fin
    const red = 255; // rouge toujours à fond
    const greenBlue = Math.round(255 * (1 - scrollProgress)); // vert et bleu diminuent avec le scroll

    // Appliquer la couleur au fond
    scrollableElement.style.backgroundColor = `rgb(${red}, ${greenBlue}, ${greenBlue})`;
}

// Ajouter l'événement de scroll après que la page est chargée
document.addEventListener('DOMContentLoaded', function() {
    const scrollableContent = document.getElementById('exo2_scrollable_content');

    if (scrollableContent) {
        scrollableContent.addEventListener('scroll', updateBackgroundColor); // mise à jour au scroll
        updateBackgroundColor(); // couleur initiale au chargement
    }
});

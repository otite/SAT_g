// --- DONNÉES ET CONFIGURATION ---
const cardsData = [
    { id: 1, titre: "Neige Fraîche", sat: 1, description: "Surcharge immédiate" },
    { id: 2, titre: "Neige Ventée", sat: 2, description: "Accumulations (plaques)" },
    { id: 3, titre: "Couches Fragiles", sat: 3, description: "Piège invisible" },
    { id: 4, titre: "Neige Mouillée", sat: 4, description: "Réchauffement ou pluie" },
    { id: 5, titre: "Glissements", sat: 5, description: "Avalanche de fond" },
    
    // Ligne 0 (C1) - Bleu
    { id: 6, titre: "Chute > 30cm", sat: 1, line: 0, color: "#3b82f6", description: "Quantité critique de neige fraîche en 24h." },
    { id: 7, titre: "Corniches", sat: 2, line: 0, color: "#3b82f6", description: "Surplombs de neige formés sur les crêtes." },
    { id: 8, titre: "Gobelets", sat: 3, line: 0, color: "#3b82f6", description: "Grains de sucre sans cohésion à la base du manteau." },
    { id: 9, titre: "Pluie", sat: 4, line: 0, color: "#3b82f6", description: "L'eau s'infiltre et alourdit brutalement le manteau." },
    { id: 10, titre: "Gueule de baleine", sat: 5, line: 0, color: "#3b82f6", description: "Fissure large qui traverse tout le manteau jusqu'au sol." },

    // Ligne 1 (C2) - Indigo
    { id: 11, titre: "Purges naturelles", sat: 1, line: 1, color: "#6366f1", description: "Avalanches spontanées pendant ou juste après la chute." },
    { id: 12, titre: "Dépôts de neige", sat: 2, line: 1, color: "#6366f1", description: "Accumulations d'aspect mat et friable." },
    { id: 13, titre: "Bruit de 'Woum'", sat: 3, line: 1, color: "#6366f1", description: "Signe d'effondrement d'une couche fragile sous vos skis." },
    { id: 14, titre: "Rayonnement solaire", sat: 4, line: 1, color: "#6366f1", description: "Le soleil de printemps chauffe les pentes Sud." },
    { id: 15, titre: "Pentes herbeuses", sat: 5, line: 1, color: "#6366f1", description: "Terrain favorisant le glissement 'savonnette'." },

    // Ligne 2 (C3) - Violet
    { id: 16, titre: "Froid intense", sat: 1, line: 2, color: "#8b5cf6", description: "Empêche la neige fraîche de se stabiliser rapidement." },
    { id: 17, titre: "Zones décapées", sat: 2, line: 2, color: "#8b5cf6", description: "Là où le vent a enlevé la neige jusqu'à la glace." },
    { id: 18, titre: "Déclenchement distance", sat: 3, line: 2, color: "#8b5cf6", description: "L'avalanche part loin au-dessus ou à côté de vous." },
    { id: 19, titre: "Boules de neige", sat: 4, line: 2, color: "#8b5cf6", description: "Petites boules qui roulent spontanément en surface." },
    { id: 20, titre: "Dalles rocheuses", sat: 5, line: 2, color: "#8b5cf6", description: "Surfaces lisses où la neige n'accroche pas." },

    // Ligne 3 (C4) - Orange
    { id: 21, titre: "Visibilité réduite", sat: 1, line: 3, color: "#f59e0b", description: "Rend l'évaluation de la quantité tombée difficile." },
    { id: 22, titre: "Transport de neige", sat: 2, line: 3, color: "#f59e0b", description: "Formation de 'chasse-neige' visible sur les sommets." },
    { id: 23, titre: "Givre de surface", sat: 3, line: 3, color: "#f59e0b", description: "Anciennes paillettes gelées recouvertes par une chute." },
    { id: 24, titre: "Enfoncement pied", sat: 4, line: 3, color: "#f59e0b", description: "On s'enfonce au-dessus de la chaussure dans la soupe." },
    { id: 25, titre: "Température du sol", sat: 5, line: 3, color: "#f59e0b", description: "La chaleur du sol fait fondre la base du manteau." },

    // Ligne 4 (C5) - Rose
    { id: 26, titre: "Surcharge critique", sat: 1, line: 4, color: "#ec4899", description: "Le poids de la nouvelle neige sur l'ancienne." },
    { id: 27, titre: "Plaque à vent", sat: 2, line: 4, color: "#ec4899", description: "Structure cassante souvent située sous les crêtes." },
    { id: 28, titre: "Fissures longues", sat: 3, line: 4, color: "#ec4899", description: "Fissures qui se propagent loin lors d'un passage." },
    { id: 29, titre: "Avalanche de fonte", sat: 4, line: 4, color: "#ec4899", description: "Écoulement lent de neige lourde et dense." },
    { id: 30, titre: "Danger permanent", sat: 5, line: 4, color: "#ec4899", description: "Peut partir à toute heure, jour comme nuit." },

    // Ligne 5 (C6) - Cyan
    { id: 31, titre: "Cristaux légers", sat: 1, line: 5, color: "#06b6d4", description: "Neige peu dense facile à mobiliser par le vent plus tard." },
    { id: 32, titre: "Sifflement du vent", sat: 2, line: 5, color: "#06b6d4", description: "Indicateur sonore d'un transport en cours." },
    { id: 33, titre: "Test de la colonne", sat: 3, line: 5, color: "#06b6d4", description: "Méthode pour identifier une rupture nette en profondeur." },
    { id: 34, titre: "Nuit douce", sat: 4, line: 5, color: "#06b6d4", description: "Absence de regel nocturne, le manteau reste fragile le matin." },
    { id: 35, titre: "Zone de dépôt", sat: 5, line: 5, color: "#06b6d4", description: "Souvent au pied des pentes raides et lisses." },

    // Ligne 6 (S) - Ardoise
    { id: 36, titre: "Schéma Fraîche", sat: 1, line: 6, color: "#64748b", description: "Image illustrative : chute de neige." },
    { id: 37, titre: "Schéma Vent", sat: 2, line: 6, color: "#64748b", description: "Image illustrative : transport par le vent." },
    { id: 38, titre: "Schéma Persistante", sat: 3, line: 6, color: "#64748b", description: "Image illustrative : grains de gobelets." },
    { id: 39, titre: "Schéma Mouillée", sat: 4, line: 6, color: "#64748b", description: "Image illustrative : soleil et fonte." },
    { id: 40, titre: "Schéma Fond", sat: 5, line: 6, color: "#64748b", description: "Image illustrative : fissure de glissement." }
];

let totalRowsCreated = 0;
const rowColors = ["#3b82f6", "#6366f1", "#8b5cf6", "#f59e0b", "#ec4899", "#06b6d4", "#64748b"];

function initGame() {
    const headerRow = document.getElementById('header-sat');
    
    // Case vide pour aligner avec les catégories
    const spacer = document.createElement('div');
    spacer.className = 'cat-label spacer';
    headerRow.appendChild(spacer);

    // En-têtes SAT (Colonnes 1 à 5)
    cardsData.slice(0, 5).forEach((card) => {
        const div = document.createElement('div');
        div.className = 'card-box sat-header';
        div.innerHTML = `<strong>${card.titre}</strong><div class="desc">${card.description}</div>`;
        headerRow.appendChild(div);
    });

    // Lancer la première étape
    startNextStep();
}

function startNextStep() {
    if (totalRowsCreated >= 7) {
        alert("Félicitations ! Vous avez complété toutes les catégories.");
        return;
    }

    // 1. Ajouter la nouvelle ligne sur le plateau
    addNewRow(totalRowsCreated);

    // 2. Ajouter UNIQUEMENT les cartes de cette ligne dans le deck
    const deck = document.getElementById('deck');
    deck.innerHTML = ""; // On nettoie au cas où
    
    const stepCards = cardsData.filter(c => c.line === totalRowsCreated);
    shuffleArray(stepCards);
    
    stepCards.forEach(card => {
        deck.appendChild(createCardElement(card));
    });
}

function createCardElement(card) {
    const cardEl = document.createElement('div');
    cardEl.className = 'card-box draggable-card';
    cardEl.draggable = true;
    cardEl.id = `card-${card.id}`;
    cardEl.dataset.sat = card.sat;
    cardEl.dataset.line = card.line;
    cardEl.style.borderColor = card.color;
    
    cardEl.innerHTML = `
        <div class="line-indicator" style="background:${card.color}"></div>
        <strong>${card.titre}</strong>
        <div class="desc">${card.description}</div>
    `;
    
    const btnTrash = document.createElement('button');
    btnTrash.className = 'btn-trash';
    btnTrash.innerHTML = '×';
    btnTrash.onclick = (e) => { e.stopPropagation(); moveToDeck(cardEl); };
    cardEl.appendChild(btnTrash);

    cardEl.ondragstart = (e) => e.dataTransfer.setData('text', e.target.id);
    return cardEl;
}

function addNewRow(index) {
    const board = document.getElementById('game-board');
    const rowDiv = document.createElement('div');
    const currentColor = rowColors[index];
    
    rowDiv.className = `board-row active row-${index}`;
    rowDiv.dataset.lineIndex = index;
    rowDiv.style.backgroundColor = `${currentColor}10`; 
    rowDiv.style.borderColor = currentColor;
    
    const catLabel = document.createElement('div');
    catLabel.className = 'cat-label';
    catLabel.style.backgroundColor = currentColor;
    catLabel.innerText = index < 6 ? `C${index + 1}` : "S";
    rowDiv.appendChild(catLabel);

    for (let c = 0; c < 5; c++) {
        const zone = document.createElement('div');
        zone.className = 'card-box dropzone';
        zone.dataset.colSat = c + 1;
        zone.style.borderColor = `${currentColor}40`;
        zone.ondragover = (e) => e.preventDefault();
        zone.ondrop = handleDrop;
        rowDiv.appendChild(zone);
    }
    board.appendChild(rowDiv);
}

function handleDrop(e) {
    e.preventDefault();
    const zone = e.target.closest('.dropzone');
    const activeRow = zone.closest('.board-row');
    if (!activeRow || !activeRow.classList.contains('active')) return;

    const cardId = e.dataTransfer.getData('text');
    const cardEl = document.getElementById(cardId);

    if (zone && zone.children.length === 0) {
        zone.appendChild(cardEl);
        validateCard(cardEl, zone, activeRow);
        checkRowStatus(activeRow);
    }
}

function validateCard(card, zone, row) {
    const isSatCorrect = card.dataset.sat === zone.dataset.colSat;
    // Ici la ligne est forcément correcte car on ne pioche que les bonnes cartes
    if (isSatCorrect) {
        card.classList.add('correct');
        card.classList.remove('wrong');
    } else {
        card.classList.add('wrong');
        card.classList.remove('correct');
    }
}

function moveToDeck(cardEl) {
    cardEl.classList.remove('correct', 'wrong');
    document.getElementById('deck').appendChild(cardEl);
}

function checkRowStatus(row) {
    const cardsInRow = row.querySelectorAll('.dropzone > .card-box.correct');
    if (cardsInRow.length === 5) {
        row.classList.replace('active', 'locked');
        Array.from(row.querySelectorAll('.btn-trash')).forEach(b => b.remove());
        
        totalRowsCreated++;
        // On attend un peu avant de charger la suite pour l'effet visuel
        setTimeout(startNextStep, 600);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

window.onload = initGame;
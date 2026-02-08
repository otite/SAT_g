const cardsData = [
    { id: 1, titre: "Neige Fraîche", sat: 1, description: "Surcharge immédiate" },
    { id: 2, titre: "Neige Ventée", sat: 2, description: "Accumulations (plaques)" },
    { id: 3, titre: "Couches Fragiles", sat: 3, description: "Piège invisible" },
    { id: 4, titre: "Neige Mouillée", sat: 4, description: "Réchauffement ou pluie" },
    { id: 5, titre: "Glissements", sat: 5, description: "Avalanche de fond" },
    
    // Ligne 1 (C1)
    { id: 6, titre: "Transport important", sat: 2, line: 0, color: "#3b82f6", description: "Transport de neige par le vent (formation de plaques)." },
    { id: 7, titre: "Redoux marqué", sat: 4, line: 0, color: "#3b82f6", description: "Réchauffement important ou pluie." },
    { id: 8, titre: "Chute > 30cm", sat: 1, line: 0, color: "#3b82f6", description: "Quantité critique de neige fraîche tombée en 24h." },
    { id: 9, titre: "Gueules de baleine", sat: 5, line: 0, color: "#3b82f6", description: "Fissure de glissement traversant tout le manteau jusqu'au sol." },
    { id: 10, titre: "Bruit de 'Woum'", sat: 3, line: 0, color: "#3b82f6", description: "Effondrement d'une couche fragile au passage d'un skieur." },

    // Ligne 2 (C2)
    { id: 11, titre: "Dalles de rocher", sat: 5, line: 1, color: "#6366f1", description: "Le terrain favorise le glissement de tout le manteau." },
    { id: 12, titre: "Neige peu dense", sat: 1, line: 1, color: "#6366f1", description: "Cristaux légers et froids facilitant le transport ultérieur." },
    { id: 13, titre: "Accumulations mates", sat: 2, line: 1, color: "#6366f1", description: "Neige transportée d'aspect crayeux et souvent friable." },
    { id: 14, titre: "Rayonnement fort", sat: 4, line: 1, color: "#6366f1", description: "Le soleil chauffe et humidifie les couches de surface." },
    { id: 15, titre: "Fissures longues", sat: 3, line: 1, color: "#6366f1", description: "Propagation de la rupture sur de longues distances." },

    // Ligne 3 (C3)
    { id: 16, titre: "Grains anguleux", sat: 3, line: 2, color: "#8b5cf6", description: "Formation de cristaux sans cohésion par fort gradient thermique." },
    { id: 17, titre: "Avalanche de fond", sat: 5, line: 2, color: "#8b5cf6", description: "Toute l'épaisseur de neige glisse sur le sol herbeux." },
    { id: 18, titre: "Chasse-neige", sat: 2, line: 2, color: "#8b5cf6", description: "Vent fort déplaçant la neige sur les sommets." },
    { id: 19, titre: "Nuit douce", sat: 4, line: 2, color: "#8b5cf6", description: "Absence de regel nocturne, manteau fragile dès le matin." },
    { id: 20, titre: "Faible cohésion", sat: 1, line: 2, color: "#8b5cf6", description: "Liaisons très faibles entre les nouveaux cristaux." },

    // Ligne 4 (C4)
    { id: 21, titre: "Corniches", sat: 2, line: 3, color: "#f59e0b", description: "Surplombs instables formés sur les crêtes." },
    { id: 22, titre: "Surcharge critique", sat: 1, line: 3, color: "#f59e0b", description: "Le poids de la nouvelle neige dépasse la résistance." },
    { id: 23, titre: "Pentes herbeuses", sat: 5, line: 3, color: "#f59e0b", description: "Support lisse favorisant les avalanches de glissement." },
    { id: 24, titre: "Givre de surface", sat: 3, line: 3, color: "#f59e0b", description: "Cristaux fragiles enfouis après une nouvelle chute." },
    { id: 25, titre: "Neige 'soupe'", sat: 4, line: 3, color: "#f59e0b", description: "Perte totale de cohésion par excès d'eau liquide." },

    // Ligne 5 (C5)
    { id: 26, titre: "Zones décapées", sat: 2, line: 4, color: "#ec4899", description: "Le vent a enlevé toute la neige jusqu'à la croûte dure." },
    { id: 27, titre: "Froid intense", sat: 1, line: 4, color: "#ec4899", description: "Bloque la stabilisation du manteau neigeux." },
    { id: 28, titre: "Déclenchement distance", sat: 3, line: 4, color: "#ec4899", description: "Une avalanche part loin au-dessus du skieur." },
    { id: 29, titre: "Lignes de glissement", sat: 5, line: 4, color: "#ec4899", description: "Fissures horizontales annonçant un départ imminent." },
    { id: 30, titre: "Pentes raides Sud", sat: 4, line: 4, color: "#ec4899", description: "Exposition la plus sensible au réchauffement printanier." },

    // Ligne 6 (C6)
    { id: 31, titre: "Gobelets", sat: 3, line: 5, color: "#06b6d4", description: "Couche fragile persistante située souvent en profondeur." },
    { id: 32, titre: "Sifflement du vent", sat: 2, line: 5, color: "#06b6d4", description: "Indicateur sonore d'un transport actif en cours." },
    { id: 33, titre: "Avalanche de fonte", sat: 4, line: 5, color: "#06b6d4", description: "Écoulement lent de neige lourde et humide." },
    { id: 34, titre: "Purges spontanées", sat: 1, line: 5, color: "#06b6d4", description: "L'excès de poids provoque des départs naturels." },
    { id: 35, titre: "Zone de dépôt", sat: 5, line: 5, color: "#06b6d4", description: "Accumulation de neige au bas d'une pente de glissement." },

    // Schémas (S)
    { id: 36, titre: "Schéma Fraîche", sat: 1, line: 6, color: "#64748b", description: "Visuel : chute de neige." },
    { id: 37, titre: "Schéma Vent", sat: 2, line: 6, color: "#64748b", description: "Visuel : transport." },
    { id: 38, titre: "Schéma Persistante", sat: 3, line: 6, color: "#64748b", description: "Visuel : grains fragiles." },
    { id: 39, titre: "Schéma Mouillée", sat: 4, line: 6, color: "#64748b", description: "Visuel : fonte." },
    { id: 40, titre: "Schéma Fond", sat: 5, line: 6, color: "#64748b", description: "Visuel : glissement." }
];

let currentStep = 0;
const rowColors = ["#3b82f6", "#6366f1", "#8b5cf6", "#f59e0b", "#ec4899", "#06b6d4", "#64748b"];

function initGame() {
    const headerRow = document.getElementById('header-sat');
    const spacer = document.createElement('div');
    spacer.className = 'cat-label spacer';
    headerRow.appendChild(spacer);

    cardsData.slice(0, 5).forEach(card => {
        const div = document.createElement('div');
        div.className = 'card-box sat-header';
        div.innerHTML = `<strong>${card.titre}</strong><div class="desc">${card.description}</div>`;
        headerRow.appendChild(div);
    });

    startNextStep();
}

function startNextStep() {
    if (currentStep >= 7) return;
    addNewRow(currentStep);
    updateDeck(currentStep);
}

function updateDeck(lineIndex) {
    const deck = document.getElementById('deck');
    deck.innerHTML = ""; 
    const stepCards = cardsData.filter(c => c.line === lineIndex);
    shuffleArray(stepCards);
    stepCards.forEach(card => deck.appendChild(createCardElement(card)));
}

function createCardElement(card) {
    const cardEl = document.createElement('div');
    cardEl.className = 'draggable-card';
    cardEl.draggable = true;
    cardEl.id = `card-${card.id}`;
    cardEl.dataset.sat = card.sat;
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
    const color = rowColors[index];
    rowDiv.className = `board-row active row-${index}`;
    rowDiv.style.backgroundColor = `${color}10`; 
    rowDiv.style.borderColor = color;
    
    const catLabel = document.createElement('div');
    catLabel.className = 'cat-label';
    catLabel.style.backgroundColor = color;
    catLabel.innerText = index < 6 ? `C${index + 1}` : "S";
    rowDiv.appendChild(catLabel);

    for (let c = 0; c < 5; c++) {
        const zone = document.createElement('div');
        zone.className = 'dropzone';
        zone.dataset.colSat = c + 1;
        zone.style.borderColor = `${color}40`;
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
    if (!zone || !activeRow || !activeRow.classList.contains('active')) return;

    const cardId = e.dataTransfer.getData('text');
    const cardEl = document.getElementById(cardId);
    if (zone.children.length === 0) {
        zone.appendChild(cardEl);
        validateCard(cardEl, zone);
        checkRowStatus(activeRow);
    }
}

function validateCard(card, zone) {
    const trash = card.querySelector('.btn-trash');
    if (card.dataset.sat == zone.dataset.colSat) {
        card.classList.add('correct');
        card.classList.remove('wrong');
        if (trash) trash.style.display = 'none';
    } else {
        card.classList.add('wrong');
        card.classList.remove('correct');
        if (trash) trash.style.display = 'flex';
    }
}

function moveToDeck(cardEl) {
    cardEl.classList.remove('correct', 'wrong');
    const trash = cardEl.querySelector('.btn-trash');
    if (trash) trash.style.display = 'none';
    document.getElementById('deck').appendChild(cardEl);
}

function checkRowStatus(row) {
    const correctCards = row.querySelectorAll('.draggable-card.correct');
    if (correctCards.length === 5) {
        row.classList.replace('active', 'locked');
        row.querySelectorAll('.btn-trash').forEach(b => b.remove());
        currentStep++;
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
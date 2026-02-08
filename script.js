const cardsData = [
    { id: 1, titre: "Neige Fraîche", sat: 1, description: "Surcharge immédiate" },
    { id: 2, titre: "Neige Ventée", sat: 2, description: "Accumulations (plaques)" },
    { id: 3, titre: "Couches Fragiles", sat: 3, description: "Piège invisible" },
    { id: 4, titre: "Neige Mouillée", sat: 4, description: "Réchauffement ou pluie" },
    { id: 5, titre: "Glissements", sat: 5, description: "Avalanche de fond" },
    
    // C1
    { id: 6, titre: "Chute > 30cm", sat: 1, line: 0, color: "#3b82f6", description: "Quantité critique en 24h." },
    { id: 7, titre: "Corniches", sat: 2, line: 0, color: "#3b82f6", description: "Surplombs sur les crêtes." },
    { id: 8, titre: "Gobelets", sat: 3, line: 0, color: "#3b82f6", description: "Grains sans cohésion à la base." },
    { id: 9, titre: "Pluie", sat: 4, line: 0, color: "#3b82f6", description: "L'eau fragilise le manteau." },
    { id: 10, titre: "Gueule de baleine", sat: 5, line: 0, color: "#3b82f6", description: "Fissure de glissement au sol." },

    // C2
    { id: 11, titre: "Purges naturelles", sat: 1, line: 1, color: "#6366f1", description: "Avalanches pendant la chute." },
    { id: 12, titre: "Dépôts de neige", sat: 2, line: 1, color: "#6366f1", description: "Accumulations mates." },
    { id: 13, titre: "Bruit de 'Woum'", sat: 3, line: 1, color: "#6366f1", description: "Effondrement de couche." },
    { id: 14, titre: "Rayonnement Sud", sat: 4, line: 1, color: "#6366f1", description: "Le soleil chauffe les pentes." },
    { id: 15, titre: "Pentes herbeuses", sat: 5, line: 1, color: "#6366f1", description: "Terrain favorisant le glissement." },

    // C3
    { id: 16, titre: "Froid intense", sat: 1, line: 2, color: "#8b5cf6", description: "Empêche la stabilisation." },
    { id: 17, titre: "Zones décapées", sat: 2, line: 2, color: "#8b5cf6", description: "Neige arrachée par le vent." },
    { id: 18, titre: "Déclenchement distance", sat: 3, line: 2, color: "#8b5cf6", description: "Propagation de la rupture." },
    { id: 19, titre: "Boules de neige", sat: 4, line: 2, color: "#8b5cf6", description: "Signe de fonte en surface." },
    { id: 20, titre: "Dalles rocheuses", sat: 5, line: 2, color: "#8b5cf6", description: "Surfaces lisses." },

    // C4
    { id: 21, titre: "Visibilité réduite", sat: 1, line: 3, color: "#f59e0b", description: "Évaluation difficile." },
    { id: 22, titre: "Chasse-neige", sat: 2, line: 3, color: "#f59e0b", description: "Transport de neige visible." },
    { id: 23, titre: "Givre enfoui", sat: 3, line: 3, color: "#f59e0b", description: "Paillettes recouvertes." },
    { id: 24, titre: "Enfoncement pied", sat: 4, line: 3, color: "#f59e0b", description: "On s'enfonce dans la soupe." },
    { id: 25, titre: "Sol chaud", sat: 5, line: 3, color: "#f59e0b", description: "Fonte par la base." },

    // C5
    { id: 26, titre: "Surcharge critique", sat: 1, line: 4, color: "#ec4899", description: "Poids sur l'ancienne neige." },
    { id: 27, titre: "Plaque à vent", sat: 2, line: 4, color: "#ec4899", description: "Structure cassante." },
    { id: 28, titre: "Fissures longues", sat: 3, line: 4, color: "#ec4899", description: "Se propagent au passage." },
    { id: 29, titre: "Avalanche de fonte", sat: 4, line: 4, color: "#ec4899", description: "Neige lourde et humide." },
    { id: 30, titre: "Danger permanent", sat: 5, line: 4, color: "#ec4899", description: "Peut partir jour et nuit." },

    // C6
    { id: 31, titre: "Cristaux légers", sat: 1, line: 5, color: "#06b6d4", description: "Faciles à mobiliser." },
    { id: 32, titre: "Sifflement vent", sat: 2, line: 5, color: "#06b6d4", description: "Indicateur de transport." },
    { id: 33, titre: "Test colonne", sat: 3, line: 5, color: "#06b6d4", description: "Identification rupture." },
    { id: 34, titre: "Nuit douce", sat: 4, line: 5, color: "#06b6d4", description: "Absence de regel nocturne." },
    { id: 35, titre: "Dépôt massif", sat: 5, line: 5, color: "#06b6d4", description: "Au pied des pentes raides." },

    // S
    { id: 36, titre: "Schéma Fraîche", sat: 1, line: 6, color: "#64748b", description: "Visuel : chute." },
    { id: 37, titre: "Schéma Vent", sat: 2, line: 6, color: "#64748b", description: "Visuel : transport." },
    { id: 38, titre: "Schéma Fragile", sat: 3, line: 6, color: "#64748b", description: "Visuel : grains." },
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
    if (card.dataset.sat === zone.dataset.colSat) {
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
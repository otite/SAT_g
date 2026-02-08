const cardsData = [
    // Header SAT
    { id: 1, titre: "Neige Fraîche", sat: 1, description: "La surcharge liée à la chute de neige est la cause principale d'instabilité." },
    { id: 2, titre: "Neige Ventée", sat: 2, description: "Le vent transporte la neige et forme des accumulations (plaques)." },
    { id: 3, titre: "Couche Fragile Persistante", sat: 3, description: "Une couche fragile est enfouie dans le manteau neigeux (souvent invisible)." },
    { id: 4, titre: "Neige Mouillée", sat: 4, description: "Le réchauffement ou la pluie affaiblissent la cohésion de la neige." },
    { id: 5, titre: "Neige Glissante", sat: 5, description: "L'ensemble du manteau neigeux glisse sur le sol (souvent herbeux)." },

    // Ligne C1
    { id: 6, titre: "Chute > 30cm", sat: 1, line: 0, color: "#3b82f6", description: "Épaisseur de neige fraîche jugée critique pour la stabilité." },
    { id: 7, titre: "Dépôts récents", sat: 2, line: 0, color: "#3b82f6", description: "Le vent a déposé de la neige derrière les crêtes ou dans les combes." },
    { id: 8, titre: "Givre de surface enfoui", sat: 3, line: 0, color: "#3b82f6", description: "Une couche de cristaux légers a été recouverte par une chute de neige." },
    { id: 9, titre: "Pluie", sat: 4, line: 0, color: "#3b82f6", description: "L'eau liquide s'infiltre et lubrifie les couches internes." },
    { id: 10, titre: "Gueules de baleine", sat: 5, line: 0, color: "#3b82f6", description: "Fissures qui s'ouvrent jusqu'au sol, signe de glissement lent." },

    // Ligne C2
    { id: 11, titre: "Froid intense", sat: 1, line: 1, color: "#6366f1", description: "Le froid ralentit la stabilisation de la neige fraîche." },
    { id: 12, titre: "Corniches", sat: 2, line: 1, color: "#6366f1", description: "Accumulations de neige en surplomb sur les crêtes." },
    { id: 13, titre: "Grains anguleux", sat: 3, line: 1, color: "#6366f1", description: "Cristaux sans cohésion qui se forment à cause du froid durable." },
    { id: 14, titre: "Redoux marqué", sat: 4, line: 1, color: "#6366f1", description: "Hausse rapide de la température qui humidifie le manteau." },
    { id: 15, titre: "Pentes herbeuses", sat: 5, line: 1, color: "#6366f1", description: "Terrain lisse qui favorise le glissement de fond." },

    // Ligne C3
    { id: 16, titre: "Surcharge", sat: 1, line: 2, color: "#8b5cf6", description: "Le poids de la neige fraîche suffit à déclencher une avalanche." },
    { id: 17, titre: "Neige transportée", sat: 2, line: 2, color: "#8b5cf6", description: "La neige est déplacée d'une zone vers une autre par le vent." },
    { id: 18, titre: "Bruit de 'Woum'", sat: 3, line: 2, color: "#8b5cf6", description: "Signe caractéristique de l'effondrement d'une couche fragile." },
    { id: 19, titre: "Rayonnement Sud", sat: 4, line: 2, color: "#8b5cf6", description: "Le soleil direct liquéfie les liaisons entre les grains." },
    { id: 20, titre: "Dalles rocheuses", sat: 5, line: 2, color: "#8b5cf6", description: "Le sol lisse et imperméable facilite le glissement global." },

    // Ligne C4
    { id: 21, titre: "Visibilité réduite", sat: 1, line: 3, color: "#f59e0b", description: "Le brouillard ou la neige empêchent d'évaluer les dangers." },
    { id: 22, titre: "Chasse-neige", sat: 2, line: 3, color: "#f59e0b", description: "Vent visible soulevant la neige en surface." },
    { id: 23, titre: "Déclenchement distance", sat: 3, line: 3, color: "#f59e0b", description: "La rupture se propage loin de l'endroit où se trouve le skieur." },
    { id: 24, titre: "Nuit douce", sat: 4, line: 3, color: "#f59e0b", description: "L'absence de regel nocturne empêche la stabilisation matinale." },
    { id: 25, titre: "Lignes de glissement", sat: 5, line: 3, color: "#f59e0b", description: "Fissures horizontales montrant que le manteau rampe sur le sol." },

    // Ligne C5
    { id: 26, titre: "Purges naturelles", sat: 1, line: 4, color: "#ec4899", description: "Des avalanches partent toutes seules pendant la chute." },
    { id: 27, titre: "Accumulations mates", sat: 2, line: 4, color: "#ec4899", description: "Neige d'aspect crayeux et cassant, typique des plaques." },
    { id: 28, titre: "Fissures au passage", sat: 3, line: 4, color: "#ec4899", description: "Des fissures se propagent sous les skis, signe de danger." },
    { id: 29, titre: "Enfoncement pied", sat: 4, line: 4, color: "#ec4899", description: "On s'enfonce dans une neige lourde et sans consistance." },
    { id: 30, titre: "Danger permanent", sat: 5, line: 4, color: "#ec4899", description: "Le glissement peut se transformer en avalanche à tout moment." },

    // Ligne C6
    { id: 31, titre: "Neige poudreuse", sat: 1, line: 5, color: "#06b6d4", description: "Neige très légère, facile à mobiliser par le vent." },
    { id: 32, titre: "Zones décapées", sat: 2, line: 5, color: "#06b6d4", description: "Le vent a mis à nu la vieille neige dure ou le sol." },
    { id: 33, titre: "Gobelets", sat: 3, line: 5, color: "#06b6d4", description: "Grains sans aucune cohésion situés à la base du manteau." },
    { id: 34, titre: "Avalanche de fonte", sat: 4, line: 5, color: "#06b6d4", description: "Écoulement massif de neige humide, souvent l'après-midi." },
    { id: 35, titre: "Dépôts au pied", sat: 5, line: 5, color: "#06b6d4", description: "Tas de neige au bas des pentes, signe de glissements passés." },

    // Ligne S (Schémas)
    { id: 36, sat: 1, line: 6, color: "#64748b", image: "img/fraiche.png", description: "Schéma Neige Fraîche" },
    { id: 37, sat: 2, line: 6, color: "#64748b", image: "img/ventee.png", description: "Schéma Neige Ventée" },
    { id: 38, sat: 3, line: 6, color: "#64748b", image: "img/persistante.png", description: "Schéma Couche Fragile" },
    { id: 39, sat: 4, line: 6, color: "#64748b", image: "img/mouillee.png", description: "Schéma Neige Mouillée" },
    { id: 40, sat: 5, line: 6, color: "#64748b", image: "img/glissante.png", description: "Schéma Neige Glissante" }
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

    if (card.image) {
        cardEl.innerHTML = `<img src="${card.image}" class="card-img" alt="${card.description}"><div class="line-indicator" style="background:${card.color}"></div>`;
    } else {
        cardEl.innerHTML = `<div class="line-indicator" style="background:${card.color}"></div><strong>${card.titre}</strong><div class="desc">${card.description}</div>`;
    }

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
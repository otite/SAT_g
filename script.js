// Textes extraits de la photo
const JSONContent = [
    // LIGNE : Localisation (Catégorie 1 demandée)
    ["Partout, plus prononcé en altitude. Actif pendant la chute, s’atténue rapidement.", "Distribution très variable souvent prêt des crêtes. Situation plus active pendant l’épisode de transport.", "Toutes orientation si pluie (pire en versant froid), perte de stabilité très rapide. Dépend de l’orientation et de l’altitude.", "Couche fragile souvent répandue en versants froids. Rupture facile aux points de moindre épaisseur. Instabilité durable.", "Sur sols lisses ou humides. Toutes orientations mais plus fréquent en orientation ensoleillées."],
    
    // LIGNE : Déclenchement
    ["Surcharge sur couche fragile ou formé pendant la chute.", "Le transport surcharge une couche fragile. La neige récente transportée prend de la cohésion (déclenchement facile).", "Déstabilisation due à l’apport d’eau (pluie ou fonte). Déclenchement d’une C.F. existante ou d’une interface ou l’eau s’est accumulée.", "Même par météo « neutre » un pratiquant peut rompre une C. F. persistante et provoquer un déclenchement.", "Départs spontanés sans lien direct avec la météo. Glissement rapide par perte de friction à l’interface neige-sol."],
    
    // LIGNE : Indices
    ["Quantité critique de neige fraiche. Activité avalancheuse en cours.", "Signes de transports de neige, d’érosion ou d’accumulation. Fissures, déclenchement de plaques dures ou friables.", "Pluie sur neige fraiche : activité avalancheuse spontanée forte. Escargots au début des purges. Enfoncement en profondeur.", "Se méfier des versants froids et à faibles enneigement. Whoums, fissures sous les skis, déclenchements à distance.", "Souvent présence de fissures et reptations. Manteau neigeux homogène."],
    
    // LIGNE : Questions
    ["Vent en cours ? Variation de T° ? Couche de surface avant la chute ?", "Age de la neige ventée ? Distribution dans la pente ? Force du vent ?", "Depuis quand ? Première humidification ? Profondeur humidification ? Evolution à court terme ?", "Profondeur et distribution de la couche Fragile ? Historique et observations du manteau (sondages tests) ?", "Quand les fissures de glissement sont apparues ? Butée en pied de pente ?"],
    
    // LIGNE : Type d'avalanche
    ["Avalanches de plaque sèche friable ou de neige sans cohésion. Départ spontané ou provoqué.", "Avalanches de plaque sèche friable ou dure. Départs spontanés et déclenchements provoqués possibles.", "Avalanches de plaque de neige humide ou de neige mouillée sans cohésion. Principalement départs spontanés.", "Avalanches de plaque sèche. Déclenchements provoqués. Déclenchement à distance possible. Grandes propagations fréquentes.", "Avalanche de neige sèche ou humide toujours spontanée. Déclenchements humains et artificiels très peu probables."],
    
    // LIGNE : Conseils
    ["Attention à la visibilité et pentes dominantes. Patienter 1 à 3 jours.", "Tracé judicieux. Evitement surtout les terrains accumulés et raides (dès prépa avec le BERA et sur le terrain).", "S’éloigner des versants froids si pluie forte lors de la 1ere humidification. Soleil : jouer avec orientation et horaire.", "Comportement défensif, au pied et à distance des pentes. Complexe, peu de signaux de surface. Infos BERA, profils-tests.", "Contournement si possible. Très difficile à prévoir et à déclencher. Gestion identique aux séracs."]
];

const categoryNames = ["Localisation", "Déclenchement", "Indices", "Questions", "Type", "Conseils", "Schémas"];
const rowColors = ["#475569", "#b91c1c", "#1d4ed8", "#c2410c", "#7e22ce", "#0f172a", "#64748b"];
const textClasses = ["text-black", "text-red", "text-blue", "text-orange", "text-violet", "text-black", "text-black"];

const satHeaders = [
    { titre: "Neige fraîche", sat: 1, desc: "Surcharge chute" },
    { titre: "Neige ventée", sat: 2, desc: "Accumulations" },
    { titre: "Neige humide", sat: 3, desc: "Pluie / Fonte" },
    { titre: "S.C. Fragile Persistante", sat: 4, desc: "Instabilité structurelle" },
    { titre: "Avalanches de fond", sat: 5, desc: "Glissement sur le sol" }
];

let cardsData = [];
let currentStep = 0;

// Préparation des cartes
JSONContent.forEach((row, lIdx) => {
    row.forEach((text, cIdx) => {
        cardsData.push({ id: `c-${lIdx}-${cIdx}`, sat: cIdx + 1, line: lIdx, color: rowColors[lIdx], text: text, class: textClasses[lIdx] });
    });
});

const schemaNames = ["fraiche", "ventee", "mouillee", "persistante", "glissante"];
schemaNames.forEach((name, idx) => {
    cardsData.push({ id: `img-${idx}`, sat: idx + 1, line: 6, color: rowColors[6], image: `img/${name}.png` });
});

function initGame() {
    const headerRow = document.getElementById('header-sat');
    headerRow.innerHTML = '<div class="cat-label spacer"></div>';
    satHeaders.forEach(sat => {
        const div = document.createElement('div');
        div.className = 'sat-header';
        div.innerHTML = `<strong>${sat.titre}</strong><div class="desc">${sat.desc}</div>`;
        headerRow.appendChild(div);
    });
    startNextStep();
}

// Détection scroll robuste pour Sticky
window.addEventListener('scroll', () => {
    const header = document.getElementById('header-sat');
    if (window.pageYOffset > 20) header.classList.add('shrunk');
    else header.classList.remove('shrunk');
}, { passive: true });

function startNextStep() {
    if (currentStep >= 7) return;
    addNewRow(currentStep);
    updateDeck(currentStep);
}

function updateDeck(lineIndex) {
    const deck = document.getElementById('deck');
    deck.innerHTML = ""; 
    const stepCards = cardsData.filter(c => c.line === lineIndex);
    stepCards.sort(() => Math.random() - 0.5);
    stepCards.forEach(card => deck.appendChild(createCardElement(card)));
}

function createCardElement(card) {
    const cardEl = document.createElement('div');
    cardEl.className = 'draggable-card';
    cardEl.draggable = true;
    cardEl.id = card.id;
    cardEl.dataset.sat = card.sat;
    cardEl.style.borderColor = card.color;

    if (card.image) {
        cardEl.innerHTML = `<img src="${card.image}" class="card-img">`;
    } else {
        cardEl.innerHTML = `<div class="card-text ${card.class}">${card.text}</div>`;
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
    rowDiv.style.borderLeft = `8px solid ${color}`;
    
    const catLabel = document.createElement('div');
    catLabel.className = 'cat-label';
    catLabel.style.backgroundColor = color;
    catLabel.innerText = categoryNames[index];
    rowDiv.appendChild(catLabel);

    for (let c = 0; c < 5; c++) {
        const zone = document.createElement('div');
        zone.className = 'dropzone';
        zone.dataset.colSat = c + 1;
        zone.ondragover = (e) => e.preventDefault();
        zone.ondrop = handleDrop;
        rowDiv.appendChild(zone);
    }
    board.appendChild(rowDiv);
    rowDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
    if (card.dataset.sat == zone.dataset.colSat) {
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
    const correctCards = row.querySelectorAll('.draggable-card.correct');
    if (correctCards.length === 5) {
        row.classList.replace('active', 'locked');
        currentStep++;
        setTimeout(startNextStep, 600);
    }
}

window.onload = initGame;
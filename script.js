const JSONContent = {
    C6 : "<p class='p-green'>Partout, plus prononcé en altitude. Actif pendant la chute, s’atténue rapidement.</p>",
    C7 : "<p class='p-green'>Distribution très variable souvent prêt des crêtes. Situation plus active pendant l’épisode de transport.</p>",
    C8 : "<p class='p-green'>Couche fragile souvent répandue en versants froids. Rupture facile aux points de moindre épaisseur.Instabilité durable.</p>",
    C9 : "<p class='p-green'>Toutes orientation si pluie (pire en versant froid), perte de stabilité très rapide.Dépend de l’orientation et de l’altitude.</p>",
    C10: "<p class='p-green'>Sur sols lisses ou humides. Toutes orientations mais plus fréquent en orientation ensoleillées.</p>",
    C11: "<p class='p-red'>Départs spontanés sans lien direct avec la météo. Glissement rapide par perte de friction à l’interface neige-sol.</p>",
    C12: "<p class='p-red'>Même par météo « neutre » un pratiquant peut rompre une C. F. persistante et provoquer un déclenchement.</p>",
    C13: "<p class='p-red'>Déstabilisation due à l’apport d’eau (pluie ou fonte).Déclenchement d’une C.F. existante ou d’une interface ou l’eau s’est accumulée.</p>",
    C14: "<p class='p-red'>Le transport surcharge une couche fragile.La neige récente transportée prend de la cohésion (déclenchement facile).</p>",
    C15: "<p class='p-red'>Surcharge sur couche fragile ou formé pendant la chute.</p>",
    C16: "<p class='p-blue'>Quantité critique de neige fraiche.Activité avalancheuse en cours.</p>",
    C17: "<p class='p-blue'>Signes de transports de neige, d’érosion ou d’accumulation. Fissures, déclenchement de plaques dures ou friables.</p>",
    C18: "<p class='p-blue'>Pluie sur neige fraiche : activité avalancheuse spontanée forte.Escargots au début des purgesEnfoncement en profondeur.</p>",
    C19: "<p class='p-blue'>Se méfier des versants froids et à faibles enneigement. Whoums, fissures sous les skis, déclenchements à distance.</p>",
    C20: "<p class='p-blue'>Souvent présence de fissures et reptations. Manteau neigeux homogène.</p>",
    C21: "<p class='p-orange'>Quand les fissures de glissement sont apparues ? Butée en pied de pente ?</p>",
    C22: "<p class='p-orange'>Profondeur et distribution de la couche Fragile ?Historique et observations du manteau (sondages tests) ?</p>",
    C23: "<p class='p-orange'>Depuis quand ? Première humidification ? Profondeur humidification ? Evolution à court therme ?</p>",
    C24: "<p class='p-orange'>Age de la neige venté ? Distribution dans la pente ?Force du vent ?</p>",
    C25: "<p class='p-orange'>Vent en cours ? Variation de T° ? Couche de surface avant la chute ?</p>",
    C26: "<p class='p-black'>Attention à la visibilité et pentes dominantes.Patienter 1 à 3 jours.</p>",
    C27: "<p class='p-black'>Tracé judicieux. Evitement surtout les terrains accumulés et raides (dès prépa avec le BERA et sur le terrain).</p>",
    C28: "<p class='p-black'>S’éloigner des versants froids si pluie forte lors de la 1ere humidification.Soleil : jouer avec orientation et horaire.</p>",
    C29: "<p class='p-black'>Comportement défensif, au pied et à distance des pentes. Complexe, peu de signaux de surfaceInfos BERA, profils- tests.</p>",
    C30: "<p class='p-black'>Contournement si possible. Très difficile à prévoir et à déclencher. Gestion identique aux séracs.</p>",
    C31: "<p class='p-violet'>Avalanches de plaque sèche friable ou de neige sans cohésion. Départ spontanés ou provoqué.</p>",
    C32: "<p class='p-violet'>Avalanches de plaque sèche friable ou dure. Départs spontanés et déclenchements provoqués possibles.</p>",
    C33: "<p class='p-violet'>Avalanches de plaque sèche. Déclenchements provoqués.Déclenchement à distance possible Grandes propagation fréquentes.</p>",
    C34: "<p class='p-violet'>Avalanches de plaque de neige humide ou de neige mouillé sans cohésionPrincipalement départs spontanés.</p>",
    C35: "<p class='p-violet'>Avalanche de neige sèche ou humide toujours spontanéesDéclenchements humains et artificiels très peu probables.</p>"
};

const satHeaders = [
    { titre: "Neige fraîche", sat: 1, desc: "Surcharge chute de neige" },
    { titre: "Neige ventée", sat: 2, desc: "Accumulations plaques" },
    { titre: "C.F. persistante", sat: 3, desc: "Couche fragile invisible" },
    { titre: "Neige mouillée", sat: 4, desc: "Réchauffement ou pluie" },
    { titre: "Neige glissante", sat: 5, desc: "Glissement sur le sol" }
];

const rowColors = ["#15803d", "#b91c1c", "#1d4ed8", "#c2410c", "#000000", "#7e22ce", "#64748b"];

// Construction automatique de cardsData à partir du JSON
let cardsData = [];
let cardIdCounter = 6;

// Lignes C6 à C35 (Lignes 0 à 5)
for (let line = 0; line < 6; line++) {
    for (let sat = 1; sat <= 5; sat++) {
        let key = `C${cardIdCounter}`;
        cardsData.push({
            id: cardIdCounter,
            sat: sat,
            line: line,
            color: rowColors[line],
            html: JSONContent[key]
        });
        cardIdCounter++;
    }
}

// Ligne S (Schémas)
const schemaNames = ["fraiche", "ventee", "persistante", "mouillee", "glissante"];
for (let sat = 1; sat <= 5; sat++) {
    cardsData.push({
        id: cardIdCounter,
        sat: sat,
        line: 6,
        color: rowColors[6],
        image: `img/${schemaNames[sat-1]}.png`
    });
    cardIdCounter++;
}

let currentStep = 0;

function initGame() {
    const headerRow = document.getElementById('header-sat');
    const spacer = document.createElement('div');
    spacer.className = 'cat-label spacer';
    headerRow.appendChild(spacer);

    satHeaders.forEach(sat => {
        const div = document.createElement('div');
        div.className = 'card-box sat-header';
        div.innerHTML = `<strong>${sat.titre}</strong><div class="desc">${sat.desc}</div>`;
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
        cardEl.innerHTML = `<img src="${card.image}" class="card-img">`;
    } else {
        cardEl.innerHTML = card.html; // On injecte le HTML brut (le <p class...>)
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
    rowDiv.style.backgroundColor = `${color}08`; 
    rowDiv.style.borderColor = color;
    
    const catLabel = document.createElement('div');
    catLabel.className = 'cat-label';
    catLabel.style.backgroundColor = color;
    catLabel.innerText = index < 6 ? `L${index + 1}` : "S";
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
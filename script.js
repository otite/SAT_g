// Données des cartes - Encodage corrigé
const JSONContent = [
    // LIGNE : Localisation
    ["Partout, plus prononcé en altitude. Actif pendant la chute, s'atténue rapidement.", "Distribution très variable souvent prêt des crêtes. Situation plus active pendant l'épisode de transport.", "Toutes orientation si pluie (pire en versant froid), perte de stabilité très rapide. Dépend de l'orientation et de l'altitude.", "Couche fragile souvent répandue en versants froids. Rupture facile aux points de moindre épaisseur. Instabilité durable.", "Sur sols lisses ou humides. Toutes orientations mais plus fréquent en orientation ensoleillées."],
    
    // LIGNE : Déclenchement
    ["Surcharge sur couche fragile ou formé pendant la chute.", "Le transport surcharge une couche fragile. La neige récente transportée prend de la cohésion (déclenchement facile).", "Déstabilisation due à l'apport d'eau (pluie ou fonte). Déclenchement d'une C.F. existante ou d'une interface ou l'eau s'est accumulée.", "Même par météo « neutre » un pratiquant peut rompre une C. F. persistante et provoquer un déclenchement.", "Départs spontanés sans lien direct avec la météo. Glissement rapide par perte de friction à l'interface neige-sol."],
    
    // LIGNE : Indices
    ["Quantité critique de neige fraiche. Activité avalancheuse en cours.", "Signes de transports de neige, d'érosion ou d'accumulation. Fissures, déclenchement de plaques dures ou friables.", "Pluie sur neige fraiche : activité avalancheuse spontanée forte. Escargots au début des purges. Enfoncement en profondeur.", "Se méfier des versants froids et à faibles enneigement. Whoums, fissures sous les skis, déclenchements à distance.", "Souvent présence de fissures et reptations. Manteau neigeux homogène."],
    
    // LIGNE : Questions
    ["Vent en cours ? Variation de T° ? Couche de surface avant la chute ?", "Age de la neige ventée ? Distribution dans la pente ? Force du vent ?", "Depuis quand ? Première humidification ? Profondeur humidification ? Evolution à court terme ?", "Profondeur et distribution de la couche Fragile ? Historique et observations du manteau (sondages tests) ?", "Quand les fissures de glissement sont apparues ? Butée en pied de pente ?"],
    
    // LIGNE : Type d'avalanche
    ["Avalanches de plaque sèche friable ou de neige sans cohésion. Départ spontané ou provoqué.", "Avalanches de plaque sèche friable ou dure. Départs spontanés et déclenchements provoqués possibles.", "Avalanches de plaque de neige humide ou de neige mouillée sans cohésion. Principalement départs spontanés.", "Avalanches de plaque sèche. Déclenchements provoqués. Déclenchement à distance possible. Grandes propagations fréquentes.", "Avalanche de neige sèche ou humide toujours spontanée. Déclenchements humains et artificiels très peu probables."],
    
    // LIGNE : Conseils
    ["Attention à la visibilité et pentes dominantes. Patienter 1 à 3 jours.", "Tracé judicieux. Evitement surtout les terrains accumulés et raides (dès prépa avec le BERA et sur le terrain).", "S'éloigner des versants froids si pluie forte lors de la 1ere humidification. Soleil : jouer avec orientation et horaire.", "Comportement défensif, au pied et à distance des pentes. Complexe, peu de signaux de surface. Infos BERA, profils-tests.", "Contournement si possible. Très difficile à prévoir et à déclencher. Gestion identique aux séracs."]
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

// État du jeu
let cardsData = [];
let currentStep = 0;
let gameStartTime = null;
let gameEndTime = null;
let validationAttempts = 0;  // Nombre total de clics "Valider"
let failedValidations = 0;   // Nombre de tentatives échouées (ligne incomplète)
let cardsPlaced = 0;         // Lignes complètes × 5

// Sons
const sounds = {
    correct: null,
    wrong: null,
    complete: null,
    victory: null
};

// Préparation des cartes
JSONContent.forEach((row, lIdx) => {
    row.forEach((text, cIdx) => {
        cardsData.push({ id: `c-${lIdx}-${cIdx}`, sat: cIdx + 1, line: lIdx, color: rowColors[lIdx], text: text, class: textClasses[lIdx] });
    });
});

const schemaNames = ["fraiche", "ventee", "mouillee", "persistante", "glissante"];
schemaNames.forEach((name, idx) => {
    cardsData.push({ id: `img-${idx}`, sat: idx + 1, line: 6, color: rowColors[6], image: `img/${name}.jpg` });
});

function initGame() {
    initSounds();
    createScorePanel();
    
    const headerRow = document.getElementById('header-sat');
    headerRow.innerHTML = '<div class="cat-label spacer"></div>';
    satHeaders.forEach(sat => {
        const div = document.createElement('div');
        div.className = 'sat-header';
        div.innerHTML = `<strong>${sat.titre}</strong><div class="desc">${sat.desc}</div>`;
        headerRow.appendChild(div);
    });
    
    gameStartTime = Date.now();
    startNextStep();
}

function initSounds() {
    // Sons en Web Audio API (légers, compatibles tous navigateurs)
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();
    
    sounds.play = (type) => {
        if (audioCtx.state === 'suspended') audioCtx.resume();
        
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        if (type === 'correct') {
            oscillator.frequency.value = 800;
            gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
            oscillator.start(audioCtx.currentTime);
            oscillator.stop(audioCtx.currentTime + 0.1);
        } else if (type === 'wrong') {
            oscillator.frequency.value = 200;
            gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
            oscillator.start(audioCtx.currentTime);
            oscillator.stop(audioCtx.currentTime + 0.15);
        } else if (type === 'complete') {
            oscillator.frequency.value = 600;
            gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
            oscillator.start(audioCtx.currentTime);
            oscillator.stop(audioCtx.currentTime + 0.3);
        } else if (type === 'victory') {
            [523, 659, 784].forEach((freq, i) => {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.frequency.value = freq;
                gain.gain.setValueAtTime(0.3, audioCtx.currentTime + i * 0.15);
                gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + i * 0.15 + 0.3);
                osc.start(audioCtx.currentTime + i * 0.15);
                osc.stop(audioCtx.currentTime + i * 0.15 + 0.3);
            });
        }
    };
}

function createScorePanel() {
    const panel = document.createElement('div');
    panel.id = 'score-panel';
    panel.innerHTML = `
        <div class="score-item">
            <span class="score-label">⏱️ Temps</span>
            <span class="score-value" id="timer">0:00</span>
        </div>
        <div class="score-item">
            <span class="score-label">✓ Cartes</span>
            <span class="score-value" id="cards-count">0/35</span>
        </div>
        <div class="score-item">
            <span class="score-label">❌ Erreurs</span>
            <span class="score-value" id="moves-count">0</span>
        </div>
        <div class="score-item">
            <span class="score-label">📊 Score</span>
            <span class="score-value" id="score">0</span>
        </div>
    `;
    document.getElementById('game-container').insertBefore(panel, document.getElementById('header-sat'));
    
    // Timer update
    setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (!gameStartTime || gameEndTime) return;
    const elapsed = Math.floor((Date.now() - gameStartTime) / 1000);
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    document.getElementById('timer').textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
}

function updateScore() {
    document.getElementById('cards-count').textContent = `${cardsPlaced}/35`;
    document.getElementById('moves-count').textContent = failedValidations;
    
    // Score : base 3500 pts + bonus temps - pénalité erreurs
    const timeBonus = Math.max(0, 1000 - Math.floor((Date.now() - gameStartTime) / 1000));
    const errorPenalty = failedValidations * 150;
    const score = Math.max(0, cardsPlaced * 100 + timeBonus - errorPenalty);
    document.getElementById('score').textContent = score;
}

// Détection scroll robuste pour Sticky
window.addEventListener('scroll', () => {
    const header = document.getElementById('header-sat');
    if (window.pageYOffset > 20) header.classList.add('shrunk');
    else header.classList.remove('shrunk');
}, { passive: true });

function startNextStep() {
    if (currentStep >= 7) {
        endGame();
        return;
    }
    addNewRow(currentStep);
}

function createCardElement(card) {
    const cardEl = document.createElement('div');
    cardEl.className = 'draggable-card';
    cardEl.draggable = true;
    cardEl.id = card.id;
    cardEl.dataset.sat = card.sat;
    cardEl.style.borderColor = card.color;

    if (card.image) {
        cardEl.innerHTML = `<img src="${card.image}" class="card-img" alt="Schéma SAT ${card.sat}">`;
    } else {
        cardEl.innerHTML = `<div class="card-text ${card.class}">${card.text}</div>`;
    }

    // Desktop: drag & drop
    cardEl.ondragstart = (e) => e.dataTransfer.setData('text', e.target.id);
    
    // Mobile: touch events améliorés
    let touchStartX, touchStartY, isDragging = false;
    
    cardEl.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        isDragging = true;
        cardEl.classList.add('dragging-touch');
    }, { passive: true });
    
    cardEl.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const touch = e.touches[0];
        cardEl.style.transform = `translate(${touch.clientX - touchStartX}px, ${touch.clientY - touchStartY}px)`;
        cardEl.style.opacity = '0.7';
    }, { passive: false });
    
    cardEl.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;
        cardEl.classList.remove('dragging-touch');
        cardEl.style.transform = '';
        cardEl.style.opacity = '';
        
        const touch = e.changedTouches[0];
        const dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);
        const zone = dropTarget?.closest('.dropzone');
        
        if (zone) {
            const activeRow = zone.closest('.board-row');
            if (activeRow?.classList.contains('active')) {
                const sourceZone = cardEl.parentElement;
                const targetCard = zone.firstChild;
                
                if (sourceZone !== zone && targetCard) {
                    // Échanger les cartes
                    sourceZone.appendChild(targetCard);
                    zone.appendChild(cardEl);
                    
                    // Réinitialiser l'état visuel des cartes déplacées
                    resetCardState(cardEl);
                    resetCardState(targetCard);
                }
            }
        }
    });
    
    return cardEl;
}

function addNewRow(index) {
    const board = document.getElementById('game-board');
    const rowDiv = document.createElement('div');
    const color = rowColors[index];
    rowDiv.className = `board-row active row-${index}`;
    rowDiv.style.borderLeft = `8px solid ${color}`;
    
    const colLeft = document.createElement('div');
    colLeft.className = 'col-left';
    
    const catLabel = document.createElement('div');
    catLabel.className = 'cat-label';
    catLabel.style.backgroundColor = color;
    catLabel.innerText = categoryNames[index];
    colLeft.appendChild(catLabel);
    rowDiv.appendChild(colLeft);  // ← inséré EN PREMIER dans la grille

    // Récupérer les cartes de cette ligne
    const stepCards = cardsData.filter(c => c.line === index);
    
    // Créer un dérangement (permutation où aucun élément n'est à sa position originale)
    let shuffledCards;
    do {
        shuffledCards = [...stepCards].sort(() => Math.random() - 0.5);
    } while (shuffledCards.some((card, i) => card.sat === i + 1));
    // Continue de mélanger tant qu'au moins une carte est à sa bonne position

    for (let c = 0; c < 5; c++) {
        const zone = document.createElement('div');
        zone.className = 'dropzone';
        zone.dataset.colSat = c + 1;
        zone.ondragover = (e) => e.preventDefault();
        zone.ondrop = handleDrop;
        
        // Pré-remplir avec une carte mélangée (sans validation visuelle)
        const card = shuffledCards[c];
        zone.appendChild(createCardElement(card));
        
        rowDiv.appendChild(zone);
    }
    
    // Bouton Valider (sous le label de catégorie)
    const validateBtn = document.createElement('button');
    validateBtn.className = 'btn-validate';
    validateBtn.textContent = 'Valider ✓';
    validateBtn.onclick = () => validateRow(rowDiv, validateBtn);
    colLeft.appendChild(validateBtn);
    
    board.appendChild(rowDiv);
    rowDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function handleDrop(e) {
    e.preventDefault();
    const zone = e.target.closest('.dropzone');
    const activeRow = zone.closest('.board-row');
    if (!zone || !activeRow || !activeRow.classList.contains('active')) return;

    const cardId = e.dataTransfer.getData('text');
    const draggedCard = document.getElementById(cardId);
    const sourceZone = draggedCard.parentElement;
    
    // Si on drop sur la même zone, ne rien faire
    if (sourceZone === zone) return;
    
    // Échanger les cartes
    const targetCard = zone.firstChild;
    
    if (targetCard) {
        sourceZone.appendChild(targetCard);
        zone.appendChild(draggedCard);
        // Réinitialiser l'état visuel des cartes déplacées
        resetCardState(draggedCard);
        resetCardState(targetCard);
    } else {
        zone.appendChild(draggedCard);
        resetCardState(draggedCard);
    }
}

function resetCardState(card) {
    card.classList.remove('correct', 'wrong');
}

function validateCard(card, zone, playSound = true) {
    const isCorrect = card.dataset.sat == zone.dataset.colSat;
    
    if (isCorrect) {
        card.classList.add('correct');
        card.classList.remove('wrong');
        if (playSound) {
            sounds.play('correct');
            card.style.animation = 'pop 0.3s ease';
            setTimeout(() => card.style.animation = '', 300);
        }
    } else {
        card.classList.add('wrong');
        card.classList.remove('correct');
        if (playSound) {
            sounds.play('wrong');
            if (navigator.vibrate) navigator.vibrate(100);
            card.style.animation = 'shake 0.3s ease';
            setTimeout(() => card.style.animation = '', 300);
        }
    }
    
    return isCorrect;
}

function validateRow(rowDiv, btn) {
    validationAttempts++;
    
    const zones = rowDiv.querySelectorAll('.dropzone');
    let correctCount = 0;
    
    zones.forEach(zone => {
        const card = zone.firstChild;
        if (card) {
            const isCorrect = validateCard(card, zone, false);
            if (isCorrect) correctCount++;
        }
    });
    
    // Jouer un son groupé selon le résultat
    if (correctCount === 5) {
        sounds.play('complete');
        cardsPlaced += 5;
        updateScore();
        checkRowStatus(rowDiv, btn);
    } else {
        // Tentative échouée
        failedValidations++;
        sounds.play('wrong');
        if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
        updateScore();
        
        // Afficher le nombre de bonnes réponses sur le bouton
        btn.textContent = `Valider ✓ (${correctCount}/5 ✓)`;
        btn.style.background = '#ef4444';
        setTimeout(() => {
            btn.textContent = 'Valider ✓';
            btn.style.background = '';
        }, 2000);
    }
}

function checkRowStatus(row, btn) {
    const correctCards = row.querySelectorAll('.draggable-card.correct');
    if (correctCards.length === 5) {
        row.classList.replace('active', 'locked');
        if (btn) btn.remove();
        
        // Animation de ligne complète
        row.style.animation = 'rowComplete 0.5s ease';
        
        currentStep++;
        setTimeout(startNextStep, 600);
    }
}

function endGame() {
    gameEndTime = Date.now();
    const totalTime = Math.floor((gameEndTime - gameStartTime) / 1000);
    sounds.play('victory');
    
    const modal = document.createElement('div');
    modal.id = 'victory-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>🏔️ Bravo ! Jeu terminé ! 🏔️</h2>
            <div class="final-stats">
                <p><strong>⏱️ Temps total :</strong> ${Math.floor(totalTime / 60)}:${(totalTime % 60).toString().padStart(2, '0')}</p>
                <p><strong>🔄 Tentatives de validation :</strong> ${validationAttempts}</p>
                <p><strong>❌ Erreurs de validation :</strong> ${failedValidations}</p>
                <p><strong>📊 Score final :</strong> ${document.getElementById('score').textContent}</p>
            </div>
            <button onclick="location.reload()" class="btn-restart">Rejouer</button>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Confettis animation
    createConfetti();
}

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.backgroundColor = ['#22c55e', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'][Math.floor(Math.random() * 5)];
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 4000);
    }
}

window.onload = initGame;

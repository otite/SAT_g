# 🏔️ Jeu SAT - Situations Avalancheuses Typiques

## ✨ Améliorations apportées

### 1. ✅ Encodage des caractères corrigé
- Tous les caractères français (é, è, à, ê, etc.) sont maintenant correctement encodés en UTF-8
- Fini les "Ã©" et "â€™" !

### 2. ⏱️ Système de score et timer
- **Timer en temps réel** : affiche le temps écoulé
- **Compteur de cartes** : progression (X/35 cartes)
- **Compteur de coups** : nombre de mouvements effectués
- **Score dynamique** : calculé en fonction du temps et de l'efficacité
- **Écran de victoire** : récapitulatif des performances à la fin

### 3. 🎨 5 Schémas SVG créés
Diagrammes pédagogiques pour chaque SAT :
- **fraiche.svg** : Neige fraîche avec surcharge
- **ventee.svg** : Plaque à vent sous crête
- **mouillee.svg** : Humidification par pluie/fonte
- **persistante.svg** : Sous-couche fragile avec propagation
- **glissante.svg** : Glissement de fond avec fissures

### 4. 📱 Expérience mobile améliorée
- **Support tactile complet** : drag & drop fonctionne au doigt
- **Feedback haptique** : vibration lors d'erreurs (si supporté)
- **Animations fluides** : transformations CSS optimisées
- **Message de rotation** : invite à passer en mode paysage
- **Touch-action optimisé** : meilleure réactivité

### 5. 🎵 Sons et animations
- **Sons synthétisés** (Web Audio API) :
  - ✅ Carte correcte : son aigu agréable
  - ❌ Carte incorrecte : son grave
  - 🎯 Ligne complète : son de réussite
  - 🏆 Victoire : fanfare à 3 notes
- **Animations CSS** :
  - Pop sur placement correct
  - Shake sur erreur
  - Ligne complète : highlight vert
  - Confettis lors de la victoire
  - Transitions fluides pour les échanges

## 📁 Structure des fichiers

```
SAT_g/
├── index.html          # Page principale
├── script.js           # Logique du jeu (améliorée)
├── style.css           # Styles et animations
└── img/                # Schémas SVG
    ├── fraiche.svg
    ├── ventee.svg
    ├── mouillee.svg
    ├── persistante.svg
    └── glissante.svg
```

## 🚀 Installation

1. **Téléchargez tous les fichiers** (index.html, script.js, style.css)
2. **Créez un dossier "img"** à côté de index.html
3. **Placez les 5 fichiers SVG** dans le dossier img/
4. **Ouvrez index.html** dans votre navigateur

Ou sur votre serveur/GitHub Pages :
```bash
git clone https://github.com/otite/SAT_g.git
cd SAT_g
# Remplacez les fichiers par les versions améliorées
# Ajoutez le dossier img/ avec les SVG
git add .
git commit -m "Améliorations : score, sons, schémas, mobile"
git push
```

## 🎮 Comment jouer

1. **Lisez les en-têtes** des 5 SAT (Neige fraîche, Ventée, Humide, etc.)
2. Les cartes sont **déjà placées mais mélangées** dans les cases
3. **Glissez et échangez les cartes** entre elles pour les placer dans la bonne colonne
4. Les cartes se **colorent en vert** (correct) ou **rouge** (incorrect)
5. **Complétez chaque ligne** avant de passer à la suivante
6. Terminez les **7 catégories** pour voir votre score final !

💡 **Astuce** : Essayez de résoudre avec le moins de coups possible pour un meilleur score !

## 🎯 Pédagogie

Le jeu couvre les **7 catégories essentielles** pour chaque SAT :
1. **Localisation** : Où se manifeste le danger ?
2. **Déclenchement** : Comment l'avalanche se déclenche ?
3. **Indices** : Quels signes observer ?
4. **Questions** : Quoi se demander sur le terrain ?
5. **Type** : Quel type d'avalanche ?
6. **Conseils** : Comment gérer le risque ?
7. **Schémas** : Représentation visuelle

## 🛠️ Personnalisation

### Modifier le contenu
Éditez `script.js`, section `JSONContent` pour changer les textes des cartes.

### Changer les couleurs
Éditez `script.js`, variables `rowColors` et `textClasses`.

### Ajuster le scoring
Dans `script.js`, fonction `updateScore()` :
```javascript
const score = Math.max(0, cardsPlaced * 100 + timeBonus - movePenalty);
// movePenalty = nombre de coups au-delà du minimum (35) × 10
```

## 🌐 Compatibilité

- ✅ Chrome, Edge, Safari, Firefox (dernières versions)
- ✅ Desktop et tablette en mode paysage
- ✅ Mobile (recommandé en mode paysage)
- ✅ Pas de dépendances externes

## 📝 Prochaines fonctionnalités possibles

- [ ] Mode révision (voir toutes les réponses)
- [ ] Sauvegarde de progression (localStorage)
- [ ] Page de tutoriel
- [ ] Mode difficile (contre-la-montre)
- [ ] Statistiques détaillées
- [ ] Partage du score

## 📄 Licence

Projet éducatif libre. Utilisez et modifiez comme vous le souhaitez pour l'apprentissage de la nivologie et de la sécurité en montagne.

## 🙏 Crédits

Développé pour l'apprentissage des Situations Avalancheuses Typiques (SAT).
Base créée par @otite, améliorations par Claude (Anthropic).

---

**⚠️ Important** : Ce jeu est un outil pédagogique. Pour une évaluation réelle du risque d'avalanche, consultez toujours le Bulletin d'Estimation du Risque d'Avalanche (BERA) local et formez-vous auprès de professionnels.

🏔️ **Bonne pratique de la montagne en sécurité !**

## Séquence 1
commandes utilisées : 

ng g c home
ng g c about 

routes fonctionnelles : 

/home pour Home
/about pour About

## Séquence 2 - Logique réactive du flux de données

## 1 - Le service
BehaviorSubject nous permet de récupérer la dernière version de notre tableau
On crée une variable tasks$ qui signifie que c'est un observable, on donne accès au diffuseur (le behaviorsubject) sans pouvoir le modifier pour le moment
On vient crée une méthode addTask permettant de créer et ajouter une nouvelle task, en annonçant par la suite avec next (fonction native qui permet d'annoncer à tous les composants qui utilisent tasks$ qu'il y a eu une mise à jour)

## 2 - Le home.ts
On injecte dans une variable notre TaskService pour pouvoir l'utiliser 
On vient pointer notre tasks$ pour afficher la liste des tâches en temps réels
Et on demande au service d'ajouter une tâche avec notre addTask

## 3 - Le home.html
On appelle notre méthode addTask lors d'un click sur le bouton (plus tard, nous pourrions mettre un écouteur sur un input et récupérer ce que l'utilisateur a tapé pour l'ajouter à la liste des tâches afin d'améliorer le système actuel qui ne fonctionne qu'en dur)

## Séquence 3 - Lazy loading & Composants dynamiques

## 1 - Lazy loading

Le lazy loading est une manière de charger son application, plus particulièrement ses composants. 
Au lieu de charger tout les composants au lancement, on charge uniquement le composant lorsque l'url est appelé.
Cela permet de charger l'application plus vite au démarrage.

## 2 - Features

Au lieu de tout regrouper dans un fourre-tout comme Home par exemple, on décompose l'appli par fonctionnalités et plus par fichiers.

# 3 - Composant dynamique 

Un composant dynamique est un composant que l'on appelle pas par une route, appelé seulement à la demande. Charger un composant lors d'un click sur un bouton par exemple.

# 4 - ViewContainerRef & createComponent()

ViewContainer sert de référence, vers un conteneur qu'on aurait créé au préalable. Il sert un peu de viseur, à dire où est-ce qu'on va placer notre composant.
createComponent() est la méthode qui crée et insère le composant. 

## Séquence 4 — Tests Unitaires Angular

        ### 📚 Ce que j'ai appris

        #### 1. Pourquoi tester ?
        - Les tests permettent de vérifier que le code fonctionne comme prévu.
        - Sans tests, on peut casser une fonctionnalité sans s’en rendre compte.
        - Exemple concret : Après une modification en responsive, j'ai mit du temps à remarquer un dysfonctionnement de l'affichage lors du loading de l'appli. Avec des teste, ce bug d'affichage n'aurait pas existé + de 5min.

        #### 2. Outils utilisés
        - **Jasmine** : framework de test qui permet d’écrire les tests (describe, it, expect).
        - **Karma** : lanceur de tests qui exécute les tests dans le navigateur.
        - **TestBed** : outil Angular pour créer un environnement de test (composants, services, dépendances).

        #### 3. Concepts clés maîtrisés
        - **AAA Pattern** : Arrange, Act, Assert
        - **Mocks** : Un objet simulé pour remplacer des dépendances, permettant de tester des données factices.
        - **Spies** : Voir si une méthode est appelée.
        - **Fixture & detectChanges()** : fixture permet la modification au composant et son DOM. detectchanges est très important car met à jour le template apès une modification.

        #### 4. Types de tests pratiqués
        - ✅ Test d'une classe simple (sans Angular)
        - ✅ Test d'un service
        - ✅ Test d'un composant avec TestBed
        - ✅ Test des @Input
        - ✅ Test des @Output
        - ✅ Test du DOM

        #### 5. Erreurs courantes rencontrées
        - Oublier `detectChanges()` : Le DOM n'est pas mis à jour
        - `No provider for...` : Il manque un import dans le fichier où le test est effectué.
        - Tests qui dépendent les uns des autres : Il faut réinitialisé les états pour qu'ils soient indépendants

        #### 6. Commandes importantes
        ```bash
        ng test                    # Lancer les tests
        ng test --code-coverage    # Avec rapport de couverture
        ```

        #### 7. Code Coverage atteint
        - Objectif : 70-80%
        - Mon résultat : **86%** sur TaskBoard Pro

        #### 8. Difficultés rencontrées et solutions
        | Difficulté | Solution trouvée |
        |------------|------------------|
        | 'No provider for...' | Qui apparaissait sur plusieurs tests natifs de base proposé par Angular, j'ai donc ajouter RouterTestingModule dans les imports (avant de commenter ces tests par la suite, n'étant pas utile pour l'exercice en cours) |

        #### 9. Points à approfondir
        - [ ] Tests d'intégration
        - [ x ] Tests E2E avec Cypress
        - [ x ] Mocking avancé pour HttpClient
        - [ ] Tests de services asynchrones

        ### 🎯 Projet : Tests TaskBoard Pro

        #### Tests implémentés
        - [x] TaskService
        - ✅ `addTask()`
        - ✅ `deleteTask()`
        - ✅ `getTasks()`
        - [x] TaskHighlight Component
        - ✅ Affichage du titre
        - ✅ @Input title
        - ✅ Rendu dans le DOM
        - [x] TaskPage Component
        - ✅ Utilisation du mock pour ajouter une tâche

        #### Résultats
        - **Tests réussis** : 6 / 6
        - **Code coverage** : 86%%
        - **Temps d'exécution** : 0.097s secondes

        ### 💡 Réflexion personnelle
        Les principe du testing, de son utilité etc m'était déjà familier. Cependant, l'utilisation de nouveaux outils comme Karma par exemple m'ont été bénéfiques, tout simplement pour la découverte d'un outil inconnu auparavant pour moi. De plus, l'option de commande "--code-coverage" m'a aussi plu, me permettant de découvrir qu'il était possible de vérifier en % à quel point nous avons couvert une application, ou encore si les tests effectués sont utiles sur d'autres branches, fonctionnalité très intéressante selon moi.

        ### 📚 Ressources consultées
        - [Notes de cours]
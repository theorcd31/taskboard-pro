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

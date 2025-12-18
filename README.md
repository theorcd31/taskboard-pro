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
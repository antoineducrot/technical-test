# Test technique Full Stack

**Durée estimée à prévoir pour le test** : Entre 4h et 6h

**Stack technique** : React, apollo client (l'API est fournie [ici](https://github.com/Mrtblg/todo-provided-server))

**Le rendu attendu** : Le lien vers un dépôt github avec un README clair répondant au problème posé

# Énoncé

Faire une application react de gestion de TODO composée de deux pages :

- Une page listant des TODO
- Une page affichant le détail d'une TODO

Une TODO contient les champs suivants :

- Date de création
- Type : `OneOf['RH', 'Tech', 'Marketing', 'Communication']`
- Un Boolean isDone
- Un texte
- Un titre

La page affichant la liste des TODO doit :

- Afficher la liste des TODO (on affichera toute la liste d'un coup sans pagination ni infinite scroll)
- Pour chaque TODO afficher le titre, le type et la date de création
- Pour chaque TODO, permettre de changer la valeur de isDone
- Avoir un système de filtres qui permet de :
- Trier par date de création croissante/décroissante
- Filtrer sur le type
- Afficher les TODO en fonction de leur statut isDone
- Avoir un bouton "uniquement les todo business" qui aura pour effet de filtrer les todos ayant le type `Marketing` et `Communication` et uniquement celles-là. On peut le voir comme un raccourcis. ⚠️ il ne doit à aucun moment être en incohérence avec le filtre sur le type.
- Réinitialiser les filtres

La page du détail d'une TODO affiche tous les champs de la TODO et permettre de modifier le statut isDone

Les filtres sélectionnés doivent être conservés lorsqu'on navigue entre la liste et les détail des TODO. Mais sont ré-initialisés au refresh de la page

# Les contraintes techniques

- Créer l'application avec create-react-app et **utiliser des functional components avec les hooks**
- **Cloner le projet Back** disponible [ici](https://github.com/Mrtblg/todo-provided-server) et se brancher sur l'API qu'il fournit
- Utiliser du css in js. On recommande fortement https://emotion.sh/
- Utiliser React Apollo et **utiliser les hooks.** Vous trouverez [ici](https://www.apollographql.com/docs/react/get-started/) la documentation pour mettre en place le client graphql, [ici](https://www.apollographql.com/docs/react/data/queries/) la documentation pour faire une query à partir du hook et [ici](https://www.apollographql.com/docs/react/data/mutations/) la documentation pour faire un mutation à partir du hook. Vous ne devriez pas avoir besoin de plus.
- Utiliser React router
- Ne pas utiliser Redux, privilégier l'utilisation de contextes si besoin

# Ce qui est important

- Bien découper le code et l'arborescence des fichiers. Montrer une bonne compréhension de ce qu'est l'architecture d'un projet amené à grandir.
- Bien découper les responsabilités des différents composants du code. Montrer une bonne compréhension du découpage du code par responsabilité fonctionnelle.
- Faire un code simple et facile à relire. Rendre un projet propre. Montrer que pour vous la qualité du code est aussi importante que le fonctionnel.
- Ne pas rendre un projet avec des bugs et montrer que vous avez pensé à tous les cas aux limites et qu'ils sont gérés d'une façon ou d'une autre. Si vous manquez de temps expliquez les cas que vous ne gérez pas et comment vous les auriez géré.
- Respecter les bonnes pratiques de la structure html et css du code. Avoir des éléments d'une taille raisonnable pour être lisibles et cliquables. Gérer le responsive.

# Ce qui n'a aucune importance

Le rendu graphique de l'application. Pas besoin de faire quelque chose de beau.

# Bon courage 💪

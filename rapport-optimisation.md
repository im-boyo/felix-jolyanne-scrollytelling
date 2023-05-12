# Rapport d'optimisation du projet ScrollyTelling
[Page Speed Insights - Rapport du 11 mai 2023, 11:40:46](https://pagespeed.web.dev/analysis/https-im-boyo-github-io-testa-radovanovic-felix-scrollytelling/zcr0kcuule?form_factor=mobile)

## Problème #1
### Servir des images dans des formats de nouvelle génération
Les fichiers en JPEG ou en PNG peuvent être trop lourds pour des sites web, donc il faudrait les remplacer par une version avec une meilleure compression
### Action concrète pour résoudre le problème
Afin d'alléger la page web, je vais convertir tout mes fichiers PNG en WebP, un format d'image plus moderne et moins lourd, en utilisant le site [cloudconvert](https://cloudconvert.com/png-to-webp).
### Résultat
✔️ J'ai converti toutes mes images en WebP, ce qui a sauvé beaucoup d'espace dans mon projet. Grâce au site mentionné précédemment, j'ai pu libérer plus de 5000 KiB. Par contre, les spritesheets n'ont pas pu être converti correctement, donc j'ai dû les laisser en tant que fichers PNG.

## Problème #2
### Servez des ressources statiques avec une politique de cache efficace
Le site n'a pas une cache avec une durée de vie optimisée, ce qui ralentit les visites fréquentes à celui-ci.
### Action concrète pour résoudre le problème
Afin d'optimiser ma cache, je vais suivre les directives suggérées par PageSpeed Insights et augmenter la durée de vie de ma page.
### Résultat
❌ Après plusieurs recherches, je n'arrive pas a trouver de quelle manière je peux modifier la durée de vie du cache de ma page. En allant sur un autre naviguateur (chrome) que celui que j'utilisait (Firefox), j'avait trouvé comment changer cette valeur mais il a besoin de garder ces modifications dans un fichier. Cependant, il n'est pas précisé quel type de fichier, donc sans cette information je ne peux pas résoudre ce problème.

## Problème #3
### Éviter les charges utiles énormes sur le réseau
Les charges utiles larges du réseau utilisent beaucoup de données, ce qui peut être chèr pour certains utilisateurs (doivent payer pour plus de données)
### Action concrète pour résoudre le problème 
Afin d'optimiser la taille des charges utiles, je vais minifier mes fichiers CSS et JavaScript et aussi utiliser des fichiers WebP au lieu de JPEG ou de PNG.
### Résultat
✔️ J'avais précédemment converti mes images en WebP, donc cette partie n'avait pas à être refaite. La minification de mes fichers s'est bien fait. Pour le CSS, j'ai utilisé [WillPeavy](https://www.willpeavy.com/tools/minifier/) et je n'ai eu aucune difficulté avec. Cependant, la partie avec le fichier JavaScript m'a causé quelques problèmes (erreurs dans la partie minifiée), mais en utilisant [Toptal](https://www.toptal.com/developers/javascript-minifier) au lieu de WillPeavy, le tout s'est reglé.

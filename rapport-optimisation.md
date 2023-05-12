# Rapport d'optimisation du projet ScrollyTelling
[Page Speed Insights - Rapport du 11 mai 2023, 11:40:46](https://pagespeed.web.dev/analysis/https-im-boyo-github-io-testa-radovanovic-felix-scrollytelling/zcr0kcuule?form_factor=mobile)

## Problème #1
### Servir des images dans des formats de nouvelle génération
Les fichiers en JPEG ou en PNG peuvent être trop lourds pour des sites web, donc il faudrait les remplacer par une version avec une meilleure compression
### Action concrète pour résoudre le problème
Afin d'alléger la page web, je vais convertir tout mes fichiers PNG en WEBP, un format d'image plus moderne et moins lourd, en utilisant le site [cloudconvert](https://cloudconvert.com/png-to-webp).
### Résultat

## Problème #2
### Encoder efficacement les images
Les fichiers JPEG ou BMP ayant des optimisations possibles de 4KiB ou plus seront considérés comme étant optimisables. En optimisant ces images, la page chargera plus rapidement et consommera moins de données.
### Action concrète pour résoudre le problème
Afin d'optimiser les images, je vais faire en sorte qu'elles ont un *lazy loading* pour que la page ne charge pas tout en même temps. De plus, je vais convertir les fichiers JPEG restants en WEBP aussi en utilisant le même site que mentionné précédemment, soit [cloudconvert](https://cloudconvert.com/png-to-webp).
### Résultat

## Problème #3
### Dimensionner correctement les images
Certains fichiers ne sont pas bien dimensionnés, ce qui utilise plus de données que ce qui est nécessaire. 
### Action concrète pour résoudre le problème 
Afin d'avoir des images mieux adaptés à la taille de l'écran, je vais m'assurer qu'il n'y a pas trop d'espace autour de l'élément central de l'image. Si c'est le cas, je vais utiliser un logiciel pour modifier des images, tel que Photoshop ou Clip Studio, afin de recadrer correctement les images sans avoir trop d'excès.
### Résultat

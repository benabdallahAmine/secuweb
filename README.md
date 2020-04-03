# secuweb

Le projet sur lequel nous avons travaillé consiste en la création d'un site de demande de logement, nous avons développé la partie qui permet :

- Enregistrer les demandeurs de logement
- Authentifier les utilisateurs
- Soumettre la candidature de logement pour les utilisateurs authentifiés

Les technologies que nous avons utilisé sont :

- Spring Boot (back end)
- React (front end)
- MySQL (base de données) / Base de données InMemory H2

L'authentification sur notre site se fait à l'aide de token JWT, et les mots de passes stockées dans la base de données sont cryptés à l'aide d'une fonction de hashage nommé Bcrypt. 
Notre site est aussi sécurisé contre les attaques de type SQL injection vu que toutes les interractions avec la base de données sont faites à l'aide des opérations CRUD implémentées par le  framework Hibernate(aucune requête native n'a été écrite par nous même, tout à été délégué au framework qui en interne se base sur les requêtes préparées)

La vulnérabilité que nous avons décidé d'exploiter sur notre site est l'upload de fichiers malveillants.

Nous avons deux branches:
1) la première branche "master" qui contient le patch contre la vulnérabilité.
2) la deuxième branche "with vulnerabilities" contient le site avec la vulnérabilité.
----------------------------------------------------------------------------------------------------------------------------------------
Pour lancer  l'application chez vous : 
- Vous aurez besoin d'installer maven
- Vous aurez besoin d'installer Java 8 
- Vous aurez besoin d'installer mysql (facultatif) 
- Vous aurez besoin d'installer node.js 

- Cloner le projet chez vous.
- Pour lancer le backend:  
  - Dans la classe AccountRestApi.java dans le dossier backend/src/main/java/com/imtatlantique/uesecuweb/web/. Il y'a une une méthode nommé : uploadIdentityCardFile. Dans cette méthode il faut modifié la valeur de la variable UPLOADED_FOLDER et mettre le lien vers un dossier ou seront stockées les fichiers téléchargés
  - Le backend utilise une base de données mysql. Avant de démarrer le backend vous devez installer MySQL. 
  - Si vous ne voulez pas le faire on a intégré dans le projet une base de donnée dites InMemory qui s'appelle H2. 
  - Si vous faite le choix de travaillez avec une base de données mysql. Vous devez éditer le fichier suivant: 
    - application.properties qui se trouve dans le dossier secuweb/backend/src/main/resources/ Vous devez configurer 3 lignes( Url de la         base de donnée, login de l'utilisateur root, mot de passe de l'utilisateur root)    
    - Si vous voulez travailler avec seulement la base de données InMemory et ne pas installer mysql. Dans le fichier pom.xml décommentez       la dépendance com.h2database et commentez la dépendance mysql
  
  - Ensuite dans un terminal, placez vous dans le dossier backend
  - Tapez la commande mvn clean install
  - Un dossier target sera généré avec un jar dedans
  - Lacez l'application java : java -jar nomDuJarGénéré.jar
  - Si vous avez déjà travailler avec eclipse ou intelliJ vous pouvez bien lancez le backend à partir de l'un de ces IDE. 
    

- Ensuite lancer la partie frontend, rendez vous le dossier frontend:
    - npm install
    - npm start
  
N'oubliez pas de tester les deux branches.

Si vous rencontrez des problèmes, n'hésitez pas à nous contacter : 
- amine.benabdallah@imt-altantique.net
- hamid.massaoud@imt-atlantique.net




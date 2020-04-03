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
- Pour lancer le backend, rendez vous sur le dossier backend, compilez l'application 
secuweb/backend/src/main/resources/application.properties
-Ensuite lancer la partie frontend, rendez vous le dossier frontend:
  npm install
  npm start
  
  Si vous avez des problèmes, n'hésitez pas à nous contacter. 
  amine.benabdallah@imt-altantique.net



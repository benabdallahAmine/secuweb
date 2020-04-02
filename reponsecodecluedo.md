Le module Python json et la fonction url_for sont importés dans le code, sans jamais être utilisés. url_for rend le code plus facile à maintenir. En effet, si on décide de changer l’URL d’une vue, il suffit de changer le paramètre de app.route, et toutes les autres vues contenant des liens vers elle s’adapteront automatiquement.

L’emploi de l’algorithme de chiffrement symétrique DES (Data Encryption Standard) n’est plus recommandé aujourd’hui. Il présente plusieurs vulnérabilités, par exemple l’attaque par Brute Force finit par être la plus pratique et la plus efficace. Néanmoins, il existe trois attaques théoriques possibles qui ont une complexité moindre que celle de l’attaque par Brute Force, elles consistent à trouver un nombre infini de textes qui pourraient être la solution. 

1. Cryptanalyse différentielle : C’est une attaque à messages clairs choisis, sur les constructions itératives de chiffrement par bloc. 

2. Cryptanalyse linéaire : C’est une attaque à clairs connus sur les chiffrements par bloc itératifs. Le principe général consiste à approcher le chiffrement par des équations linéaires. 

3. Il s'agit d'une attaque en texte clair connue basée sur la distribution non uniforme des sorties de paires de S-box adjacentes. 

Md5 est une fonction de hachage cryptographique qui permet d’obtenir l’empreinte numérique d’un message, elle est aujourd’hui considérée comme dépassé et absolument impropre à toute utilisation en cryptographie ou en sécurité. En effet, depuis 1996, une faille qualifiée de "grave" est découverte, possibilité de créer des collisions à la demande. Une attaque par collision consiste à trouver deux messages M1 et M2 différents, tels que H(M1) = H(M2). 

On remarque que le vecteur d'initialisation (en anglais initialization vector ou IV) demeure constant, on l'utilise avec la même clé, le code est donc vulnérable à une attaque basée sur une simple opération booléenne avec XOR. 

ECB (Electronic CodeBook) est un mode d’opération qui consiste à subdiviser un message en plusieurs blocs qui sont chiffrés séparément les uns après les autres. Ce mode est fortement déconseillé dans toute application cryptographique. Le gros défaut de cette méthode est que deux blocs avec le même contenu seront chiffrés de la même manière, on peut donc tirer des informations à partir du texte chiffré en cherchant les séquences identiques. On obtient dès lors un « dictionnaire de codes » avec les correspondances entre le clair et le chiffré d'où le terme CodeBook.

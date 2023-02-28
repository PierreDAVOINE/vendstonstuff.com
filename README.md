# vendstonstuffV0

Projet d'entrainement fullstack. Je part ici sur la création d'un site de vente, achat ou échange de matériel multimédia : pc, consoles, composants, accessoires. Le tout, d'occasion...

Je me suis fixé plusieurs objectifs : 
- Tout d'abord pouvoir y aller par étape, dans un premier temps, avoir une base fonctionnelle puis rajouter une feature à la fois.
- Utiliser le framework tailwind css pour le front.
- Utiliser node js avec express et ejs pour le serveur.
- Utiliser postrgreSQL pour la BDD avec Sequelize en ORM.

## 1 : USER STORIES

> Version 0
- En tant qu'utilisateur, je souhaite pouvoir consulter les articles à vendre
- En tant qu'utilisateur, je souhaite pouvoir contacter un vendeur afin d'acheter un produit
- En tant qu'utilisateur, je souhaite pouvoir créer un compte
- En tant qu'utilisateur, je souhaite pouvoir me connecter afin de pouvoir contacter un vendeur

> Version 0.5
- En tant qu'utilisateur, je souhaite pouvoir filtrer les produits
- En tant qu'admin, je souhaite pouvoir ajouter des produits
- En tant qu'admin, je souhaite pouvoir supprimer des produits

> Version 1
- En tant qu'utilisateur, je souhaite pouvoir ajouter des produits afin de les vendres
- En tant qu'utilisateur, je souhaite pouvoir supprimer un produits que j'ai moi même mis en vente

> Version ++


## 2 : MCD

(https://www.mocodo.net/)
```
user: id, firstname, lastname, email, password, role
product: id, name, ref, year, description, tag
tag: id, name

sell, 0N user, 11 product
have, 1N tag, 0N product
```

## 3 : MLD

**product** (<ins>id_product</ins>, name, ref, year, description, tag, _#id_user_)<br>
**tag** (<ins>id_tag</ins>, name)<br>
**user** (<ins>id_user</ins>, firstname, lastname, email, password, role)<br>
**have** (<ins>_#id_tag_</ins>, <ins>_#id_product_</ins>)

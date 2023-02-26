# vendstonstuffV0

Bases pour un side projects vends ton stuff informatique, consoles etc.

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

**have** (<ins>_#id_tag_</ins>, <ins>_#id_product_</ins>)<br>
**product** (<ins>id_product</ins>, name, ref, year, description, tag, _#id_user_)<br>
**tag** (<ins>id_tag</ins>, name)<br>
**user** (<ins>id_user</ins>, firstname, lastname, email, password, role)

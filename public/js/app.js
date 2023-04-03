const app = {
  base_url: 'http://localhost:5000',
  productListEl: document.getElementById('product-list'),
  init: () => {
    console.log("Initialisation de l'application...");
    // On récupère les articles a l'api pour les afficher en front
    app.getAllArticles();

    console.log('Application initialisée !');
  },
  getAllArticles: async () => {
    console.log('Récupération de tous les articles en cours...');
    try {
      const response = await fetch(app.base_url + '/articles');
      if (response.status !== 200) {
        let error = await response.json();
        throw error;
      }
      let lists = await response.json();
      for (const article of lists) {
        console.log(article);
        app.createArticleInDom(article);
      }
    } catch (error) {
      console.error(error);
    }
  },
  createArticleInDom: (article) => {
    // Création de la div parente
    const divParent = document.createElement('div');
    divParent.className =
      'lg:w-1/4 border-2 border-solid border-white p-5 mb-4';
    // Création du titre de l'article
    const title = document.createElement('h3');
    title.className = 'p-2 font-bold text-violet-800 bg-gray-400';
    title.textContent = article.name;
    // Création de l'image
    const img = document.createElement('img');
    img.setAttribute('src', article.img);
    img.setAttribute('alt', article.name);
    img.className = 'w-full';
    // Création de la description de l'article
    const description = document.createElement('p');
    description.textContent = article.description;
    // Création du footer de l'article
    const divFooter = document.createElement('div');
    divFooter.className = 'flex justify-between items-center';
    // Création du tag d'état
    const state = document.createElement('p');
    state.textContent = `Etat: ${article.state}`;
    const productLink = document.createElement('a');
    productLink.setAttribute('href', `${app.base_url}/article/${article.id}`);
    productLink.className =
      'px-3 pb-2 pt-1 border-2 border-sky-900 rounded-full bg-violet-800 cursor-pointer hover:bg-blue-400 transition ease-in-out';
    productLink.textContent = 'Regarder cet article';
    divFooter.append(state, productLink);
    divParent.append(title, img, description, divFooter);

    app.productListEl.appendChild(divParent);
  },
};

document.addEventListener('DOMContentLoaded', app.init);

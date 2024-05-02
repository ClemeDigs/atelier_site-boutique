class Product{
    /**
     * @param {string} name
     * @param {string} img
     * @param {string} desc
     * @param {string} price
     */

    constructor(img, name, desc, price){
        this.img = img;
        this.name = name;
        this.desc = desc;
        this.price = price;
    }
}

const products = [
    new Product (
        './assets/img/products/cookies.png',
        'Cookies',
        'Boite de 6 délicieux cookies aux pépites de chocolat',
        '12,99$',
    ),

    new Product (
        './assets/img/products/macarons.png',
        'Macarons',
        'Boite de 6 macarons fondants aux saveurs variées',
        '17,99$'
    ),

    new Product (
        './assets/img/products/biscottis.png',
        'Biscottis',
        'Sachet de 12 biscottis aux noix et fruits confits',
        '14,99$'
    ),

    new Product (
        './assets/img/products/barre-chocolatee.png',
        'Barre chocolatée',
        'Barre chocolatée garnie de nougat et de caramel maison',
        '3,99$',
    ),

    new Product (
        './assets/img/products/biscuits-fourres.png',
        'Biscuits fourrés',
        'Assortiment de biscuits fourrés au chocolat et caramel maison',
        '19,99$',
    ),

    new Product (
        './assets/img/products/palets-bretons.png',
        'Palets bretons',
        'Boite de palets bretons pur beurre au sel de Guérande',
        '12,99$',
    )
]

const productSectionHtml = document.querySelector('.products');

const h2ProductsHtml = document.createElement('h2');
    h2ProductsHtml.classList.add('h2__products')
    productSectionHtml.appendChild(h2ProductsHtml);
    h2ProductsHtml.textContent = "Nos produits vedettes";

    const productsFichesHtml = document.createElement('div');
    productsFichesHtml.classList.add('products__fiches');
    productSectionHtml.appendChild(productsFichesHtml);

/** 
 * @param {Product} product
 * @returns {HTMLDivElement}
 */

function productToHtml(product) {
    const divHtml = document.createElement('div');
    divHtml.classList.add('product__container');

    const imgDiv = document.createElement('div'); // Crée une div pour l'image
    imgDiv.classList.add('div__img');
    divHtml.appendChild(imgDiv);

    const img = document.createElement('img');
    img.src = product.img;
    imgDiv.appendChild(img); // Ajoute l'image à la div pour l'image

    const textDiv = document.createElement('div'); // Crée une div pour le texte
    textDiv.classList.add('div__text'); // Ajoute la classe div__text
    divHtml.appendChild(textDiv);

    const nameHeading = document.createElement('h3'); // Crée un h3 pour le nom du produit
    nameHeading.textContent = product.name;
    textDiv.appendChild(nameHeading); // Ajoute le h3 pour le nom du produit à la div du texte

    const values = Object.values(product).slice(2); // Exclure les deux premières valeurs (chemin de l'image et nom)
    values.forEach(value => {
        const p = document.createElement('p');
        p.textContent = value;
        textDiv.appendChild(p); // Ajoute le paragraphe à la div du texte
    });

    return divHtml;
}

const vedetteProduct = document.querySelector('.products__fiches');

products.forEach(product => {
    vedetteProduct.appendChild(productToHtml(product));
});
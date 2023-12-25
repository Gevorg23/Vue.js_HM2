// массив товаров 

const products = [
    {name: 'Product 1', price: 20},
    {name: 'Product 2', price: 10},
    {name: 'Product 3', price: 30},
];

// Компонент для отображения списка товаров
Vue.component('product-list', {
    props: {
        products: Array
    },
    data() {
        return {
            sortedProducts: [...this.products]
        };
    },
    methods: {
        sortByPrice(ascending) {
            this.sortedProducts = [...this.products].sort((a, b) => {
                return ascending ? a.price - b.price : b.price - a.price;
            });
        }
    },
    template: `
        <div>
            <button @click="sortByPrice(true)">Сортировать по возрастанию цены</button>
            <button @click="sortByPrice(false)">Сортировать по убыванию цены</button>
            <ul>
                <li v-for="(product, index) in sortedProducts" :key="index">
                    {{ product.name }} - {{ product.price }}$
                </li>
            </ul>
        </div>
    `
});

// Создание экземпляра Vue
new Vue({
    el: '#app',
    data: {
        products: products
    },
    template: '<product-list :products="products" />'
});
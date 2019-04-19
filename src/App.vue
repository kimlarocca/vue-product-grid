<template>
    <div id="app">
        <h1>Nuts.com Product Page</h1>
        <div class="product" v-for="product in products">
            <div class="left">
                <img :src="product.thumbImg">
            </div>
        </div>
    </div>
</template>

<script>

    import axios from 'axios';

    export default {
        name: 'app',
        data() {
            return {
                products: []
            }
        },
        methods: {
            getInitialProducts() {
                axios.get('src/nuts.json')
                    .then(response => {
                        this.products = (response.data.arrayOfProducts);
                    });
            },

            scroll(product) {
                window.onscroll = () => {
                    let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
                    if (bottomOfWindow) {
                        axios.get('src/nuts.json')
                            .then(response => {
                                this.products.push(...response.data.arrayOfProducts);
                            });
                    }
                };
            },
        },
        beforeMount() {
            this.getInitialProducts();
        },
        mounted() {
            this.scroll(this.product);
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }
</style>

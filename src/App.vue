<template>
    <div id="app">

        <img src="https://nuts.com/nutshell/img/nuts-logo-420b6a54.svg" alt="nuts.com"/>
        <h1>Coding Challenge</h1>

        <section class="products">
            <div class="product-card" v-for="(product,i) in products" :key="i" @click="showModal(product)">
                <div>
                    <img :src="product.image_url" :alt="product.name">
                    <h2>{{ product.name }}</h2>
                </div>
            </div>
        </section>

        <modal v-if="selected_product_obj !== null" v-show="isModalVisible" @close="closeModal"
               :product_obj="selected_product_obj"/>
    </div>
</template>

<script>

    import axios from 'axios';
    import Modal from './components/Modal';
    import {Product} from './models/Products';

    export default {
        name: 'product-grid',
        components: {
            Modal,
        },
        data() {
            return {
                products: [],
                isModalVisible: false,
                selected_product_obj: null,
                offset: 0,
                limit: 12, //made an executive decision to display 12 at a time so that the grid lines up nicer.
            }
        },
        methods: {
            getProducts() {

                let self = this;

                axios({
                    url: `https://api.commercetools.co/nuts-custom-demo-1/products?limit=${self.limit}&offset=${self.offset}`,
                    method: "get",
                    headers: {
                        "Authorization": "Bearer j7Zz9aZsZ8ft7IJANBT84IvCn0UdzVFv"
                    },
                }).then((response) => {
                    (response.data).results.forEach(result_obj => self.products.push(new Product(result_obj)));
                    self.offset += 10;
                    console.log(response.data);
                });
            },

            scroll(product) {
                window.onscroll = () => {
                    let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
                    if (bottomOfWindow) {
                        this.getProducts()
                    }
                };
            },

            showModal(product_obj) {
                this.selected_product_obj = product_obj;
                this.isModalVisible = true;
            },

            closeModal() {
                this.isModalVisible = false;
            },
        },
        beforeMount() {
        },
        mounted() {
            this.getProducts();
            this.scroll(this.product);
        }
    }
</script>

<style lang="scss">
    $breakpoint-tablet: 900px;
    $breakpoint-mobile: 600px;

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        background: #f5f5f5;
        text-align: center;
    }

    h1 {
        font-weight: normal;
        text-align: center;
        margin: 40px 0;
    }

    .products {
        margin: auto;
        width: 100%;
        max-width: 1100px;
        display: flex;
        flex-wrap: wrap;

        .product-card {
            background: #fff;
            display: flex;
            flex: 1;
            flex-basis: 23% !important;
            margin: 1%;
            align-items: flex-end;
            cursor: pointer;
            -webkit-transition: .2s all linear;
            -moz-transition: .2s all linear;
            -o-transition: .2s all linear;
            transition: .2s all linear;

            &:hover {
                opacity: .75;
            }

            div {
                margin: auto;
                padding: 20px;
                align-self: flex-end;
            }

            img {
                height: auto;
                max-width: 100%;
                align-self: center;
                display: block;
                margin: auto;
            }

            h2 {
                text-align: center;
                font-weight: normal;
                font-size: 20px;
                text-transform: uppercase;
            }

            @media all and (max-width: $breakpoint-tablet) {
                margin: 0 2% 2% 2%;
                flex-basis: 46%;
            }

            @media all and (max-width: $breakpoint-mobile) {
                margin: 0 2% 2% 2%;
                flex-basis: 98%;
            }
        }
    }

</style>
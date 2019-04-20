<template>
    <transition name="modal-fade">
        <div class="modal-background">
            <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
                <button type="button" class="close" @click="close" aria-label="Close modal">X</button>
                <img :src="product_obj.image_url" :alt="product_obj.name"/>
                <span v-if="product_obj.badge" class="badge"><img
                        src="https://1b0bbb9e89b4713adcc7-aea4cee2cb18344b328e3a03eff3ec4f.ssl.cf1.rackcdn.com/5e85d71501308335-L2AE6hCf-thumb.jpg"/></span>
                <div class="details">
                    <h1> {{ product_obj.name }} </h1>
                    <p class="price">${{ product_obj.price }}</p>
                    <p class="description">{{ product_obj.description }}</p>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'modal',
        props: {
            product_obj: {
                required: true,
                type: Object
            }
        },
        methods: {
            close() {
                this.$emit('close');
            },
        },
    };
</script>

<style lang="scss">
    .modal-background {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(255, 255, 255, 0.75);
        display: flex;
        justify-content: center;
        align-items: center;

        .modal {
            background: #fff;
            box-shadow: 2px 2px 10px 1px;
            overflow-x: auto;
            display: flex;
            flex-direction: column;
            max-width: 90%;
            max-height: 90%;
            width: 1000px;
            position: relative;

            .badge {
                width: 60px;
                height: 60px;
                position: absolute;
                top: 20px;
                left: 20px;
            }

            .close {
                position: absolute;
                top: 10px;
                right: 20px;
                border: none;
                font-size: 40px;
                padding: 20px;
                cursor: pointer;
                color: #4AAE9B;
                background: transparent;
                -webkit-transition: .2s all linear;
                -moz-transition: .2s all linear;
                -o-transition: .2s all linear;
                transition: .2s all linear;

                &:hover {
                    opacity: .75;
                }
            }

            img {
                height: auto;
                max-width: 100%;
                width: 300px;
                align-self: center;
                display: block;
                margin: 60px 0 auto;
            }

            .details {
                position: relative;
                background: #f5f5f5;
                margin-top: 30px;

                &:before {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 0;
                    border-left: 15px solid transparent;
                    border-right: 15px solid transparent;
                    border-bottom: 15px solid #f5f5f5;
                    top: -15px;
                }
            }

            h1 {
                margin: 20px;
            }

            p {
                margin-bottom: 20px;
            }
        }
    }
</style>
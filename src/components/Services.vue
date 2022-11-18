<template>
    <section class="services">
        <div class="services-inner">
            <h2>{{ block.title }}</h2>
            <p>{{ block.subtitle }}</p>
            <div class="services-cards">
                    <div class="services-card" v-for="(card, index) in block.cards" :key="index">
                        <div class="services-card__inner">
                            <h3>{{ card.title }}</h3>
                            <p>{{ card.subtitle }}</p>
                            <router-link :to="card.link.url" class="button button-border--red">{{ card.link.text }}</router-link>
                        </div>
                    </div>
            </div>
            <div class="services-footer">
                <router-link :to="block.link.url" class="button button-fill button-fill--white">{{ block.link.text }}</router-link>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: {
        block: {
            type: Object
        }
    }
}
</script>
<style lang="scss">
@import "@/scss/components/services.scss";
</style>
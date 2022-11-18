<template>
    <section class="hero">
        <div class="hero-inner">
            <h1 class="hero__title" v-if="$route.name == 'Home'">{{ hero.title }}</h1>
            <h1 class="hero__title" v-else>{{ $route.name }}</h1>
            <div class="hero__copy" v-if="$route.name == 'Home'"><p>{{ hero.copy }}</p></div>
            <button v-if="$route.name == 'Home'"><router-link :to="hero.button.url" class="button button-fill button-fill--white">{{ hero.button.text }}</router-link></button>
        </div>
        <div class="hero-image">
            <img src="../../assets/img/hero.jpg" role="presentation">
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            hero: {
                title: "Get online week 2021",
                copy: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea tempora sint ullam eum architecto laboriosam!",
                button: {
                    text: 'Get involved now',
                    url: '/get-involved'
                }
            }
        }
    }
}
</script>
<style lang="scss">
@import "@/scss/global/hero.scss";
</style>
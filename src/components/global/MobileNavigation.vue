<template>
    <nav class="mobilenavigation">
        <ul>
            <li v-for="(route, index) in routes" :key="index" v-on:click="menuClosed"><router-link :to="route.link">{{ route.title }}</router-link></li>
        </ul>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            routes: [
                {
                    link: '/',
                    title: 'Home'
                },
                {
                    link: '/get-involved',
                    title: 'Get involved'
                },
                {
                    link: '/insights',
                    title: 'Insights'
                },
                {
                    link: '/our-network',
                    title: 'Our network'
                },
                {
                    link: '/the-digital-divide',
                    title: 'The digital divide'
                },
                {
                    link: '/what-we-do',
                    title: 'What we do'
                },
            ]
        }
    },
    methods: {
        menuClosed() {
            this.$emit('menuOpen', false);
        }
    }
}
</script>
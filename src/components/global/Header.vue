<template>
    <div>
        <section class="header-top">
            <div class="header-top__inner">
                <div class="header-top__search">
                    <form role="search" method="get" id="searchform" class="searchform" action="">
                        <input type="text" value="" name="s" id="s" placeholder="Search" />
                        <input type="submit" id="searchsubmit" value="Search" />
                    </form>
                </div>
                <div class="header-top__links">
                    <router-link to="/learn" class="nav-button">Learn</router-link>
                    <router-link to="/donate" class="nav-button nav-button--active">Donate</router-link>
                </div>
            </div>
        </section>
        <header class="header">
            <div class="header-inner">
                <div class="header-logo">
                    <a href="/">
                        <img alt="Vue logo" src="../../assets/logo.png" />
                    </a>
                </div>
                <nav class="header-navigation">
                    <ul>
                        <li v-for="(route, index) in routes" :key="index"><router-link :to="route.link">{{ route.title }}</router-link></li>
                    </ul>
                </nav>
                <div class="menu-toggle" @click="isActive = !isActive" :class="isActive ? 'clicked' : ''">
                    <span class="line-1"></span>
                    <span class="line-2">Menu Toggle</span>
                    <span class="line-3"></span>
                </div>
            </div>
        </header>
        <MobileNavigation :class="{ visible: isActive }" @menuOpen="closeMenu"/>
    </div>
</template>
<script>
import MobileNavigation from "@/components/global/MobileNavigation.vue";
    export default {
        data() {
            return {
                isActive: false,
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
            closeMenu(value) {
                this.isActive = value;
            }
        },
        components: {
            MobileNavigation
        }
    }
</script>
<style lang="scss">
@import "@/scss/global/header.scss";
</style>
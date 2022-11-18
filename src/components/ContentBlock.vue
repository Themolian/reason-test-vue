<template>
    <section class="content-block">
        <div class="content-block__image">
            <img src="../assets/img/content-block.jpg" alt="Student smiling at the camera in front of laptop">
        </div>
        <div class="content-block__body">
            <h2>{{ block.title }}</h2>
            <p class="large">{{ block.copy }}</p>
            <button><router-link :to="block.link.url" class="button button-border--white">{{ block.link.text }}</router-link></button>
        </div>
    </section>
</template>
<script>
export default {
    props: {
        block: {
            type: Object
        }
    },
    computed: {
        contentBlockHeight() {
            const contentBlockElement = document.querySelector('.content-block');
            return contentBlockElement ? contentBlockElement.offsetHeight : 0;
        }
    },
    mounted() {
        document.querySelector('.content-block__image').setAttribute("style", "min-height:" + this.contentBlockHeight + "px");
    }
}
</script>
<style lang="scss">
@import "@/scss/components/content-block.scss";
</style>
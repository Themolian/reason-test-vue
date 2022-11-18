<template>
    <section class="service-search">
        <div class="service-search-inner">
            <h2>{{ block.title }}</h2>
            <p class="large">{{ block.body }}</p>
            <form action="">
                <p>I am </p>
                <div class="select-wrap">
                    <select name="personType" id="personType">
                        <option value="individual">an Individual</option>
                    </select>
                </div>
                <p> and I want </p>
                <div class="select-wrap">
                    <select name="services" id="services">
                        <option value="to-learn">to learn</option>
                    </select>
                </div>
                <div class="button button-fill button-fill--red">
                    <input type="submit" value="Start now">
                </div>
            </form>
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
@import "@/scss/components/service-search.scss";
</style>
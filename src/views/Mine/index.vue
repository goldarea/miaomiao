<template>
    <div id="main">
        <top/>
        <tabBar/>
    </div>
</template>
<script>
import top from '@/components/Header.vue'
import tabBar from '@/components/TabBar.vue'

export default {
    name : 'Movie',
    components: {
        tabBar,
        top
    }

}
</script>
<style lang="scss" scoped>

</style>

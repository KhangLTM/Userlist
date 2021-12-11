<template>
<navbar></navbar>
<router-view></router-view>
</template>

<script>
import Navbar from '../src/layouts/Navbar.vue'
export default {
    components: {
        Navbar
    }
}
</script>

<style>
    @media screen and (min-width:820px) {
          html{
                overflow: hidden;
            }
    }
</style>

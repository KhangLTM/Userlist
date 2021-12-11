<template>
<search-user></search-user>
<list-user></list-user>
</template>

<script>
import ListUser from '../components/user/ListUser.vue'
import SearchUser from './functionalities/SearchUser.vue'

export default {
    name: 'UserIndex',
    components: {
        ListUser,
        SearchUser,

    },

}
</script>

<style>

</style>

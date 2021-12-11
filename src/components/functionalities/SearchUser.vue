<template>
<div class="z-999 search-container flex justify-between md:ml-8 py-2">
    <div class="flex justify-around  md:w-48 ">
        <span class="hidden md:block material-icons mt-2">
            policy
        </span>

        <span class="hidden md:block material-icons mt-2">
            apps
        </span>

        <div class="flex">
            <img class="w-7 h-7 md:w-9 md:h-9 rounded-full" src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/179162852_653353195621082_5993237046885046954_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=a3FqULjMcagAX8cBaBR&_nc_ht=scontent-hkg4-1.xx&oh=71af391e6bc16f0286f8d65df64b2fdc&oe=61DA7F9D" alt="" />
            <span class="material-icons mt-1 md:mt-2">
                arrow_drop_down
            </span>
        </div>

    </div>
    <div class="search-contain relative"><input @keydown="isSearch=true" @blur="isSearch=false" v-model="search" type="text" class="transition duration-200  ease-in-out bg-gray-200 h-10  pr-8 pl-5 rounded z-0 focus:bg-gray-100 focus:outline-none search-input" placeholder="Search User...">
        <span class="absolute md:text-2xl material-icons search-icon">search</span>
        <div v-show="isSearch" class="search-list  absolute bg-white text-sm shadow-lg">
            <transition-group name='list'>
                <div class="transition duration-200  ease-in-out cursor-pointer hover:bg-blue-200 p-1 md:p-2 border-t-2 border-gray-100" v-for="user in searchedList" :key="user.id">
                    <div class="flex py-2">

                        <div class="flex-shrink-0 w-7 h-7">
                            <img class="w-full h-full rounded-full" :src="user.avatar" />
                        </div>

                        <div class="px-5">
                            {{`${user.first_name} ${user.last_name}`}}
                        </div>
                    </div>

                </div>

            </transition-group>

        </div>
    </div>

</div>
</template>

<script>
import {
    ref,
    onMounted,
    computed
} from '@vue/runtime-core'
import useUser from '../../composables/Users'
export default {
    name:'Search User',
    setup() {

        const search = ref('')
        const isSearch = ref(false)
        const {
            EntireUserList,
            getEntireUserList
        } = useUser()
       
       const searchedList = computed(() => {
            return EntireUserList.value.filter(user =>
                `${user.first_name} ${user.last_name}`.toLowerCase().includes(search.value.toLowerCase())
            )
        })

        onMounted(getEntireUserList)

        return {
            search,
            searchedList,
            isSearch,

        }
    }
}
</script>

<style scoped>
.search-container {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    width: 100vw;

}

.search-contain {
    width: 80%;
}

.search-input {
    display: relative;
    width: 40%;
}

.search-icon {
    top: 12%;
    left: 37%;
    cursor: pointer;
}

.search-list {
    top: 100%;
    left: 0%;
    width: 40%;
    max-height: 200px;
    overflow-x: hidden;
}

.list-enter-active {
    animation: add-item .8s;
}

.list-leave-active {
    animation: add-item .8s reverse;
}

.list-move {
    transition: transform .8s;
}

/* Scrollbar Styling */
::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-track {
    background-color: #ebebeb;
    -webkit-border-radius: 10px;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #888888;
}

@keyframes add-item {
    0% {
        opacity: 0;
        transform: translateX(100px);
    }

    100% {
        opacity: 1;
        transform: translateX(0px);
    }
}

@media screen and (max-width:820px) {
    .search-input {
        width: 90%;
        height: 30px;
        margin-left: 0.4rem;

    }

    .search-icon {
        top: 5%;
        left: 83%;
    }

    .search-list {
        left: 4%;
        width: 90%;
        max-height: 200px;
        overflow-x: hidden;
    }

}
</style>

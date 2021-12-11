<template>
<div>
    <transition name='slide-fade'>
        <span v-if="!isfilter" @click="isfilter=true" class="font-md text-2xl md:text-3xl mt-2 md:mt-8 md:mr-5 material-icons-outlined cursor-pointer transition duration-200  ease-in-out hover:text-blue-300">
            filter_list
        </span>
        <span v-else @click="isfilter=false" class="font-md text-2xl md:text-3xl mt-2 md:mt-8 md:mr-5 material-icons-outlined cursor-pointer  transition duration-200  ease-in-out hover:text-blue-300">
            close
        </span>
    </transition>
    <transition name="dropdown">
        <div v-show="isfilter" class="z-20  relative">
            <ul class="text-sm md:text-base  bg-white shadow absolute right-5  md:right-9 w-40 text-center rounded-md  md:py-5  md:space-y-2 cursor-pointer  " id="cars">
                <li @click="setFilter('no')" :class="{'bg-blue-200':filtertype=='no'}" class="transition duration-200  ease-in-out  hover:bg-blue-200  py-2     font-md">Sort: No Sort</li>
                <li @click="setFilter('asc')" :class="{'bg-blue-200':filtertype=='asc'}" class="transition duration-200  ease-in-out  hover:bg-blue-200 py-2  font-md">Sort name : A ➝ Z</li>
                <li @click="setFilter('des')" :class="{'bg-blue-200':filtertype=='des'}" class="transition duration-200  ease-in-out  hover:bg-blue-200 py-2  font-md">Sort name : Z ➝ A</li>

            </ul>
        </div>
    </transition>
</div>
</template>

<script>
import {
    ref
} from '@vue/runtime-core'
export default {
    name: 'FilterUser',
    setup(props, {emit}) {
        const isfilter = ref(false)
        const filtertype = ref('')

        const setFilter = (type) => {
            filtertype.value = type
            emit('setFilter', type)
        }

        return {
            isfilter,
            filtertype,
            setFilter
        }
    }
}
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
    transition: all 1s;
}

.dropdown-enter,
.dropdown-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all .8s;
}

.slide-fade-enter,
.slide-fade-leave-active {
    opacity: 0;
}

.slide-fade-enter {
    transform: translateX(-31px);
}

.slide-fade-leave-active {
    transform: translateX(31px);
}
</style>

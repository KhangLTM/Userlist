<template>
<div class=" modal">
    <div class="modal-wrapper">
        <div class="relative modal-container  ">
            <span @click="closeModal" class="close-btn absolute  material-icons cursor-pointer hover:text-blue-300">
                close
            </span>
            <div class="font-bold ">
                <div>{{`${userData.first_name} ${userData.last_name}`}}</div>

            </div>
            <div class="modal-body py-5 space-y-3">
                <router-link :to="{ name: 'user.edit', params: { id: userData.id }}" class="text-sm hover:bg-blue-300">EDIT</router-link>
                <p @click="deleteUser" class="text-sm hover:bg-blue-300 ">DELETE</p>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'ModalMobile',
    props: {
        userData: {
            type: Object,
            required: true
        }
    },
    setup(props, {emit}) {

        const closeModal = () => {
            emit("closeModal")
        }
        const deleteUser = () => {
            emit("deleteUser", props.userData.id)
        }
        return {
            deleteUser,
            closeModal
        }

    }
}
</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: table;
    transition: opacity 0.3s ease;
    z-index: 999;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    background: #fff;
    width: 200px;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    margin: 0 auto;
    padding: 20px 30px;

}

.modal-footer {
    margin-top: 15px;
}

.close-btn {
    top: 4%;
    right: 3%;
}
</style>

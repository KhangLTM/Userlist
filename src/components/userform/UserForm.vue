<template>
   <div class=" z-0  flex items-center justify-center  mb-8 py-7 md:py-12 px-4 sm:px-6 lg:px-8  items-center">
	<div class="max-w-md w-full   space-y-8 p-4 bg-gray-100 rounded-xl shadow-lg z-10">
		<div class="grid  gap-8 grid-cols-1">
				<div class="flex flex-col ">
						<div class="flex flex-col sm:flex-row items-center">
							<h2 v-if="!userId" class="font-semibold text-lg mr-auto">Create User</h2>
							<h2 v-else class="font-semibold text-lg mr-auto">Update	 User</h2>
							<div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
						</div>
			<form @submit.prevent="saveUser" class="mt-5">
				<div class="form">
						<div class="md:flex flex-row md:space-x-4 w-full text-xs">
							<div class="mb-3 space-y-2 w-full text-xs">
								<label  class="font-semibold text-gray-600 py-2">First  Name <abbr title="required">*</abbr></label>
								<input v-model="userdata.first_name" placeholder="Frist Name" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text" name="integration[shop_name]" id="integration_shop_name">
								<p class="text-red text-xs hidden">Please fill out this field.</p>
							</div>
							<div class="mb-3 space-y-2 w-full text-xs">
								<label class="font-semibold text-gray-600 py-2">Last  Name <abbr title="required">*</abbr></label>
								<input v-model="userdata.last_name" placeholder="Last Name" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text" name="integration[shop_name]" id="integration_shop_name">
								<p class="text-red text-xs hidden">Please fill out this field.</p>
							</div>
						</div>
						<div class="mb-3 space-y-2 w-full text-xs">
							<label class=" font-semibold text-gray-600 py-2">Your email<abbr title="required">*</abbr></label>
							<div class="flex flex-wrap items-stretch w-full mb-4 relative">
								<div class="flex">
									<span class=" flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-500 justify-center items-center  text-xl rounded-lg text-white">
										<span class="material-icons">
													mail
									</span>
                                   </span>
								</div>
								<input v-model="userdata.email" type="email" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow" placeholder="abcxy@abc.com" required>
							</div>
							</div>
							<div class="md:flex md:flex-row md:space-x-4 w-full text-xs">
								<div class="w-full flex flex-col mb-3">
									<label class="font-semibold text-gray-600 py-2">Your Address</label>
									<input placeholder="Address" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="text" name="integration[street_address]" id="integration_street_address">
								</div>
									<div class="w-full flex flex-col mb-3">
										<label class="font-semibold text-gray-600 py-2">Location</label>
										<select class="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "   >
												<option value="">Seleted location</option>
												<option value="">HoChiMinh,VN</option>
												<option value="">Mumbai,MH</option>
												<option value="">Bangalore,KA</option>
                                        </select>
										<p class="text-sm text-red-500 hidden mt-3" id="error">Please fill out this field.</p>
									</div>
								</div>
								<div class="flex-auto w-full mb-1 text-xs space-y-2">
									<label class="font-semibold text-gray-600 py-2">Description</label>
									<textarea required="" name="message" id="" class="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4 text-base font-bold" placeholder="Enter your comapny info" v spellcheck="false">Please open your network logs before submitting to check the API response ! </textarea>
								
								</div>
								<p class="text-xs text-red-500 text-right my-3">Required fields are marked with an
									asterisk <abbr title="Required field">*</abbr></p>
								<div class="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
									<button @click="this.$router.push('/')" class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"> Cancel </button>
									<button  type="submit" v-if='!userId' class="transition duration-200  ease-in-out mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-600">Create</button>
									<button v-else class="transition duration-200  ease-in-out mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-600">Update</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
   </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import useUser from '../../composables/Users'
export default {
	name:'UserForm',
	props:{
		userId:{
			required:true,
			type:String
		},
	},
	setup(props){
		let userdata=reactive({
			'first_name':'',
			'last_name':'',
			'email':'',
			'avatar':'https://picsum.photos/200'
		})

		const {user,getUser,storeUser,updateUser} = useUser()


		if(props.userId){
			onMounted(getUser(props.userId))
			userdata = user
		}


		const saveUser=async()=>{
			props.userId ?
			await updateUser(props.userId)
			:await storeUser({...userdata})
		}
	
		return{
			userdata,
			saveUser
		}
	
	}
}
</script>

<style scoped>


</style>

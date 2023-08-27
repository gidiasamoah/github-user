import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axiosSetup from '../setup/axios'

export const useProfileStore = defineStore('Profile', () => {
  const user = ref({})
  
  const getUser = computed(() => user.value)

  function setUser(data) {
    user.value = data
  }
  
  function getUserProfile (ProfileName) {
        axiosSetup.get(ProfileName).then((response) => {
         setUser(response.data )   
        }).catch((error) => {
       console.log(error)
        
        })

   
  }

  return { user, getUser, getUserProfile }
})
<script setup>

import ButtonComponent from '@/components/ButtonComponent.vue';
import { useProfileStore } from '../stores/apistore';
import { ref, computed } from 'vue';


const store = useProfileStore()
const userInfo = computed(() => store.user)

const username = ref('') 

const submit = async () => {
 const response =  store.getUserProfile(username.value)
} 




</script>

<template>
  <header>
    <p>devfinder</p>
    <img src="src/assets/dark.png" alt="darkmode">
  </header>

  <div>
  
  <div class="search-container">
      <input type="text" v-model="username" class="search-input" placeholder="Search GitHub username...">
      <ButtonComponent text="Search"  class="search-button" @click="submit" />
    </div>
  </div>

  <main>
    
     
   <div class="wrapper" v-if="userInfo?.name">

    
    
    <div class="main-name">
         
      <img :src="userInfo.avatar_url" alt="picture" class="profile-picture">
       <p class="name">{{userInfo?.name}}</p>
       <p class="date">Joined {{ userInfo?.created_at }}</p>
 
 
     </div>
 
     
    
 
     <div class="profile-main">
 
       <p class="username">@{{ userInfo?.login }}</p>
       <p class="profile">{{ userInfo?.bio }}</p>
 
     </div>
 
   <div class="container">
     <div>
       <p>Repos</p>
       <p class="number">{{ userInfo?.public_repos }}</p>
     </div>
 
     <div>
      <p>Followers</p>
      <p class="number">{{ userInfo?.followers }}</p>
     </div>
 
     <div>
       <p>Following</p>
       <p class="number">{{ userInfo?.following }}</p>
     </div>
 
   </div>
 
 
 <div class="grid-container">
   
   <div>
     <img src="src/assets/location.png" alt="logo">
     <p>{{userInfo?.location}}</p>
   </div>
 
   <div>
     <img src="src/assets/url.png" alt="logo">
     <p>{{ userInfo?.url }}</p>
   </div>
 
   <div>
     <img src="src/assets/twitter.png" alt="logo">
     <p>{{userInfo?.twitter_username ?? "Not available"}}</p>
   </div>
 
   <div>
     <img src="src/assets/office.png" alt="logo">
     <p>@{{ userInfo?.company }}</p>
   </div>
 
 </div>
   </div> 
   <div v-else class="empty_state">
      No result to show...
   </div>
      
   

  </main>
</template>

<style scoped>
header {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 524px;
  margin-top: 144px;
  margin-left: 355px; /* Assuming you intended to set a left margin */
}

header p{

color: #222731;
font-size: 26px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

.search-container {
  margin-top: 36px;
  margin-left: 355px;
}

.search-input {
  border: none;
  border-radius: 15px;
  background: #FEFEFE;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.20);
  width: 730px;
  height: 69px;
}

.search-input::placeholder {
  color: #4B6A9B;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  padding-top: 22px;
  padding-left: 0px;
}


.search-button {
  border: none;
  border-radius: 10px;
  background: #0079FF;
  width: 106px;
  height: 50px;
  color: #fff;
  
}



.search-input {
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  padding-left: 80px;
  
}


main {
  border-radius: 15px;
  background: white;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.20);
  width: 730px;
  height: 419px;
  flex-shrink: 0;
  margin-top: 24px;
  margin-left: 355px;
  position: absolute;
}

.main-name {
  padding-top: 48px;
  padding-left: 48px;
  display: flex;
  justify-content: space-between;
  padding-right: 48px;
  margin-bottom: none;
  position: relative;
}

.profile-picture {
  width: 25%;
  height: 25%;
  border-radius: 50%;
  overflow: hidden;
}

.profile-picture img {
  width: 100%;
  height: auto;
}

.name {
  color: #2B3442;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.date {
  color: #697C9A;
  text-align: right;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.profile-main {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 202px;
}

/* Style the elements within the .profile-main div */
.profile-main .username {
  color: #0079FF;
  font-family: 'Space Mono', monospace;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
}

.profile-main .profile {
  color: #4B6A9B;
  font-family: 'Space Mono', monospace;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  opacity: 0.75;
  margin: 0;
}

.container {
  display: flex;
  gap: 100px;
  padding-left: 202px;
  padding-top: 32px;
  color: #4B6A9B;
}

.container div {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background: #F6F8FF;
  flex-shrink: 0;
}

/* Style the elements within the .container divs */
.container div p {
  
  font-family: 'Space Mono', monospace;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.container div .number {
  color: #2B3442;
  font-family: 'Space Mono', monospace;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.grid-container div {
  display: flex;
  align-items: center;

}

/* Style the elements within the .grid-container divs */
.grid-container img {
  margin-right: 8px;
}

.grid-container p {
  color: #4B6A9B;
  font-family: 'Space Mono', monospace;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
}





</style>
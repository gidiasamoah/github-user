<script setup>
import axios from 'axios';
import ButtonComponent from '@/components/ButtonComponent.vue';

axios.get (`https://api.github.com/`).then((response) => { 
  console.log(response.data)
})

</script>

<template>
  <header>
    <p>devfinder</p>
    <img src="src/assets/dark.png" alt="darkmode">
  </header>

  <div>
  
  <div class="search-container">
      <input type="text" class="search-input" placeholder="Search GitHub username...">
      <ButtonComponent text="Search"  class="search-button" />
    </div>
  </div>

  <main>
    
     
    
    <div class="main-name">
        
      <img src="src/assets/bitmap.png" alt="picture" class="profile-picture">
      <p class="name">The Octocat</p>
      <p class="date">Joined 25 Jan 2011</p>


    </div>

    
   

    <div class="profile-main">

      <p class="username">@octocat</p>
      <p class="profile">This profile has no bio</p>

    </div>

  <div class="container">
    <div>
      <p>Repos</p>
      <p class="number">8</p>
    </div>

    <div>
     <p>Followers</p>
     <p class="number">8</p>
    </div>

    <div>
      <p>Following</p>
      <p class="number">8</p>
    </div>

  </div>


<div class="grid-container">
  
  <div>
    <img src="src/assets/location.png" alt="logo">
    <p>Accra</p>
  </div>

  <div>
    <img src="src/assets/url.png" alt="logo">
    <p>https://github.blog</p>
  </div>

  <div>
    <img src="src/assets/twitter.png" alt="logo">
    <p>Not available</p>
  </div>

  <div>
    <img src="src/assets/office.png" alt="logo">
    <p>@github</p>
  </div>

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
  display: flex;
  align-items: center;
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
  margin-top: 0;
  margin-left: 0; 
}

.search-input::placeholder {
  color: #4B6A9B;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  padding-top: 22px;
  padding-left: 80px;
}


.search-button{
  border: none;
  border-radius: 10px;
  background: #0079FF;
  width: 106px;
  height: 50px;
  flex-shrink: 0;
}


.search-input {
  color: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
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
  margin-bottom: 170px;
}


.main-name {
  padding-top: 48px;
  padding-left: 48px;
  display: flex;
  justify-content: space-between;
  padding-right: 48px;
  

}

.profile-picture {
    width: 117px; /* Adjust the size of the circle */
    height: 117px; /* Adjust the size of the circle */
    border-radius: 50%; /* Create a circle using border-radius */
    overflow: hidden; /* Hide any content that overflows the circle */
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
  display: flex; /* Change to flex container to arrange elements horizontally */
  flex-direction: column; /* Arrange elements vertically */
  gap: 20px; /* Add a 20px gap between username and profile */
  padding-left: 202px;
}

.profile-main p.username {
  color: #0079FF;
  font-family: 'Space Mono', monospace;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0; 
}

.profile-main p.profile {
  color: #4B6A9B;
  font-family: 'Space Mono', monospace;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 166.667% */
  opacity: 0.75;
  margin: 0; /* Remove default margin */
}

.container {
  display: flex; 
  gap: 100px;
  padding-left: 202px;
  padding-top: 32px;
 
}

.container div {
  display: flex; /* Arrange items within divs vertically */
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center items horizontally within each div */
  border-radius: 10px;
  background: #F6F8FF;
  flex-shrink: 0;
}

.container div p {
  color: #4B6A9B;
  font-family: 'Space Mono', monospace;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.container div p.number {
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
    grid-template-columns: repeat(2, 1fr); /* Two columns */
    
  }

  .grid-container div {
    display: flex;
    align-items: center;
    padding-left: 202px;
    padding-right: 51px;
  }

  .grid-container img {
    margin-right: 8px; /* Add spacing between the image and text */
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
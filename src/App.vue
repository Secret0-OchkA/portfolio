<script setup lang="ts">
import NavRouter from '~components/NavRouter.vue';
</script>

<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">

<div class="main-wrapper">
  <main>
    <div style="height: 100px;"></div>
    <div id="app" class="glass main-container">
      <NavRouter/>
      <router-view />
    </div>
  </main>
</div>

<video autoplay loop muted id="video-bg">
  <source src="./assets/background.mp4" type="video/mp4"/>
</video> 


</template>

<style scoped>
#video-bg {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%; 
  min-height: 100%;
  width: auto; 
  height: auto;
  z-index: -1000;
}

.main-wrapper{
    display: flex;
    justify-items: center;

}

.glass {
    background: rgba(177, 177, 177, 0.25);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(177, 177, 177, 0.25);
}

.main-container{
  height: 100vh;
  padding-left: 20px;
  padding-right: 20px;
}
</style>

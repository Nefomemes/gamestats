<template>
<div>
<script src="//cdn.jsdelivr.net/npm/eruda"></script>
<script>eruda.init();</script>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<div>
    <div id="things-container">

    	
    <div id="base-header">    
   
    <div id="menu-button">
    	<span class="material-icons">
menu
</span>
</div>

      <p id="title-header" class="verticallyAlign"><a href="/">BLThunderstorm</a></p>
    

  </div>

    <video loop="" autoplay="" muted="" disablepictureinpicture="" class="bg-video">
      <div><p>Ugh, seems the video is broken.</p></div>
    <source v-bind:src="video"/>
    </video>

   </div>
 
    <div id="template-container">
    <Nuxt/>
    </div>
      </div>
      

      

 </div>
  </div>
</template>
<script>
export default {
 data () {
 
 
   return { video: `/assets/videos/bf-${Math.floor(Math.random() * 4)}.webm`};
  }
}
</script>

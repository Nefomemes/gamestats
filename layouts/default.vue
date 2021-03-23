<template>
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
    <source src="/assets/webm/bf-1.webm">
    </video>

   </div>
 
    <div>
    <Nuxt/>
    </div>
      </div>
      

      


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script> 
<script>


  </script>
   <script src="/app.js">
   	
   </script>
 
  </div>
</template>
<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

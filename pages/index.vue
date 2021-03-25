<template>

  <div>
  
  <style>
  #service-name {
      font-family: "Bebas Neue" !important;
      font-size: 100px;
      
      line-height: 100px;
      margin-bottom: -1px;
     
    }

    #intro {
      position: relative;

    }



      #intro .title {
      position: absolute;
      left: 50%;
      top: 50%;
      font-family: Arial;
    color: white;
      transform: translate(-50%, -50%);
      
    }
    #intro .message {
      font-weight: 600;
    }

    #about {
      background-color: rgba(0, 0, 0, 0.4);
      min-height: 100vh;
      max-height: auto;
      width: 100vw;
      position: relative;
 
        padding-top: 100px;
        padding-bottom: 100px;
       color: white;
     
    }

    #features-container {
     display: flex;
       
        align-items: center;
    justify-content: center;
flex-wrap: wrap;
    }
    

    #about-content {
    	margin-left: 40px;
     
	}
    
    .features-title {
    	font-weight: bold;
    	display: flex;
    	align-items: center;
    	
    }
    
    .features {
    	display: flex;
    	font-size: 25px !important;
	width: calc(100% - 80px);
	margin-bottom: 40px;
	margin-top: 40px;
    }
    
    .features-content  {
    	display: flex;
    	flex-direction: column;
    margin-left: 5px;
    }
    
    .features-icon {
    	display: flex;
    	align-items: center;
    	height: 35px;
    	
    }
    
    
    
    .features-text {
    	font-size: 20px !important;
    }

     @media (orientation: landscape){
	 
	 
	    #forums-container {
		    flex-direction: row;
		    align-items: flex-start;
		
		    
	    }

	    #about .features {
		    width: 25%;
		    margin-right: 40px;
	    }

	    #about #forum-features {
		    width: 30% !important;
	    }

    }

  </style>
  
  <div></div>
  <div id="intro" class="box">

      
        
        <div class="title">
          <p id="service-name">BLThunderstorm</p>
            <p class="message">Unofficial stats tracking tool for Battlefield games, and other Battlelog games.</p>
          </div>
      
     </div>
     
        
        <div id="about" class="box">
         <div id="features-container">
<div class="features">
	
<div class="features-icon">
	<span class="material-icons">
web
</span>
</div>
<div class="features-content">
<div class="features-title">
It's runs in your browser	
</div>
<div class="features-text">
	Everything is done in your browser, from complicated things  like displaying forums to simple things like stuff. 
	</div>
        </div>
        </div>
	<div class="features" id="forum-features">
	
<div class="features-icon">
	<span class="material-icons">
forum
</span>
</div>
<div class="features-content">
<div class="features-title">
Forums, revived	
</div>
<div class="features-text">Comment, ask, or answer something on old threads that have been archived. Maybe you wanna ask about an a bug to an old thread, share things, or do stuff.
	</div>
        </div>
        </div>
	
	<div class="features">
	
<div class="features-icon">
	<span class="material-icons">
web
</span>
</div>
<div class="features-content">
<div class="features-title">
It's runs in your browser	
</div>
<div class="features-text">
	Everything is done in your browser. Less interactions with our server, more interactions with Battlelog. More privacy. 
	</div>
        </div>
        </div>
	<div class="features">
	
<div class="features-icon">
	<span class="material-icons">
web
</span>
</div>
<div class="features-content">
<div class="features-title">
It's runs in your browser	
</div>
<div class="features-text">
	Everything is done in your browser, from complicated things  like displaying forums to simple things like stuff. 
	</div>
        </div>
        </div>
	<div class="features" id="forum-features">
	
<div class="features-icon">
	<span class="material-icons">
forum
</span>
</div>
<div class="features-content">
<div class="features-title">
Forums, revived	
</div>
<div class="features-text">Comment, ask, or answer something on old threads that have been archived. Maybe you wanna ask about an a bug to an old thread, share things, or do stuff.
	</div>
        </div>
        </div>
	
	<div class="features">
	
<div class="features-icon">
	<span class="material-icons">
web
</span>
</div>
<div class="features-content">
<div class="features-title">
It's runs in your browser	
</div>
<div class="features-text">
	Everything is done in your browser. Less interactions with our server, more interactions with Battlelog. More privacy. 
	</div>
        </div>
        </div>

</div>



<link href="/assets/styles/home.css" rel="stylesheet"/>
  </div>
  </div>
  
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
m
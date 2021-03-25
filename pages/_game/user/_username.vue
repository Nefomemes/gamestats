<template>
<div>

<div v-if="user">
<div>
{{ user.name }}
</div>
</div>

<div v-if="error" id="error-page" >
<div id="box-error">
<h1>
{{ error.toString() }}
</h1>
<h2>
{{ error.stack }}
</h2>
<div>
</div>
</div>
</div>
</div>
</template>
<script>
import bljs from 'battlelog.js';

var client = bljs();

export default {

async asyncData({ params }){

try {
let gameclient = client.game(params.game);

let user = gameclient.users.fetch(params.username);

if(user){
this.$set(this, 'user', user);
}

} catch(error) {
console.error(error);
return { error };
}
}

}
</script>
<style>



#error-page h1 {
  font-size: 30px;
  font-weight: 600;
}


#error-page h2 {
font-size: 20px;
}
#box-error {
width: calc(100% - 80px);
text-align: center;
}

#error-page a {

color: white !important;
}



#error-page {
display: grid; place-items: center;
height: 100%;
color: white;
}

</style>

<template>
<div>

<div v-if="user" id="user-page">
<div id="user-wallpaper">
<p>
{{ user.username }}
</p>
<p> {{ user.userId }} </p>
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

let user = await gameclient.users.fetch(params.username);

if(user){
return { user, error: false };
}

} catch(error) {
console.error(error);
return { error, user: null };
}
}

}
</script>
<style>

#user-page {
position: relative;
height: 100%;
width: 100%;
}


#
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

#user-wallpaper {
width: calc(100% - 80px);
background-color: red;
height: 500px;

}

</style>

<template>
  <div id="app">
  <div style="padding: 30px;">
		<img class="logo" src="https://www.cargill.com/image/1432075835913/cargill-logo.png" alt="Cargill Logo">
	</div> 
  
	<v-navigation-drawer style="padding: 6px 10px 40px 1561px;background:#33373d;">
	 <v-toolbar>
	    <router-link v-if="loggedIn" to="/logout">Log out</router-link>
        <router-link v-if="!loggedIn" to="/login"><b>Log in |</b></router-link>
        <router-link to="/home"><b>Home |</b></router-link>
        <router-link to="/dashboard"><b>Dashboard </b></router-link>
	</v-toolbar>
    </v-navigation-drawer>
    <template v-if="$route.matched.length">
      <router-view></router-view>
    </template>
    <template v-else>
      <p>You are logged {{ loggedIn ? 'in' : 'out' }}</p>
    </template>
  </div>

</template>

<script>
  import auth from './auth'
  export default {
    data () {
      return {
        loggedIn: auth.loggedIn()
      }
    },
    created () {
      auth.onChange = loggedIn => {
        this.loggedIn = loggedIn
      }
    }
  }
</script>
<style>
  html, body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: #2c3e50;
  }

  #app {
    padding: 0 20px;
  }

  ul {
    line-height: 1.5em;
    padding-left: 1.5em;
  }

  a {
    color: #7f8c8d;
    text-decoration: none;
	text-align: center;
	pagination: centered;
  }

  a:hover {
    color: #4fc08d;
  }
  
</style>
<style>
 @import "../src/assets/css/bootstrap.css";
  
</style>

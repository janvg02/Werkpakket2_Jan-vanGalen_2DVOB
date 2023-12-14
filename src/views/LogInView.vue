<script>

export default {
  data(){
    return{
      LoginTitle:'Login',
      LoginButton:'Login',
      UserName:'Gebruikersnaam of e-mailadres',
      Password:'Wachtwoord',
      Loggedin: false
    }
  },
  methods: {
    submitForm() {
      this.LoginButton = "Log uit";
      this.Loggedin = true;
    },
    logout() {
      this.LoginButton = "Login";
      this.Loggedin = false;
    }
  }
}
</script>

<template>
  <div class="login-main">
    <div class="login-profile" v-if="!Loggedin">
      <form class="login-gegevens" v-on:submit.prevent="submitForm()">
        <div class="login-text">
          <h1 class="login-title">{{LoginTitle}}</h1>
          <label for="user-name">{{UserName}}</label>
          <input type="text" id="user-name" name="user-name" checked />
          <label for="password">{{Password}}</label>
          <input type="text" id="password" name="password" checked />
          <input class="submit" type="submit" :value=LoginButton>
        </div>
      </form>
    </div>
    <div class="LogOut" v-else>
      <h1>Welkom!</h1>
      <p>Je bent succesvol ingelogd!</p>
      <button v-on:click="logout()" type="button" class="button button-secondary">{{ LoginButton }}</button>
    </div>
  </div>
</template>

<style scoped>

</style>
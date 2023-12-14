<script>

export default {
  data(){
    return{
      LoginTitle:'Login',
      LoginButton:'Login',
      UserName:'Gebruikersnaam of e-mailadres',
      Password:'Wachtwoord',
      Loggedin: false,
      ConfirmationTitle: 'Geweldig, U bent ingelogd!',
      ConfirmationText: 'U kan nu producten aan u winkelmandje toevoegen'
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
      <h1 class="LoginTitle">{{ConfirmationTitle}}</h1>
      <p class="LoginText">{{ ConfirmationText }}</p>
      <button v-on:click="logout()" type="button" class="ButtonLogOut">{{ LoginButton }}</button>
    </div>
  </div>
</template>

<style scoped>

</style>
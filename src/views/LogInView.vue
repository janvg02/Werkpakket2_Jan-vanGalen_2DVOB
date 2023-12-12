<script>

export default {
  data(){
    return{
      LoginTitle:'Login',
      UserName:'Gebruikersnaam of e-mailadres',
      Password:'Wachtwoord',

    }
  }
}
</script>

<template>
  <div class="login-main">
    <div class="login-profile">
      <form class="login-gegevens">
        <div class="login-text">
          <h1 class="login-title">{{LoginTitle}}</h1>
          <label for="user-name">{{UserName}}</label>
          <input type="text" id="user-name" name="user-name" checked />
          <label for="password">{{Password}}</label>
          <input type="text" id="password" name="password" checked />
          <input class="submit" type="submit" value="Inloggen">
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>
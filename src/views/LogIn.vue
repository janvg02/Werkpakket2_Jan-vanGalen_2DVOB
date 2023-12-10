<script>
import navComponent from "@/components/NavComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {navComponent, FooterComponent},
}
</script>

<template>
  <navComponent/>
  <main class="login-main">
    <div class="login-profile">
      <form class="login-gegevens">
        <div class="login-text">
          <h1 class="login-title">Login</h1>
          <label for="user-name">Gebruikersnaam of e-mailadres</label>
          <input type="text" id="user-name" name="user-name" checked />
          <label for="password">Wachtwoord</label>
          <input type="text" id="password" name="password" checked />
          <input class="submit" type="submit" value="Inloggen">
          <h1 class="login-title">Wachtwoord vergeten?</h1>
          <label for="e-mail-confirm">E-mail</label>
          <input type="text" id="e-mail-confirm" name="e-mail-confirm" checked />
          <input class="submit" type="submit" value="Verzenden">
        </div>
      </form>
    </div>
  </main>
  <FooterComponent/>
</template>

<style scoped>

</style>
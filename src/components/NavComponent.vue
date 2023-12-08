<script>
export default {
  data() {
    return {

      navItems: [
        {
          path: "/",
          name:"Home"
        },
        {
          path: "/",
          name:"Products"
        },
        {
          path: "/",
          name:"Log in"
        },
        {
          path: "/",
          name:"Cart"
        },
      ]
    }
  }
}
</script>

<template>
  <nav class="navbar">
      <div class="navbar-navigation-right">
        <ul class="nav-list">
          <li v-for="navItem in navItems"
              class="nav-list-item">
            <a href="#" class="nav-list-link">{{ navItem.name }}</a>
          </li>
        </ul>
      </div>
  </nav>
</template>

<style>
.navbar{
  padding: 2%;
  font-family: "Josefin Sans", sans-serif;
  .nav-list{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    .nav-list-item{
      list-style-type: none;
      .nav-list-link{
        font-size: large;
        color: #3b83bd;
        text-decoration: none;
        padding: 10px;
        transition: all .4s ease-in-out;

      }
      .nav-list-link:hover{
        color: #2c3e50;
        background-color: #3b83bd;
        border-radius: 5px;
      }
    }

  }
}
</style>
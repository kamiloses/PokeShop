<script setup>
let loggedIn = false;


</script>

<template>
  <header>
    <img src="/favicon.ico" alt="logo">
    <nav>
      <ul class="left">
        <li><a href="#">Home</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <ul class="right">
        <template v-if="!loggedIn">
          <li><a href="#">Sign In</a></li>
          <li><a href="#">Sign Up</a></li>
        </template>

        <template v-else>
          <li>"abc@gmail.com"</li>
          <li>Sign Out</li>
        </template>
      </ul>
    </nav>
  </header>
</template>


<style scoped>
header {
  width: 100%;
  display: flex;
  background-color: darkslategrey;
  align-items: center;
  color: white;
  padding: 1.3rem;
}
nav{
  display: flex;
  flex: 1;  /*Todo Ogarnij*/
  justify-content: space-between;
}
nav ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap:2rem; /* todo ogarnij */

}

a{color: white;
  font-size: 1.2rem;
text-decoration: none;
}

nav ul.left{
margin-left: 2rem;
}

nav ul.right {
margin-right: 3rem;
}

</style>

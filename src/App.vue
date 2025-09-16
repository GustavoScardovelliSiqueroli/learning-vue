<template>
  <nav>
    <RouterLink to="/"> HOME </RouterLink>
    <RouterLink to="/counter"> COUNTER </RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
<style>
html,
body,
#app,
main {
  height: 100%;
  min-height: 100vh;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: sans-serif;
  line-height: 1.5;
  color: #333;
  background-color: #fff;
}
ul,
ol {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}
body {
  overflow-x: hidden;
}
</style>

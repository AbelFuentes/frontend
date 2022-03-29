<template>
  <div>
    <div class="header">
      <router-link to="/">
        <img src="./assets/logo.png" alt="Pasteleria" width="200">
      </router-link>
      <nav>
        <router-link to="/administrator" v-if="$store.state.permissions.can_view_administrator">Administrador</router-link>
        <router-link to="/request">Pedido</router-link>
        <router-link to="/permissions">Configuración</router-link>
      </nav>
    </div>
    <router-view />
    <div class="footer">
      <nav>
        <router-link to="/about">Acerca de nosotros</router-link>
      </nav>
      <ul>
        <li>
          <a href="https://github.com/AbelFuentes" target="_blank">
            <i class="fab fa-github fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/abel-fuentes/" target="_blank">
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
html, body {
  margin: 0;
  width: 100%;
  height: 100%;
  position: relative,
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  width: 100%;
  display: inline-flex;
  background-color: #343A40;
  justify-content: space-between;
}

.footer {
  left: 0;
  bottom: 0;
  width: 100%;
  position: absolute;
  display: inline-flex;
  background-color: #343A40;
  justify-content: space-between;
}

.footer ul {
  margin: 24px;
  display: inline-flex;
  list-style-type: none;
}

.footer ul li {
  padding-left: 8px;
}

.footer ul li i {
  color: white;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #FFFFFF;
  text-decoration: none;
  padding-left: 8px;
}

nav a.router-link-exact-active {
  color: #42b983;
  text-decoration: underline;
}
</style>

<template>
  <div id="app">
    <navigation/>
    <masthead/>
    <about/>
    <projects/>
    <contact/>
    <Footer/>
  </div>
</template>

<script>
import navigation from './components/navigation.vue'
import masthead from './components/masthead.vue'
import about from './components/about.vue'
import projects from './components/projects.vue'
import contact from './components/contact.vue'
import Footer from './components/footer.vue'

export default {
  components: {
    navigation,
    masthead,
    about,
    projects,
    contact,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Muli', 'Helvetica', 'Arial', 'sans-serif';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  color: #97b5da;
  -webkit-transition: all .35s;
  transition: all .35s;
}

a:hover, a:focus {
  color: #97b5da;
}

hr {
  max-width: 100px;
  margin: 25px auto 0;
  border-width: 1px;
  border-color: rgba(34, 34, 34, 0.1);
}

hr.light {
  border-color: white;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';
  font-weight: 200;
  letter-spacing: 1px;
}

p {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
}

p.BS {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
}

section {
  padding: 100px 0;
  background-color: #fff;
}

section h2 {
  font-size: 50px;
}

.bg-primary {
    background-color: #191925 !important;
}

</style>

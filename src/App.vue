<template>
   <div>
      <HomePage/>
   </div>
</template>

<script>
import HomePage from "@/Page/Home/Home.vue";

export default {
   name: 'App',
   components: {
      HomePage,
   },

}
</script>

<style>
@import "@/assets/Fonts/font.css";

body {
   font-family: 'Mabry Pro', sans-serif;
}

* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

a {
   text-decoration: none;
}

ul li {
   list-style-type: none;
}

.container {
   width: 100%;
   max-width: 1720px;
   margin: auto;
   position: relative;
}

.flex{
   display: flex;
   align-items: center;
}
.flex-item {
   flex-grow: 2;
}

.btn-section::-webkit-scrollbar {
   width: 0;
}
::-webkit-scrollbar {
   width: 0;
}


</style>

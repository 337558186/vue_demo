<template>
  <div id="app">
    <router-view/>
  </div>
</template>




<script>
import jwt from 'jwt-decode';
export default {
    name: "App",
    comments:{},
    created(){   /*在根组件进行判断，否则刷新就没了*/
        if (localStorage.eleToken){
            const decoded = jwt(localStorage.eleToken);
            /*存储至vuex*/
            this.$store.dispatch("setAuthenticated",!this.isEmpty(decoded))
            this.$store.dispatch("setUser",decoded)
        }
    },
    methods: {
        isEmpty(value){
            return(
                value ===undefined || value ===null ||
                (typeof  value === "object" && Object.keys(value).length ===0) ||
                (typeof value ==="string" && value.trim().length ===0)
            );
        }
    }
};
</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>

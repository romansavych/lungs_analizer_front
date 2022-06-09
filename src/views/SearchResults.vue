<template>
  <div class="about">
    <h1>Search Results</h1>
    <div class="search-results-wrapper">
    <v-text-field v-model="searchValue" class="search-results-input" placeholder="Enter your email"/>
      <v-btn width="100px" @click="getAllResultsByEmail">
        Search
      </v-btn>
      <h2 v-if="results && results.length > 0 ">
        Results
      </h2>
      <div class="results-wrapper" v-if="results && results.length > 0 ">
      

      <div class="result" v-for="(res , i) in results" :key="i">
        <div class="result-info">
          <div class="res-info-title">
            Email
          </div>
          <div class="res-info-value">
          {{res.email}}
          </div>
        </div>
        <div class="result-info">
          <div class="res-info-title">
            Gender
          </div>
          <div class="res-info-value">
          {{res.gender}}
          </div>
        </div>
        <div class="result-info">
          <div class="res-info-title">
            Age
          </div>
          <div class="res-info-value">
          {{res.age}}
          </div>
        </div>
        <div class="result-info">
          <div class="res-info-title">
            Result
          </div>
          <div class="res-info-value">
          {{res.result}}
          </div>
        </div>
      </div>
      </div>
      
    </div>
  </div>
</template>
<script>
import {getAllByEmail} from "@/services/api/analizeFile.js";
export default {
  name:"SearchResults",
  data:function(){
    return{
      searchValue:"",
      results:[]
    }
  },
  methods:{
    async getAllResultsByEmail(){
        const formData = new FormData()
      formData.append('email' ,this.searchValue)
      const res =   await getAllByEmail(formData)
      this.results = res;
      console.log('res' , res);
    }
  }
}
</script>

<style scoped lang="scss">
.search-results-wrapper{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.search-results-input{
  max-width: 800px;
  width: 800px;
}
.results-wrapper{
  display:flex;
  flex-direction: column;
  row-gap:5px;
padding-top: 20px;
}
.result-info{
  display:flex;
  width: 100%;
    justify-content: space-between;
}
.result{
  display: flex;
    flex-direction: column;
    row-gap: 8px;
    width: 300px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
    padding: 10px;
}
.res-info-title{
  font-weight:600;
}
</style>

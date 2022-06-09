<template>
<div class="file-input-page-wrapper">
<div class="file-input-wrapper">
    <v-text-field v-model="form.email" label="Email"/>
    <v-text-field v-model="form.age" label="Age"/>
    <v-text-field v-model="form.gender" label="Gender"/>
   Upload your sound recording from the lungs

  <v-file-input
    accept="audio/wav"
     ref="fileupload"
    @change="onUploadFile"
  ></v-file-input>
  <v-btn @click="getResult">
      Get result
  </v-btn>
</div>
<div v-if="result" class="result">
    <h2>
        Result:
    </h2>
    <div class="result-text">
    {{result}}

    </div>
</div>
</div>

</template>
<script>
import {getAnalizingResult , getAll} from "@/services/api/analizeFile/"
export default {
    name:"FileInput",
    data:function(){
        return{
            result:null,
            form:{
                email:null,
                file:null,
                age:null,
                gender:null,
            }
        }
    },

    async created(){
        const res = await getAll()
        console.log(' all res' , res)
    
    },
    methods:{
        async onUploadFile(file){
            this.result = null;

            this.form.file = file;
            
        },
        async getResult(){
             const formData = new FormData()
            formData.append('file' , this.form.file)
            formData.append('email' , this.form.email)
            formData.append('age' , this.form.age)
            formData.append('gender' , this.form.gender)
            const res = await getAnalizingResult(formData)
            console.log(res);
            this.result = res.result;
            this.$refs.fileupload.value=null
            this.form = {
                 email:null,
                file:null,
                age:null,
                gender:null,
            }

            
        }
    }
    
}
</script>
<style scoped lang="scss">
.file-input-wrapper{
    width: 500px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding:20px;
}
.file-input-page-wrapper{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    margin-top: 30px;
}
.result{
margin-top: 50px;
}
.result-text{
    margin-top: 10px;
    font-size:18px
}
</style>

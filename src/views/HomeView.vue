<template>
  <div class="home">
    <FileInput/>  
  </div>
</template>

<script>
// @ is an alias to /src
import FileInput from "@/components/FileInput.vue"
export default {
  name: 'HomeView',
  components: {
    FileInput
  }
}
</script>

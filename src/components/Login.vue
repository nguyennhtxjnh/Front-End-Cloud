<template>

    <v-container>
      <v-layout row wrap>
        <v-spacer/>
        <v-flex md7 xs 10>
          <v-toolbar dark style="background-color: #68CD86">
            <v-toolbar-title>Login</v-toolbar-title>
            <v-spacer></v-spacer>

          </v-toolbar>
          <v-form style="color: #42b983; border: #68CD86 solid"  class="pa-3" dark
          >

            <v-text-field
              v-model="info.user"
              :counter="10"
              label="Username"
              required
            ></v-text-field>

            <v-text-field
              v-model="info.pass"
              type="password"
              label="password"
              required
            ></v-text-field>


            <v-btn
              dark
              style="background-color: #42b983"
              @click="submit"
            >
              Submit
            </v-btn>
          </v-form>
        </v-flex>

        <v-spacer/>
      </v-layout>



    </v-container>

</template>

<script>
  import Axios from 'axios'
    export default {
        name: "Login",
      data: () => {return {
        info: {
          user:'',
          pass:''
        }
      }},

      methods: {
       submit(){
         console.log(this.info)
         const config = {
           method: 'GET',
           url: 'https://cloudprojectcnt.azurewebsites.net/api/Default/getAcc',
           data:  {
             user: this.info.user,
             pass: this.info.pass,
           },
           headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
           }
         }
         Axios(config)
           .then(response => {
            console.log(response)
           })
           .catch(error => {
           console.log(error.response)
         });
         if(this.info.user == "admin"&&this.info.pass == "admin"){

           this.$notify({
             group: 'foo',
             type: 'success',
             title: 'Thành công',
             text: 'Đăng nhập thành công!'
           })
           this.$router.push('/manage');
         }else {
           this.$notify({
             group: 'foo',
             type: 'error',
             title: 'Lỗi',
             text: 'Đăng nhập thất bại!'
           })
         }
       }
      }
    }
  /* eslint-disable */
</script>

<style scoped>

</style>

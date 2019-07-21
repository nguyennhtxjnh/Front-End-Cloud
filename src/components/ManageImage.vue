<template>
  <v-container>
    <v-layout row wrap>
      <v-spacer/>
      <v-flex md3>
        <h1 style="font-family: 'Times New Roman'"> Manage Image</h1>
      </v-flex>
      <v-spacer/>
    </v-layout>
    <v-layout row wrap>
      <v-spacer/>
      <v-flex md3 xs12>
        <img :src="imageUrl" id="imageAvatar" height="200" width="200" v-if="imageUrl" @click='pickFile'/>
        <v-text-field label="choose image" @click='pickFile' v-model='imageName'
        ></v-text-field>
        <input
          type="file"
          style="display: none"
          ref="image"
          accept="image/*"
          @change="onFilePicked"
        >
        <v-btn dark style="background-color: #68CD86" @click="addImage"> Add Image</v-btn>

      </v-flex>
      <v-spacer/>
    </v-layout>
    <v-layout row wrap>
      <v-spacer/>
      <v-flex md3 xs12 v-for="(img, index) in listImage" :key="index">
        <v-img v-bind:src="img" style="width: 200px; height: 200px"></v-img>
        <span>Ảnh {{index}}</span>
      </v-flex>
      <v-spacer/>
    </v-layout>
  </v-container>

</template>

<script>
  import Axios from 'axios'
  export default {
    name: "ManageImage",
    data: () => {return {
      imageName: '',
      imageFile: '',
      imageUrl: require('@/assets/logo.png'),
      listBlock: [],
      listImage: [],
      publicKey: 14,

    }},
    methods: {
      Decryption(data, privateKey) {
        var numEncryption = this.EncryptionNumber(privateKey);
        var strEncryption = this.EncryptionString(data, numEncryption);
        return strEncryption;
      },
      EncryptionNumber(privateKey) {
        return ((privateKey * 5) % 12);
      },
      EncryptionString(data, numEncryption) {
        var m = "";
        data = data.toString();
        for (var i = 0; i < data.length; i++) {
          var a = String.fromCharCode((data[i].charCodeAt(0) - numEncryption));
          m = m + a;
        }
        return m;
      },
      pickFile() {
        this.$refs.image.click()
      },
      onFilePicked(e) {
        const files = e.target.files
        if (files[0] !== undefined) {
          this.imageName = files[0].name
          if (this.imageName.lastIndexOf('.') <= 0) {
            return
          }
          const fr = new FileReader()
          fr.readAsDataURL(files[0])
          fr.addEventListener('load', () => {
            this.imageUrl = fr.result
            this.imageFile = files[0] // this is an image file that can be sent to server...
          })
        } else {
          this.imageName = ''
          this.imageFile = ''
          this.imageUrl = require('@/assets/logo.png')
        }

      },
      addImage() {
        let formData = new FormData();
        formData.append('file', this.imageFile);
        console.log(formData)

        // Axios
        //   .post('https://cloudprojectcnt.azurewebsites.net/api/Default/SendFile', formData)
        //   .then(response => {
        //     if (response === true) {
        //
        //       Axios
        //         .get('https://cloudprojectcnt.azurewebsites.net/api/Default')
        //         .then(response => {
        //           this.listBlock = response.data;
        //           for( var i = 1; i < this.listBlock.length; i++){
        //             var a = this.Decryption(this.listBlock[i].data,this.publicKey);
        //             this.listImage.push(a);
        //
        //           }
        //           console.log(this.listImage);
        //         })
        //     }
        //   })
        Axios
                .get('https://cloudprojectcnt.azurewebsites.net/api/Default')
                .then(response => {
                  this.listImage = [];
                  this.listBlock = response.data;
                  for( var i = 1; i < this.listBlock.length; i++){
                    var a = this.Decryption(this.listBlock[i].data,this.publicKey);
                    this.listImage.push(a);

                  }
                  console.log(this.listImage);
                })
      }
    },
    mounted() {

      Axios
        .get('https://cloudprojectcnt.azurewebsites.net/api/Default')
        .then(response => {
          this.listBlock = response.data;
          console.log(this.Decryption(this.listBlock[1].data,this.publicKey));
          for( var i = 1; i < this.listBlock.length; i++){
            var a = this.Decryption(this.listBlock[i].data,this.publicKey);
            console.log(a);
            this.listImage.push(a);
          }
          console.log(this.listImage);
        })
      Axios.get('https://cloudprojectcnt.azurewebsites.net/api/CheckBlock',this.listBlock, {headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }})
        .then(response => {
          console.log(response)
        })

    }
  }
</script>

<style scoped>

</style>

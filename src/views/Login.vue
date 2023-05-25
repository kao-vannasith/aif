<template>
    <v-container>
  <v-sheet height="200" width="600" class="mx-auto">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="email"
        label="email"
        :rules="emailRules"
      ></v-text-field>

      <v-text-field
        v-model="password"
        label="password"
        :rules="passwordRules"
      ></v-text-field>

      <v-btn @click="login" type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</v-container>
  </template>
  
  <script>
  export default {
    name:'HomeView',
    data: () => ({
      email: 'kao@gmail.com',
      emailRules: [
        value => {
          if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

              return 'Must be a valid e-mail.'
        },
      ],
      password: '123456',
      passwordRules: [
      value => {
          if (value?.length > 3) return true

          return 'password 4'
        },
      ],
    }),
    methods:{
     login(){
      this.$axios.post('/auth/login',{
        email:this.email,
        password:this.password
        }).then((response) => {
          alert('ເຂົ້າສູ່ລະບົບສຳເລັດ')
          localStorage.setItem('Token', response.data.authentication.sessionToken)
          this. $router.push({ name: 'home' })
        },(error)=>{
        this.loading = true
        if (error) {
          console.log(error)
          alert('ກະລຸນາກວດສອບຄືນ')
        }
      })
        
    }
    }
  }
</script>
  
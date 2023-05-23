<template>
    <v-container>
  <v-sheet height="200" width="600" class="mx-auto">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="user"
        label="First name"
        :rules="userRules"
      ></v-text-field>

      <v-text-field
        v-model="password"
        label="Last name"
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
      user: 'test',
      userRules: [
        value => {
          if (value?.length > 3) return true

          return 'user 4.'
        },
      ],
      password: '1234',
      passwordRules: [
      value => {
          if (value?.length > 3) return true

          return 'password 4'
        },
      ],
    }),
    methods:{
     login(){
        if(this.user == 'test' &&this.password == '1234'){
            alert('ເຂົ້າສູ່ລະບົບສຳເລັດ')
            localStorage.setItem('Token','login')
            this. $router.push({ name: 'home' })
        }else{
        alert('ກະລຸນາກວດສອບຄືນ')
        }
        
        
    }
    }
  }
</script>
  
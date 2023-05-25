
<template>
<v-container>
<v-card
  class="mx-auto"
  title="Todo list"
>
<v-container>  
  <hr>
  <v-row class="mt-13">
  
  <v-col v-for="(i, index) in historyList" :key="index" cols="12" md="6" lg="3">
  <v-card
    :class="{outlined: i.status ==='outlined'}"
    class="mx-auto "
    max-width="300"
    :variant=i.status

  >
    <v-card-item>
      <div>
      
        <div class="text-caption">{{ i.detail }}</div>
      </div>
    </v-card-item>

    <v-card-actions>
      <v-btn @click="dialog = true, $router.push({ query: { id: i._id, content: i.detail } })" variant="outlined">
        Button
      </v-btn>
    </v-card-actions>
  </v-card>
</v-col>

</v-row>
<v-pagination prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right" class="my-4" v-model="page" :length="pages" @click="updatePage(page)"></v-pagination>
</v-container>

</v-card>
<div class="text-center">
    <v-dialog
      v-model="dialog"
      width="auto"
    >

      <v-card width="300" class="mx-auto">
        <v-card-text >

      <v-text-field
        v-model="detail"
        :rules="rules"
        label="detail"
      ></v-text-field>
      <v-btn type="submit" @click="updateCard" block class="mt-2">Submit</v-btn>

          
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false, $router.push({ query: {  } })">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</div>
</v-container>  
</template>
<script>


export default {
  name: 'App',
  data: () => ({

    dialog: false,
    detail:'',
    page: 1,
			pageSize: 8,
      listCount: 0,
			historyList: [],
    card:[],
    rules: [
        value => {
          if (value) return true

          return 'You must enter a first name.'
        },
      ],

    }),
    created() {
     // 
      this.get()
    
	},
  methods: {
    get(){
      this.$axios.get('/product')
        .then((response) => {
          this.card = response.data
          this.initPage() 
        },(error)=>{
        if (error) {
          console.log(error.response.status)
          if(error.response.status == '403'){
            this.$router.push({ name: 'Login' })
            localStorage.removeItem('Token')
          }
        }
      })
    },
    updateCard(){
      this.$axios.put('/product/'+this.$route.query.id,{
        detail:this.detail
        })
        .then(() => {
          this.dialog = false
          this.get()
        },(error)=>{
        if (error) {
          console.log(error.response.status)
          if(error.response.status == '403'){
            this.$router.push({ name: 'Login' })
            localStorage.removeItem('Token')
          }
        }
      })
    },
		initPage() {
			
			this.listCount = this.card.length;
			if (this.listCount < this.pageSize) {
				this.historyList = this.list;
			} else {
				this.historyList = this.card.slice(0, this.pageSize);
			}
		},
		updatePage(pageIndex) {
			
			let start = (pageIndex - 1) * this.pageSize;
			let end = pageIndex * this.pageSize;
			this.historyList = this.card.slice(start, end);
			this.page = pageIndex;
		}
	},
  watch:{
  "$route.query.content":{
    handler() {
        this.detail = this.$route.query.content;
        //  }
      },
      immediate: true,
  }
  },
	computed: {
		pages() {
			
			if (this.pageSize == null || this.listCount == null) return 0;
			return Math.ceil(this.listCount / this.pageSize);
		}
	}

}
</script>
<style scoped>
.outlined{
color: green;
}
</style>
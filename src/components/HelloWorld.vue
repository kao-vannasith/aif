
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
      <v-btn @click="dialog = true, $router.push({ query: { content: i.detail } })" variant="outlined">
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

      <v-card>
        <v-card-text>
          {{ $route.query.content }}
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
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
    page: 1,
			pageSize: 8,
      listCount: 0,
			historyList: [],
    card:[
    {detail:"Greyhound divisely hello coldly 1", status:'tonal'},
    {detail:"Greyhound divisely hello coldly 2", status:'outlined'},
    {detail:"Greyhound divisely hello coldly 3", status:'tonal'},
    {detail:"Greyhound divisely hello coldly 4", status:'outlined'},
    {detail:"Greyhound divisely hello coldly 5", status:'tonal'},
    {detail:"Greyhound divisely hello coldly 6", status:'tonal'},
    {detail:"Greyhound divisely hello coldly 7", status:'outlined'},
    {detail:"Greyhound divisely hello coldly 1", status:'tonal'},
    {detail:"Greyhound divisely hello coldly 2", status:'outlined'},
    {detail:"Greyhound divisely hello coldly 3", status:'tonal'},
    {detail:"Greyhound divisely hello coldly 4", status:'outlined'},
    {detail:"Greyhound divisely hello coldly 5", status:'tonal'},
    {detail:"Greyhound divisely hello coldly 6", status:'tonal'},
    {detail:"Greyhound divisely hello coldly 7", status:'outlined'},
    {detail:"Greyhound divisely hello coldly 1", status:'tonal'},
    {detail:"Greyhound divisely hello coldly 2", status:'outlined'},
    {detail:"Greyhound divisely hello coldly 3", status:'tonal'},
    {detail:"Greyhound divisely hello coldly 4", status:'outlined'},
    {detail:"Greyhound divisely hello coldly 5", status:'tonal'},
    {detail:"Greyhound divisely hello coldly 6", status:'tonal'},
    {detail:"Greyhound divisely hello coldly 7", status:'outlined'},
    {detail:"Greyhound divisely hello coldly 1", status:'tonal'},
    {detail:"Greyhound divisely hello coldly 2", status:'outlined'},
    {detail:"Greyhound divisely hello coldly 3", status:'tonal'},
    {detail:"Greyhound divisely hello coldly 4", status:'outlined'},
    {detail:"Greyhound divisely hello coldly 5", status:'tonal'},
    {detail:"Greyhound divisely hello coldly 6", status:'tonal'},
    {detail:"Greyhound divisely hello coldly 7", status:'outlined'},
    {detail:"Greyhound divisely hello coldly 1", status:'tonal'},
    {detail:"Greyhound divisely hello coldly 2", status:'outlined'},
    {detail:"Greyhound divisely hello coldly 3", status:'tonal'},
    {detail:"Greyhound divisely hello coldly 4", status:'outlined'},
    {detail:"Greyhound divisely hello coldly 5", status:'tonal'},
    {detail:"Greyhound divisely hello coldly 6", status:'tonal'},
    {detail:"Greyhound divisely hello coldly 7", status:'outlined'},
  ]
    }),
    created() {
		
		this.initPage();
		
	},
  methods: {
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
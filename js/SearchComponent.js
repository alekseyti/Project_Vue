Vue.component('search', {
    data () {
        return {
          userSearch: ''
        }
      },
      template: 
      `
        <form action="#" class="search-form"  @submit.prevent="$parent.filter(userSearch)">
            <input type="text" id="text" class="search-field" v-model='userSearch'>                          
            <button class="btn-search" id="submit" type="submit">
                <img src="img/search.png" alt="">
            </button>
        </form>

      `
  })
  
  
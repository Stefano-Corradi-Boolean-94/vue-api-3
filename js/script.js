const {createApp} = Vue;


createApp({

  data(){

    return{
      apiUrl:'https://flynn.boolean.careers/exercises/api/random/int',
      playerA: 0,
      playerB: 0
    }

  },

  methods: {
    getApi(){

      axios.get(this.apiUrl)
      .then(result => {
        console.log(result.data);
        // mi serve "response" di data
        this.playerA = result.data.response
      })

      axios.get(this.apiUrl)
      .then(result => {
        console.log(result.data);
        // mi serve "response" di data
        this.playerB = result.data.response
      })

    }
  },

  mounted(){

    this.getApi();


  }

}).mount('#app')
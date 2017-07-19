new Vue({
    el: '#vue-app',
    data:{
        name:'Shaun',
        job: 'Ninja',
        website: 'https://www.thenetninja.co.uk/',
        websiteTag: '<a href="https://www.thenetninja.co.uk/"> The Ninja Web Site </a>'
    },
    methods:{
        greet: function(time){
            return "Good " + time + " " + this.name;
        }
    },
});
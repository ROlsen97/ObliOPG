Vue.createApp({
    data(){
        return{
           word:'',
           words:[]
        }
    },
    methods:{
        addWord: function(){
            var original = this.word;
            var lower = original.toLowerCase();
            var upper = original.toUpperCase();
            var capitalized = original.charAt(0).toUpperCase() + original.slice(1);
            var endcapitalized = original.slice(0, -1) + original.charAt(original.length - 1).toUpperCase();

            var splitword = original.split("");
            var reversed = splitword.reverse();
            var join = reversed.join("");

            this.words.push({
                original: original,
                lower: lower,
                upper: upper,
                capitalized:capitalized,
                endcapitalized:endcapitalized,
                join:join
            });
            this.word = '';
        }        
    }
}).mount("#app")

new Vue({
    el:"#Vue-content",

    data:{
        vColor:'',
        styles:{
            backgroundColor: this.vColor
        }
    },

    methods:{
        changeColor:function(){
            return this.styles.backgroundColor = this.vColor
        }
    }

    
})
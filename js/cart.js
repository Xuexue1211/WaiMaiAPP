new Vue({
	el:"#app",
	data:{
		productList:[]
	},
	filters:{

	},
	mounted:function(){
		this.cartView();
	},
	methods:{
		cartView:function(){
			// var url="data/cartData.json";
			var self=this;
			this.$http.get("data/cartData.json").then(function(res){
				
//				this.productList=res.list;
//				 console.log(res);
			var productList=res.list;
			console.log(res);
			});
		}
	}
});
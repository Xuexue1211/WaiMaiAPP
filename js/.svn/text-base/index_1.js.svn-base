//mui.plusReady(function() {
//	getCarList();
//});
mui.init({
	pullRefresh: {
		container: "#refreshContainer",
		down: {
			contentdown: "下拉刷新",
			contentover: "松开刷新",
			contentrefresh: "正在刷新...",
			callback: pulldownRefresh
		},
		up: {
			contentrefresh: "正在加载...", //可选，正在加载状态时，上拉加载控件上显示的标题内容
			contentnomore: '没有更多数据了', //可选，请求完毕若没有更多数据时显示的提醒内容；
			callback: pullupRefresh //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
		}
	}
})
//下拉刷新
function pulldownRefresh() {
	setTimeout(function() {
		mui("#refreshContainer").pullRefresh().endPulldownToRefresh();
	}, 1000)
}
//		//上拉加载 
function pullupRefresh() {
	setTimeout(function() {
		mui("#refreshContainer").pullRefresh().endPullupToRefresh();
	}, 900)
}

//获取菜单列表
//function getCarList() {
//	mui.ajax("./data/caidan.json", {
//			data: {},
//			dataType: 'json', //服务器返回json格式数据
//			type: 'post', //HTTP请求类型
//			timeout: 10000, //超时时间设置为10秒；
//			success: function(data) {
//				var str = "";
//				for(i = 0; i < data.list.length; i++) {
//					var table = document.querySelector(".mui-scroll");
//					var Li = document.createElement('li');
//					Li.className = "mui-table-view mui-table-view-chevron";
//					str += "<li class='mui-table-view-cell mui-media'>";
//					str += "<img class='mui-media-object mui-pull-left'  src='" + data.list[i].imgUrl + "'/>";
//					//alert(data.list[i].imgUrl)
//					str += "<div class='mui-media-body' id='List'>";
//					str += "<span id='caiTitle'>"+data.list[i].name+"</span>"; 
//					str += "<a href='javascript:;' id='cai' title=' data.list[i].name '>";
//					str += "来一份";
//					str += "</a>";
//					str += "<p class='mui-ellipsis'>" + data.list[i].jieshao + "</p>";
//					str += "<p>&yen;<span  id='price'>"+data.list[i].price+'</span>'+'元'+'</p>';
//					str += "</div>";
//					str += "</li>";
//				}
//				Li.innerHTML = str;
//				table.appendChild(Li, table.lastChild);
//			}
//		})
//}
//遍历商家列表节点，添加点击事件
//	var caiDanList = document.getElementsByClassName("mui-table-view-cell");
//	var caiValue = "";
//	for(var i = 0; i < caiDanList.length; i++) {
//		caiDanList[i].addEventListener('tap',function() {
//			caiValue = this.getAttribute("caiTitle");
////			caiValue = document.getElementById("caiTitle").value;
//			alert(caiValue);
//		})
//
//	}
//}
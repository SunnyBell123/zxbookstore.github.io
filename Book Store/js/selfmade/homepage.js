
            // 搜索框提示
			function alertSearch(){
				alert("你不可能搜得到！因为我没有实现这个功能！！！");
				location.href = "test.html";
			}

//          book对象构造方法
			function Book(name,author,price,summary){
				this.name = name;
				this.author = author;
				this.price = price;
				this.summary = summary;
			}
			
			// 简介信息设置
			function summaryClicked(event){
				// 获取信息
				var parent = event.parentNode;
				//获取该书籍的所有子节点
				var childs = parent.childNodes;
				
				// 陈列表中的数据
				var name = childs[3].textContent;
				var author = childs[6].textContent;
				var price = childs[8].textContent;
				
				// 获取提示面板所有要修改的结点信息
				var grandDiv = document.getElementById("panel_info_content");
				var children = grandDiv.childNodes;
				
				var nameDiv = children[1];
				var authorDiv = children[3];
				var priceDiv = children[5];
				
				var summaryDiv = children[9];
				
				// 设置结点数据:替换各个节点
				var divReplace = document.createElement("div");
				divReplace.className = "panel-heading";
				// var textNode;
				
				// 名字替换
				divReplace.innerText = name;
				grandDiv.replaceChild(divReplace,nameDiv);
				
				// 作者替换
				var divReplace = document.createElement("div");
				divReplace.className = "panel-heading";
				divReplace.innerText = author;
				grandDiv.replaceChild(divReplace,authorDiv);
				
				// 价格替换
				var divReplace = document.createElement("div");
				divReplace.className = "panel-heading";
				divReplace.innerText = price;
				grandDiv.replaceChild(divReplace,priceDiv);
				
		
				// 简介文本读取
				/* var divReplace = document.createElement("div");
				divReplace.className = "panel-body";
				divReplace.innerText = "没有简介！";
				grandDiv.replaceChild(divReplace,summaryDiv); */
				
				syalert.syopen('alert');
			}
			
			
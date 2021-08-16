var map_searchPath, layerDays, layerNights,btt=false;
var markerss,vectors;
var vectors_db,markers_rsd,markersdb;
//巡查路线的地图
////--------------------------------
function initProwledMap(){
	map_searchPath = new SuperMap.Map("prowled-map",{controls: [  
      new SuperMap.Control.Navigation({  
          dragPanOptions: {  
              enableKinetic: true  
          }  
      })], allOverlays: false  
  });  
  layerDays = new SuperMap.Layer.TiledDynamicRESTLayer("World", url1, {transparent: true, cacheEnabled: true});  
  layerDays.events.on({"layerInitialized":addLayer5}); 
	
	
	//初始化标记图层类
	markerss = new SuperMap.Layer.Markers("Markerss");
	vectors = new SuperMap.Layer.Vector("vector");
	//单兵的图层
	vectors_db = new SuperMap.Layer.Vector("vectors_db");
	//单兵开始和结束图标
	markers_rsd = new SuperMap.Layer.Markers("markers_rsd");
	markersdb = new SuperMap.Layer.Markers("markersdb");

	
	//新增单兵数据
	getAllDB();
	
}
function addLayer5(){
	map_searchPath.addLayers([ layerDays, markerss, vectors,vectors_db, markers_rsd,markersdb]);
   layerNights = new SuperMap.Layer.TiledDynamicRESTLayer("World+Map", url1, {transparent: true, cacheEnabled: true});  
   layerNights.events.on({"layerInitialized":addLayer6});  
	  
 }  
function addLayer6(){  
   layerDays.isBaseLayer=true;  
   layerNights.isBaseLayer=true;  
   map_searchPath.addLayers([layerDays,layerNights]);  
   map_searchPath.setCenter(new SuperMap.LonLat(119.603912,34.54677), 4);
   if(url == url2){
			replaceURLs(2);
	  }
}  

function replaceURLs(f){
	 if (f == 2) {
        layerDays.setVisibility(false);  
        layerNights.setVisibility(true);  
        map_searchPath.setBaseLayer(layerNights);  
        btt = true;  
     	 // 处理session
        setSessiona(2);
     } else if (f == 1) {
      layerDays.setVisibility(true);  
      layerNights.setVisibility(false);  
      map_searchPath.setBaseLayer(layerDays);  
      btt= false;  
   	// 处理session
      setSessiona(1);
	   }
	}

//设置session
function setSessiona(f){
		$.ajax({  
        url:'../bigScreen/replaceURL/'+ f,
        success: function () {  
        	console.log("请求成功!");   
        },
        error: function () {//请求失败处理函数  
            console.log("请求失败!");  
        }  
    });  
}

function getAllDB(){
	$.ajax({
		   type:"POST",                    
		   url:'../dispatching/selectDB',
		   async:true, 
		   dataType:"json",
		   success:function(date){
			    if(date!=null){
					var all_carsNew3 = [];
				   for(var i=0;i<date.length;i++){
					   all_carsNew3.push({ "lon":parseFloat(date[i].longiTude),"lat":parseFloat(date[i].latiTude),"start": (date[i].dbInfo)[0].startime,"end": (date[i].dbInfo)[0].endtime,"no": date[i].UserName,"phone":(date[i].dbInfo)[0].phone,"type":5 ,"name":(date[i].dbInfo)[0].name});
				   }
				   
				   showAllDB(all_carsNew3);
			   } 
		    }
		}); 
}
function showAllDB(allDBs){
	var size = new SuperMap.Size(20, 17);
	var offset = new SuperMap.Pixel(-(size.w / 2), -size.h);
	var icon_danBing = new SuperMap.Icon('${ctx}/javascript/gis/images/danBing.png', size, offset);
	//初始化标记覆盖物类
	for ( var i = 0; i < allDBs.length; i++) {
		var p = allDBs[i];
		var marker;
	if(p.type == 5){
			marker = new SuperMap.Marker(new SuperMap.LonLat(p.lon, p.lat),
					icon_danBing);
		}
		marker.point = p;
		
		//注册 click 事件,触发 mouseClickHandler()方法
		marker.events.on({
			"click" : function() {
				var mk = this;
				mouseClickHandler(mk);
			}
		});
		//添加覆盖物到标记图层
		markersdb.addMarker(marker);
	}
}
var infowin = null;
//定义mouseClickHandler函数，触发click事件会调用此函数
function mouseClickHandler(mk) {
		closeInfoWin();
	
		// 去除原来的路线
		vectors_db.removeAllFeatures();
		
		//去除起点终点
		markers_rsd.clearMarkers();
	
	
	var contentHTML2 = "<div style='width:96%; height: 99%;font-size:12px;font-weight:bold ; opacity: 0.8'>"
		+"<table style=' width: 100%;height: 75%; min-height: 20px; line-height: 20px; text-align: center; border-collapse: collapse; padding:2px;'>";
		contentHTML2 += "<tr><td style='border:1px solid #BBBBBC;background-color: #EEF0F7'>设备编号:</td><td style='border:1px solid #BBBBBC;'>" + mk.point.no + "</td></tr>";
		contentHTML2 += "<tr><td style='border:1px solid #BBBBBC;background-color: #EEF0F7'>设备状态:</td><td style='border:1px solid #BBBBBC;'>在线</td></tr>";
		contentHTML2 += "<tr><td style='border:1px solid #BBBBBC;background-color: #EEF0F7'>持有人:</td><td style='border:1px solid #BBBBBC;'>" + mk.point.name + "</td></tr>";
		contentHTML2 += "<tr><td style='border:1px solid #BBBBBC;background-color: #EEF0F7'>联系方式:</td><td style='border:1px solid #BBBBBC;'>" + mk.point.phone + "</td></tr>";
		contentHTML2 += "<tr><td style='border:1px solid #BBBBBC;background-color: #EEF0F7'>巡查开始时间:</td><td style='border:1px solid #BBBBBC;'>"+mk.point.start+"</td></tr>";
		contentHTML2 += "<tr><td style='border:1px solid #BBBBBC;background-color: #EEF0F7'>巡查结束时间:</td><td style='border:1px solid #BBBBBC;'>"+mk.point.end+"</td></tr>";
		contentHTML2 += "</table>";
		contentHTML2 += "<button style='background-color: green;border: none;color: white;padding: 5px 22px;text-align: center;text-decoration: none;display: inline-block;font-size: 12px;margin: 4px 2px;cursor: pointer;' onclick='showLine(\"" + mk.point.no+"\",\""+mk.point.start+"\",\""+mk.point.end
		+ "\")'><img src='/dev/static/images/eipc/review.png' width='20' height='20' class='imgicon'>查看轨迹</button>";
		contentHTML2 += "</div>";
		
	//初始化FramedCloud类
	var framedCloud =null;
	if(mk.point.type == 5 ){
		framedCloud = new SuperMap.Popup.FramedCloud("chicken", mk
				.getLonLat(), new SuperMap.Size(200, 220), contentHTML2, icon,
				true, function() {
					closeInfoWin();
					// 去除原来的路线
					vectors_db.removeAllFeatures();
					//去除起点终点
					markers_rsd.clearMarkers();
				}, true);
	}
	framedCloud.autoSize = false;

	infowin = framedCloud;
	map.addPopup(framedCloud);
	
}

function closeInfoWin() {
	if (infowin) {
		try {
			infowin.hide();
			infowin.destroy();
		} catch (e) {
		}
	}
}

//单兵轨迹
function showLine(no,start,end) {
	var st = start.split("/");
	var en = end.split("/");
	start=st[0]+"-"+st[1]+"-"+st[2];
	end=en[0]+"-"+en[1]+"-"+en[2];
	$.ajax({
		   type:"POST",                    
		   url:'../dispatching/trajectory',
		   async:true, 
		   data: {"number":no,"time_begin":start,"time_end":end},
		   dataType:"json",
		   success:function(date){
			   var line;
			   if(date!=null||date.length==0){
				  line=new Array();
				  for(var i=0;i<date.length;i++){
					  var la=date[i].latiTude;
					  var lo=date[i].longiTude;
					  line[i]=new SuperMap.Geometry.Point(lo,la);
				  }
					// 获取线串几何对象？
					var carline = line;
					// 显示线条首尾
					var size = new SuperMap.Size(20, 17);
					var offset = new SuperMap.Pixel(0, -size.h);
					var icon_flgstart = new SuperMap.Icon('../javascript/gis/images/start.png', size, offset);
					var icon_flgend = new SuperMap.Icon('../javascript/gis/images/end.png', size, offset);
					if (carline) {
						//初始化标记覆盖物类
						var pStart = carline[0];
						var pEnd = carline[carline.length - 1];
						var marker_start = new SuperMap.Marker(new SuperMap.LonLat(
								pStart.x, pStart.y), icon_flgstart);
						var marker_end = new SuperMap.Marker(new SuperMap.LonLat(pEnd.x,
								pEnd.y), icon_flgend);
						//添加覆盖物到标记图层
						markers_rsd.addMarker(marker_start);
						//添加覆盖物到标记图层
						markers_rsd.addMarker(marker_end);
						// 显示线条
						var line1 = new SuperMap.Geometry.LineString(carline);
						var linecVectorDB = new SuperMap.Feature.Vector(line1);
						linecVectorDB.style = {
							strokeColor : "#f3ec09",
							strokeWidth : 3
						};
						vectors_db.addFeatures([ linecVectorDB ]);
					}
			   }
		    }
		}); 
		
	

}



var pathIndex=0;
function prowledPath(){
//	if(document.getElementById("prowledContent").style.display == "block"){
//		$("#prowledContent").css("display","none");
//		closeProw1();
//	}
//	if(document.getElementById("prowledVideo").style.display == "block"){
//		$("#prowledVideo").css("display","none");
//	}
//	if(document.getElementById("prowledTeam").style.display == "block"){
//		$("#prowledTeam").css("display","none");
//		closeProw2();
//	}
//	if(document.getElementById("videoList").style.display == "block"){
//		$("#videoList").css("display","none");
//	}
//	
//	$(".prowledPath").css("display","block");
//	
	$.ajax({
		 type:"POST",                    
		   url:'../data/getPatrolList',
		   async:true, 
		   dataType:"json",
		   success:function(result){
			    $("#prowledPerson-tb").html("");
			   for(i=0;i<result.length;i++){
					  peopleList=result[i];
					  var startTime = peopleList.startime.replace(new RegExp("/",'g'),"-");
					  var endTime = peopleList.endtime.replace(new RegExp("/",'g'),"-");
						var tabHtml='<tr class="gcxm_tableTr2">'+
			            '<td class="detail" onclick="showPersonWay(&quot;'+peopleList.id+'&quot,&quot;'+startTime+'&quot,&quot;'+endTime+'&quot)" style="width:79px">'
			            +peopleList.name+'</td>'+
			            '<td class="td135">'+startTime+'</td>'+
			            '<td class="td135">'+endTime+'</td>'+
			            '</tr>';
					  $("#prowledPerson-tb").append(tabHtml)
				  }
			   
		   }
	});
	
	if(pathIndex == 0){
		initProwledMap();
	}
		
	pathIndex++;
	
}


function showPersonWay(id,start,end){
	
	//markerss.removeLayer();
	// 去除汽车标记
	markerss.clearMarkers();
	// 去除原来的路线
	vectors_db.removeAllFeatures();
	
     $.ajax({
    	 type:"POST",                    
		   url:'../data/viewPatrol',
		   async:true, 
		   data: {"sbno":id},
		   dataType:"json",
		   success:function(result){
			   console.log(id)
			   
			     var no = result.sbno;
			     showLine_path(no,start,end);
		   }
     });
     
	
}

function showLine_path(no,start,end) {
	$.ajax({
		   type:"POST",                    
		   url:'../data/trajectory',
		   async:true, 
		   data: {"number":no,"time_begin":start,"time_end":end},
		   dataType:"json",
		   success:function(date){
			   var line;
			   if(date!=null||date.length==0){
				  line=new Array();
				  for(var i=0;i<date.length;i++){
					  var la=date[i].latiTude;
					  var lo=date[i].longiTude;
					  line[i]=new SuperMap.Geometry.Point(lo,la);
				  }
			   }
			// 获取线串几何对象？
				var carline = line;
				// 显示线条首尾
				var size = new SuperMap.Size(20, 17);
				var offset = new SuperMap.Pixel(0, -size.h);
				var icon_start = new SuperMap.Icon('../javascript/gis/images/start.png', size, offset);
				var icon_end = new SuperMap.Icon('../javascript/gis/images/end.png', size, offset);
				if (carline) {
					//初始化标记覆盖物类

					var pStart = carline[0];
					var pEnd = carline[carline.length - 1];
					var marker_start = new SuperMap.Marker(new SuperMap.LonLat(
							pStart.x, pStart.y), icon_start);
					var marker_end = new SuperMap.Marker(new SuperMap.LonLat(pEnd.x,
							pEnd.y), icon_end);
					//添加覆盖物到标记图层
					markerss.addMarker(marker_start);
					//添加覆盖物到标记图层
					markerss.addMarker(marker_end);
					// 显示线条
					var line1 = new SuperMap.Geometry.LineString(carline);
					var linecVector = new SuperMap.Feature.Vector(line1);
					linecVector.style = {
						strokeColor : "#ec4409",
						strokeWidth : 5
					};

					vectors_db.addFeatures([ linecVector ]);
				}
		   }
	}); 

}

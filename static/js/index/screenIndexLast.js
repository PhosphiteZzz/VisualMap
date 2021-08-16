var iscarinit = true;
var index = 0;
var companyArr = [];
var companyCar = [];
var timer;
var timeInterval;

var notOutCarFLg = true;
var danCarsFLg = true;
var danPointFLg = true;
var visitedNumFLg = true;
var newGJcarsFLg = true;

$(document).ready(function () {
  // 初始化海康登录
  // loginHik();

  //初始化时间
  displayDate();

  //超时报警
  //getNotOutCar();

  // 车辆申报审核数据统计
  //initTab();

  //getCarWarn();

  //获取车辆轨迹的车辆信息
  // getGJcars();

  //初始化流向图
  //setPicFLow();

  // 初始化视频
  //initVideoData();

  // 环保水滴图初始化
  // initWaterTool();
  // 产业供应链体系
  // initYuancailiso();
  // initChengpinku();

  // 管理创新体系
  // initGuanli();

  // 延迟10S打开车辆轨迹查看页面
  // setTimeout("openGis()", 3000);


  //定时刷新统计数据
  testFunb();


  getSomeInfo();
  getSomeInfo2();

  var video = new videoConstructor();
  video.init();
});


function testFunb() {
  var a = setInterval(function () {
    clearInterval(a);

    displayDate();
    //超时报警
    //getNotOutCar();

    //入园人次和来访车辆车辆


    //获取车辆轨迹的车辆信息
    // newGJcars();
    testFunb();
  }, 60000);
}






// var myChart6;
// function initWaterTool() {
// 	var dom6 = document.getElementById("waterTool");
// 	myChart6 = echarts.init(dom6);
// 	var option6 = {
// 		    series: [{
// 		        type: 'liquidFill',
// 		        data: [{
// 		            value: 0.97,
// 		            itemStyle: {
// 		                normal: {
// 		                    opacity: 0.3,
// 		                }
// 		            }
// 		        }, {
// 		            value: 0.78,
// 		            itemStyle: {
// 		                normal: {
// 		                    color: '#39B3F6',
// 		                    opacity: 0.3,
// 		                }
// 		            }
// 		        }],
// 		        radius: '90%',
// 		        outline: {
// 		            show: true,
// 		            borderDistance: 0,
// 		            itemStyle: {
// 		                color: 'none',
// 		                borderColor: '#B0E2FF',
// 		                borderWidth: 2,
// 		                shadowBlur: 10,
// 		                shadowColor: 'rgba(0, 0, 0, 0.8)'
// 		            }
// 		        },
// 		        backgroundStyle: {
// 		            borderColor: 'rgba(0,0,0,0.8)',
// 		            borderWidth: 1,
// 		            color: "#fff",
// 		            shadowColor: '26A7F9',
// 		            opacity: 0.1,
// 		            shadowBlur: 80
// 		        },
// 		        itemStyle: {
// 		            normal: {
// 		                opacity: 0.4,
// 		                shadowBlur: 80,
// 		                shadowColor: 'blue'
// 		            }
// 		        },
//
// 		    }]
// 		};
// 	if (option6 && typeof option6 === "object") {
// 	    myChart6.setOption(option6, true);
// 	}
// }





// var myChart7;
// function initYuancailiso() {
// 	var dom7 = document.getElementById("yuancailiao");
// 	myChart7 = echarts.init(dom7);
// 	var xData = ['1号仓库','2号仓库','3号仓库','4号仓库','5号仓库','6号仓库'];
// 	var yData = [40,30,45,70,20,46];
// 	var option7 = {
// 	    tooltip: {
// 	        trigger: 'axis',
// 	        axisPointer: {
// 	            type: 'line',
// 	            lineStyle: {
// 	                opacity: 0
// 	            }
// 	        },
// 	        formatter: function(prams) {
// 	            return "存储量：" + prams[0].data+"%";
// 	        }
// 	    },
// 	    grid: {
// 	        left: '0%',
// 	        right: '0%',
// 	        bottom: '5%',
// 	        top: '7%',
// 	        height: '90%',
// 	        containLabel: true,
// 	        z: 22
// 	    },
// 	    xAxis: [{
// 	        type: 'category',
// 	        gridIndex: 0,
// 	        data: xData,
// 	        axisTick: {
// 	            alignWithLabel: true
// 	        },
// 	        axisLine: {
// 	            lineStyle: {
// 	                color: '#0c3b71'
// 	            }
// 	        },
// 	        axisLabel: {
// 	            show: true,
// 	            color: 'rgb(170,170,170)',
// 	            fontSize: 10
// 	        }
// 	    }],
// 	    yAxis: [{
// 	            type: 'value',
// 	            gridIndex: 0,
// 	            splitLine: {
// 	                show: false
// 	            },
// 	            axisTick: {
// 	                show: false
// 	            },
// 	            axisLine: {
// 	                lineStyle: {
// 	                    color: '#0c3b71'
// 	                }
// 	            },
// 	            axisLabel: {
// 	                color: 'rgb(170,170,170)',
// 	                formatter: '{value}%'
// 	            }
// 	        },
// 	        {
// 	            type: 'value',
// 	            gridIndex: 0,
// 	            splitNumber: 12,
// 	            splitLine: {
// 	                show: false
// 	            },
// 	            axisLine: {
// 	                show: false
// 	            },
// 	            axisTick: {
// 	                show: false
// 	            },
// 	            axisLabel: {
// 	                show: false
// 	            },
// 	            splitArea: {
// 	                show: false,
// 	                areaStyle: {
// 	                    color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
// 	                }
// 	            }
// 	        }
// 	    ],
// 	    series: [{
// 	            name: '办理数',
// 	            type: 'bar',
// 	            barWidth: '30%',
// 	            xAxisIndex: 0,
// 	            yAxisIndex: 0,
// 	            label: {
// 	                normal: {
// 	                    show: true,
// 	                    position: "center",
// 	                    textStyle: {
// 	                        color: "blue",
// 	                        fontSize: 15
// 	                    }
// 	                }
// 	            },
// 	            itemStyle: {
// 	                normal: {
// 	                    color: new echarts.graphic.LinearGradient(
// 	                        0, 0, 0, 1, [{
//                                 offset: 0,
//                                 color: '#8DEEEE'
//                             },
//                             {
//                                 offset: 0.5,
//                                 color: '#528B8B'
//                             },
//                             {
//                                 offset: 1,
//                                 color: '#1C1C1C'
//                             }
// 	                        ]
// 	                    )
// 	                }
// 	            },
// 	            data: yData,
// 	            zlevel: 11
//
// 	        },
// 	        {
// 	        	name: '背景',
// 	            type: 'bar',
// 	            barWidth: '30%',
// 	            xAxisIndex: 0,
// 	            yAxisIndex: 1,
// 	            barGap: '-100%',
// 	            data: [100, 100, 100, 100, 100, 100, 100],
// 	            itemStyle: {
// 	                normal: {
// 	                    color: '#191970'
// 	                }
// 	            },
// 	            zlevel: 9
// 	        },
//
// 	    ]
// 	};
// 	if (option7 && typeof option7 === "object") {
// 	    myChart7.setOption(option7, true);
// 	}
// }
// function yuancailiaoClickSet() {
// 	//$("#yuancailiao").html('');
// 	var setyuan1 = $("#yuan1").val();
// 	var setyuan2 = $("#yuan2").val();
// 	var setyuan3 = $("#yuan3").val();
// 	var setyuan4 = $("#yuan4").val();
// 	var setyuan5 = $("#yuan5").val();
// 	var setyuan6 = $("#yuan6").val();
// 	var dom7 = document.getElementById("yuancailiao");
// 	myChart7 = echarts.init(dom7);
// 	var xData = ['1号仓库','2号仓库','3号仓库','4号仓库','5号仓库','6号仓库'];
// 	var yData = [setyuan1,setyuan2,setyuan3,setyuan4,setyuan5,setyuan6];
// 	//console.log(yData);
// 	var option7 = {
// 	    tooltip: {
// 	        trigger: 'axis',
// 	        axisPointer: {
// 	            type: 'line',
// 	            lineStyle: {
// 	                opacity: 0
// 	            }
// 	        },
// 	        formatter: function(prams) {
// 	            return "存储量：" + prams[0].data+"%";
// 	        }
// 	    },
// 	    grid: {
// 	        left: '0%',
// 	        right: '0%',
// 	        bottom: '5%',
// 	        top: '7%',
// 	        height: '85%',
// 	        containLabel: true,
// 	        z: 22
// 	    },
// 	    xAxis: [{
// 	        type: 'category',
// 	        gridIndex: 0,
// 	        data: xData,
// 	        axisTick: {
// 	            alignWithLabel: true
// 	        },
// 	        axisLine: {
// 	            lineStyle: {
// 	                color: '#0c3b71'
// 	            }
// 	        },
// 	        axisLabel: {
// 	            show: true,
// 	            color: 'rgb(170,170,170)',
// 	            fontSize: 10
// 	        }
// 	    }],
// 	    yAxis: [{
// 	            type: 'value',
// 	            gridIndex: 0,
// 	            splitLine: {
// 	                show: false
// 	            },
// 	            axisTick: {
// 	                show: false
// 	            },
// 	            axisLine: {
// 	                lineStyle: {
// 	                    color: '#0c3b71'
// 	                }
// 	            },
// 	            axisLabel: {
// 	                color: 'rgb(170,170,170)',
// 	                formatter: '{value}%'
// 	            }
// 	        },
// 	        {
// 	            type: 'value',
// 	            gridIndex: 0,
// 	            splitNumber: 12,
// 	            splitLine: {
// 	                show: false
// 	            },
// 	            axisLine: {
// 	                show: false
// 	            },
// 	            axisTick: {
// 	                show: false
// 	            },
// 	            axisLabel: {
// 	                show: false
// 	            },
// 	            splitArea: {
// 	                show: false,
// 	                areaStyle: {
// 	                    color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
// 	                }
// 	            }
// 	        }
// 	    ],
// 	    series: [{
// 	            name: '办理数',
// 	            type: 'bar',
// 	            barWidth: '30%',
// 	            xAxisIndex: 0,
// 	            yAxisIndex: 0,
// 	            label: {
// 	                normal: {
// 	                    show: true,
// 	                    position: "center",
// 	                    textStyle: {
// 	                        //color: "#ffc72b",
// 	                        color: "blue",
// 	                        fontSize: 15
// 	                    }
// 	                }
// 	            },
// 	            itemStyle: {
// 	                normal: {
// 	                    color: new echarts.graphic.LinearGradient(
// 	                        0, 0, 0, 1, [{
//                                 offset: 0,
//                                 color: '#8DEEEE'
//                             },
//                             {
//                                 offset: 0.5,
//                                 color: '#528B8B'
//                             },
//                             {
//                                 offset: 1,
//                                 color: '#1C1C1C'
//                             }
// 	                        ]
// 	                    )
// 	                }
// 	            },
// 	            data: yData,
// 	            zlevel: 11
//
// 	        },
// 	        {
// 	        	name: '背景',
// 	            type: 'bar',
// 	            barWidth: '30%',
// 	            xAxisIndex: 0,
// 	            yAxisIndex: 1,
// 	            barGap: '-100%',
// 	            data: [100, 100, 100, 100, 100, 100, 100],
// 	            itemStyle: {
// 	                normal: {
// 	                    color: '#191970'
// 	                }
// 	            },
// 	            zlevel: 9
// 	        },
//
// 	    ]
// 	};
// 	if (option7 && typeof option7 === "object") {
// 	    myChart7.setOption(option7, true);
// 	}
//
// 	var setcheng1 = $("#cheng1").val();
// 	var setcheng2 = $("#cheng2").val();
// 	var setcheng3 = $("#cheng3").val();
// 	var setcheng4 = $("#cheng4").val();
// 	var setcheng5 = $("#cheng5").val();
// 	var setcheng6 = $("#cheng6").val();
// 	var dom8 = document.getElementById("chengpinku");
// 	myChart8 = echarts.init(dom8);
//
// 	yData = [setcheng1,setcheng2,setcheng3,setcheng4,setcheng5,setcheng6];
// 	var option8 = {
// 	    tooltip: {
// 	        trigger: 'axis',
// 	        axisPointer: {
// 	            type: 'line',
// 	            lineStyle: {
// 	                opacity: 0
// 	            }
// 	        },
// 	        formatter: function(prams) {
// 	            return "存储量：" + prams[0].data+"%";
// 	        }
// 	    },
// 	    grid: {
// 	        left: '0%',
// 	        right: '0%',
// 	        bottom: '5%',
// 	        top: '7%',
// 	        height: '85%',
// 	        containLabel: true,
// 	        z: 22
// 	    },
// 	    xAxis: [{
// 	        type: 'category',
// 	        gridIndex: 0,
// 	        data: xData,
// 	        axisTick: {
// 	            alignWithLabel: true
// 	        },
// 	        axisLine: {
// 	            lineStyle: {
// 	                color: '#0c3b71'
// 	            }
// 	        },
// 	        axisLabel: {
// 	            show: true,
// 	            color: 'rgb(170,170,170)',
// 	            fontSize: 10
// 	        }
// 	    }],
// 	    yAxis: [{
// 	            type: 'value',
// 	            gridIndex: 0,
// 	            splitLine: {
// 	                show: false
// 	            },
// 	            axisTick: {
// 	                show: false
// 	            },
// 	            axisLine: {
// 	                lineStyle: {
// 	                    color: '#0c3b71'
// 	                }
// 	            },
// 	            axisLabel: {
// 	                color: 'rgb(170,170,170)',
// 	                formatter: '{value}%'
// 	            }
// 	        },
// 	        {
// 	            type: 'value',
// 	            gridIndex: 0,
// 	            splitNumber: 12,
// 	            splitLine: {
// 	                show: false
// 	            },
// 	            axisLine: {
// 	                show: false
// 	            },
// 	            axisTick: {
// 	                show: false
// 	            },
// 	            axisLabel: {
// 	                show: false
// 	            },
// 	            splitArea: {
// 	                show: false,
// 	                areaStyle: {
// 	                    color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
// 	                }
// 	            }
// 	        }
// 	    ],
// 	    series: [{
// 	            name: '办理数',
// 	            type: 'bar',
// 	            barWidth: '30%',
// 	            xAxisIndex: 0,
// 	            yAxisIndex: 0,
// 	            label: {
// 	                normal: {
// 	                    show: true,
// 	                    position: "center",
// 	                    textStyle: {
// 	                        color: "blue",
// 	                        fontSize: 15
// 	                    }
// 	                }
// 	            },
// 	            itemStyle: {
// 	                normal: {
// 	                    color: new echarts.graphic.LinearGradient(
// 	                        0, 0, 0, 1, [{
//                                 offset: 0,
//                                 color: '#00EE00'
//                             },
//                             {
//                                 offset: 0.5,
//                                 color: '#008B00'
//                             },
//                             {
//                                 offset: 1,
//                                 color: '#1C1C1C'
//                             }
// 	                        ]
// 	                    )
// 	                }
// 	            },
// 	            data: yData,
// 	            zlevel: 11
//
// 	        },
// 	        {
// 	        	name: '背景',
// 	            type: 'bar',
// 	            barWidth: '30%',
// 	            xAxisIndex: 0,
// 	            yAxisIndex: 1,
// 	            barGap: '-100%',
// 	            data: [100, 100, 100, 100, 100, 100, 100],
// 	            itemStyle: {
// 	                normal: {
// 	                    color: '#191970'
// 	                }
// 	            },
// 	            zlevel: 9
// 	        },
// 	    ]
// 	};
// 	if (option8 && typeof option8 === "object") {
// 	    myChart8.setOption(option8, true);
// 	}
//
//
// 	//产业供应链体系设定弹出框隐藏
// 	$("#yuancailiaoDiv").css("display","none");
// }



// var myChart8;
// function initChengpinku() {
// 	var dom8 = document.getElementById("chengpinku");
// 	myChart8 = echarts.init(dom8);
// 	var xData = ['1号仓库','2号仓库','3号仓库','4号仓库','5号仓库','6号仓库'];
// 	var yData = [40,30,45,70,20,46];
// 	var option8 = {
// 	    tooltip: {
// 	        trigger: 'axis',
// 	        axisPointer: {
// 	            type: 'line',
// 	            lineStyle: {
// 	                opacity: 0
// 	            }
// 	        },
// 	        formatter: function(prams) {
// 	            return "存储量：" + prams[0].data+"%";
// 	        }
// 	    },
// 	    grid: {
// 	        left: '0%',
// 	        right: '0%',
// 	        bottom: '5%',
// 	        top: '7%',
// 	        height: '85%',
// 	        containLabel: true,
// 	        z: 22
// 	    },
// 	    xAxis: [{
// 	        type: 'category',
// 	        gridIndex: 0,
// 	        data: xData,
// 	        axisTick: {
// 	            alignWithLabel: true
// 	        },
// 	        axisLine: {
// 	            lineStyle: {
// 	                color: '#0c3b71'
// 	            }
// 	        },
// 	        axisLabel: {
// 	            show: true,
// 	            color: 'rgb(170,170,170)',
// 	            fontSize: 10
// 	        }
// 	    }],
// 	    yAxis: [{
// 	            type: 'value',
// 	            gridIndex: 0,
// 	            splitLine: {
// 	                show: false
// 	            },
// 	            axisTick: {
// 	                show: false
// 	            },
// 	            axisLine: {
// 	                lineStyle: {
// 	                    color: '#0c3b71'
// 	                }
// 	            },
// 	            axisLabel: {
// 	                color: 'rgb(170,170,170)',
// 	                formatter: '{value}%'
// 	            }
// 	        },
// 	        {
// 	            type: 'value',
// 	            gridIndex: 0,
// 	            splitNumber: 12,
// 	            splitLine: {
// 	                show: false
// 	            },
// 	            axisLine: {
// 	                show: false
// 	            },
// 	            axisTick: {
// 	                show: false
// 	            },
// 	            axisLabel: {
// 	                show: false
// 	            },
// 	            splitArea: {
// 	                show: false,
// 	                areaStyle: {
// 	                    color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
// 	                }
// 	            }
// 	        }
// 	    ],
// 	    series: [{
// 	            name: '办理数',
// 	            type: 'bar',
// 	            barWidth: '30%',
// 	            xAxisIndex: 0,
// 	            yAxisIndex: 0,
// 	            label: {
// 	                normal: {
// 	                    show: true,
// 	                    position: "center",
// 	                    textStyle: {
// 	                        color: "blue",
// 	                        fontSize: 15
// 	                    }
// 	                }
// 	            },
// 	            itemStyle: {
// 	                normal: {
// 	                    color: new echarts.graphic.LinearGradient(
// 	                        0, 0, 0, 1, [{
//                                 offset: 0,
//                                 color: '#00EE00'
//                             },
//                             {
//                                 offset: 0.5,
//                                 color: '#008B00'
//                             },
//                             {
//                                 offset: 1,
//                                 color: '#1C1C1C'
//                             }
// 	                        ]
// 	                    )
// 	                }
// 	            },
// 	            data: yData,
// 	            zlevel: 11
//
// 	        },
// 	        {
// 	        	name: '背景',
// 	            type: 'bar',
// 	            barWidth: '30%',
// 	            xAxisIndex: 0,
// 	            yAxisIndex: 1,
// 	            barGap: '-100%',
// 	            data: [100, 100, 100, 100, 100, 100, 100],
// 	            itemStyle: {
// 	                normal: {
// 	                    color: '#191970'
// 	                }
// 	            },
// 	            zlevel: 9
// 	        },
// 	    ]
// 	};
// 	if (option8 && typeof option8 === "object") {
// 	    myChart8.setOption(option8, true);
// 	}
// }

// var myChart9;
// function initGuanli() {
// 	var dom9 = document.getElementById("guanlichuangxin");
// 	myChart9 = echarts.init(dom9);
// 	var xData = ['2013','2014','2015','2016','2017','2018','2019'];
// 	var yData = [65,38,51,85,65,70,81];
// 	var option9 = {
//
// 			legend: {
// 		        x:'center',
// 		        y:'50',
// 		        itemWidth: 115,
// 		        itemHeight:'10',
// 		                data: [
// 		            {
// 		                name:'生成总值(亿元)',
// 		                textStyle:{fontWeight:'bold', color:'#e8e8dc',fontSize: '10'},
// 		            },
// 		           {
// 		                name:'综合能耗(万吨标煤)',
// 		                textStyle:{fontWeight:'bold', color:'#0eddfd',fontSize: '10',},
// 		            },
// 		        ]
//
// 		    },
// 	    tooltip: {
// 	        trigger: 'axis',
// 	        axisPointer: {
// 	            type: 'line',
// 	            lineStyle: {
// 	                opacity: 0
// 	            }
// 	        },
// 	        formatter: function(prams) {
// 	            return "生成总值:" + prams[0].data +"(亿元)<br/>综合能耗:" + prams[2].data+"(万吨标煤)";
// 	        }
// 	    },
// 	    grid: {
// 	        left: '0%',
// 	        right: '0%',
// 	        bottom: '5%',
// 	        //top: '7%',
// 	        height: '85%',
// 	        containLabel: true,
// 	        z: 22
// 	    },
// 	    xAxis: [{
// 	        type: 'category',
// 	        gridIndex: 0,
// 	        data: xData,
// 	        axisTick: {
// 	            alignWithLabel: true
// 	        },
// 	        axisLine: {
// 	            lineStyle: {
// 	                color: '#0c3b71'
// 	            }
// 	        },
// 	        axisLabel: {
// 	            show: true,
// 	            color: 'rgb(170,170,170)',
// 	            fontSize: 10
// 	        }
// 	    }],
// 	    yAxis: [{
// 	            type: 'value',
// 	            gridIndex: 0,
// 	            splitLine: {
// 	                show: false
// 	            },
// 	            axisTick: {
// 	                show: false
// 	            },
// 	            axisLine: {
// 	                lineStyle: {
// 	                    color: '#0c3b71'
// 	                }
// 	            },
// 	            axisLabel: {
// 	                color: 'rgb(170,170,170)',
// 	                formatter: '{value}'
// 	            }
// 	        },
// 	        {
// 	            type: 'value',
// 	            gridIndex: 1,
// 	            position:'right',
// 	            gridIndex: 0,
// 	            splitLine: {
// 	                show: false
// 	            },
// 	            axisTick: {
// 	                show: false
// 	            },
// 	            axisLine: {
// 	                lineStyle: {
// 	                    color: '#0c3b71'
// 	                }
// 	            },
// 	            axisLabel: {
// 	                color: 'rgb(170,170,170)',
// 	                formatter: '{value}'
// 	            }
// 	        }
// 	    ],
// 	    series: [{
// 	            name: '办理数',
// 	            type: 'bar',
// 	            barWidth: '30%',
// 	            xAxisIndex: 0,
// 	            yAxisIndex: 0,
// 	            label: {
// 	                normal: {
// 	                    show: true,
// 	                    position: "top",
// 	                    textStyle: {
// 	                        color: "#ffc72b",
// 	                        fontSize: 20
// 	                    }
// 	                }
// 	            },
// 	            itemStyle: {
// 	                normal: {
// 	                    color: new echarts.graphic.LinearGradient(
// 	                        0, 0, 0, 1, [{
// 	                                offset: 0,
// 	                                color: '#00EEEE'
// 	                            },
// 	                            {
// 	                                offset: 0.5,
// 	                                color: '#528B8B'
// 	                            },
// 	                            {
// 	                                offset: 1,
// 	                                color: '#1C1C1C'
// 	                            }
// 	                        ]
// 	                    )
// 	                }
// 	            },
// 	            data: yData,
// 	            zlevel: 11
//
// 	        },
// 	        {
// 	            name: '背景',
// 	            type: 'bar',
// 	            barWidth: '30%',
// 	            xAxisIndex: 0,
// 	            yAxisIndex: 0,
// 	            barGap: '-100%',
// 	            data: [100, 100, 100, 100, 100, 100, 100, 100],
// 	            itemStyle: {
// 	                normal: {
// 	                    color: '#191970'
// 	                }
// 	            },
// 	            zlevel: 9
// 	        },
// 	        {
// 	            name:'完成率',
// 	            symbol:'circle',
// 	            symbolSize :8,
// 	            smooth:true,
// 	            type:'line',
// 	            yAxisIndex: 1,
// 	            zlevel: 20,
// 	            data:[0,74,98,48,48,74,76],
// 	                  itemStyle: {
// 	            normal: {
// 	                color:'green',
// 	                label: {
// 	                    show: true,
// 	                    position: "top",
// 	                    formatter:'{c}',
// 	                    borderWidth:10,
// 	                    color:'green',
// 	                    padding:4,
//
// 	                    },
// 	                labelLine: {
// 	                    show: false
// 	                    }
// 	                } ,
//
// 	            }
// 	        }
// 	    ]
// 	};
// 	if (option9 && typeof option9 === "object") {
// 	    myChart9.setOption(option9, true);
// 	}
// }

// function guanliDivClickSet() {
// 	//$("#yuancailiao").html('');
// 	var year1 = $("#guanliYear1").val();
// 	var year2 = $("#guanliYear2").val();
// 	var year3 = $("#guanliYear3").val();
// 	var year4 = $("#guanliYear4").val();
// 	var year5 = $("#guanliYear5").val();
// 	var year6 = $("#guanliYear6").val();
// 	var year7 = $("#guanliYear7").val();
//
//
// 	var chanzhi1 = $("#guanlizhi11").val();
// 	var chanzhi2 = $("#guanlizhi21").val();
// 	var chanzhi3 = $("#guanlizhi31").val();
// 	var chanzhi4 = $("#guanlizhi41").val();
// 	var chanzhi5 = $("#guanlizhi51").val();
// 	var chanzhi6 = $("#guanlizhi61").val();
// 	var chanzhi7 = $("#guanlizhi71").val();
//
// 	var nenghao1 = $("#guanlizhi12").val();
// 	var nenghao2 = $("#guanlizhi22").val();
// 	var nenghao3 = $("#guanlizhi32").val();
// 	var nenghao4 = $("#guanlizhi42").val();
// 	var nenghao5 = $("#guanlizhi52").val();
// 	var nenghao6 = $("#guanlizhi62").val();
// 	var nenghao7 = $("#guanlizhi72").val();
//
// 	var dom9 = document.getElementById("guanlichuangxin");
// 	myChart9 = echarts.init(dom9);
// 	var xData = [year1,year2,year3,year4,year5,year6,year7];
// 	var yData = [chanzhi1,chanzhi2,chanzhi3,chanzhi4,chanzhi5,chanzhi6,chanzhi7];
// 	var zData = [nenghao1,nenghao2,nenghao3,nenghao4,nenghao5,nenghao6,nenghao7];
// 	var option9 = {
//
// 			legend: {
// 		        x:'right',
// 		        y:'50',
// 		        itemWidth: 15,
// 		        itemHeight:'10',
// 		                data: [
// 		            {
// 		                name:'生成总值(亿元)',
// 		                textStyle:{fontWeight:'bold', color:'#e8e8dc',fontSize: '10'},
// 		            },
// 		           {
// 		                name:'综合能耗(万吨标煤)',
// 		                textStyle:{fontWeight:'bold', color:'#0eddfd',fontSize: '10',},
// 		            },
// 		        ]
//
// 		    },
// 	    tooltip: {
// 	        trigger: 'axis',
// 	        axisPointer: {
// 	            type: 'line',
// 	            lineStyle: {
// 	                opacity: 0
// 	            }
// 	        },
// 	        formatter: function(prams) {
// 	            return "生成总值:" + prams[0].data +"(亿元)<br/>综合能耗:" + prams[2].data+"(万吨标煤)";
// 	        }
// 	    },
// 	    grid: {
// 	        left: '0%',
// 	        right: '0%',
// 	        bottom: '5%',
// 	        top: '7%',
// 	        height: '85%',
// 	        containLabel: true,
// 	        z: 22
// 	    },
// 	    xAxis: [{
// 	        type: 'category',
// 	        gridIndex: 0,
// 	        data: xData,
// 	        axisTick: {
// 	            alignWithLabel: true
// 	        },
// 	        axisLine: {
// 	            lineStyle: {
// 	                color: '#0c3b71'
// 	            }
// 	        },
// 	        axisLabel: {
// 	            show: true,
// 	            color: 'rgb(170,170,170)',
// 	            fontSize: 10
// 	        }
// 	    }],
// 	    yAxis: [{
// 	            type: 'value',
// 	            gridIndex: 0,
// 	            splitLine: {
// 	                show: false
// 	            },
// 	            axisTick: {
// 	                show: false
// 	            },
// 	            axisLine: {
// 	                lineStyle: {
// 	                    color: '#0c3b71'
// 	                }
// 	            },
// 	            axisLabel: {
// 	                color: 'rgb(170,170,170)',
// 	                formatter: '{value}'
// 	            }
// 	        },
// 	        {
// 	            type: 'value',
// 	            gridIndex: 1,
// 	            position:'right',
// 	            gridIndex: 0,
// 	            splitLine: {
// 	                show: false
// 	            },
// 	            axisTick: {
// 	                show: false
// 	            },
// 	            axisLine: {
// 	                lineStyle: {
// 	                    color: '#0c3b71'
// 	                }
// 	            },
// 	            axisLabel: {
// 	                color: 'rgb(170,170,170)',
// 	                formatter: '{value}'
// 	            }
// 	        }
// 	    ],
// 	    series: [{
// 	            name: '办理数',
// 	            type: 'bar',
// 	            barWidth: '30%',
// 	            xAxisIndex: 0,
// 	            yAxisIndex: 0,
// 	            label: {
// 	                normal: {
// 	                    show: true,
// 	                    position: "top",
// 	                    textStyle: {
// 	                        color: "#ffc72b",
// 	                        fontSize: 20
// 	                    }
// 	                }
// 	            },
// 	            itemStyle: {
// 	                normal: {
// 	                    color: new echarts.graphic.LinearGradient(
// 	                        0, 0, 0, 1, [{
// 	                                offset: 0,
// 	                                color: '#00EEEE'
// 	                            },
// 	                            {
// 	                                offset: 0.5,
// 	                                color: '#528B8B'
// 	                            },
// 	                            {
// 	                                offset: 1,
// 	                                color: '#1C1C1C'
// 	                            }
// 	                        ]
// 	                    )
// 	                }
// 	            },
// 	            data: yData,
// 	            zlevel: 11
//
// 	        },
// 	        {
// 	            name: '背景',
// 	            type: 'bar',
// 	            barWidth: '30%',
// 	            xAxisIndex: 0,
// 	            yAxisIndex: 0,
// 	            barGap: '-100%',
// 	            data: [100, 100, 100, 100, 100, 100, 100],
// 	            itemStyle: {
// 	                normal: {
// 	                    color: '#191970'
// 	                }
// 	            },
// 	            zlevel: 9
// 	        },
// 	        {
// 	            name:'完成率',
// 	            symbol:'circle',
// 	            symbolSize :8,
// 	            smooth:true,
// 	            type:'line',
// 	            yAxisIndex: 1,
// 	            zlevel: 20,
// 	            data:zData,
// 	                  itemStyle: {
// 	            normal: {
// 	                color:'green',
// 	                label: {
// 	                    show: true,
// 	                    position: "top",
// 	                    formatter:'{c}',
// 	                    borderWidth:10,
// 	                    color:'green',
// 	                    padding:4,
//
// 	                    },
// 	                labelLine: {
// 	                    show: false
// 	                    }
// 	                } ,
//
// 	            }
// 	        }
// 	    ]
// 	};
// 	if (option9 && typeof option9 === "object") {
// 	    myChart9.setOption(option9, true);
// 	}
//
// 	//管理创新体系设定弹出框隐藏
// 	$("#guanliDiv").css("display","none");
// }





function carListViewClick() {
  if (document.getElementById("carListView").style.display == "block") {
    $("#carListView").css("display", "none");
  } else {
    $("#carListView").css("display", "block");
  }
}

// 地图底部摄像头按钮点击事件
function videoEntityClickLast() {
  var button = $("#videoButtonLast");

  if (!button.attr("click-flag")) {
    button.attr("click-flag", true);
    button.attr("src", "/dev/static/images/menuicon/vido1.png");

    if (!entityMarkersObj['video']) { // 第一次点击时，获取图层数据初始化地图图层
      $.ajax({
        type: "POST",
        url: '../bigScreen2/getVideoList',
        async: true,
        dataType: "json",
        success: function (date) {
          if (date != null) {
            var videoDataSource = [];
            date.map(function (item) {
              if (item.type === '1') {
                item['typeName'] = '摄像头';
                videoDataSource.push(item);
              }
            });
            initEnityLayer(videoDataSource, 'video');
          }
        }
      });
    } else {
      map.addLayer(entityMarkersObj['video']);
    }

  } else {
    button.removeAttr("click-flag");
    button.attr("src", "/dev/static/images/menuicon/vido.png");

    map.removeLayer(entityMarkersObj['video']);
  }
}

// 地图底部围网按钮点击事件
function seineEntityClickLast() {
  var button = $("#seineButtonLast");

  if (!button.attr("click-flag")) {
    button.attr("click-flag", true);
    button.attr("src", "/dev/static/images/menuicon/seine1.png");

    if (!entityMarkersObj['seine']) { // 第一次点击时，获取图层数据初始化地图图层
      $.ajax({
        type: "POST",
        url: '../bigScreen2/getVideoList',
        async: true,
        dataType: "json",
        success: function (date) {
          if (date != null) {
            var seineDataSource = [];
            date.map(function (item) {
              if (item.type === '2') {
                item['typeName'] = '围网';
                seineDataSource.push(item);
              }
            });
            // 围网摄像头
            initEnityLayer(seineDataSource, 'seine');

            // 围网线数据
            var seineLinePoints = {
              "一期": {
                color: "#0000FF",
                strokeDashstyle: "solid",
                lonlat: [{ "x": 119.59245453572, "y": 34.573615132046 }, { "x": 119.56387833895, "y": 34.543488288937 }, { "x": 119.58470130404, "y": 34.528535627835 }, { "x": 119.59134693119, "y": 34.52410520973 }, { "x": 119.59566658884, "y": 34.521668479773 }, { "x": 119.60353058098, "y": 34.514026008543 }, { "x": 119.61161609402, "y": 34.50627277686 }, { "x": 119.61239141719, "y": 34.507269620934 }]
              },
              "二期": {
                color: "#0000FF",
                strokeDashstyle: "dash",
                lonlat: [{ "x": 119.56011248356, "y": 34.542269923958 }, { "x": 119.54371993657, "y": 34.525434335162 }, { "x": 119.55922639994, "y": 34.503836046903 }, { "x": 119.59932168378, "y": 34.501842358756 }, { "x": 119.60220145555, "y": 34.501953119209 }, { "x": 119.60430590415, "y": 34.502728442377 }, { "x": 119.60906860361, "y": 34.505275932787 }]
              },
              "三期": {
                color: "#02FD04",
                strokeDashstyle: "dash",
                lonlat: [{ "x": 119.54305537386, "y": 34.52410520973 }, { "x": 119.55756499315, "y": 34.503060723735 }, { "x": 119.60175841374, "y": 34.50073475423 }, { "x": 119.60485970641, "y": 34.501288556493 }, { "x": 119.61150533357, "y": 34.505497453692 }, { "x": 119.64395814618, "y": 34.545925018894 }, { "x": 119.64495499026, "y": 34.54958011383 }, { "x": 119.64495499026, "y": 34.552681406503 }, { "x": 119.64440118799, "y": 34.555007376008 }, { "x": 119.64262902075, "y": 34.557887147776 }, { "x": 119.63986000944, "y": 34.560545398638 }, { "x": 119.63698023767, "y": 34.56231756588 }, { "x": 119.59743875609, "y": 34.578156310603 }, { "x": 119.59677419337, "y": 34.57804555015 }, { "x": 119.59433746341, "y": 34.575608820193 }, { "x": 119.59334061934, "y": 34.574279694762 }]
              },
              "四期": {
                color: "#F60C0C",
                strokeDashstyle: "dash",
                lonlat: [{ "x": 119.54250157159, "y": 34.524880532899 }, { "x": 119.53685278851, "y": 34.533519848202 }, { "x": 119.5511408869, "y": 34.546035779347 }, { "x": 119.54305537386, "y": 34.552792166956 }, { "x": 119.5490364383, "y": 34.558883991849 }, { "x": 119.54615666653, "y": 34.560656159091 }, { "x": 119.56830875705, "y": 34.582254447349 }, { "x": 119.58879944078, "y": 34.571067641636 }]
              }
            };
            initSeineLines(seineLinePoints);
          }
        }
      });
    } else {
      map.addLayer(entityMarkersObj['seine']);
      map.addLayer(seineLinesVector);
    }
  } else {
    button.removeAttr("click-flag");
    button.attr("src", "/dev/static/images/menuicon/seine.png");

    map.removeLayer(entityMarkersObj['seine']);
    if (seineLinesVector) {
      map.removeLayer(seineLinesVector);
    }
  }
}

// 地图底部卡口按钮点击事件
function bayonetEntityClickLast() {
  var button = $("#bayonetButtonLast");

  if (!button.attr("click-flag")) {
    button.attr("click-flag", true);
    button.attr("src", "/dev/static/images/menuicon/bayonet1.png");
    button.css("background-color", "#262d71");

    if (!entityMarkersObj['bayonet']) { // 第一次点击时，获取图层数据初始化地图图层
      $.ajax({
        type: "POST",
        url: '../bigScreen2/getBayonetList',
        async: true,
        dataType: "json",
        success: function (date) {
          if (date != null) {
            var bayonetDataSource = [];
            date.map(function (item) {
              item['typeName'] = '卡口';
              bayonetDataSource.push(item);
            });
            initEnityLayer(bayonetDataSource, 'bayonet');
          }
        }
      });
    } else {
      map.addLayer(entityMarkersObj['bayonet']);
    }
  } else {
    button.removeAttr("click-flag");
    button.attr("src", "/dev/static/images/menuicon/bayonet.png");
    button.css("background-color", "white");

    map.removeLayer(entityMarkersObj['bayonet']);
  }
}

// 地图底部区域范围按钮点击事件
function areaEntityClickLast() {
  var button = $("#areaButtonLast");

  if (!button.attr("click-flag")) {
    button.attr("click-flag", true);
    button.attr("src", "/dev/static/images/menuicon/enclosedArea1.png");

    if (!entityMarkersObj['area']) { // 第一次点击时，获取图层数据初始化地图图层
      var areasVector = new SuperMap.Layer.Vector("areasVector");
      var areaDataSource = {
        "主导产业聚集区": {
          color: "#FACB5D",
          fontSize: '30px',
          labelXOffset: 0,
          labelYOffset: 0,
          lonlat: [{ "x": 119.56342795244, "y": 34.543471865932 }, { "x": 119.59744539837, "y": 34.578996980228 }, { "x": 119.63898785302, "y": 34.561594060039 }, { "x": 119.64207546789, "y": 34.559488868081 }, { "x": 119.64347892919, "y": 34.557524022253 }, { "x": 119.64474204437, "y": 34.555278484164 }, { "x": 119.64502273663, "y": 34.552190869292 }, { "x": 119.6448823905, "y": 34.548682216028 }, { "x": 119.64404031372, "y": 34.5467173702 }, { "x": 119.64235616015, "y": 34.544892870503 }, { "x": 119.63828612236, "y": 34.540822832717 }, { "x": 119.6361809304, "y": 34.538717640759 }, { "x": 119.63281262327, "y": 34.534086218451 }, { "x": 119.6279005087, "y": 34.526788219662 }, { "x": 119.619620087, "y": 34.515841221479 }, { "x": 119.61611143374, "y": 34.510648414648 }, { "x": 119.61330451112, "y": 34.507280107515 }, { "x": 119.61176070369, "y": 34.506297684601 }, { "x": 119.59716470611, "y": 34.520051605395 }, { "x": 119.59000705345, "y": 34.525244412226 }, { "x": 119.56362198091, "y": 34.543349063067 }, { "x": 119.56342795244, "y": 34.543471865932 }]
        },
        "精细化工区": {
          color: "#6FD162",
          fontSize: '30px',
          labelXOffset: 0,
          labelYOffset: 0,
          lonlat: [{ "x": 119.56288968093, "y": 34.542717505481 }, { "x": 119.54450433783, "y": 34.525033893031 }, { "x": 119.55755652797, "y": 34.505385434754 }, { "x": 119.55938102767, "y": 34.50440301184 }, { "x": 119.56134587349, "y": 34.504122319579 }, { "x": 119.599520021, "y": 34.502578512143 }, { "x": 119.60218659749, "y": 34.502438166012 }, { "x": 119.60611628914, "y": 34.503139896665 }, { "x": 119.60737940432, "y": 34.503981973448 }, { "x": 119.61032667306, "y": 34.505385434754 }, { "x": 119.61130909597, "y": 34.506227511537 }, { "x": 119.59643240613, "y": 34.51970074007 }, { "x": 119.58773094604, "y": 34.525735623684 }, { "x": 119.56303002706, "y": 34.54243681322 }, { "x": 119.56288968093, "y": 34.542717505481 }]
        },
        "规划调整区": {
          color: "#B77CE8",
          fontSize: '30px',
          labelXOffset: 0,
          labelYOffset: 0,
          lonlat: [{ "x": 119.54338765521, "y": 34.525655856067 }, { "x": 119.53784963258, "y": 34.53429517137 }, { "x": 119.55080860554, "y": 34.547364904778 }, { "x": 119.545049062, "y": 34.553456729671 }, { "x": 119.55036556373, "y": 34.558551710491 }, { "x": 119.5471535106, "y": 34.561431482259 }, { "x": 119.56864103841, "y": 34.582254447349 }, { "x": 119.58957476395, "y": 34.570624599826 }, { "x": 119.54427373883, "y": 34.524326730635 }, { "x": 119.54338765521, "y": 34.525655856067 }]
        },
        "德邦化工": {
          color: "#6FD162",
          fontSize: '30px',
          labelXOffset: 0,
          labelYOffset: 0,
          lonlat: [{ "x": 119.5492579592, "y": 34.517238061669 }, { "x": 119.54006484164, "y": 34.512364601754 }, { "x": 119.53973256028, "y": 34.510149392702 }, { "x": 119.54128320661, "y": 34.511035476322 }, { "x": 119.54538134336, "y": 34.505497453692 }, { "x": 119.54837187558, "y": 34.505497453692 }, { "x": 119.5553497841, "y": 34.50837722546 }, { "x": 119.55512826319, "y": 34.508487985913 }, { "x": 119.5492579592, "y": 34.517238061669 }]
        },
        "配套服务区": {
          color: "#D2EE80",
          fontSize: '15px',
          labelXOffset: -10,
          labelYOffset: -10,
          lonlat: [{ "x": 119.54394145748, "y": 34.562871368143 }, { "x": 119.54914719875, "y": 34.558773231397 }, { "x": 119.54305537386, "y": 34.552681406503 }, { "x": 119.53807115349, "y": 34.556668782797 }, { "x": 119.54394145748, "y": 34.562871368143 }]
        }
      }

      for (var item in areaDataSource) {
        var areaPoints = [];
        areaDataSource[item].lonlat.map(function (lonlat) {
          areaPoints.push(new SuperMap.Geometry.Point(lonlat.x, lonlat.y));
        });

        var areaLine = new SuperMap.Geometry.LinearRing(areaPoints);
        var areaLineVector = new SuperMap.Feature.Vector(areaLine);
        areaLineVector.style = {
          label: item,
          strokeColor: areaDataSource[item].color,
          fill: true,
          fillColor: areaDataSource[item].color,
          fillOpacity: 0.4,
          fontSize: areaDataSource[item].fontSize,
          labelXOffset: areaDataSource[item].labelXOffset,
          labelYOffset: areaDataSource[item].labelYOffset,
          strokeWidth: 3
        };

        areasVector.addFeatures([areaLineVector]);
      }
      map.addLayer(areasVector);
      entityMarkersObj['area'] = areasVector;
    } else {
      map.addLayer(entityMarkersObj['area']);
    }
  } else {
    button.removeAttr("click-flag");
    button.attr("src", "/dev/static/images/menuicon/enclosedArea.png");

    map.removeLayer(entityMarkersObj['area']);
  }
}

// 初始化地图点位图层
var entityMarkersObj = { "video": undefined, "seine": undefined, "bayonet": undefined, "area": undefined };

function initEnityLayer(dataSource, entityType) {
  console.log(dataSource);

  var entityMarkers = new SuperMap.Layer.Markers("entityMarkers");

  var iconSize = new SuperMap.Size(40, 34);
  var iconOffset = new SuperMap.Pixel(-(iconSize.w / 2), -iconSize.h);
  var iconUrl = "";
  if (entityType === 'video') {
    iconUrl = "../javascript/gis/images/jianK.png";
  } else if (entityType === 'seine') {
    iconUrl = "../javascript/gis/images/videoBlue.png";
  } else if (entityType === 'bayonet') {
    iconUrl = "../javascript/gis/images/kaK.png";
  }
  var makerIcon = new SuperMap.Icon(iconUrl, iconSize, iconOffset);

  dataSource.map(function (item) {
    var entityMarker;
    entityMarker = new SuperMap.Marker(new SuperMap.LonLat(item.lon, item.lat), makerIcon);

    entityMarker.entityInfo = item;

    //注册 click 事件,触发 mouseClickHandler()方法
    entityMarker.events.on({
      "click": function () {
        entityMarkerClick(this, entityType);
      },
      "touchstart": function () {
        entityMarkerClick(this, entityType);
      } //假如要在移动端的浏览器也实现点击弹框，则在注册touch类事件
    });

    entityMarkers.addMarker(entityMarker);
  });

  map.addLayer(entityMarkers);
  entityMarkersObj[entityType] = entityMarkers;
}

// 地图点位点击事件
var entityFramedCloud;

function entityMarkerClick(marker, entityType) {
  var contentHTML = "";
  var entityInfo = marker.entityInfo;
  console.log(entityInfo);
  if (entityType === 'bayonet') { // 卡口弹窗的html内容
    contentHTML += "<div style='position: relative; width: 425px; height: 300px;'>";
    contentHTML += "<div style='width: 100%; height: 10%; display: flex; align-items: center; font-size: 15px;'>";
    contentHTML += "<font color='#597ef5'>卡口：</font>";
    contentHTML += "<font color='#1B3067'>" + entityInfo.batonetName + "</font>&nbsp;&nbsp;&nbsp;&nbsp;";
    contentHTML += "<font color='#597ef5'>闸道：</font>";
    contentHTML += "<select style='font-size: 15px;' onchange='showBayonetVideo()' id='bayonetSelect'>";
    contentHTML += "</select>";
    contentHTML += "</div>";
    contentHTML += "<div style='width: 100%; height: 75%' id='bayonetVideo'>";
    contentHTML += "<div class='noDataLast'>暂无视频数据</div>";
    contentHTML += "</div>";
    contentHTML += "<div style='width: 100%; height: 15%'>";
    contentHTML += "<table class='entityPopupTable'>";
    contentHTML += "<tr><td>卡口名称:</td><td>" + entityInfo.batonetName + "</td></tr>";
    contentHTML += "<tr><td>卡口地址:</td><td>" + entityInfo.bayonetLocation + "</td></tr>";
    contentHTML += "<tr><td>经度:</td><td>" + entityInfo.lon + "</td></tr>";
    contentHTML += "<tr><td>纬度:</td><td>" + entityInfo.lat + "</td></tr>";
    contentHTML += "</table>";
    contentHTML += "</div>";
    contentHTML += "</div>";

    if (entityInfo.bayonetNo) {
      getDataByBayonetNo(entityInfo.bayonetNo);
    }
  } else { // 摄像头、围网的html内容
    contentHTML += "<div style='position: relative; width: 425px; height: 250px;'>";
    contentHTML += "<div style='width: 100%; height: 85%'>";
    contentHTML += "<article class='c-v-pic-wrap'>";
    contentHTML += "<section class='p-h-video-box'>";
    contentHTML += "<iframe id='mainFrame' name='mainFrame' src='../web/module/realtimeplay/commonrealtimeplaykq12.jsp?indexCode=" + entityInfo.camera_code + "' frameborder='0'  scrolling='no' width='100%' height='100%'></iframe>";
    contentHTML += "</section>";
    contentHTML += "</article>";
    contentHTML += "</div>";
    contentHTML += "<div style='width: 100%; height: 10%'>";
    contentHTML += "<table class='entityPopupTable'>";
    contentHTML += "<tr><td>摄像机名称:</td><td>" + entityInfo.name + "</td></tr>";
    contentHTML += "<tr><td>摄像机类型:</td><td>" + entityInfo.typeName + "</td></tr>";
    contentHTML += "<tr><td>经度:</td><td>" + entityInfo.lon + "</td></tr>";
    contentHTML += "<tr><td>纬度:</td><td>" + entityInfo.lat + "</td></tr>";
    contentHTML += "</table>";
    contentHTML += "</div>";
    contentHTML += "</div>";
  }

  var framedCloud = new SuperMap.Popup.FramedCloud("entityInfo", marker.getLonLat(), null, contentHTML, marker.icon, true, null, true);
  framedCloud.autoSize = true;

  if (entityFramedCloud) { // 地图上已有弹窗时，清除弹窗后再弹出最新的
    map.removePopup(entityFramedCloud);
  }

  map.addPopup(framedCloud);
  entityFramedCloud = framedCloud;
}

// 根据卡口信息获得闸道数据
function getDataByBayonetNo(bayonetNo) {
  $.ajax({
    type: "post",
    url: '../bigScreen/findCameraIp/' + bayonetNo,
    dataType: "json",
    async: true,
    success: function (data) {
      if (data != null) {
        data.map(function (item) {
          $("#bayonetSelect").append("<option value='" + item.carddutyIp + "-" + item.cameraIp + "'>" + item.roadDescription + "</option>");
        });
        showBayonetVideo();
      }
    }
  });
}

// 展示围网视频
function showBayonetVideo() {
  var val = $("#bayonetSelect").val();
  var cameraCode;
  if (null != val) {
    cameraCode = val.split("-")[1];
  } else {
    cameraCode = "001113";
  }

  $("#bayonetVideo").empty();
  var contentHTML = "<article class='c-v-pic-wrap'>";
  contentHTML += "<section class='p-h-video-box'>";
  contentHTML += "<iframe id='mainFrame' name='mainFrame' src='../web/module/realtimeplay/commonrealtimeplaykq12.jsp?indexCode=" + cameraCode + "' frameborder='0'  scrolling='no' width='100%' height='100%'></iframe>"
  contentHTML += "</section>";
  contentHTML += "</article>";
  $("#bayonetVideo").append(contentHTML);
}

// 初始化围网线
function initSeineLines(dataSource) {
  seineLinesVector = new SuperMap.Layer.Vector("SeineLinesVector");
  for (var item in dataSource) {
    var points = [];
    dataSource[item].lonlat.map(function (lonlat) {
      var point = new SuperMap.Geometry.Point(lonlat['x'], lonlat['y']);
      points.push(point);
    });
    var seineLine = new SuperMap.Geometry.LineString(points);
    var seineLineVector = new SuperMap.Feature.Vector(seineLine);
    seineLineVector.style = {
      strokeColor: dataSource[item].color,
      strokeWidth: 5,
      strokeDashstyle: dataSource[item].strokeDashstyle,
    };
    seineLinesVector.addFeatures([seineLineVector]);
  }
  map.addLayer(seineLinesVector);
}

function setPicFLow() {
  $.ajax({
    type: "post",
    url: '../data/getCompanyCar',
    dataType: "json",
    data: {
      "startTime": getDay(-1),
      "endTime": getDay(0)
    },
    async: true,
    success: function (req) {
      var danCont = 0;
      companyCar = [];
      for (i = 0; i < req.length; i++) {
        companyArr.push(req[i].shortName.substring(0, 13));
        if (req[i].dangerCarNum == null || req[i].dangerCarNum == '') {
          companyCar.push("0");
        } else {
          danCont = danCont + parseInt(req[i].dangerCarNum);
          companyCar.push(req[i].dangerCarNum);
        }

      }
      //TODO
      // $("#danCarnum").html(danCont);
      //获取流向图
      getFlowPic(companyArr, companyCar);
    }
  });
}

function setPicFLowReFreshData() {
  $.ajax({
    type: "post",
    url: '../data/getCompanyCar',
    dataType: "json",
    data: {
      "startTime": getDay(-1),
      "endTime": getDay(0)
    },
    async: true,
    success: function (req) {
      var danCont = 0;
      companyCar = [];

      var option = myChart5.getOption();

      for (i = 0; i < 4; i++) {
        companyArr.push(req[i].shortName.substring(0, 13));
        if (req[i].dangerCarNum == null || req[i].dangerCarNum == '') {
          companyCar.push("0");
          option.series[0].links[i].speed = 0;
        } else {
          danCont = danCont + parseInt(req[i].dangerCarNum);
          companyCar.push(req[i].dangerCarNum);
          //console.log("speed:"+option.series[0].links[i].speed);
          option.series[0].links[i].speed = req[i].dangerCarNum;
        }

      }
      //TODO
      $("#danCarnum").html(danCont);
      myChart5.setOption(option);

    }
  });
}

function loginHik() {
  var flag = 0;
  var url = document.location.href;
  var ip = url.substring(url.indexOf('://') + 3);
  ip = ip.substring(0, ip.indexOf('/'));

  var userName = "admin";
  var serviceIp = "192.168.9.247";
  var servicePort = parseInt("80");
  var pacip = sha256_digest("Hik12345");
  var platformSdkIp = "";
  var capcha = "";
  var platformSdkIp = "";

  $.ajax({
    url: '../webService/login2.action',
    dataType: "json",
    data: {
      userName: userName,
      pacip: pacip,
      serviceIp: serviceIp,
      servicePort: servicePort,
      ip: ip,
      flag: flag,
      capcha: capcha,
      platformFlag: false,
      platformSdkIp: platformSdkIp,
      platformSdkPort: platformSdkIp
    },
    success: function (response) {

      if (response.result) {
        $.ajax({
          url: "../stream/timer1.action",
          dataType: "json",
          data: {
            count: 60,
            ip: ip
          },
          success: function (data) { }
        });

      }
    }
  });
}


function displayDate() {

  var date = new Date();
  var year = date.getFullYear();
  var mouths = date.getMonth() + 1;
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var seconds = date.getSeconds();
  var weekDay = new Array(7);
  weekDay[0] = "星期日";
  weekDay[1] = "星期一";
  weekDay[2] = "星期二";
  weekDay[3] = "星期三";
  weekDay[4] = "星期四";
  weekDay[5] = "星期五";
  weekDay[6] = "星期六";
  document.getElementById("nowTime").innerHTML = year + "年" + mouths + "月" + day + "日" + "  " + weekDay[date.getDay()] + " " + hours + ":" + minutes;
}

var myChart5;

function getFlowPic(companyArr, companyCar) {
  // TODO秘书长
  // 斯尔邦石化（19）、荣泰仓储（30）、虹港石化（4）、虹洋热电（0）
  companyArr = ["虹港石化", "斯尔邦石化", "荣泰仓储", "虹洋热电"];
  //companyCar = [19,30,4,0];

  //----------------------------------------------------------------------------------
  //document.getElementById("lx-tu").html("");
  var dom5 = document.getElementById("lx-tu");
  myChart5 = echarts.init(dom5);
  var app5 = {};
  option5 = null;
  var targetCoord = [0, 140];
  var curveness = 0.2;
  var linesData = [];
  var categories = [{
    name: '流入中',
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
          offset: 0,
          color: '#0DBC9C'
        }, {
          offset: 1,
          color: '#CCEC24'
        }]),
      }
    },
    label: {
      normal: {
        fontSize: '14'
      }
    },
  }, {
    name: '暂无流入',
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
          offset: 0,
          color: '#0DBC9C'
        }, {
          offset: 1,
          color: '#CCEC24'
        }]),
      }
    },
    label: {
      normal: {
        fontSize: '14'
      }
    },
  }];

  //左侧的圆
  var item = {
    name: "危化品车",
    value: targetCoord,
    symbolSize: 35,
    itemStyle: {
      normal: {
        color: '#A74040',
      }
    },
    label: {
      normal: {
        fontSize: '14',
        position: 'bottom'
      },

    },
  };

  /*	{
              symbolSize: 40,
              name: companyArr[0],
              category: 0,
              active: true,
              speed: companyCar[0],
              value: [500, 400],
              itemStyle: {
                      normal: {
                              color: '#4bd5ff',
                      }
              }
      }*/


  var items = [{
    symbolSize: 40,
    name: companyArr[0],
    category: 0,
    active: true,
    speed: companyCar[0],
    value: [500, 400],
    itemStyle: {
      normal: {
        color: '#4bd5ff',
      }
    }
  }, {
    symbolSize: 40,
    name: companyArr[1],
    category: 0,
    active: true,
    speed: companyCar[1],
    value: [500, 272],
    itemStyle: {
      normal: {
        color: '#4bffc2',
      }
    }
  }, {
    symbolSize: 40,
    name: companyArr[2],
    category: 1,
    active: true,
    speed: companyCar[2],
    value: [510, 140],
    itemStyle: {
      normal: {
        color: '#d6a44b',
      }
    }
  }, {
    symbolSize: 40,
    name: companyArr[3],
    category: 1,
    active: true,
    speed: companyCar[3],
    value: [500, 25],
    itemStyle: {
      normal: {
        color: '#ad7bbc',
      }
    }
  }];

  var data = items.concat([item]);
  for (var i = 0; i < items.length; i++) {
    var el = items[i];
    if (el.active) {
      linesData.push([{
        coord: targetCoord
      }, {
        coord: el.value
      }])
    }
  }



  var links = [];

  for (var i = 0; i < items.length; i++) {
    var el = items[i];
    links.push(mapKey(el, i));
  }

  function mapKey(el, i) {
    {
      return {
        source: item.name,
        target: el.name,
        speed: el.speed,
        lineStyle: {
          normal: {
            color: el.speed ? '#f9c92e' : '#f9c92e',
            curveness: curveness,
          }
        },
      }
    }
  }

  option5 = {
    title: {
      text: '流向图',
      x: 0,
      y: 10,
      textStyle: {
        color: '#fff',
        fontSize: 16
      }
    },

    xAxis: {
      show: false,
      type: 'value'
    },
    yAxis: {
      show: false,
      type: 'value'
    },
    //	    grid: {
    //	        top: 30,
    //	    },
    series: [{
      type: 'graph',
      layout: 'none',
      coordinateSystem: 'cartesian2d',
      symbolSize: 30,
      z: 3,
      edgeLabel: {
        normal: {
          show: true,
          textStyle: {
            fontSize: 14
          },
          formatter: function (params) {
            var txt = '';
            if (params.data.speed !== undefined) {
              txt = params.data.speed
            }
            return txt
          },
        }
      },
      label: {
        normal: {
          show: true,
          position: 'bottom',
          color: '#CDCFCE'
        }
      },
      itemStyle: {
        normal: {
          shadowColor: 'none'
        },
        emphasis: {

        }
      },
      lineStyle: {
        normal: {
          width: 2,
          shadowColor: 'none'
        },
      },
      edgeSymbol: ['none', 'arrow'],
      edgeSymbolSize: 8,
      data: data,
      links: links,
      categories: categories
    }, {
      name: 'A',
      type: 'lines',
      coordinateSystem: 'cartesian2d',
      z: 1,
      effect: {
        show: true,
        smooth: false,
        trailLength: 0,
        symbol: "arrow",
        color: 'rgba(55,155,255,0.5)',
        symbolSize: 12
      },
      lineStyle: {
        normal: {
          curveness: curveness
        }
      },
      data: linesData
    }]
  };
  if (option5 && typeof option5 === "object") {
    myChart5.setOption(option5, true);
  }
  //----------------------------------------------------------------------------------
}

function getNotOutCar() {
  if (notOutCarFLg) {
    notOutCarFLg = false;
  } else {
    return;
  }
  $.ajax({
    type: "post",
    url: '../notOutInfor/searchCarNew',
    dataType: "json",
    async: true,
    success: function (req) {
      notOutCarFLg = true;
      if (req != null && req != '') {
        $("#outWarn").html(req.length);
        $("#warn-tab").html("");

        for (i = 0; i < req.length; i++) {
          carListArr = req[i];
          var tabHtml = '<tr class="gcxm_tableTr2" onclick="getDetailCar(&quot;' + carListArr.id + '&quot;)" style="cursor: pointer;">' +
            '<td style="width:15%">' + carListArr.plate_num + '</td>' +
            '<td style="width:30%">' + carListArr.company + '</td>' +
            '<td style="width:20%">' + carListArr.visitEndTime + '</td>' +
            '<td style="width:15%">' + carListArr.name + '</td>' +
            '<td style="width:20%">' + carListArr.business_tel + '</td>' +
            '</tr>';
          $("#warn-tab").append(tabHtml)
        }
      } else {
        $("#outWarn").html("0");
      }



    }

  });

}

function getDetailCar(id) {

  $(".car-det").css("display", "block");
  $.ajax({
    type: "post",
    url: '../notOutInfor/searchCarById',
    data: { "id": id },
    dataType: "json",
    async: true,
    success: function (req) {
      $("#detail-tb").html("");

      for (i = 0; i < req.length; i++) {
        carListArr = req[i];
        var tabHtml = '<tr class="gcxm_tableTr2">' +
          '<td class="td1">车牌号:</td><td >' + carListArr.plate_num + '</td>' +
          '</tr>' +
          '<tr class="gcxm_tableTr2">' +
          '<td class="td1">类型:</td><td >外来车辆</td>' +
          '</tr>' +
          '<tr class="gcxm_tableTr2">' +
          '<td class="td1">进园时间:</td><td >' + carListArr.create_time + '</td>' +
          '</tr>' +
          '<tr class="gcxm_tableTr2">' +
          '<td class="td1">访问企业:</td><td >' + carListArr.company + '</td>' +
          '</tr>' +
          '<tr class="gcxm_tableTr2">' +
          '<td class="td1">有效时间起:</td><td >' + carListArr.visitStartTime + '</td>' +
          '</tr>' +
          '<tr class="gcxm_tableTr2">' +
          '<td class="td1">有效时间止:</td><td >' + carListArr.visitEndTime + '</td>' +
          '</tr>' +
          '<tr class="gcxm_tableTr2">' +
          '<td class="td1">企业联系人:</td><td >' + carListArr.businessContacter + '</td>' +
          '</tr>' +
          '<tr class="gcxm_tableTr2">' +
          '<td class="td1">联系电话:</td><td >' + carListArr.business_tel + '</td>' +
          '</tr>' +
          '<tr class="gcxm_tableTr2">' +
          '<td class="td1">驾驶人:</td><td >' + carListArr.name + '</td>' +
          '</tr>' +
          '<tr class="gcxm_tableTr2">' +
          '<td class="td1">驾驶人电话:</td><td >' + carListArr.phone + '</td>' +
          '</tr>'

        $("#detail-tb").append(tabHtml)
      }

    }

  });

}

var danPointsArr = [];


//时间设置
function getDay(day) {
  var today = new Date();

  var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;

  today.setTime(targetday_milliseconds); //注意，这行是关键代码

  var tYear = today.getFullYear();
  var tMonth = today.getMonth();
  var tDate = today.getDate();
  tMonth = doHandleMonth(tMonth + 1);
  tDate = doHandleMonth(tDate);
  return tYear + "/" + tMonth + "/" + tDate;
}

function doHandleMonth(month) {
  var m = month;
  if (month.toString().length == 1) {
    m = "0" + month;
  }
  return m;
}


function getCarWarn() {
  $.ajax({
    type: "post",
    url: '../data/searchWarning',
    data: {
      "startTime": getDay(0),
      "endTime": getDay(0)
    },
    dataType: "json",
    async: true,
    success: function (req) {
      $("#carWarn").html(req.length);
      $("#caraway-tb").html("");

      for (i = 0; i < req.length; i++) {
        carListArr = req[i];
        var tabHtml = '<tr class="gcxm_tableTr2">' +
          '<td style="width:20%">' + carListArr.plate_num + '</td>' +
          '<td style="width:40%">' + carListArr.company + '</td>' +
          '<td style="width:15%">' + carListArr.name + '</td>' +
          '<td style="width:15%">' + carListArr.phone + '</td>' +
          '</tr>';
        $("#caraway-tb").append(tabHtml)
      }

    }

  });
}



//初始化摄像头数据
function initVideoData() {

  $('#mainFrame1').attr('src', '../web/module/realtimeplay/commonrealtimeplaykq12.jsp?indexCode=001128');
  $('#mainFrame2').attr('src', '../web/module/realtimeplay/commonrealtimeplaykq12.jsp?indexCode=001179');
  $('#mainFrame3').attr('src', '../web/module/realtimeplay/commonrealtimeplaykq12.jsp?indexCode=001359');
  $('#mainFrame4').attr('src', '../web/module/realtimeplay/commonrealtimeplaykq12.jsp?indexCode=001129');
  /*$.ajax({
           type:"post",
           url:'../data/getVideoList',
           dataType:"json",
           async:true,
           success:function(req){
               var firstCode="";
               if(req !=null && req.length > 0) {
                   var firstCode = req[0].camera_code;
                   $('#mainFrame').attr('src','../web/module/realtimeplay/commonrealtimeplaykq12.jsp?indexCode='+firstCode);
                   for(i=0;i<req.length;i++){
                      var videoList=req[i];

                      var tabHtml='<tr class="gcxm_tableTr2">'+
                                  '<td class="detail" style="width:150px" onclick="videoPlayer(&quot;'+videoList.camera_code+'&quot;)">'+videoList.name+'</td>'+
                                  '<td class="td120">'+videoList.type+'</td>'+
                                  '</tr>';

                      $("#videoList-tb").append(tabHtml);
                      codeArr.push(videoList.camera_code);
                   }
               }

               //getSpilitData(codeArr);

              }

      });*/
}

function getSpilitData(codeArr) {
  //每4个数据分成一组的写法
  var len = codeArr.length;
  var result = [];
  var sliceNum = 4;
  for (var i = 0; i < len / sliceNum; i++) {
    result.push(codeArr.slice(i * sliceNum, (i + 1) * sliceNum))
  }
  for (var j = 0; j < (sliceNum - len % sliceNum); j++) {
    result[result.length - 1].push({})
  }
  getVideoRound(index, result);
  index++;

  //设置定时器--------启动视频轮询
  //	timer = setInterval(function() {
  //		getVideoRound(index,result)
  //		index++;
  //	}, 20000);

}

//点击单个查看，更换摄像头
function videoPlayer(code) {

  //更换摄像头url
  $('#mainFrame').attr('src', '../web/module/realtimeplay/commonrealtimeplaykq12.jsp?indexCode=' + code);

}

/***************视频轮询******/

function getVideoRound(index, result) {

  //if(result[index].length > 3){

  //$('#mainFrame1').attr('src','../web/module/realtimeplay/commonrealtimeplaykq12.jsp?indexCode='+result[index][0]);
  //$('#mainFrame2').attr('src','../web/module/realtimeplay/commonrealtimeplaykq12.jsp?indexCode='+result[index][1]);
  //$('#mainFrame3').attr('src','../web/module/realtimeplay/commonrealtimeplaykq12.jsp?indexCode='+result[index][2]);
  //$('#mainFrame4').attr('src','../web/module/realtimeplay/commonrealtimeplaykq12.jsp?indexCode='+result[index][3]);
  //}
  //关闭定时器
  //if (index == result.length-2) {

  //	clearInterval(timer);
  //	index = 0;
  //	timer = setInterval(function() {
  //		getVideoRound(index,result)
  //		index++;
  //	}, 1000);
  //}

}

/************危化品车辆地图模块***start***********************/

//定义数组------车辆的全局
var all_cars_path = [];
var cars_variable;
//车辆轨迹的车辆信息
function getGJcars() {
  $.ajax({
    type: "post",
    url: '../data/getViewCar',
    dataType: "json",
    async: true,
    success: function (req) {

      if (req == null || req == "") {

      } else {
        $("#mapcar-tb").html("");
        all_cars_path = [];
        for (var j = 0; j < req.length; j++) {
          carsList = req[j];

          if (carsList.icon == "0") {
            continue;
          }
          all_cars_path.push({
            id: carsList.id,
            lon: carsList.lng, // 纬度
            lat: carsList.lat, //经度
            card: carsList.plate_num, //车牌号
            type: carsList.carClass, // 1 外部车辆  2 危化品
            drm: carsList.name, //驾驶人姓名
            phn: carsList.phone, //联系电话
            company: carsList.orgName, //访问企业
            staff: carsList.staffCount, //随车人数
            goods: carsList.goods, //车载物品
            visitid: carsList.orgId, //企业id
            bayonetNo: carsList.bayonetNo //卡口号id
          });

          var cars_variable = all_cars_path[j];


          var tabHtml = "<tr class='gcxm_tableTr2' " + "onclick='viewSeclectCarInof(\"" + carsList.plate_num + "\")'>" +
            "<td>" + carsList.plate_num + "</td> /tr>";



          $("#mapcar-tb").append(tabHtml);
        }
        // TODO 省里检查修改固定数据
        //$("#carPath").html(req.length);
        $("#carPath").html(156);
      }


    }

  });
}

// 点击车牌列表车牌号，弹出地图车辆对应弹框
function viewSeclectCarInof(tempCarId) {
  var tt = tempCarId;
  for (i = 0; i < all_marks_le.length; i++) {
    if (tt == all_marks_le[i].point.card) {
      showAllCars();
      mouseClickHandler_le(all_marks_le[i]);
      //清除车辆动画
      //animatorVector_le.animator.stop();
      //animatorVector_circle_le.animator.stop();
      //animatorVector_le.removeAllFeatures();
      //animatorVector_circle_le.removeAllFeatures();

      break;
    }
  }
}

//获取后台数据
var marker_sdd;
var marker_oldPoint;
var vector_oldPoint;
var animatorVector_le, animatorVector_circle_le;
//初始化底图
// function initSmallMap() {

//     map = new SuperMap.Map("small-map", {
//         controls: [
//             new SuperMap.Control.Navigation({
//                 dragPanOptions: {
//                     enableKinetic: true
//                 }
//             })
//         ],
//         allOverlays: false
//     });
//     layerDay = new SuperMap.Layer.TiledDynamicRESTLayer("World", url1, { transparent: true, cacheEnabled: true });
//     layerDay.events.on({ "layerInitialized": addLayer3 });


//     //初始化标记图层类
//     markers = new SuperMap.Layer.Markers("Markers");
//     vector = new SuperMap.Layer.Vector("vector");

//     marker_sdd = new SuperMap.Layer.Markers("markers_sdd");
//     marker_oldPoint = new SuperMap.Layer.Markers("marker_oldPoint");
//     vector_oldPoint = new SuperMap.Layer.Vector("vector_oldPoint");

//     //增加车辆动画图层
//     //动画数组
//     animatorVector_le = new SuperMap.Layer.AnimatorVector("", { rendererType: "TadpolePoint" }, {
//         //设置速度为每帧播放0.02小时的数据
//         speed: 0.1,
//         //开始时间为0晨
//         startTime: 0,
//         //结束时间设置为最后运行结束的火车结束时间
//         endTime: 20000,
//         //		repeat:false
//     });
//     animatorVector_circle_le = new SuperMap.Layer.AnimatorVector("", { rendererType: "TadpolePoint" }, {
//         //设置速度为每帧播放0.02小时的数据
//         speed: 0.1,
//         //开始时间为0晨
//         startTime: 0,
//         //结束时间设置为最后运行结束的火车结束时间
//         endTime: 20000,
//     });



//     showAllCars();
// }

function showAllCars() {

  all_marks_le = [];

  if (markers != null) {
    markers.clearMarkers();
  }
  if (vector != null) {
    vector.removeAllFeatures();
  }



  size = new SuperMap.Size(40, 34);
  offset = new SuperMap.Pixel(-(size.w / 2), -size.h);
  icon = new SuperMap.Icon('../javascript/gis/images/car.png', size, offset);
  //icon_trk = new SuperMap.Icon('../javascript/gis/images/truck_new2.png', size, offset);
  icon_trk = new SuperMap.Icon('../static/css/lastScreen/img/carNew.png', size, offset);
  //初始化标记覆盖物类
  for (var i = 0; i < all_cars_path.length; i++) {
    var p = all_cars_path[i];

    var marker;
    if (p.type == 1) {
      marker = new SuperMap.Marker(new SuperMap.LonLat(p.lon, p.lat),
        icon);
    } else {
      marker = new SuperMap.Marker(new SuperMap.LonLat(p.lon, p.lat),
        icon_trk);
    }
    marker.point = p;

    //注册 click 事件,触发 mouseClickHandler()方法
    marker.events.on({
      "click": function () {
        var mkk = this;
        mouseClickHandler_le(mkk);
      },
      "touchstart": function () {
        var mkk = this;
        mouseClickHandler_le(mkk);
      } //假如要在移动端的浏览器也实现点击弹框，则在注册touch类事件
    });
    //添加覆盖物到标记图层
    markers.addMarker(marker);
    all_marks_le.push(marker);
  }
  map.addLayers([vector_oldPoint]);

}

var infowin_le = null;
//定义mouseClickHandler_le函数，触发click事件会调用此函数
function mouseClickHandler_le(mk) {
  closeInfoWin_le();
  // 去除原来的路线
  vector.removeAllFeatures();
  //去掉起点和终点
  marker_sdd.clearMarkers();
  // 去除原来的路线
  vector_oldPoint.removeAllFeatures();
  //去掉起点和终点
  marker_oldPoint.clearMarkers();

  var contentHTML = "<div style='width:245px; font-size:12px;font-weight:bold ; opacity: 0.8'>"
    //+"<p style='background-color: #C8D0E0;width: 150px;height: 30px;padding-top: 9px;padding-left: 9px;'>车辆信息</p>"
    +
    "<table style=' width: 245px; min-height: 20px; color: black;line-height: 20px; text-align: center; border-collapse: collapse; padding:2px;'>";
  contentHTML += "<tr style='display:none'><td >车辆id:</td><td style='border:1px solid #BBBBBC;width:67%;'>" + mk.point.id + "</td></tr>";
  contentHTML += "<tr><td style='border:1px solid #BBBBBC;background-color: #EEF0F7;width:33%;'>车牌号:</td><td style='border:1px solid #BBBBBC;width:67%;'>" + mk.point.card + "</td></tr>";
  contentHTML += "<tr><td style='border:1px solid #BBBBBC;background-color: #EEF0F7;width:33%;'>车辆类型:</td><td style='border:1px solid #BBBBBC;width:67%;'>" + (mk.point.type == 1 ? '外部车辆' : '危化品车辆') + "</td></tr>";
  contentHTML += "<tr><td style='border:1px solid #BBBBBC;background-color: #EEF0F7;width:33%;'>驾驶人姓名:</td><td style='border:1px solid #BBBBBC;width:67%;'>" + mk.point.drm + "</td></tr>";
  contentHTML += "<tr><td style='border:1px solid #BBBBBC;background-color: #EEF0F7;width:33%;'>联系电话:</td><td style='border:1px solid #BBBBBC;width:67%;'>" + mk.point.phn + "</td></tr>";
  contentHTML += "<tr><td style='border:1px solid #BBBBBC;background-color: #EEF0F7;width:33%;'>访问企业:</td><td style='border:1px solid #BBBBBC;width:67%;'>" + mk.point.company + "</td></tr>";
  contentHTML += "<tr><td style='border:1px solid #BBBBBC;background-color: #EEF0F7;width:33%;'>随车人数:</td><td style='border:1px solid #BBBBBC;width:67%;'>" + mk.point.staff + "</td></tr>";
  contentHTML += "<tr><td style='border:1px solid #BBBBBC;background-color: #EEF0F7;width:33%;'>车载物品:</td><td style='border:1px solid #BBBBBC;width:67%;'>" + mk.point.goods + "</td></tr>";
  contentHTML += "</table>";
  contentHTML += "<button style='background-color: #555555;border: none;color: white;padding: 5px 22px;text-align: center;text-decoration: none;display: inline-block;font-size: 12px;margin: 4px 2px;cursor: pointer;' " +
    "onclick='showPath2(\"" + mk.point.id + "\",\"" + mk.point.visitid + "\",\"" + mk.point.bayonetNo + "\")'>查看轨迹</button></div>";

  //初始化FramedCloud类
  var framedCloud = new SuperMap.Popup.FramedCloud("chicken", mk
    .getLonLat(), new SuperMap.Size(250, 320), contentHTML, icon,
    true,
    function () { //关闭按钮
      showAllCars();
      closeInfoWin_le();
    }, true);
  framedCloud.autoSize = false;

  infowin_le = framedCloud;
  map.addPopup(framedCloud);


}

var points = [];
var circlePoints = [];

var vectorFea1 = [];
var vectorFeaC1 = [];

function showPath2(carId, companyId, bayonetNo) {

  //vector.removeAllFeatures();
  //markers.clearMarkers();
  //map.addLayers([vector_oldPoint]);
  //关闭弹框，点击车牌时再去掉路径打开弹框
  closeInfoWin_le();

  //指定的區域
  $.ajax({
    type: "post",
    async: false,
    url: '../data/findVistAreaPoint',
    dataType: "json",
    data: { "orgId": companyId, "bayonetNo": bayonetNo }, //companyId,bayonetNo
    success: function (result) {

      var all_points = eval(result);

      if (all_points != null && all_points !== 0 && all_points !== '') {
        var circleArr = all_points[0];

        for (var i = 0; i < circleArr.length; i++) {
          //纬度
          var lon = circleArr[i].x;
          // 经度
          var lat = circleArr[i].y;

          circlePoints.push(new SuperMap.Geometry.Point(lon, lat));
        }

        var circleLine = circlePoints;
        // 显示环形线

        if (circleLine) {
          // 显示线条
          var line_circle = new SuperMap.Geometry.LineString(circleLine);
          var linecVectorCircle = new SuperMap.Feature.Vector(line_circle);
          linecVectorCircle.style = {
            strokeColor: "#FF8C00",
            strokeWidth: 3,
          };

          vector_oldPoint.addFeatures([linecVectorCircle]);
          map.addLayers([vector_oldPoint]);
        }

      }
    }


  });



  //车辆历史轨迹
  $.ajax({
    type: "post",
    async: false,
    url: '../bayonet/getGisLine',
    dataType: "json",
    data: { "id": carId },
    success: function (carData) {
      points = [];
      if (carData != null && carData !== 0 && carData !== '' && carData.result.length > 0) {
        var pointSTring = '';
        for (var i = 0; i < carData.result.length; i++) {

          var data = carData.result[i];

          //纬度
          var lat = data.lat;
          // 经度
          var lng = data.lng;

          points.push(new SuperMap.Geometry.Point(lng, lat));
          //pointSTring = "points.push(new SuperMap.Geometry.Point(+"+lng+","+lat+"));";
          //console.log(pointSTring);
        }
        //动画
        //addAnimatorCar_le(carData);
        //animatorVector_le.animator.setEndTime(carData.result.length);//+"00"
        //animatorVector_circle_le.animator.setEndTime(carData.result.length);//+"00"
        //animatorVector_le.animator.start();
        //animatorVector_circle_le.animator.start();


        /*
        //TODO  经纬度接口失效时打开此应急数据 START
        points = [];
        if (carId == '402848586d0075ad016d1f83688d14d5') {
            //轨迹线路1
            points.push(new SuperMap.Geometry.Point(119.59264,34.569145));
            points.push(new SuperMap.Geometry.Point(119.59282,34.569027));
            points.push(new SuperMap.Geometry.Point(119.59308,34.568886));
            points.push(new SuperMap.Geometry.Point(119.59373,34.568558));
            points.push(new SuperMap.Geometry.Point(119.5945,34.568153));
            points.push(new SuperMap.Geometry.Point(119.59526,34.567696));
            points.push(new SuperMap.Geometry.Point(119.596115,34.567215));
            points.push(new SuperMap.Geometry.Point(119.59692,34.56676));
            points.push(new SuperMap.Geometry.Point(119.597626,34.566322));
            points.push(new SuperMap.Geometry.Point(119.59835,34.56588));
            points.push(new SuperMap.Geometry.Point(119.5991,34.565468));
            points.push(new SuperMap.Geometry.Point(119.59974,34.56519));
            points.push(new SuperMap.Geometry.Point(119.6003,34.564865));
            points.push(new SuperMap.Geometry.Point(119.600914,34.564476));
            points.push(new SuperMap.Geometry.Point(119.6014,34.56442));
            points.push(new SuperMap.Geometry.Point(119.60129,34.56454));
            points.push(new SuperMap.Geometry.Point(119.60091,34.564762));
            points.push(new SuperMap.Geometry.Point(119.600525,34.564976));
            points.push(new SuperMap.Geometry.Point(119.60033,34.565083));
            points.push(new SuperMap.Geometry.Point(119.60027,34.565098));
            points.push(new SuperMap.Geometry.Point(119.600044,34.565254));
            points.push(new SuperMap.Geometry.Point(119.60016,34.56549));
            points.push(new SuperMap.Geometry.Point(119.600365,34.56572));
            points.push(new SuperMap.Geometry.Point(119.60062,34.565945));
            points.push(new SuperMap.Geometry.Point(119.60091,34.56628));
            points.push(new SuperMap.Geometry.Point(119.60124,34.56668));
            points.push(new SuperMap.Geometry.Point(119.60164,34.567093));
            points.push(new SuperMap.Geometry.Point(119.60204,34.56756));
            points.push(new SuperMap.Geometry.Point(119.602455,34.568016));
            points.push(new SuperMap.Geometry.Point(119.602745,34.5683));
            points.push(new SuperMap.Geometry.Point(119.60303,34.568638));
            points.push(new SuperMap.Geometry.Point(119.60337,34.56908));
            points.push(new SuperMap.Geometry.Point(119.603806,34.56951));
            points.push(new SuperMap.Geometry.Point(119.60424,34.56998));
            points.push(new SuperMap.Geometry.Point(119.60464,34.5704));
            points.push(new SuperMap.Geometry.Point(119.605095,34.57082));
            points.push(new SuperMap.Geometry.Point(119.60537,34.571114));
            points.push(new SuperMap.Geometry.Point(119.60518,34.57114));
            points.push(new SuperMap.Geometry.Point(119.60501,34.570934));
            points.push(new SuperMap.Geometry.Point(119.60479,34.570705));
            points.push(new SuperMap.Geometry.Point(119.60469,34.570606));
            points.push(new SuperMap.Geometry.Point(119.60446,34.570274));
            points.push(new SuperMap.Geometry.Point(119.60416,34.569973));
            points.push(new SuperMap.Geometry.Point(119.603745,34.569523));
            points.push(new SuperMap.Geometry.Point(119.603294,34.569054));
            points.push(new SuperMap.Geometry.Point(119.60291,34.56861));
            points.push(new SuperMap.Geometry.Point(119.602776,34.568386));
            points.push(new SuperMap.Geometry.Point(119.6028,34.568295));
            points.push(new SuperMap.Geometry.Point(119.60319,34.568127));
            points.push(new SuperMap.Geometry.Point(119.60368,34.567837));
            points.push(new SuperMap.Geometry.Point(119.60397,34.567616));
            points.push(new SuperMap.Geometry.Point(119.603714,34.56745));
            points.push(new SuperMap.Geometry.Point(119.60335,34.567375));
            points.push(new SuperMap.Geometry.Point(119.60308,34.567146));
            points.push(new SuperMap.Geometry.Point(119.60332,34.566936));
            points.push(new SuperMap.Geometry.Point(119.60368,34.56689));
        } else if (carId == '402848586d0075ad016d1f7c9f0e14c6') {
            points.push(new SuperMap.Geometry.Point(119.592674,34.569057));
            points.push(new SuperMap.Geometry.Point(119.59317,34.568794));
            points.push(new SuperMap.Geometry.Point(119.593895,34.568428));
            points.push(new SuperMap.Geometry.Point(119.59487,34.5679));
            points.push(new SuperMap.Geometry.Point(119.59602,34.567265));
            points.push(new SuperMap.Geometry.Point(119.59731,34.566547));
            points.push(new SuperMap.Geometry.Point(119.59865,34.565823));
            points.push(new SuperMap.Geometry.Point(119.59989,34.565163));
            points.push(new SuperMap.Geometry.Point(119.60104,34.56451));
            points.push(new SuperMap.Geometry.Point(119.60222,34.56387));
            points.push(new SuperMap.Geometry.Point(119.60352,34.563137));
            points.push(new SuperMap.Geometry.Point(119.604965,34.562363));
            points.push(new SuperMap.Geometry.Point(119.60632,34.561626));
            points.push(new SuperMap.Geometry.Point(119.607346,34.56105));
            points.push(new SuperMap.Geometry.Point(119.6084,34.560474));
            points.push(new SuperMap.Geometry.Point(119.60947,34.55987));
            points.push(new SuperMap.Geometry.Point(119.61013,34.559566));
            points.push(new SuperMap.Geometry.Point(119.61031,34.55974));
            points.push(new SuperMap.Geometry.Point(119.61032,34.55976));
            points.push(new SuperMap.Geometry.Point(119.61068,34.560055));
            points.push(new SuperMap.Geometry.Point(119.6109,34.560326));
            points.push(new SuperMap.Geometry.Point(119.611115,34.56056));
            points.push(new SuperMap.Geometry.Point(119.611206,34.56068));
            points.push(new SuperMap.Geometry.Point(119.61113,34.561234));
        }  else if (carId == '402848586d0075ad016d1f7ba79714c1') {
            points.push(new SuperMap.Geometry.Point(119.59275,34.56899));
            points.push(new SuperMap.Geometry.Point(119.5932,34.56872));
            points.push(new SuperMap.Geometry.Point(119.59388,34.5684));
            points.push(new SuperMap.Geometry.Point(119.59463,34.567997));
            points.push(new SuperMap.Geometry.Point(119.59551,34.567497));
            points.push(new SuperMap.Geometry.Point(119.59652,34.566948));
            points.push(new SuperMap.Geometry.Point(119.59754,34.566387));
            points.push(new SuperMap.Geometry.Point(119.59845,34.565884));
            points.push(new SuperMap.Geometry.Point(119.5993,34.56542));
            points.push(new SuperMap.Geometry.Point(119.60005,34.565014));
            points.push(new SuperMap.Geometry.Point(119.60088,34.56456));
            points.push(new SuperMap.Geometry.Point(119.60167,34.56413));
            points.push(new SuperMap.Geometry.Point(119.60196,34.563908));
            points.push(new SuperMap.Geometry.Point(119.601974,34.563805));
            points.push(new SuperMap.Geometry.Point(119.60192,34.56371));
            points.push(new SuperMap.Geometry.Point(119.60164,34.563435));
            points.push(new SuperMap.Geometry.Point(119.60141,34.56318));
            points.push(new SuperMap.Geometry.Point(119.601105,34.562695));
            points.push(new SuperMap.Geometry.Point(119.60096,34.56251));
            points.push(new SuperMap.Geometry.Point(119.60079,34.562313));
            points.push(new SuperMap.Geometry.Point(119.6006,34.562103));
            points.push(new SuperMap.Geometry.Point(119.60046,34.56187));
            points.push(new SuperMap.Geometry.Point(119.600586,34.561684));
            points.push(new SuperMap.Geometry.Point(119.60086,34.56154));
            points.push(new SuperMap.Geometry.Point(119.60115,34.561394));
            points.push(new SuperMap.Geometry.Point(119.60141,34.561253));
            points.push(new SuperMap.Geometry.Point(119.601715,34.56126));
            points.push(new SuperMap.Geometry.Point(119.60198,34.561344));
            points.push(new SuperMap.Geometry.Point(119.60218,34.56133));
            points.push(new SuperMap.Geometry.Point(119.602165,34.5614));
            points.push(new SuperMap.Geometry.Point(119.60212,34.561386));
        } else if (carId == '402848586d0075ad016d1f75e36214b9') {
            points.push(new SuperMap.Geometry.Point(119.59277,34.569008));
            points.push(new SuperMap.Geometry.Point(119.59324,34.568752));
            points.push(new SuperMap.Geometry.Point(119.593834,34.56845));
            points.push(new SuperMap.Geometry.Point(119.59452,34.568077));
            points.push(new SuperMap.Geometry.Point(119.59528,34.567654));
            points.push(new SuperMap.Geometry.Point(119.59618,34.567158));
            points.push(new SuperMap.Geometry.Point(119.59718,34.5666));
            points.push(new SuperMap.Geometry.Point(119.59826,34.56601));
            points.push(new SuperMap.Geometry.Point(119.599304,34.565437));
            points.push(new SuperMap.Geometry.Point(119.60019,34.564926));
            points.push(new SuperMap.Geometry.Point(119.60099,34.56446));
            points.push(new SuperMap.Geometry.Point(119.60145,34.56431));
            points.push(new SuperMap.Geometry.Point(119.601295,34.564487));
            points.push(new SuperMap.Geometry.Point(119.601006,34.564644));
            points.push(new SuperMap.Geometry.Point(119.60058,34.564877));
            points.push(new SuperMap.Geometry.Point(119.60016,34.56507));
            points.push(new SuperMap.Geometry.Point(119.600075,34.565372));
            points.push(new SuperMap.Geometry.Point(119.60044,34.565784));
            points.push(new SuperMap.Geometry.Point(119.600685,34.56599));
            points.push(new SuperMap.Geometry.Point(119.60095,34.56625));
        } else if (carId == '402848586d0075ad016d1f6f121a14a6') {
            points.push(new SuperMap.Geometry.Point(119.59306,34.569042));
            points.push(new SuperMap.Geometry.Point(119.593735,34.5687));
            points.push(new SuperMap.Geometry.Point(119.59455,34.568226));
            points.push(new SuperMap.Geometry.Point(119.59555,34.56759));
            points.push(new SuperMap.Geometry.Point(119.59664,34.566933));
            points.push(new SuperMap.Geometry.Point(119.59782,34.566296));
            points.push(new SuperMap.Geometry.Point(119.59904,34.56565));
            points.push(new SuperMap.Geometry.Point(119.60028,34.56498));
            points.push(new SuperMap.Geometry.Point(119.60152,34.5643));
            points.push(new SuperMap.Geometry.Point(119.60282,34.563656));
            points.push(new SuperMap.Geometry.Point(119.60419,34.56292));
            points.push(new SuperMap.Geometry.Point(119.60559,34.562115));
            points.push(new SuperMap.Geometry.Point(119.60677,34.561436));
            points.push(new SuperMap.Geometry.Point(119.60784,34.56084));
            points.push(new SuperMap.Geometry.Point(119.608894,34.56027));
            points.push(new SuperMap.Geometry.Point(119.60985,34.55977));
            points.push(new SuperMap.Geometry.Point(119.61026,34.55961));
            points.push(new SuperMap.Geometry.Point(119.61043,34.559772));
            points.push(new SuperMap.Geometry.Point(119.61045,34.55984));
        } else {
            points.push(new SuperMap.Geometry.Point(119.59306,34.569042));
            points.push(new SuperMap.Geometry.Point(119.593735,34.5687));
            points.push(new SuperMap.Geometry.Point(119.59455,34.568226));
            points.push(new SuperMap.Geometry.Point(119.59555,34.56759));
            points.push(new SuperMap.Geometry.Point(119.59664,34.566933));
            points.push(new SuperMap.Geometry.Point(119.59782,34.566296));
            points.push(new SuperMap.Geometry.Point(119.59904,34.56565));
            points.push(new SuperMap.Geometry.Point(119.60028,34.56498));
            points.push(new SuperMap.Geometry.Point(119.60152,34.5643));
            points.push(new SuperMap.Geometry.Point(119.60282,34.563656));
            points.push(new SuperMap.Geometry.Point(119.60419,34.56292));
            points.push(new SuperMap.Geometry.Point(119.60559,34.562115));
            points.push(new SuperMap.Geometry.Point(119.60677,34.561436));
            points.push(new SuperMap.Geometry.Point(119.60784,34.56084));
            points.push(new SuperMap.Geometry.Point(119.608894,34.56027));
            points.push(new SuperMap.Geometry.Point(119.60985,34.55977));
            points.push(new SuperMap.Geometry.Point(119.61026,34.55961));
            points.push(new SuperMap.Geometry.Point(119.61043,34.559772));
            points.push(new SuperMap.Geometry.Point(119.61045,34.55984));
        }

        //TODO  经纬度接口失效时打开此应急数据 END
        //*/
        var carline = points;
        // 显示线条首尾
        var size = new SuperMap.Size(20, 17);
        var offset = new SuperMap.Pixel(0, -size.h);
        var icon_flgstart = new SuperMap.Icon('../javascript/gis/images/start.png', size, offset);
        var icon_flgend = new SuperMap.Icon('../javascript/gis/images/end.png', size, offset);

        if (carline) {
          //初始化标记覆盖物类
          var pStart = carline[0];
          var pEnd = carline[carline.length - 1];
          marker_start = new SuperMap.Marker(new SuperMap.LonLat(
            pStart.x, pStart.y), icon_flgstart);
          marker_end = new SuperMap.Marker(new SuperMap.LonLat(pEnd.x,
            pEnd.y), icon_flgend);
          //添加覆盖物到标记图层
          marker_sdd.addMarker(marker_start);
          //添加覆盖物到标记图层
          marker_sdd.addMarker(marker_end);
          // 显示线条
          var line1 = new SuperMap.Geometry.LineString(carline);
          var linecVector = new SuperMap.Feature.Vector(line1);
          linecVector.style = {
            strokeColor: "#fef205",
            strokeWidth: 3,
          };

          vector_oldPoint.addFeatures([linecVector]);
          map.addLayers([vector_oldPoint]);
        }

      } else {
        //TODO  经纬度接口失效时打开此应急数据 START
        points = [];
        if (carId == '402848586d0075ad016d1f83688d14d5') {
          //轨迹线路1
          points.push(new SuperMap.Geometry.Point(119.59264, 34.569145));
          points.push(new SuperMap.Geometry.Point(119.59282, 34.569027));
          points.push(new SuperMap.Geometry.Point(119.59308, 34.568886));
          points.push(new SuperMap.Geometry.Point(119.59373, 34.568558));
          points.push(new SuperMap.Geometry.Point(119.5945, 34.568153));
          points.push(new SuperMap.Geometry.Point(119.59526, 34.567696));
          points.push(new SuperMap.Geometry.Point(119.596115, 34.567215));
          points.push(new SuperMap.Geometry.Point(119.59692, 34.56676));
          points.push(new SuperMap.Geometry.Point(119.597626, 34.566322));
          points.push(new SuperMap.Geometry.Point(119.59835, 34.56588));
          points.push(new SuperMap.Geometry.Point(119.5991, 34.565468));
          points.push(new SuperMap.Geometry.Point(119.59974, 34.56519));
          points.push(new SuperMap.Geometry.Point(119.6003, 34.564865));
          points.push(new SuperMap.Geometry.Point(119.600914, 34.564476));
          points.push(new SuperMap.Geometry.Point(119.6014, 34.56442));
          points.push(new SuperMap.Geometry.Point(119.60129, 34.56454));
          points.push(new SuperMap.Geometry.Point(119.60091, 34.564762));
          points.push(new SuperMap.Geometry.Point(119.600525, 34.564976));
          points.push(new SuperMap.Geometry.Point(119.60033, 34.565083));
          points.push(new SuperMap.Geometry.Point(119.60027, 34.565098));
          points.push(new SuperMap.Geometry.Point(119.600044, 34.565254));
          points.push(new SuperMap.Geometry.Point(119.60016, 34.56549));
          points.push(new SuperMap.Geometry.Point(119.600365, 34.56572));
          points.push(new SuperMap.Geometry.Point(119.60062, 34.565945));
          points.push(new SuperMap.Geometry.Point(119.60091, 34.56628));
          points.push(new SuperMap.Geometry.Point(119.60124, 34.56668));
          points.push(new SuperMap.Geometry.Point(119.60164, 34.567093));
          points.push(new SuperMap.Geometry.Point(119.60204, 34.56756));
          points.push(new SuperMap.Geometry.Point(119.602455, 34.568016));
          points.push(new SuperMap.Geometry.Point(119.602745, 34.5683));
          points.push(new SuperMap.Geometry.Point(119.60303, 34.568638));
          points.push(new SuperMap.Geometry.Point(119.60337, 34.56908));
          points.push(new SuperMap.Geometry.Point(119.603806, 34.56951));
          points.push(new SuperMap.Geometry.Point(119.60424, 34.56998));
          points.push(new SuperMap.Geometry.Point(119.60464, 34.5704));
          points.push(new SuperMap.Geometry.Point(119.605095, 34.57082));
          points.push(new SuperMap.Geometry.Point(119.60537, 34.571114));
          points.push(new SuperMap.Geometry.Point(119.60518, 34.57114));
          points.push(new SuperMap.Geometry.Point(119.60501, 34.570934));
          points.push(new SuperMap.Geometry.Point(119.60479, 34.570705));
          points.push(new SuperMap.Geometry.Point(119.60469, 34.570606));
          points.push(new SuperMap.Geometry.Point(119.60446, 34.570274));
          points.push(new SuperMap.Geometry.Point(119.60416, 34.569973));
          points.push(new SuperMap.Geometry.Point(119.603745, 34.569523));
          points.push(new SuperMap.Geometry.Point(119.603294, 34.569054));
          points.push(new SuperMap.Geometry.Point(119.60291, 34.56861));
          points.push(new SuperMap.Geometry.Point(119.602776, 34.568386));
          points.push(new SuperMap.Geometry.Point(119.6028, 34.568295));
          points.push(new SuperMap.Geometry.Point(119.60319, 34.568127));
          points.push(new SuperMap.Geometry.Point(119.60368, 34.567837));
          points.push(new SuperMap.Geometry.Point(119.60397, 34.567616));
          points.push(new SuperMap.Geometry.Point(119.603714, 34.56745));
          points.push(new SuperMap.Geometry.Point(119.60335, 34.567375));
          points.push(new SuperMap.Geometry.Point(119.60308, 34.567146));
          points.push(new SuperMap.Geometry.Point(119.60332, 34.566936));
          points.push(new SuperMap.Geometry.Point(119.60368, 34.56689));
        } else if (carId == '402848586d0075ad016d1f7c9f0e14c6') {
          points.push(new SuperMap.Geometry.Point(119.592674, 34.569057));
          points.push(new SuperMap.Geometry.Point(119.59317, 34.568794));
          points.push(new SuperMap.Geometry.Point(119.593895, 34.568428));
          points.push(new SuperMap.Geometry.Point(119.59487, 34.5679));
          points.push(new SuperMap.Geometry.Point(119.59602, 34.567265));
          points.push(new SuperMap.Geometry.Point(119.59731, 34.566547));
          points.push(new SuperMap.Geometry.Point(119.59865, 34.565823));
          points.push(new SuperMap.Geometry.Point(119.59989, 34.565163));
          points.push(new SuperMap.Geometry.Point(119.60104, 34.56451));
          points.push(new SuperMap.Geometry.Point(119.60222, 34.56387));
          points.push(new SuperMap.Geometry.Point(119.60352, 34.563137));
          points.push(new SuperMap.Geometry.Point(119.604965, 34.562363));
          points.push(new SuperMap.Geometry.Point(119.60632, 34.561626));
          points.push(new SuperMap.Geometry.Point(119.607346, 34.56105));
          points.push(new SuperMap.Geometry.Point(119.6084, 34.560474));
          points.push(new SuperMap.Geometry.Point(119.60947, 34.55987));
          points.push(new SuperMap.Geometry.Point(119.61013, 34.559566));
          points.push(new SuperMap.Geometry.Point(119.61031, 34.55974));
          points.push(new SuperMap.Geometry.Point(119.61032, 34.55976));
          points.push(new SuperMap.Geometry.Point(119.61068, 34.560055));
          points.push(new SuperMap.Geometry.Point(119.6109, 34.560326));
          points.push(new SuperMap.Geometry.Point(119.611115, 34.56056));
          points.push(new SuperMap.Geometry.Point(119.611206, 34.56068));
          points.push(new SuperMap.Geometry.Point(119.61113, 34.561234));
        } else if (carId == '402848586d0075ad016d1f7ba79714c1') {
          points.push(new SuperMap.Geometry.Point(119.59275, 34.56899));
          points.push(new SuperMap.Geometry.Point(119.5932, 34.56872));
          points.push(new SuperMap.Geometry.Point(119.59388, 34.5684));
          points.push(new SuperMap.Geometry.Point(119.59463, 34.567997));
          points.push(new SuperMap.Geometry.Point(119.59551, 34.567497));
          points.push(new SuperMap.Geometry.Point(119.59652, 34.566948));
          points.push(new SuperMap.Geometry.Point(119.59754, 34.566387));
          points.push(new SuperMap.Geometry.Point(119.59845, 34.565884));
          points.push(new SuperMap.Geometry.Point(119.5993, 34.56542));
          points.push(new SuperMap.Geometry.Point(119.60005, 34.565014));
          points.push(new SuperMap.Geometry.Point(119.60088, 34.56456));
          points.push(new SuperMap.Geometry.Point(119.60167, 34.56413));
          points.push(new SuperMap.Geometry.Point(119.60196, 34.563908));
          points.push(new SuperMap.Geometry.Point(119.601974, 34.563805));
          points.push(new SuperMap.Geometry.Point(119.60192, 34.56371));
          points.push(new SuperMap.Geometry.Point(119.60164, 34.563435));
          points.push(new SuperMap.Geometry.Point(119.60141, 34.56318));
          points.push(new SuperMap.Geometry.Point(119.601105, 34.562695));
          points.push(new SuperMap.Geometry.Point(119.60096, 34.56251));
          points.push(new SuperMap.Geometry.Point(119.60079, 34.562313));
          points.push(new SuperMap.Geometry.Point(119.6006, 34.562103));
          points.push(new SuperMap.Geometry.Point(119.60046, 34.56187));
          points.push(new SuperMap.Geometry.Point(119.600586, 34.561684));
          points.push(new SuperMap.Geometry.Point(119.60086, 34.56154));
          points.push(new SuperMap.Geometry.Point(119.60115, 34.561394));
          points.push(new SuperMap.Geometry.Point(119.60141, 34.561253));
          points.push(new SuperMap.Geometry.Point(119.601715, 34.56126));
          points.push(new SuperMap.Geometry.Point(119.60198, 34.561344));
          points.push(new SuperMap.Geometry.Point(119.60218, 34.56133));
          points.push(new SuperMap.Geometry.Point(119.602165, 34.5614));
          points.push(new SuperMap.Geometry.Point(119.60212, 34.561386));
        } else if (carId == '402848586d0075ad016d1f75e36214b9') {
          points.push(new SuperMap.Geometry.Point(119.59277, 34.569008));
          points.push(new SuperMap.Geometry.Point(119.59324, 34.568752));
          points.push(new SuperMap.Geometry.Point(119.593834, 34.56845));
          points.push(new SuperMap.Geometry.Point(119.59452, 34.568077));
          points.push(new SuperMap.Geometry.Point(119.59528, 34.567654));
          points.push(new SuperMap.Geometry.Point(119.59618, 34.567158));
          points.push(new SuperMap.Geometry.Point(119.59718, 34.5666));
          points.push(new SuperMap.Geometry.Point(119.59826, 34.56601));
          points.push(new SuperMap.Geometry.Point(119.599304, 34.565437));
          points.push(new SuperMap.Geometry.Point(119.60019, 34.564926));
          points.push(new SuperMap.Geometry.Point(119.60099, 34.56446));
          points.push(new SuperMap.Geometry.Point(119.60145, 34.56431));
          points.push(new SuperMap.Geometry.Point(119.601295, 34.564487));
          points.push(new SuperMap.Geometry.Point(119.601006, 34.564644));
          points.push(new SuperMap.Geometry.Point(119.60058, 34.564877));
          points.push(new SuperMap.Geometry.Point(119.60016, 34.56507));
          points.push(new SuperMap.Geometry.Point(119.600075, 34.565372));
          points.push(new SuperMap.Geometry.Point(119.60044, 34.565784));
          points.push(new SuperMap.Geometry.Point(119.600685, 34.56599));
          points.push(new SuperMap.Geometry.Point(119.60095, 34.56625));
        } else if (carId == '402848586d0075ad016d1f6f121a14a6') {
          points.push(new SuperMap.Geometry.Point(119.59306, 34.569042));
          points.push(new SuperMap.Geometry.Point(119.593735, 34.5687));
          points.push(new SuperMap.Geometry.Point(119.59455, 34.568226));
          points.push(new SuperMap.Geometry.Point(119.59555, 34.56759));
          points.push(new SuperMap.Geometry.Point(119.59664, 34.566933));
          points.push(new SuperMap.Geometry.Point(119.59782, 34.566296));
          points.push(new SuperMap.Geometry.Point(119.59904, 34.56565));
          points.push(new SuperMap.Geometry.Point(119.60028, 34.56498));
          points.push(new SuperMap.Geometry.Point(119.60152, 34.5643));
          points.push(new SuperMap.Geometry.Point(119.60282, 34.563656));
          points.push(new SuperMap.Geometry.Point(119.60419, 34.56292));
          points.push(new SuperMap.Geometry.Point(119.60559, 34.562115));
          points.push(new SuperMap.Geometry.Point(119.60677, 34.561436));
          points.push(new SuperMap.Geometry.Point(119.60784, 34.56084));
          points.push(new SuperMap.Geometry.Point(119.608894, 34.56027));
          points.push(new SuperMap.Geometry.Point(119.60985, 34.55977));
          points.push(new SuperMap.Geometry.Point(119.61026, 34.55961));
          points.push(new SuperMap.Geometry.Point(119.61043, 34.559772));
          points.push(new SuperMap.Geometry.Point(119.61045, 34.55984));
        } else {
          points.push(new SuperMap.Geometry.Point(119.59306, 34.569042));
          points.push(new SuperMap.Geometry.Point(119.593735, 34.5687));
          points.push(new SuperMap.Geometry.Point(119.59455, 34.568226));
          points.push(new SuperMap.Geometry.Point(119.59555, 34.56759));
          points.push(new SuperMap.Geometry.Point(119.59664, 34.566933));
          points.push(new SuperMap.Geometry.Point(119.59782, 34.566296));
          points.push(new SuperMap.Geometry.Point(119.59904, 34.56565));
          points.push(new SuperMap.Geometry.Point(119.60028, 34.56498));
          points.push(new SuperMap.Geometry.Point(119.60152, 34.5643));
          points.push(new SuperMap.Geometry.Point(119.60282, 34.563656));
          points.push(new SuperMap.Geometry.Point(119.60419, 34.56292));
          points.push(new SuperMap.Geometry.Point(119.60559, 34.562115));
          points.push(new SuperMap.Geometry.Point(119.60677, 34.561436));
          points.push(new SuperMap.Geometry.Point(119.60784, 34.56084));
          points.push(new SuperMap.Geometry.Point(119.608894, 34.56027));
          points.push(new SuperMap.Geometry.Point(119.60985, 34.55977));
          points.push(new SuperMap.Geometry.Point(119.61026, 34.55961));
          points.push(new SuperMap.Geometry.Point(119.61043, 34.559772));
          points.push(new SuperMap.Geometry.Point(119.61045, 34.55984));
        }
        //TODO  经纬度接口失效时打开此应急数据 END

        var carline = points;
        // 显示线条首尾
        var size = new SuperMap.Size(20, 17);
        var offset = new SuperMap.Pixel(0, -size.h);
        var icon_flgstart = new SuperMap.Icon('../javascript/gis/images/start.png', size, offset);
        var icon_flgend = new SuperMap.Icon('../javascript/gis/images/end.png', size, offset);

        if (carline) {
          //初始化标记覆盖物类
          var pStart = carline[0];
          var pEnd = carline[carline.length - 1];
          marker_start = new SuperMap.Marker(new SuperMap.LonLat(
            pStart.x, pStart.y), icon_flgstart);
          marker_end = new SuperMap.Marker(new SuperMap.LonLat(pEnd.x,
            pEnd.y), icon_flgend);
          //添加覆盖物到标记图层
          marker_sdd.addMarker(marker_start);
          //添加覆盖物到标记图层
          marker_sdd.addMarker(marker_end);
          // 显示线条
          var line1 = new SuperMap.Geometry.LineString(carline);
          var linecVector = new SuperMap.Feature.Vector(line1);
          linecVector.style = {
            strokeColor: "#fef205",
            strokeWidth: 3,
          };

          vector_oldPoint.addFeatures([linecVector]);
          map.addLayers([vector_oldPoint]);
        }

      }

    }
  });


}

function addAnimatorCar_le(carData) {
  var vectorFea1 = [];
  var vectorFeaC1 = [];

  //光圈
  for (var i = 0; i < carData.result.length; i++) {
    var data = carData.result[i];
    //纬度
    var lat = data.lat;
    // 经度
    var lng = data.lng;

    var pointArr1 = new SuperMap.Geometry.Point(lng, lat);
    var times = parseInt(i); //+"00"
    var PointsVector = new SuperMap.Feature.Vector(pointArr1, {
      FEATUREID: 0,
      TIME: times
    }, { //style
      fillColor: "#ffae00",
      pointRadius: 8
    });

    vectorFeaC1.push(PointsVector)
  }
  //animatorVector_circle_le.addFeatures(vectorFeaC1);
  //map.addLayer(animatorVector_circle_le);

  //车辆
  for (var i = 0; i < carData.result.length; i++) {
    var data = carData.result[i];
    //纬度
    var lat = data.lat;
    // 经度
    var lng = data.lng;

    var pointArr1 = new SuperMap.Geometry.Point(lng, lat);
    var times = parseInt(i); //+"00"
    var PointsVector = new SuperMap.Feature.Vector(pointArr1, {
      FEATUREID: 0,
      TIME: times
    }, { //style
      externalGraphic: "../javascript/gis/images/truck_new2.png",
      graphicHeight: 22,
      graphicWidth: 22,
    });

    vectorFea1.push(PointsVector)
  }
  //animatorVector_le.addFeatures(vectorFea1);
  //map.addLayer(animatorVector_le);

}










function closeInfoWin_le() {
  if (infowin_le) {
    try {
      infowin_le.hide();
      infowin_le.destroy();
    } catch (e) { }
  }
}



function addLayer3() {
  map.addLayers([layerDay, markers, vector, marker_oldPoint, vector_oldPoint, marker_sdd, animatorVector_circle_le, animatorVector_le]);
  layerNight = new SuperMap.Layer.TiledDynamicRESTLayer("World+Map", url1, { transparent: true, cacheEnabled: true });
  layerNight.events.on({ "layerInitialized": addLayer4 });

}

function addLayer4() {
  layerDay.isBaseLayer = true;
  layerNight.isBaseLayer = true;
  map.addLayers([layerDay, layerNight]);
  map.setCenter(new SuperMap.LonLat(119.603912, 34.56077), 5);
  if (url == url2) {
    replaceURL_le(2);
  }
}

function replaceURL_le(f) {
  if (f == 2) {
    layerDay.setVisibility(false);
    layerNight.setVisibility(true);
    map.setBaseLayer(layerNight);
    bt = true;
    // 处理session
    setSession_le(2);
  } else if (f == 1) {
    layerDay.setVisibility(true);
    layerNight.setVisibility(false);
    map.setBaseLayer(layerDay);
    bt = false;
    // 处理session
    setSession_le(1);
  }
}

//设置session
function setSession_le(f) {
  $.ajax({
    url: '../bigScreen/replaceURL/' + f,
    success: function () {
      console.log("请求成功!");
    },
    error: function () { //请求失败处理函数
      console.log("请求失败!");
    }
  });
}

function getSpilitFourData(codeArr) {
  //每4个数据分成一组的写法
  var len = codeArr.length;
  var result = [];
  var sliceNum = 3;
  for (var i = 0; i < len / sliceNum; i++) {
    result.push(codeArr.slice(i * sliceNum, (i + 1) * sliceNum))
  }
  for (var j = 0; j < (sliceNum - len % sliceNum); j++) {
    result[result.length - 1].push({})
  }
  return result;
}

/************危化品车辆地图模块***end***********************/

//一些关闭按钮
function closeDiv() {
  $(".car-det").css("display", "none");
}

function getCarNum() {
  //判断其他的存在就关上
  if (document.getElementById("dangerous-det").style.display == "block") {
    $("#dangerous-det").css("display", "none");
  }
  //if(document.getElementById("GISDIV").style.display == "block"){
  //	$(".GISDIV").css("display","none");
  //}
  if (document.getElementById("carAway").style.display == "block") {
    $("#carAway").css("display", "none");
  }


  $(".carNumDiv").css("display", "block");

};


function closeCarDiv() {
  $(".carNumDiv").css("display", "none");
}
var gisIndex = 0;

// function openGis() {
//     initSmallMap();
// }

function closePath() {
  if (marker_oldPoint != null) {
    marker_oldPoint.clearMarkers();
  } else {
    // 去除原来的路线
    marker_oldPoint = new SuperMap.Layer.Markers("marker_oldPoint");
  }
  if (vector_oldPoint != null) {
    // 去除汽车标记
    vector_oldPoint.removeAllFeatures();
  } else {
    vector_oldPoint = new SuperMap.Layer.Vector("vector_oldPoint");
  }
  //map.addLayers([vector_oldPoint]);

  $(".GISDIV").css("display", "none");
}

function openDanpoints() {
  //判断其他的存在就关上
  if (document.getElementById("carNumDiv").style.display == "block") {
    $(".carNumDiv").css("display", "none");
  }
  //if(document.getElementById("GISDIV").style.display == "block"){
  //	$(".GISDIV").css("display","none");
  //}
  if (document.getElementById("carAway").style.display == "block") {
    $("#carAway").css("display", "none");
  }

  $("#dangerous-det").css("display", "block");
}

function closeDanDiv() {
  $("#dangerous-det").css("display", "none");
}

function openCarAway() {
  //判断其他的存在就关上
  if (document.getElementById("dangerous-det").style.display == "block") {
    $("#dangerous-det").css("display", "none");
  }
  ////if(document.getElementById("GISDIV").style.display == "block"){
  //	$(".GISDIV").css("display","none");
  //}
  if (document.getElementById("carNumDiv").style.display == "block") {
    $(".carNumDiv").css("display", "none");
  }

  $("#carAway").css("display", "block");
}

function closeCarAwayDiv() {
  $("#carAway").css("display", "none");
}

function closeCarOutTimeDiv() {
  $("#car-outTime").css("display", "none");
  closeDiv();
}

function carOutTimeView() {
  $("#car-outTime").css("display", "block");
}

//展示video列表
function getVideo_table() {
  if (document.getElementById("prowledTeam").style.display == "block") {
    $("#prowledTeam").css("display", "none");
    closeProw2();
  }
  if (document.getElementById("prowledVideo").style.display == "block") {
    $("#prowledVideo").css("display", "none");
  }
  if (document.getElementById("prowledPath").style.display == "block") {
    $("#prowledPath").css("display", "none");
  }
  if (document.getElementById("prowledContent").style.display == "block") {
    $("#prowledContent").css("display", "none");
  }

  $(".videoList").css("display", "block");

}


//巡查内容
function prowledContent() {
  //判断其他的存在就关上
  if (document.getElementById("prowledTeam").style.display == "block") {
    $("#prowledTeam").css("display", "none");
    closeProw2();
  }
  if (document.getElementById("prowledVideo").style.display == "block") {
    $("#prowledVideo").css("display", "none");
  }
  if (document.getElementById("prowledPath").style.display == "block") {
    $("#prowledPath").css("display", "none");
  }
  if (document.getElementById("videoList").style.display == "block") {
    $("#videoList").css("display", "none");
  }

  $(".prowledContent").css("display", "block");
  $("#contenteamJiaotong").css("display", "block");
  $("#contenteamgongcheng").css("display", "block");
  $("#contenteamweijian").css("display", "block");
  $("#contenteamshizheng").css("display", "block");
  $("#contenteamhuangjing").css("display", "block");
  $("#contenteamanfang").css("display", "block");
}

//巡查队伍
function prowledTeam() {
  if (document.getElementById("prowledContent").style.display == "block") {
    $("#prowledContent").css("display", "none");
    closeProw1();
  }
  if (document.getElementById("prowledVideo").style.display == "block") {
    $("#prowledVideo").css("display", "none");
  }
  if (document.getElementById("prowledPath").style.display == "block") {
    $("#prowledPath").css("display", "none");
  }
  if (document.getElementById("videoList").style.display == "block") {
    $("#videoList").css("display", "none");
  }


  $(".prowledTeam").css("display", "block");
  // 巡查队伍各链接
  $("#teamJiaojin").css("display", "block")
  $("#teamfangy1").css("display", "block");
  $("#teamshih1").css("display", "block");
  $("#teamchengguan").css("display", "block")
  $("#teamguihua").css("display", "block");
  $("#teamfangy2").css("display", "block");
  $("#teamshih2").css("display", "block");
  $("#teamhuangbao").css("display", "block");
  $("#teamgongan").css("display", "block");
  $("#team186").css("display", "block");
}

//巡查视频
function prowledVideo() {
  if (document.getElementById("prowledContent").style.display == "block") {
    closeProw1();
  }
  if (document.getElementById("prowledTeam").style.display == "block") {
    closeProw2();
  }
  if (document.getElementById("prowledPath").style.display == "block") {
    closeProw4();
  }
  if (document.getElementById("videoList").style.display == "block") {
    $("#videoList").css("display", "none");
  }

  $(".prowledVideo").css("display", "block")
}



function closeProw1() {
  $(".prowledContent").css("display", "none");
  $("#contenteamJiaotong").css("display", "none");
  $("#contenteamgongcheng").css("display", "none");
  $("#contenteamweijian").css("display", "none");
  $("#contenteamshizheng").css("display", "none");
  $("#contenteamhuangjing").css("display", "none");
  $("#contenteamanfang").css("display", "none");
  teamContentDisplay();
}

function closeProw2() {
  $(".prowledTeam").css("display", "none");
  $("#car-det-new").css("display", "none");
  $("#teamJiaojin").css("display", "none");
  $("#teamfangy1").css("display", "none");
  $("#teamshih1").css("display", "none");
  $("#teamchengguan").css("display", "none");
  $("#teamguihua").css("display", "none");
  $("#teamfangy2").css("display", "none");
  $("#teamshih2").css("display", "none");
  $("#teamhuangbao").css("display", "none");
  $("#teamgongan").css("display", "none");
  $("#team186").css("display", "none");
}

function closeProw3() {
  $(".prowledVideo").css("display", "none")
}

function closeProw4() {
  $(".prowledPath").css("display", "none")
}

function closeVideo() {
  $(".videoList").css("display", "none")
}

// 交警大队信息
var teamPeople1 = ["郑建乐", "蒋东", "艾洪亮", "徐海波",
  "张洪强", "董华文", "陈先林", "何维明",
  "章砚捷"
];
var teamTel1 = ["15861237317", "15861237711", "15861237309", "15861291852",
  "15861237301", "15861237153", "15861237360", "15861238615",
  "18888134152"
];
// 城管大队
var teamPeople2 = ["王胜利 ", "李勤 ", "张继林", "尹欢欢", "王志刚 ",
  "柳荫林 ", "王永军", "朱文艺 ", "宋雅林",
  "徐进丽", "吕士祥"
];
var teamTel2 = ["13675290061 598172", "13675290091 599091", " 15961300195 597961", " 13675297811 598293",
  "13905132570 598258 ", "13675290038 598236", " 13675290070 598202", "13675290212 598239",
  " 13905133817 598265", "15189012372 554512", "15805139595 535175"
];
// 公安分局
var teamPeople3 = ["田春雷", "章驰勇", "赵元辉", "马兴成",
  "刘洋", "卢思伟", "王统来", "张波",
  "王超", "阎晓凡"
];
var teamTel3 = ["13805139080", "13505136886", "15861238880", "15861236098",
  "15061311590", "15861236838", "15861237772", "15861238878",
  "15861238772", "15861238919"
];
// 环保局
var teamPeople4 = ["金婷", "陈厚臻", "杨旭", "孙学建",
  "侯旭东", "姜坤 ", "张辉"
];
var teamTel4 = ["13912167158", "15052499005", "15150990425", "18261327772",
  "13951256157 ", "18896610895", "15950730235"
];

// 石化公司
var teamPeople5 = ["刁松波", "姜苏", "刘春龙", "王晨晨",
  "陈睿清", "江金涛"
];
var teamTel5 = ["15961375831", "15161378622", "13812333746", "18362436201",
  "18861345268", "13851286728"
];

// 规划建设局
var teamPeople6 = ["潘明 ", "王兴", "李力", "杨瑞"];
var teamTel6 = ["18036623529", "18360638102", "13812347535", "18805137220"];

// 方洋集团
var teamPeople7 = ["于劲松", "侯绪波", "聂磊", "范胜旺"];
var teamTel7 = ["13675292325", "18761342580", "13815653337", "13815631976"];

// 186大队
var teamPeople8 = ["聂磊", "周振河", "侯绪波", "孙金周",
  "刘修勇", "欧安祥", "杨锦全", "江雨峰",
  "蒋洪峰", "谢江涛", "王志银", "肖坚"
];
var teamTel8 = ["13815653337", "15705158988", "18761342580", "13675292719",
  "13775586682", "13775429779", "15150935417", "13655127131",
  "13851266321", "18352810788", "18360363490", "13851278700"
];

//隐藏巡查队伍设置说明：
function teamTextDisplay() {

  $("#car-det-new").css("display", "none");
}
// 展示巡查队伍设置说明：
function setTeamText(id) {

  $("#car-det-new").css("display", "block");
  var teamPeople = teamPeople1;
  var teamTel = teamTel1;

  if (id == 1) {
    teamPeople = teamPeople1;
    teamTel = teamTel1;
    $("#teanmName").html("&nbsp;&nbsp;交警大队：");
    $("#teanmText").html("&nbsp;&nbsp;&nbsp;&nbsp;主要负责石化基地封闭区域内道路交通安全管理，查处道路交通安全违法行为，处理道路交通事故，会同有关方面实行危化品专用道路、专用车道和限时限速行驶措施及开展道路交安设施建设工作。");
  } else if (id == 2) {
    teamPeople = teamPeople2;
    teamTel = teamTel2;
    $("#teanmName").html("&nbsp;&nbsp;城管大队：");
    $("#teanmText").html("&nbsp;&nbsp;&nbsp;&nbsp;主要负责石化基地封闭区域综合执法管理，包括违章建筑清理、非法加油和流动摊点治理，以及专项综合执法活动。");
  } else if (id == 3) {
    teamPeople = teamPeople3;
    teamTel = teamTel3;
    $("#teanmName").html("&nbsp;&nbsp;公安分局：");
    $("#teanmText").html("&nbsp;&nbsp;&nbsp;&nbsp;主要负责石化基地封闭区域治安管理，包括治安、维稳、专项整治和重大活动保障等任务，对封闭围网卡口管理给予指导。");
  } else if (id == 4) {
    teamPeople = teamPeople4;
    teamTel = teamTel4;
    $("#teanmName").html("&nbsp;&nbsp;环境保护局：");
    $("#teanmText").html("&nbsp;&nbsp;&nbsp;&nbsp;主要负责对石化基地封闭区域环境管理，对入园企业进行环境监管。");
  } else if (id == 5) {
    teamPeople = teamPeople5;
    teamTel = teamTel5;
    $("#teanmName").html("&nbsp;&nbsp;石化公司：");
    $("#teanmText").html("&nbsp;&nbsp;&nbsp;&nbsp;主要负责石化基地封闭区域内所属公用设施运营管理；<br/>&nbsp;&nbsp;&nbsp;&nbsp;负责委托第三方专业保安机构开展卡口、物业和培训管理，重点对进出车辆和人员进行管理；<br/>&nbsp;&nbsp;&nbsp;&nbsp;负责开展生产区域和施工区域、危化品车辆和公用设施监管的信息化平台建设和运营管理。");

  } else if (id == 6) {
    teamPeople = teamPeople6;
    teamTel = teamTel6;
    $("#teanmName").html("&nbsp;&nbsp;规划建设局：");
    $("#teanmText").html("&nbsp;&nbsp;&nbsp;&nbsp;主要负责石化基地封闭区域内基础设施建设任务，并委托方洋集团或石化公司集中组织建设或政府购买服务。");
  } else if (id == 7) {
    teamPeople = teamPeople7;
    teamTel = teamTel7;
    $("#teanmName").html("&nbsp;&nbsp;方洋集团：");
    $("#teanmText").html("&nbsp;&nbsp;&nbsp;&nbsp;主要负责石化基地封闭区域内所属公用设施运营管理；<br/>&nbsp;&nbsp;&nbsp;&nbsp;负责绿化、道路、保洁等市政设施建设养护；<br/>&nbsp;&nbsp;&nbsp;&nbsp;负责路灯、交通信号灯、道路监控的建设和运营管理。");
  } else if (id == 8) {
    teamPeople = teamPeople8;
    teamTel = teamTel8;
    $("#teanmName").html("&nbsp;&nbsp;'186' 大队：");
    $("#teanmText").html("&nbsp;&nbsp;&nbsp;&nbsp;主要负责开展石化基地封闭区域内综合巡查等工作。");
  }

  $("#detail-tb-teamName").html("");
  var tabHtml = '<tr class="gcxm_tableTr2">' +
    '<td class="td1team">&nbsp;&nbsp;&nbsp;&nbsp;姓名</td>' +
    '<td class="td1team">电话</td></tr>';
  $("#detail-tb-teamName").append(tabHtml)
  for (i = 0; i < teamPeople.length; i++) {
    tabHtml = '<tr class="gcxm_tableTr2">' +
      '<td class="td1team">' + '&nbsp;&nbsp;&nbsp;&nbsp;' + teamPeople[i] + '</td>' +
      '<td class="td1team">' + teamTel[i] + '</td></tr>'

    $("#detail-tb-teamName").append(tabHtml)
  }
}


//隐藏巡查队伍设置说明：
function teamContentDisplay() {
  $("#car-det-content").css("display", "none");
}
//展示巡查队伍设置说明：
function setTeamContent(id) {
  $("#car-det-content").css("display", "block");
  if (id == 1) {
    $("#car-det-content").css("left", "35%");
    $("#car-det-content").css("top", "268px");
    $("#contentName").html("交通巡查内容：");
    $("#contentText").html("&nbsp;&nbsp;&nbsp;&nbsp;石化基地封闭区域内道路交通安全管理，查处道路交通安全违法行为，处理道路交通事故，会同有关方面实行危化品专用道路、专用车道和限时限速行驶措施及开展道路交安设施建设工作。");
  } else if (id == 2) {
    $("#car-det-content").css("left", "50%");
    $("#car-det-content").css("top", "268px");
    $("#contentName").html("公用工程巡查内容：");
    $("#contentText").html("&nbsp;&nbsp;&nbsp;&nbsp;石化基地封闭区域内所属公用设施运营管理。");
  } else if (id == 3) {
    $("#car-det-content").css("left", "60%");
    $("#car-det-content").css("top", "268px");
    $("#contentName").html("违建巡查内容：");
    $("#contentText").html("&nbsp;&nbsp;&nbsp;&nbsp;石化基地封闭区域综合执法管理，包括违章建筑清理、非法加油和流动摊点治理，以及专项综合执法活动。");
  } else if (id == 4) {
    $("#car-det-content").css("left", "35%");
    $("#car-det-content").css("top", "550px");
    $("#contentName").html("市政巡查内容：");
    $("#contentText").html("&nbsp;&nbsp;&nbsp;&nbsp;石化基地封闭区域内所属绿化、道路、保洁等市政设施建设养护；<br/>&nbsp;&nbsp;&nbsp;&nbsp;路灯、交通信号灯、道路监控的建设和运营管理。");
  } else if (id == 5) {
    $("#car-det-content").css("left", "50%");
    $("#car-det-content").css("top", "550px");
    $("#contentName").html("环境巡查内容：");
    $("#contentText").html("&nbsp;&nbsp;&nbsp;&nbsp;石化基地封闭区域环境管理，对入园企业进行环境监管。");
  } else if (id == 6) {
    $("#car-det-content").css("left", "60%");
    $("#car-det-content").css("top", "550px");
    $("#contentName").html("安防巡查内容：");
    $("#contentText").html("&nbsp;&nbsp;&nbsp;&nbsp;石化基地封闭区域治安管理，包括治安、维稳、专项整治和重大活动保障等任务，对封闭围网卡口管理给予指导；<br/>&nbsp;&nbsp;&nbsp;&nbsp;开展石化基地封闭区域内综合巡查等工作。");
  }
}


var x1 = [];
var x2 = [];
var x3 = [];
var x4 = [];

function initTab() {
  //车辆统计
  $.ajax({
    type: "post",
    url: '../queryCarType/searchCar',
    async: false,
    dataType: "json",
    data: {
      "startTime": getDay(0), //'2019/09/26'
      "endTime": getDay(0), //'2019/09/27'
    },
    success: function (result) {
      var data1 = result[0];
      //拼接柱状图的数组
      x1 = [data1.internalCar1, data1.socialCar1, data1.consCar1, data1.outCar1];
      x2 = [data1.internalCar2, data1.socialCar2, data1.consCar2, data1.outCar2];
      x3 = [data1.internalCar3, data1.socialCar3, data1.consCar3, data1.outCar3];
      x4 = [data1.internalCar4, data1.socialCar4, data1.consCar4, data1.outCar4];

      //柱状图
      getBar();
    }
  });
}
//数组还没接入新数据
function getBar() {

  var dom = document.getElementById("barChart1");
  var myChart1 = echarts.init(dom);
  option1 = null;
  option1 = {
    title: {
      text: '车辆分类审核统计',
      textStyle: {
        fontWeight: "normal",
        color: "white", // 标题颜色
        fontSize: 14,
      },
      subtext: ''
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['信息申报数量', '审核通过数量'],
      textStyle: {
        color: 'white'
      },
      //right:10,
      top: 23
    },
    toolbox: {
      show: false
    },
    calculable: true,
    xAxis: [{
      type: 'category',
      data: ['内部车辆', '社会车辆', '施工车辆', '来访车辆'],
      axisLabel: {
        show: true,
        textStyle: {
          fontSize: 10,
          color: "white"
        }
      },
      axisLine: {
        lineStyle: {
          color: "#fff"
        }
      }
    }],
    yAxis: [{
      type: 'value',
      axisLabel: {
        margin: 2,
        show: true,
        textStyle: {
          fontSize: 10,
          color: "white"
        }
      },
      axisLine: {
        lineStyle: {
          color: "#fff"
        }
      }
    }],
    grid: {
      left: 40
    },
    series: [{
      name: '信息申报数量',
      type: 'bar',
      data: x1,
      itemStyle: {
        normal: {
          color: '#6CD7D9'
        }
      },
      label: {
        normal: {
          show: true,
          position: 'top',
          textStyle: {
            color: 'white',
            fontSize: '12px'
          }
        }
      }
    },
    {
      name: '审核通过数量',
      type: 'bar',
      data: x2,
      itemStyle: {
        normal: {
          color: '#cbbde7'
        }
      },
      label: {
        normal: {
          show: true,
          position: 'top',
          textStyle: {
            color: 'white',
            fontSize: '12px'
          }
        }
      }
    },

    ]

  };
  if (option1 && typeof option1 === "object") {
    myChart1.setOption(option1, true);
  }

}
// 生态环保体系内容修改
function huanbaoDivClickSet() {
  var aqiValue = $("#aqiValue").val();
  $("#aqiSet").html(aqiValue)
  var pmValue = $("#pmValue").val();
  $("#pmSet").html(pmValue)

  // 水滴图内容替换
  var shuidiValue = $("#shuidiValue").val();
  var shuidiValue1 = $("#shuidiValue1").val();
  var dom6 = document.getElementById("waterTool");
  myChart6 = echarts.init(dom6);
  var option6 = {
    series: [{
      type: 'liquidFill',
      data: [{
        value: shuidiValue,
        itemStyle: {
          normal: {
            color: "#91E6FF",
            opacity: 0.3,
          }
        }
      }, {
        value: shuidiValue1,
        itemStyle: {
          normal: {
            color: '#39B3F6',
            opacity: 0.3,
          }
        }
      }],
      radius: '90%',
      outline: {
        show: true,
        borderDistance: 0,
        itemStyle: {
          color: 'none',
          borderColor: '#B0E2FF',
          borderWidth: 2,
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.8)'
        }
      },
      backgroundStyle: {
        borderColor: 'rgba(0,0,0,0.8)',
        borderWidth: 1,
        color: "#fff",
        shadowColor: '26A7F9',
        opacity: 0.1,
        shadowBlur: 80
      },
      itemStyle: {
        normal: {
          opacity: 0.4,
          shadowBlur: 80,
          shadowColor: 'blue'
        }
      },

    }]
  };
  if (option6 && typeof option6 === "object") {
    myChart6.setOption(option6, true);
  }


  $("#huanbaoDiv").css("display", "none");
}

function setChuGuanSelect() {
  $("#chuguanSelect").html('');
  var selectValue = $("#companySelect").val();
  if (selectValue == "1") {
    $("#chuguanSelect").append("<option value='1'>PX储罐03-T11A</option>");
    $("#chuguanSelect").append("<option value='2'>PX储罐03-T11B</option>");
    $("#chuguanSelect").append("<option value='3'>醋酸A储罐</option>");
    $("#chuguanSelect").append("<option value='4'>醋酸B储罐</option>");
    $("#chuguanSelect").append("<option value='5'>NBA罐区A储罐</option>");
    $("#chuguanSelect").append("<option value='6'>NBA罐区B储罐</option>");
    $("#chuguanSelect").append("<option value='7'>甲醇罐区A储罐</option>");
    $("#chuguanSelect").append("<option value='8'>甲醇罐区B储罐</option>");
    $("#chuguanSelect").append("<option value='9'>碱液储罐</option>");
  } else if (selectValue == "2") {
    $("#chuguanSelect").append("<option value='1'>C6罐区A罐</option>");
    $("#chuguanSelect").append("<option value='2'>C6罐区B罐</option>");
    $("#chuguanSelect").append("<option value='3'>MTBE罐区A罐</option>");
    $("#chuguanSelect").append("<option value='4'>MTBE罐区B罐</option>");
    $("#chuguanSelect").append("<option value='5'>乙烯A储罐</option>");
    $("#chuguanSelect").append("<option value='6'>乙烯B储罐</option>");
    $("#chuguanSelect").append("<option value='7'>乙烯C储罐</option>");
    $("#chuguanSelect").append("<option value='8'>乙烯D储罐</option>");
    $("#chuguanSelect").append("<option value='9'>不合格乙烯罐</option>");
  } else {
    $("#chuguanSelect").append("<option value='1'>丙烯腈TK_0901</option>");
    $("#chuguanSelect").append("<option value='2'>丙烯腈TK_0902</option>");
    $("#chuguanSelect").append("<option value='3'>丙烯腈TK_0903</option>");
    $("#chuguanSelect").append("<option value='4'>丙烯腈TK_0904</option>");
    $("#chuguanSelect").append("<option value='5'>丙烯腈TK_0905</option>");
    $("#chuguanSelect").append("<option value='6'>丙烯腈TK_0906</option>");
    $("#chuguanSelect").append("<option value='7'>罐组五TK_1001</option>");
    $("#chuguanSelect").append("<option value='8'>罐组五TK_1002</option>");
    $("#chuguanSelect").append("<option value='9'>罐组五TK_1003</option>");
  }

}
// 储罐内容修改：公司切换
function setChuGuanSelect() {
  $("#chuguanSelect").html('');
  var selectValue = $("#companySelect").val();
  if (selectValue == "1") {
    $("#chuguanSelect").append("<option value='1'>PX储罐03-T11A</option>");
    $("#chuguanSelect").append("<option value='2'>PX储罐03-T11B</option>");
    $("#chuguanSelect").append("<option value='3'>醋酸A储罐</option>");
    $("#chuguanSelect").append("<option value='4'>醋酸B储罐</option>");
    $("#chuguanSelect").append("<option value='5'>NBA罐区A储罐</option>");
    $("#chuguanSelect").append("<option value='6'>NBA罐区B储罐</option>");
    $("#chuguanSelect").append("<option value='7'>甲醇罐区A储罐</option>");
    $("#chuguanSelect").append("<option value='8'>甲醇罐区B储罐</option>");
    $("#chuguanSelect").append("<option value='9'>碱液储罐</option>");
  } else if (selectValue == "2") {
    $("#chuguanSelect").append("<option value='1'>C6罐区A罐</option>");
    $("#chuguanSelect").append("<option value='2'>C6罐区B罐</option>");
    $("#chuguanSelect").append("<option value='3'>MTBE罐区A罐</option>");
    $("#chuguanSelect").append("<option value='4'>MTBE罐区B罐</option>");
    $("#chuguanSelect").append("<option value='5'>乙烯A储罐</option>");
    $("#chuguanSelect").append("<option value='6'>乙烯B储罐</option>");
    $("#chuguanSelect").append("<option value='7'>乙烯C储罐</option>");
    $("#chuguanSelect").append("<option value='8'>乙烯D储罐</option>");
    $("#chuguanSelect").append("<option value='9'>不合格乙烯罐</option>");
  } else {
    $("#chuguanSelect").append("<option value='1'>丙烯腈TK_0901</option>");
    $("#chuguanSelect").append("<option value='2'>丙烯腈TK_0902</option>");
    $("#chuguanSelect").append("<option value='3'>丙烯腈TK_0903</option>");
    $("#chuguanSelect").append("<option value='4'>丙烯腈TK_0904</option>");
    $("#chuguanSelect").append("<option value='5'>丙烯腈TK_0905</option>");
    $("#chuguanSelect").append("<option value='6'>丙烯腈TK_0906</option>");
    $("#chuguanSelect").append("<option value='7'>罐组五TK_1001</option>");
    $("#chuguanSelect").append("<option value='8'>罐组五TK_1002</option>");
    $("#chuguanSelect").append("<option value='9'>罐组五TK_1003</option>");
  }
  chuguanSet();
}

// 设定页面储罐信息变化
function chuguanSet() {
  var companySelectValue = $("#companySelect").val();
  var guanSelectValue = $("#chuguanSelect").val();

  var gdSet = $("#gd" + companySelectValue + guanSelectValue).val();
  if ("N/A" != gdSet) {
    var gdSetNew = (Math.round(gdSet * 100) / 100).toFixed(2); // 成功转成1.54
    $("#chu_gd").html(gdSetNew + "%");
    //设定储罐图例液位高度
    $("#chuguanImg").css("height", (Math.round(gdSet * 0.45 * 100) / 100).toFixed(2) + "%");
  } else {
    $("#chu_gd").html(gdSet);
    //设定储罐图例液位高度
    $("#chuguanImg").css("height", "0%");
  }

  var wdSet = $("#wd" + companySelectValue + guanSelectValue).val();
  if ("N/A" != wdSet) {
    $("#chu_wd").html(wdSet + "℃");
  } else {
    $("#chu_wd").html(wdSet);
  }
  var ylSet = $("#yl" + companySelectValue + guanSelectValue).val();
  if ("N/A" != ylSet) {
    $("#chu_yl").html(ylSet + "Kpa");
  } else {
    $("#chu_yl").html(ylSet);
  }
  var ydqtSet = $("#ydqt" + companySelectValue + guanSelectValue).val();
  if ("N/A" != ydqtSet) {
    $("#chu_ydqt").html(ydqtSet + "LEL");
  } else {
    $("#chu_ydqt").html(ydqtSet);
  }
  //隐藏内容修改面板
  $("#guanziModifyDiv").css("display", "none");
}


//产业供应链体系设定弹出框隐藏
function yuancailiaoClickClose() {
  $("#yuancailiaoDiv").css("display", "none");
}
//产业供应链体系设定弹出框显示
function yuancailiaoSetView() {
  $("#yuancailiaoDiv").css("display", "block");
}
//管理创新体系设定弹出框隐藏
function guanliDivClickClose() {
  $("#guanliDiv").css("display", "none");
}
//管理创新体系设定弹出框显示
function guanliDivClickView() {
  $("#guanliDiv").css("display", "block");
}
// 智慧安監
function anjianDivClickClose() {
  $("#anjianDiv").css("display", "none");
  $("#anjianDivLink").css("display", "none");
}

function anjianDivClickView() {
  $("#anjianDiv").css("display", "block");
  $("#anjianDivLink").css("display", "block");
}
//巡查路綫
function xcluClickView() {
  $("#xcluDivView").css("display", "block");
  prowledPath();
}

function xcluClickClose() {
  $("#xcluDivView").css("display", "none");
}

//巡查队伍
function xcdwClickView() {
  $("#xcdwDiv").css("display", "block");
  prowledPath();
}

function xcdwClickClose() {
  $("#xcdwDiv").css("display", "none");
  xcdwInfoClickClose();
}

function xcdwInfoClickClose() {
  $("#car-det-new").css("display", "none");
}

//危化品通行车辆数
function carNumDivClickView() {
  // $("#carNumDiv").css("display", "block");
}

function carNumDivClickClose() {
  $("#carNumDiv").css("display", "none");
}
//危化品介质
function dangerousDetClickView() {
  // $("#dangerous-det").css("display", "block");
}

function dangerousDetClickClose() {
  $("#dangerous-det").css("display", "none");
}
//危化品车辆偏离告警DIV
function carAwayClickView() {
  // $("#carAway").css("display", "block");
}

function carAwayClickClose() {
  $("#carAway").css("display", "none");
}

//车辆超时告警DIV
function carOutTimeClickView() {
  $("#car-outTime").css("display", "block");
}

function carOutTimeyClickClose() {
  $("#car-det").css("display", "none");
  $("#car-outTime").css("display", "none");
}
//生态环保体系内容DIV
function huanbaoDivClickView() {
  $("#huanbaoDiv").css("display", "block");
}

function huanbaoDivClickClose() {
  $("#huanbaoDiv").css("display", "none");
}

//储罐内容修改DIV
function guanziModifyDivClickView() {
  $("#guanziModifyDiv").css("display", "block");
}

function guanziModifyDivClickClose() {
  $("#guanziModifyDiv").css("display", "none");
}

//交易系统DIV
function sysTemDivClickView() {
  $("#sysTemDiv").css("display", "block");
  $("#wuLiuDiv").css("display", "none");
  $("#cangchuDiv").css("display", "none");
  $("#gongyinglianDiv").css("display", "none");
  $("#zhichengDiv").css("display", "none");
  $("#zhengwufuwDiv").css("display", "none");
  $("#jingjiyunxDiv").css("display", "none");
}

function sysTemDivClickClose() {
  $("#sysTemDiv").css("display", "none");
}
//物流系统DIV
function wuLiuDivClickView() {
  $("#wuLiuDiv").css("display", "block");
  $("#sysTemDiv").css("display", "none");
  $("#cangchuDiv").css("display", "none");
  $("#gongyinglianDiv").css("display", "none");
  $("#zhichengDiv").css("display", "none");
  $("#zhengwufuwDiv").css("display", "none");
  $("#jingjiyunxDiv").css("display", "none");
}

function wuLiuDivClickClose() {
  $("#wuLiuDiv").css("display", "none");
}
//仓储系统 DIV
function cangchuDivClickView() {
  $("#cangchuDiv").css("display", "block");
  $("#sysTemDiv").css("display", "none");
  $("#wuLiuDiv").css("display", "none");
  $("#gongyinglianDiv").css("display", "none");
  $("#zhichengDiv").css("display", "none");
  $("#zhengwufuwDiv").css("display", "none");
  $("#jingjiyunxDiv").css("display", "none");
}

function cangchuDivClickClose() {
  $("#cangchuDiv").css("display", "none");
}
//供应链金融系统 DIV
function gongyinglianDivClickView() {
  $("#gongyinglianDiv").css("display", "block");
  $("#sysTemDiv").css("display", "none");
  $("#wuLiuDiv").css("display", "none");
  $("#cangchuDiv").css("display", "none");
  $("#zhichengDiv").css("display", "none");
  $("#zhengwufuwDiv").css("display", "none");
  $("#jingjiyunxDiv").css("display", "none");
}

function gongyinglianDivClickClose() {
  $("#gongyinglianDiv").css("display", "none");
}
//支撑服务体系 DIV
function zhichengDivClickView() {
  $("#zhichengDiv").css("display", "block");
  $("#sysTemDiv").css("display", "none");
  $("#wuLiuDiv").css("display", "none");
  $("#cangchuDiv").css("display", "none");
  $("#gongyinglianDiv").css("display", "none");
  $("#zhengwufuwDiv").css("display", "none");
  $("#jingjiyunxDiv").css("display", "none");
}

function zhichengDivClickClose() {
  $("#zhichengDiv").css("display", "none");
}
//政务服务管理系统 DIV
function zhengwufuwDivClickView() {
  $("#zhengwufuwDiv").css("display", "block");
  $("#sysTemDiv").css("display", "none");
  $("#wuLiuDiv").css("display", "none");
  $("#cangchuDiv").css("display", "none");
  $("#gongyinglianDiv").css("display", "none");
  $("#zhichengDiv").css("display", "none");
  $("#jingjiyunxDiv").css("display", "none");
}

function zhengwufuwDivClickClose() {
  $("#zhengwufuwDiv").css("display", "none");
  $("#jingjiyunxDiv").css("display", "none");
}

//经济运行监测系统 DIV
function jingjiyunxDivClickView() {
  $("#jingjiyunxDiv").css("display", "block");
  $("#sysTemDiv").css("display", "none");
  $("#wuLiuDiv").css("display", "none");
  $("#cangchuDiv").css("display", "none");
  $("#gongyinglianDiv").css("display", "none");
  $("#zhichengDiv").css("display", "none");
  $("#zhengwufuwDiv").css("display", "none");
}

function jingjiyunxDivClickClose() {
  $("#jingjiyunxDiv").css("display", "none");
}


/****************接入m3u8视频流**************** */
function videoConstructor() {
  //视频流src
  this.mediaSrc = "/mpsh/client/camera/preview";
  //危化品车辆通道
  this.dangerMonitor = ["9173bf3b3f204c74b6c2b50133482f5a", "f11d1eaa5d2a49f9afcb763a73c2c525", "5534b172826044908a34b304f24dd276",
    "4b54f82e9f8a485785e0ec163fcfde9b", "8139090c75964fa2887521a3074f3077"
  ];
  //卡口
  this.bayonetMonitor = ["9d7cb4b64a61439da5054aa753ddea37", "153199e64666463987b536fdae87b94e", "a0c8077c2e084b5687de8d077dff8265", "746d265b0afd4721992922fa11cba2aa", "908caeabe2464fb2b2bc6c7f407bc63c", "908caeabe2464fb2b2bc6c7f407bc63c"];
  //高点监控
  this.highMonitor = ["3152a1dddf8247279a4bc037963c3445", "e02adc98daa74abfb21345b56ba9715f", "c615d43db89f4997a529fbb9695fdfd9",
    "cc4ea10e209c457384ca58013915d978", "69d37a185cad474e883fcdf5ecd48c6f", "f2f1fef5a1d0435ca1c573f211be2732",
    "fe26d4598320432c90f467fdaa6fb499", "b22275e3480d40e89572c108dd8b5d74", "79f483aab5ae4c978f9d8f2ca0c2dc99",
    "2e4bc8127fca4ce3844690605f3db72d", "70593b97e96b4075ad72820e3c1ba87c", "2dbadafb091447548d6f080a8ca01f61",
    "1a735bb1edbb41c186bb4a22a35d22f3", "70b5df26363c440fb3eb8997d02a2938", "e46ebbdafed4477dad48340c621f3778"
  ];
  //用来统计各个类型第几个通道
  this.dIndex = 0;
  this.bIndex = 0;
  this.hIndex = 0;
  this.myPlayer1 = null;
  this.myPlayer2 = null;
  this.myPlayer3 = null;
}
videoConstructor.prototype = {
  init: function () {
    $("#shipin1").bind("click", () => {
      this.videoSetFunction(1);
    })
    $("#shipin2").bind("click", () => {
      this.videoSetFunction(2);
    })
    $("#shipin3").bind("click", () => {
      this.videoSetFunction(3);
    })
    //初始化播放视频
    this.videoSetFunction(1, true);
    this.videoSetFunction(2, true);
    this.videoSetFunction(3, true);

  },
  videoSetFunction: function (type, first) {
    type === 1 ? this.dangerFunction(type, first) : type === 2 ?
      this.bayonetFunction(type, first) :
      this.highFunction(type, first);
  },
  //危化品通道
  dangerFunction: function (num, first) {
    let code = this.dangerMonitor[this.dIndex];
    // let code = '9950270e5ed640148a30c4f2ccf81097';
    if (this.dIndex >= this.dangerMonitor.length - 1) {
      this.dIndex = -1
    }
    this.dIndex++;
    this.allTypeFunction(num, code, "danger-video", '#d_box', first)
  },
  //卡口通道
  bayonetFunction: function (num, first) {
    let code = this.bayonetMonitor[this.bIndex];
    // let code = '9950270e5ed640148a30c4f2ccf81097';
    if (this.bIndex >= this.bayonetMonitor.length - 1) {
      this.bIndex = -1
    }
    this.bIndex++;
    this.allTypeFunction(num, code, "bayonet-video", '#b_box', first)
  },
  //高点监控
  highFunction: function (num, first) {
    let code = this.highMonitor[this.hIndex];
    // let code = '9950270e5ed640148a30c4f2ccf81097';
    if (this.hIndex >= this.highMonitor.length - 1) {
      this.hIndex = -1
    }
    this.hIndex++;
    this.allTypeFunction(num, code, "high-video", '#h_box', first)
  },
  //处理
  allTypeFunction: function (num, code, id, parent, first) {
    this.requestPromise(code).then(result => {
      if (result.errno !== 0) return;
      if (!first) {
        this[`myPlayer${num}`].dispose();
      }
      $(parent).html(`<video id="${id}" class="video-js vjs-default-skin common-video" controls muted></video>`)
      result.data.url = result.data.url.replace("http://172.16.10.2:83/", "/hkVideo/")
      console.log("result.data==>", result.data)
      this[`myPlayer${num}`] = videojs(id, {
        autoplay: true,
        sources: [{
          src: result.data.url
        }]
      });
      this[`myPlayer${num}`].play();
    })

  },
  requestPromise: function (code) {
    var sendData = new FormData();
    sendData.append("indexCode", code)
    return new Promise((resolve, reject) => {
      $.ajax({
        url: this.mediaSrc,
        type: "POST",
        data: sendData,
        contentType: false,
        processData: false,
        success: function (result) {
          resolve(result);
          sendData = null;
        },
        error: function (error) {
          reject(error);
          sendData = null;
        }
      })
    })
  }
}

/** 
 * @ApiModelProperty(value = "企业总数")
private Integer enterpriseNum;
@ApiModelProperty(value = "人员总数")
private Integer employeeNum;
@ApiModelProperty(value = "车辆总数")
private Integer trailerNum;
@ApiModelProperty(value = "罐体总数")
private Integer tankerNum;
@ApiModelProperty(value = "运单量")
private Integer waybillNum;
@ApiModelProperty(value = "装卸货总量")
private BigDecimal freightNum;

@ApiModelProperty(value = "园区企业总数")
private Integer parkEnterpriseNum;
@ApiModelProperty(value = "承运商")
private Integer carrierEnterpriseNum;

@ApiModelProperty(value = "产品数量")
private Integer productNum;

@ApiModelProperty(value = "入园运单总数")
private Integer inParkBillNum;
 * 
 */
function getSomeInfo() {
  $.ajax({
    url: "https://lygjsc.iasoco.com/api/whp-xt/zd-xt/flow/total",
    type: "GET",
    success: function (res) {
      console.log('res', res);
      if (res.code == 1) {
        if (res.data) {
          $("#dangerousCarCompleted").html(res.data.carrierEnterpriseNum || 0);
          $("#danCarnum").html(res.data.inParkBillNum || 0);
          $("#carjz").html(res.data.productNum);
          return;
        }
        $("#dangerousCarCompleted").html(0);
        $("#danCarnum").html(0);
        $("#carjz").html(0);
      }
    }
  })
}

function getSomeInfo2() {
  $.ajax({
    url: "https://fb.lygshjd.com/api/shihua-server/video/findDataSta",
    type: "GET",
    success: function (res) {
      console.log(res, 'res')
      let result = JSON.parse(res);
      if (result.code == 0) {
        $("#consCar").html(result.result.construction);
        $("#bayonet").html(result.result.gate);
        $("#internalCar").html(result.result.society);
        $("#visitedNum").html(result.result.user);
      }
    }
  })
}
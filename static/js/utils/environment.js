var code = ''
var base_url = '/datasupport/thirdparty/'
/**
 * 获取token
 */
function getToken() {
    var data = {
        username: "thirdparty",
        password: "123456"
    }
    $.ajax({
        url: "/datasupport/api/sys/tokenlogin",
        type: "POST",
        dataType: "json",
        contentType: 'application/json',
        data: JSON.stringify(data),
        async: false,
        success: function (data) {
            if (data.code == 0) {
                code = data.data
            }
        }
    });
}

/**
 * 河流水质实时数据滚动大屏
 */
function getGunDong() {
    document.querySelector('.marquee').innerHTML = '';
    const testUrl = base_url+ 'findswdatalist?key=' + code;
    $.ajax({
        url: testUrl,
        type: "get",
        dataType: "json",
        contentType: 'application/json',
        async: false,
        success: function (data) {
            console.log('河流水质实时数据', data);
            let str = '';
            if (data.code == '0') {
                const dataValue = data.data
                const newArr = []
                for (let i = 0; i < dataValue.length; i++) {
                    newArr[i] = {}
                    newArr[i].riverName = dataValue[i].riverName
                    newArr[i].stationName = dataValue[i].stationName
                    for (let j = 0; j < dataValue[i].items.length; j++) {
                        if (dataValue[i].items[j].itemName === '高锰酸盐指数') {
                            newArr[i].title1 = dataValue[i].items[j].value
                        }
                        if (dataValue[i].items[j].itemName === '氨氮') {
                            newArr[i].title2 = dataValue[i].items[j].value
                        }
                        if (dataValue[i].items[j].itemName === '总磷') {
                            newArr[i].title3 = dataValue[i].items[j].value
                        }
                        if (dataValue[i].items[j].itemName === '总氮') {
                            newArr[i].title4 = dataValue[i].items[j].value
                        }
                    }

                }

                for (let i = 0; i < newArr.length; i++) {
                    str += '<div class="row">' +
                        '<span class="col1">' + newArr[i].riverName + '</span>' +
                        '<span class="col2">' + newArr[i].stationName + '</span>' +
                        '<span class="col3">' + (newArr[i].title1 == undefined ? '-' : newArr[i].title1)+ '</span>' +
                        '<span class="col4">' + (newArr[i].title2 == undefined ? '-' : newArr[i].title2)+ '</span>' +
                        '<span class="col5">' + (newArr[i].title3 == undefined ? '-' : newArr[i].title3)+ '</span>' +
                        '<span class="col6">' + (newArr[i].title4 == undefined ? '-' : newArr[i].title4)+ '</span>' +
                        '</div>'
                }

                $(str).appendTo($('.marquee'))
            }
            console.log(document.querySelector('.marquee'));
        }
    });
}

// 数据滚动
function monitora() {
    //滚动
    //原理：把marquee下面的子盒子都复制一遍 加入到marquee中
    //      然后动画向上滚动，滚动到一半重新开始滚动
    //因为选取的是两个marquee  所以要遍历
    $(".marquee").each(function (index, dom) {
        console.log(index, dom);
        //将每个 的所有子级都复制一遍
        var rows = $(dom)
            .children()
            .clone();
        //再将新的到的加入原来的
        $(dom).append(rows);
    });
}

/**
 * 空气质量等级
 */
function axtz() {
    var airLevelMap = {
        "Ⅰ": {
            "airLevelName": "优",
            "airLevelColor": "#32f43c"
        },
        "Ⅱ": {
            "airLevelName": "良",
            "airLevelColor": "#e3f928"
        },
        "Ⅲ": {
            "airLevelName": "轻度污染",
            "airLevelColor": "#e89c3a"
        },
        "Ⅳ": {
            "airLevelName": "中度污染",
            "airLevelColor": "#ff0b0b"
        },
        "Ⅴ": {
            "airLevelName": "重度污染",
            "airLevelColor": "#98044e"
        },
        "Ⅵ": {
            "airLevelName": "严重污染",
            "airLevelColor": "#7d0022"
        }
    }
    var demoData = [{
        name: '首要污染物',
        primaryPollutant: 'PM10', //首要污染物
        airLevel: 'I', //a空气质量等级
        airLevelName: '优',
        airLevelColor: '#32f43c',
        aqi: 30, //空气质量指数
        bgColor: 'rgb(103,84,67)',
        bgColor2: 'rgb(61,61,61)'
    }];
    var module4Id = document.getElementById("module4Id");
    var module4Chart = echarts.init(module4Id);
    $.ajax({
        url: base_url + "station/findareahourcurrent?key=" + code,
        type: "GET",
        dataType: "json",
        async: false,
        success: function (data) {
            if (data.code == 0) {
                let result = data.data.data;
                console.log("环境-空气",result)
                document.querySelector('.pm25Class').innerHTML = result.pm25
                document.querySelector('.pm10Class').innerHTML = result.pm10
                document.querySelector('.so2Class').innerHTML = result.so2
                document.querySelector('.no2Class').innerHTML = result.nox
                document.querySelector('.coClass').innerHTML = result.co
                document.querySelector('.o3Class').innerHTML = result.o3
                let temp = airLevelMap[result.airLevel]
                //console.log('12313',result)
                if (temp) {
                    demoData[0].airLevel = result.airLevel;
                    demoData[0].airLevelName = temp.airLevelName;
                    demoData[0].airLevelColor = temp.airLevelColor;
                    demoData[0].aqi = result.aqi;
                    demoData[0].primaryPollutant = result.primaryPollutant;
                }
                console.log(demoData)
            }
        }
    });
    option = {
        series: (function () {
            var result = [];
            demoData.forEach(function (item) {
                result.push({
                    type: 'gauge', //内圈线-内侧-底色
                    radius: '85%',
                    splitNumber: 10,
                    splitLine: {
                        show: false
                    },
                    min: 0,
                    max: 300,
                    startAngle: 225,
                    endAngle: -45,
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 20,
                            shadowBlur: 0,
                            color: [
                                [1, item.bgColor2]
                            ],
                        }
                    },
                    pointer: {
                        show: 0
                    },
                    axisTick: {
                        show: false
                    },
                    detail: {
                        show: false
                    }

                }, {
                    type: 'gauge', //内圈线-内侧-动态线条对应底色线条
                    radius: '81%',
                    splitNumber: 10,
                    splitLine: {
                        show: false
                    },
                    min: 0,
                    max: 300,
                    startAngle: 225,
                    endAngle: -45,
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 6,
                            shadowBlur: 0,
                            color: [
                                [1, item.bgColor]
                            ],
                        }
                    },
                    pointer: {
                        show: 0
                    },
                    axisTick: {
                        show: false
                    },
                    detail: {
                        show: false
                    }
                }, {
                    type: 'gauge', //内圈线-内侧-动态线条
                    radius: '81%',
                    splitNumber: 10,
                    splitLine: {
                        show: false
                    },
                    min: 0,
                    max: 300,
                    startAngle: 225,
                    endAngle: -45,
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 6,
                            shadowBlur: 0,
                            color: [
                                [item.aqi / 300, item.airLevelColor]
                            ],
                        }
                    },
                    pointer: {
                        show: 0
                    },
                    axisTick: {
                        show: false
                    },
                    detail: {
                        show: true,
                        offsetCenter: [3, '1%'],
                        textStyle: {
                            fontSize: 40,
                            color: '#0AFCE0'
                        },
                        formatter: [
                            '',
                            '{a|空气质量指数}',
                            '{b|}',
                            '{c|' + item.aqi + '}',
                            '{d|' + item.airLevelName + '}',
                            '{e|' + item.primaryPollutant + '}',
                            '{f|' + item.name + '}'
                        ].join('\n'),
                        rich: {
                            a: {
                                color: 'rgba(0,204,254)',
                                fontSize: 22
                            },
                            b: {
                                height: 24,

                            },
                            c: {
                                color: item.airLevelColor,
                                fontSize: 36,

                            },
                            d: {
                                fontSize: 24,
                                width: 140,
                                height: 39,
                                padding: [0, 0, 5, 0],
                                lineHeight: 39,
                                color: '#030c2b',
                                backgroundColor: item.airLevelColor,
                                borderWidth: 1,
                                borderRadius: 4
                            },
                            e: {
                                padding: [0, 0, 50, 0],
                                fontSize: 20,
                                color: '#ffffff',
                                lineHeight: 20,
                                fontWeight: '100',
                            },
                            f: {
                                padding: [0, 0, 60, 0],
                                fontSize: 20,
                                color: '#ffffff',
                                lineHeight: 20,
                                fontWeight: '100',
                            }
                        }
                    }
                }, {
                    type: 'gauge', //外圈线
                    radius: '100%',
                    splitNumber: 10,
                    splitLine: {
                        show: false
                    },
                    min: 0,
                    max: 300,
                    startAngle: 225,
                    endAngle: -45,
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 20,
                            shadowBlur: 0,
                            color: [
                                [
                                    item.aqi / 300, item.airLevelColor
                                ],
                                [1, item.bgColor2]
                            ],
                        }
                    },
                    pointer: {
                        show: 0
                    },
                    axisTick: {
                        show: false
                    },
                    detail: {
                        show: false
                    }

                });
            });
            return result;
        })()
    };

    module4Chart.setOption(option);
}

/**
 * 空气质量年度目标
 */
function yearTarget1(){
    $.ajax({
        url: base_url + "queryyeargoal?key=" + code,
        type: "GET",
        dataType: "json",
        async: false,
        success: function (data) {
            if (data.code == 0) {
                let result = data.data;
                console.log("环境-年度目标",data)
                let yearValue = result.yearValue;
                let dataTime = result.dataTime;
                let nowValue = result.value;
                document.querySelector('.yearValue').innerHTML = yearValue
                // document.querySelector('.dataTime').innerHTML = dataTime ? dataTime.substring(dataTime.indexOf("年") + 1) : dataTime
                // document.querySelector('.nowValue').innerHTML = nowValue

            }
        }
    });
}

function yearTarget2 (){
    var curDate = new Date(),
        startQueryDate = curDate.getFullYear() + '0101',
        endDate = new Date(curDate.getTime() - 24*60*60*1000),
        endQueryDate = getQueryDate(endDate);
    $.ajax({
        url: '/datasupport/online/history/queryhistorydata'+'?stationId=13697&stationType=1&itemCode=132&startTime='+ startQueryDate +'&endTime='+ endQueryDate +'&type=2&key='+ code,
        success: function (data) {
            console.log("===========",data)
            var len = data.data.values.length, dataTime, value=0;
            if(data.code == 0 && data.data.dataTimes.length > 0 && len > 0){
                for(var i = 0;i < len;i++){
                    value = value + data.data.values[i];
                }
                value = (value/len).toFixed(1);
                dataTime = data.data.dataTimes[data.data.dataTimes.length - 1];

                document.querySelector('.dataTime').innerHTML = getShowDate(dataTime)
                document.querySelector('.nowValue').innerHTML = value
            }
        }
    })
}

String.prototype.startWidth = function (prefix){
    return this.slice(0, prefix.length) === prefix;
};

function getQueryDate(date){
    var year = date.getFullYear(),
        month = (date.getMonth() + 1),
        day = date.getDate();
        month =month < 10 ? ('0' + month) : month;
        day = day < 10 ? ('0' + day) : day;
    return ''+ year + month + day;
}
function getShowDate(dateStr){
    var dateArray = dateStr.split('-'),
        year = dateArray[0],
        month = dateArray[1].startWidth('0') ? dateArray[1][1, 1] : dateArray[1],
        day = dateArray[2].startWidth('0') ? dateArray[2][1, 1] : dateArray[2];
    return year + "年" + month + "月" + day + "日";
}


/**
 * 水质等级
 */
function waterLevel() {
    var waterLevelMap = {
        "I": {
            "waterLevelName": "I类",
            "waterLevelColor": "#0394df",
            "waterValue": 50
        },
        "II": {
            "waterLevelName": "II类",
            "waterLevelColor": "#0483c5",
            "waterValue": 100
        },
        "III": {
            "waterLevelName": "III类",
            "waterLevelColor": "#009544",
            "waterValue": 150
        },
        "IV": {
            "waterLevelName": "IV类",
            "waterLevelColor": "#f3d634",
            "waterValue": 200
        },
        "V": {
            "waterLevelName": "V类",
            "waterLevelColor": "#fda033",
            "waterValue": 250
        },
        "劣V": {
            "waterLevelName": "劣V类",
            "waterLevelColor": "#ff6666",
            "waterValue": 300
        }
    }
    var demoData = [{
        name: '当前水质',
        waterValue: 150,
        waterLevel: 'Ⅲ', //水质等级
        waterLevelName: 'Ⅲ类',//水质等级
        waterLevelColor: '#c1c201',
        aqi: 30, //质量指数
        bgColor: 'rgb(103,84,67)',
        bgColor2: 'rgb(61,61,61)',
        nowLevel: ''
    }];
    var module42Id = document.getElementById("module4-2Id");
    var module42Chart = echarts.init(module42Id);
    //正则判断是否是数字
    var reg = /\d/;
    $.ajax({
        url: base_url + "querywatersource?key=" + code,
        type: "GET",
        dataType: "json",
        async: false,
        success: function (data) {
            if (data.code == 0) {
                let result = data.data;
                console.log("环境--水质", result)
                for (let i = 0; i < result.items.length; i++) {
                    let s = result.items[i];
                    if (314 == s['itemcode']) {
                        document.querySelector('.CODmnClass').innerHTML = reg.test(s['value']) ? Number(s['value']).toFixed(2):s['value'] || '--';
                    } else if (302 == s['itemcode']) {
                        document.querySelector('.PHClass').innerHTML = reg.test(s['value']) ? Number(s['value']).toFixed(2):s['value'] || '--';
                    } else if (311 == s['itemcode']) {
                        document.querySelector('.andanClass').innerHTML = reg.test(s['value']) ? Number(s['value']).toFixed(3):s['value'] || '--';
                    }
                    else if (315 == s['itemcode']) {
                        document.querySelector('.rongjieyangClass').innerHTML = reg.test(s['value']) ? Number(s['value']).toFixed(3):s['value'] || '--';

                    } else if (313 == s['itemcode']) {
                        document.querySelector('.zonglinClass').innerHTML = reg.test(s['value']) ? Number(s['value']).toFixed(3):s['value'] || '--';

                    }
                }

                let temp = waterLevelMap[result.nowLevel]
                if (temp) {
                    demoData[0].waterLevel = result.nowLevel;
                    demoData[0].waterLevelName = temp.waterLevelName;
                    demoData[0].waterLevelColor = temp.waterLevelColor;
                    demoData[0].aqi = temp.waterValue;
                    // demoData[0].primaryPollutant = result.primaryPollutant;
                }
                console.log("========demoData", demoData)
            }
        }
    });
    option = {
        series: (function () {
            var result = [];
            demoData.forEach(function (item) {
                result.push({
                    type: 'gauge', //内圈线-内侧-底色
                    radius: '85%',
                    splitNumber: 10,
                    splitLine: {
                        show: false
                    },
                    min: 0,
                    max: 300,
                    startAngle: 225,
                    endAngle: -45,
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 20,
                            shadowBlur: 0,
                            color: [
                                [1, item.bgColor2]
                            ],
                        }
                    },
                    pointer: {
                        show: 0
                    },
                    axisTick: {
                        show: false
                    },
                    detail: {
                        show: false
                    }

                }, {
                    type: 'gauge', //内圈线-内侧-动态线条对应底色线条
                    radius: '81%',
                    splitNumber: 10,
                    splitLine: {
                        show: false
                    },
                    min: 0,
                    max: 300,
                    startAngle: 225,
                    endAngle: -45,
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 6,
                            shadowBlur: 0,
                            color: [
                                [1, item.bgColor]
                            ],
                        }
                    },
                    pointer: {
                        show: 0
                    },
                    axisTick: {
                        show: false
                    },
                    detail: {
                        show: false
                    }
                }, {
                    type: 'gauge', //内圈线-内侧-动态线条
                    radius: '81%',
                    splitNumber: 10,
                    splitLine: {
                        show: false
                    },
                    min: 0,
                    max: 300,
                    startAngle: 225,
                    endAngle: -45,
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 6,
                            shadowBlur: 0,
                            color: [
                                [item.aqi / 300, item.waterLevelColor]
                            ],
                        }
                    },
                    pointer: {
                        show: 0
                    },
                    axisTick: {
                        show: false
                    },
                    detail: {
                        show: true,
                        offsetCenter: [3, '1%'],
                        textStyle: {
                            fontSize: 40,
                            color: '#0AFCE0'
                        },
                        formatter: [
                            '',
                            '{a|善后河水源地}',
                            // '{b|}',
                            '{c|}',
                            '{d|' + item.waterLevelName + '}',
                            '{e|}',
                            '{f|' + item.name + '}'
                        ].join('\n'),
                        rich: {
                            a: {
                                color: 'rgba(0,204,254)',
                                fontSize: 22
                            },
                            // b: {
                            // 	height: 24,
                            // },
                            c: {
                                color: item.waterLevelColor,
                                fontSize: 36,

                            },
                            d: {
                                fontSize: 24,
                                width: 140,
                                height: 39,
                                padding: [0, 0, 5, 0],
                                lineHeight: 39,
                                color: '#030c2b',
                                backgroundColor: item.waterLevelColor,
                                borderWidth: 1,
                                borderRadius: 4
                            },
                            e: {
                                padding: [0, 0, 50, 0],
                                fontSize: 20,
                                color: '#ffffff',
                                lineHeight: 20,
                                fontWeight: '100',
                            },
                            f: {
                                padding: [0, 0, 60, 0],
                                fontSize: 20,
                                color: '#ffffff',
                                lineHeight: 20,
                                fontWeight: '100',
                            }
                        }
                    }
                }, {
                    type: 'gauge', //外圈线
                    radius: '100%',
                    splitNumber: 10,
                    splitLine: {
                        show: false
                    },
                    min: 0,
                    max: 300,
                    startAngle: 225,
                    endAngle: -45,
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 20,
                            shadowBlur: 0,
                            color: [
                                [
                                    item.aqi / 300, item.waterLevelColor
                                ],
                                [1, item.bgColor2]
                            ],
                        }
                    },
                    pointer: {
                        show: 0
                    },
                    axisTick: {
                        show: false
                    },
                    detail: {
                        show: false
                    }

                });
            });
            return result;
        })()
    };

    module42Chart.setOption(option);
}


/**
 * 危险废物动态流转
 */
function func() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('my_echarts'));
    var data1 = []
    $.ajax({
        url: base_url + "querynewdangertrash?key=" + code,
        type: "GET",
        dataType: "json",
        async: false,
        success: function (data) {
            console.log("危险废物动态",data)
            data1 = data.data
            data1.unshift(['product', '产生', '转入', '转出'])
            // console.log(data1);
        }
    });
    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '(吨)',
            textStyle: {
                color: '#ffffff'
            },
            top: '5%',
            left: '6%',
        },
        grid: {
            bottom: '3%',
            containLabel: true
        },
        legend: {
            itemGap: 50,
            top: '5%',
            data: [{
                name: '产生',
                textStyle: {
                    color: "#ffffff",
                    fontSize: 24
                }
            },
                {
                    name: '转入',
                    textStyle: {
                        color: "#ffffff",
                        fontSize: 24
                    }
                },
                {
                    name: '转出',
                    textStyle: {
                        color: "#ffffff",
                        fontSize: 24
                    }
                }
            ],
        },
        tooltip: {},
        dataset: {
            source: data1
        },
        xAxis: {
            type: 'category',
            axisLabel: {
                interval: 0,
                rotate: 60,
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                }
            }
        },
        yAxis: {
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                }
            }
        },
        series: [{
            type: 'bar',
            itemStyle: {
                normal: {
                    //柱形图圆角，初始化效果
                    barBorderRadius: [5, 5, 5, 5],
                    color: '#fe1c09',
                },
            }
        },
            {
                type: 'bar',
                itemStyle: {
                    normal: {
                        //柱形图圆角，初始化效果
                        barBorderRadius: [5, 5, 5, 5],
                        color: '#effd00',
                    }
                }
            },
            {
                type: 'bar',
                itemStyle: {
                    normal: {
                        //柱形图圆角，初始化效果
                        barBorderRadius: [5, 5, 5, 5],
                        color: '#4bfd4f',
                    }
                }
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

/**
 * 园区废气排放趋势
 * 折线图echarts左
 */
function left() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('my_echarts_left'));
    var months = []
    var nox = []
    var so2 = []
    var pm = []
    var nonMethane = []
    $.ajax({
        url: base_url + "queryairmonthcount?type=1&key=" + code,
        type: "GET",
        dataType: "json",
        async: false,
        success: function (data) {
            console.log('废气-废水', data);
            for (var i = 0; i < data.data.dataMonths.length; i++) {
                months.push(data.data.dataMonths[i])

            }
            nox = data.data.nox
            so2 = data.data.so2
            pm = data.data.pm
            nonMethane = data.data.nonMethane
        }
    });
    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '(吨)',
            textStyle: {
                color: '#ffffff'
            },
            top: '20%',
            left: '2%'
        },
        color: ['#00aaf5', '#f60003', '#e505ff', '#32F43C'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['NOx', 'SO2', '颗粒物', '非甲烷总烃'],
            icon: "circle",
            top: '10%',
            textStyle: {
                color: '#fff',
                fontSize: 20
            }
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            top: '30%',
            left: '3%',
            right: '7%',
            // bottom: '30%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: months,
            axisLabel: {
                interval: 0,
                rotate: 60,
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                }
            }
        }],
        yAxis: {
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 16
                }
            },
        },
        series: [{
            itemStyle: {normal: {label: {show: true}}},
            name: 'NOx',
            type: 'line',
            //areaStyle: {},
            data: nox
        },
            {
                itemStyle: {normal: {label: {show: true}}},
                name: 'SO2',
                type: 'line',
                //areaStyle: {},
                data: so2
            },
            {
                itemStyle: {normal: {label: {show: true}}},
                name: '颗粒物',
                type: 'line',
                //areaStyle: {},
                data: pm
            },
            {
                itemStyle: {normal: {label: {show: true}}},
                name: '非甲烷总烃',
                type: 'line',
                //	areaStyle: {},
                data: nonMethane
            },
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

/**
 * 园区废水排放趋势
 * 折线图echarts右
 */
function right() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('my_echarts_right'));
    var months = []
    var oxygen = []
    var an = []
    var tp = []
    var tn = []
    $.ajax({
        url: base_url + "queryairmonthcount?type=2&key=" + code,
        type: "GET",
        dataType: "json",
        async: false,
        success: function (data) {
            for (var i = 0; i < data.data.dataMonths.length; i++) {
                months.push(data.data.dataMonths[i])
            }
            oxygen = data.data.oxygen
            an = data.data.an
            tp = data.data.tp
            tn = data.data.tn
        }
    });
    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '(吨)',
            textStyle: {
                color: '#ffffff'
            },
            top: '20%',
            left: '2%'
        },
        color: ['#2db7f5', '#ff6600', '#00ff07', '#ff0ae4'],
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: ['化学需氧量', '氨氮', '总磷', '总氮'],
            top: '10%',
            icon: "circle",
            textStyle: {
                color: '#fff',
                fontSize: 20
            }
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            top: '30%',
            left: '3%',
            right: '7%',
            // bottom: '30%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: months,
            axisLabel: {
                interval: 0,
                rotate: 60,
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                }
            }
        }],
        yAxis: {
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 16
                }
            },
        },
        series: [
            {
                itemStyle: {normal: {label: {show: true}}},
                name: '化学需氧量',
                type: 'line',
                data: oxygen
            },
            {
                itemStyle: {normal: {label: {show: true}}},
                name: '氨氮',
                type: 'line',
                data: an

            }, {
                itemStyle: {normal: {label: {show: true}}},
                name: '总磷',
                type: 'line',
                data: tp

            }, {
                itemStyle: {normal: {label: {show: true}}},
                name: '总氮',
                type: 'line',
                data: tn

            },
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

/**
 * 污染源排放检测点位
 * 污染源排放趋势点位
 */
function dianwei() {
    $.ajax({
        url: base_url + "querystationtotal?key=" + code,
        type: "GET",
        dataType: "json",
        async: false,
        success: function (data) {
            console.log('废气-废水-点位', data);
            if (data.code == 0) {
                document.querySelector('.feiqiClass').innerHTML = data.data.psgastotal + '个'
                document.querySelector('.feishuiClass').innerHTML = data.data.pswatertotal + '个'
                document.querySelector('.zhandianClass').innerHTML = data.data.total + '个'
                document.querySelector('.zaixianClass').innerHTML = data.data.inline + '个'
            }
        }
    });
}

// // 获取当前时间
// function date() {
//     let lastMonth = dayjs().subtract(1, 'month');
//     let month = lastMonth.format("MM");
//     let lastDay = lastMonth.endOf("month").format("DD");
//     let nowDate = month + "月" + lastDay + "日";
//     document.querySelector('.dateClass').innerHTML = nowDate
// }

// 获取时间
// function getTime(time) {
//     var date = new Date(time); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
//     var Y = date.getFullYear() + '-';
//     var M = ((date.getMonth() + 1) < 10) ? ('0' + (date.getMonth() + 1) + '-') : ((date.getMonth() + 1) + '-');
//     var D = (date.getDate() < 10) ? ('0' + date.getDate() + ' ') : (date.getDate() + ' ');
//     var h = (date.getHours() < 10) ? ('0' + date.getHours() + ':') : (date.getHours() + ':');
//     var m = (date.getMinutes() < 10) ? ('0' + date.getMinutes()) : (date.getMinutes());
//     var s = (date.getSeconds() < 10) ? ('0' + date.getSeconds()) : (date.getSeconds());
//     return Y + M + D + h + m
// }

function getData() {
    getToken()
    //空气质量等级
    axtz()
    //空气质量年度目标
    yearTarget1()
    yearTarget2()
    //水质等级
    waterLevel()
    // 危险废物动态流转
    func()
    // 折线图echarts左
    left()
    // 折线图echarts右
    right()
    // 污染源排放检测点位
    dianwei()
}

setInterval("getData()", 0.5 * 60 * 60 * 1000);
getData();
// 数据滚动
getGunDong()
monitora()

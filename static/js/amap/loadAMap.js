/**
 * 异步加载高德地图
 *
 * @export
 * @param {*} key 高德地图key
 * @param {*} plugins 高德地图插件
 * @param {string} [v='2.0'] 高德地图版本
 * @returns
 */

const v = "1.4.15";
const key = "8ac264383ff7e2a1890dfe4eebafc388";
const plugins = [
    "Map3D",
    "ElasticMarker",
    "AMap.MouseTool",
    "AMap.PolyEditor",
    "AMap.MarkerClusterer",
    "AMap.RangingTool",
    "AMap.DistrictSearch",
    "AMap.OverView",
    "AMap.DistrictLayer",
    "AMap.CustomLayer",
    "AMap.MarkerCluster",
    "AMap.Scale",
    "AMap.ToolBar",
    "AMap.Loca"
];

function mapLoader() {
    if (window.AMap) { // 已经加载成功，不重复加载
        return new Promise((resolve) => {
            resolve(window.AMap)
        })
    }
    const loadMap = new Promise(function (resolve, reject) {
        window.init = function () {
            resolve(AMap)
        };
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = `//webapi.amap.com/maps?v=${v}&key=${key}&plugin=${plugins}&callback=init`;

        script.onerror = reject;
        document.head.appendChild(script);
    });
    const loadMapUI = new Promise(function (resolve, reject) {
        let script2 = document.createElement("script");
        script2.type = "text/javascript";
        script2.async = true;
        script2.src = "//webapi.amap.com/ui/1.0/main-async.js";

        script2.onerror = reject;
        script2.onload = function () {
            resolve('success')
        };
        document.head.appendChild(script2);
    });

    return Promise.all([loadMap, loadMapUI])
        .then(function (result) {
            return result[0]
        }).catch(e => {
            console.log(e);
        })
};
/**
 * 地图配置
 */
 const zoom = function () {
    if (screen.width <= 1920) {
        return 13.7
    } else {
        return 14.8
    }
}
/**
 * 地图配置
 */
const mapSetting = {
    title: "连云港", //页面标题
    adcode: "320703", //地图地区adcode
    viewMode: "3D",
    zoom: 14.8, //地图缩放级别,3D模式下浮点数
    zooms: [0, 20], // 14.8, 17
    center: [119.586113, 34.523733], //地图中心点坐标 为空则取地图返参
    pitch: 35.307215264279385,
    rotation: 0,
    mapStyle: "amap://styles/1e639a7ce443e357378f03f26c87d299"
};
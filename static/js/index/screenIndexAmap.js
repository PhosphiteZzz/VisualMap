function indexAmap() {
  this.map = null; //高德地图
  this.wms = null; //三方地图
  this.canvas = null;
  this.baseUrl = "";
  this.baseUrlInner = "";
  this.basePath = "/hbBigScreem";    //服务器入口名称
  this.companyList = []; //公司列表
  this.monitorList = []; //监控列表
  this.inspection = []; //电子巡查
  this.companyLayer = ""; //公司标记点
  this.monitorPlayer = null;
  this.indexCode = null;
  this.cameraIndexCodes = [];
  this.timers = null;
  this.wins = {};
  this.enclosure = [
    { id: 1, label: "一期", isChecked: false },
    { id: 2, label: "二期", isChecked: false },
    { id: 3, label: "三期", isChecked: false },
    { id: 4, label: "四期", isChecked: false },
    { id: 5, label: "卡口", isChecked: false },
  ]; //围网
  this.vehicle = [
    {
      id: 1, label: "途强GPS", isChecked: false
    },
    {
      id: 2, label: "航天恒嘉GPS", isChecked: false
    }
  ];
  this.area = [
    { id: 1, label: "一般控制区", isChecked: false, itemColor: "#1336AB" },
    { id: 2, label: "核心控制区", isChecked: false, itemColor: "#782C2E" },
    { id: 3, label: "关键控制区", isChecked: false, itemColor: "#C3BB68" },
  ],
    //图例对象
    this.legend = [{
      icon: 'person',
      text: "人员",
      arrow: true
    }, {
      icon: 'monitor',
      text: "监控",
      arrow: true
    }, {
      icon: 'inspection',
      text: "电子巡查",
      arrow: true
    }, {
      icon: 'enclosure',
      text: "围网",
      arrow: true
    }, {
      icon: 'vehicle',
      text: "危化品车辆",
      arrow: true
    }, {
      icon: 'area',
      text: "区域",
      arrow: true
    }, {
      icon: 'uav',
      text: "无人机",
    }, {
      icon: 'bayonet',
      text: "卡口",
    }, {
      icon: 'road',
      text: "道路",
    }];
  this.personList = []; //人员点位
  this.personVehicle = "";
  this.monitorPoints = []; //监控点位
  this.monitorItem = []; //监控
  this.enclosureItems = []; // 围网
  this.inspectionItems = []; //电子巡查
  this.areaItems = [];   //区域
  this.moveMarker = ""; //轨迹标点
  this.movePolyline = ""; //轨迹路径
  this.movePassedPolyline = ""; //轨迹路过路径
  this.enclosure3Dlayer = []; //围网模型
  this.personPoints = [];
  this.showData = {} //弹窗展示用
  this.planeWinOff = null; //历史记录弹窗
  this.planeDataList = ''; //无人机数据
  this.planeData = []; //保存无人机便于关闭
  // 危化品车辆
  this.vehicleList = null; //车辆列表
  this.vehiclePoints = []; //车辆数组
  this.vehicleDetail = null //车辆详情
  this.isShowDialog = false //普通弹窗
  // 卡口
  this.bayonetList = null //卡口数据
  this.bayonetPoints = [] //卡口数组
  // 道路
  this.roadPolyline = [] //道路路径
  this.roadName = [] //道路名称
  //区域
  this.polygon = [] //遮罩模块
  this.polygonName = [] //遮罩模块名称
  this.polygonRoad = [] //遮盖模块管廊路径
}
indexAmap.prototype = {
  init: function () {
    $(document).ready(() => {
      //初始化地图
      this.creatMap();
      //初始化接口
      this.initRequest();
      //初始化拖拽图例1
      var drag = document.getElementById('drag');
      this.moveDom(drag, drag, true, true);
      //初始化拖拽图例2
      var pubwin = document.getElementById('pubWin');
      this.moveDom(pubwin, pubwin, true, true);
      //初始化拖拽弹窗
      var common = document.getElementById("commonDialog");
      this.moveDom(common, common, true, true);
      //初始化监控视频弹窗
      var monitorDialog = document.getElementById("monitorDialog");
      this.moveDom(monitorDialog, monitorDialog, true, true);

      //初始化图例图标
      this.initLegend();
      //初始化绑定事件
      this.initBind();
    })
  },
  //初始化绑定事件
  initBind: function () {
    var me = this;
    //图例关闭事件
    $(".d-bayonet .close").bind("click", (e) => {
      $("#drag").hide();
    })
    //图例划过事件
    $(".d-bayonet .b-content").children().bind("mouseover", function () {
      $(this).siblings().removeClass("active");
      $(this).addClass('active');

      if ($(this).attr("index") <= 5) {
        switch ($(this).attr("index")) {
          case '0':
            $("#company").show();
            $("#company").siblings('.b-submenu').hide();
            break;
          case '1':
            $("#monitor").show();
            $("#monitor").siblings('.b-submenu').hide();
            break;
          case '2':
            $("#inspection").show();
            $("#inspection").siblings('.b-submenu').hide();
            break;
          case '3':
            $("#enclosure").show();
            $("#enclosure").siblings('.b-submenu').hide();
            break;
          case '4':
            $("#vehicle").show();
            $("#vehicle").siblings('.b-submenu').hide();
            break;
          case '5':
            $("#area").show();
            $("#area").siblings('.b-submenu').hide();
            break;
          default:
            break;
        }
        return
      }
      $(".d-bayonet").find(".b-submenu").hide();
    })
    //图例点击事件
    $(".d-bayonet .b-content").children().bind("click", function () {
      let index = $(this).attr("index");
      let status = $(this).attr("class").indexOf('selected');
      let icon = me.legend[index].icon;
      if (index > 5) {
        if (status != -1) {
          //取消选中
          $(this).removeClass("selected")
          me['handle' + icon](false);
          return;
        }
        //选中
        $(this).addClass("selected");
        me['handle' + icon](true);
      }
    })

    //图例划过事件
    $(".d-bayonet .b-content").bind("mouseleave", function () {
      $(".d-bayonet .b-content").children().removeClass("active");
    })

    //二级菜单划过事件
    $(".d-bayonet .b-submenu").bind("mouseleave", function (e) {
      $(this).hide();
    })

    //绑定关闭无人机弹窗
    $("#pubWin .p-header .close").bind("click", function () {
      $("#pubWin").css("visibility", "hidden");
    })

    //绑定通用dialog关闭
    $("#commonDialog .p-header .close").bind("click", function () {
      $("#commonDialog").css("visibility", "hidden");
    })

    //绑定关闭监控视频弹窗
    $("#monitorDialog .p-header .close").bind("click", function () {
      $("#monitorDialog").css("visibility", "hidden");
      if (me.monitorPlayer) {
        me.monitorPlayer.dispose();
      }
      me.monitorPlayer = null;
      $("#monitorDialog .common-cont").empty();
      $("#common-footer").show();
    })

    //绑定点击查看监控
    $(".common-footer .button").bind("click", function () {
      let flag = me.checkCode(me.indexCode);
      if (!flag) return;
      me.cameraIndexCodes.push(me.indexCode);
      me.g_OpenWindow(
        "/hbBigScreem/static/html/play.html?" + me.cameraIndexCodes.join(";"),
        860,
        600
      );
    })

    //查询人员
    $(".d-search .s-icon").bind("click", () => {
      this.searchPerson($(".d-search .s-input").val());
    })

    $(".d-search .s-input").bind("keydown", function () {
      var event = window.event || arguments.callee.caller.arguments[0];
      if (event.keyCode == 13) {
        me.searchPerson($(this).val());
      }

    })
  },
  checkCode(code) {
    let flag = true;
    $.each(this.cameraIndexCodes, function (i, n) {
      if (code == n) {
        flag = false;
        return flag;
      }
    });
    return flag;
  },
  // 打开窗口
  g_OpenWindow(pageURL, innerWidth, innerHeight) {
    let ScreenWidth = window.screen.availWidth;
    let ScreenHeight = window.screen.availHeight;
    let StartX = (ScreenWidth - innerWidth) / 2;
    let StartY = (ScreenHeight - innerHeight) / 2;
    this.wins = window.open(
      pageURL,
      "OpenWin",
      "left=" +
      StartX +
      ", top=" +
      StartY +
      ", Width=" +
      innerWidth +
      ", height=" +
      innerHeight +
      ", resizable=no, scrollbars=yes, status=no, toolbar=no, menubar=no, location=no"
    );

    this.timers = setInterval(() => {
      this.isCloseWin();
    }, 500);
    this.wins.focus();
    this.wins.onbeforeunload = function () {
      this.cameraIndexCodes = [];
    };
  },
  isCloseWin() {
    if (this.wins.closed) {
      this.cameraIndexCodes = [];
      this.timers && clearInterval(this.timers);
    }
  },
  //初始化接口
  initRequest: function () {
    //获取公司列表
    this.getCompanyReq();
    //获取监控列表
    this.getMonitorReq();
    //获取电子巡查
    this.getInspectionReq();
    //获取围网
    this.getEnclosureReq();
    //获取危化品车辆
    this.getVehicleReq();
    //获取区域列表
    this.getAreaReq();
  },
  //获取公司列表
  getCompanyReq: function () {
    this.requestPromise({
      url: this.baseUrl + "/mpsh/client/screen/companylist",
      type: "POST"
    }).then(result => {
      if (result.errno == 0) {
        this.companyList = this.addCheckedStatus(result.data && result.data.list);
        this.htmlRender("#company", this.companyList, 'name');
      }
    })
  },
  //获取监控列表
  getMonitorReq() {
    this.requestPromise({
      url: "/mpsh/client/camera/sysdata",
      type: "POST"
    }).then(result => {
      if (result.errno === 0) {
        let array = result.data.filter(item => {
          return item.id == 27
        })[0].children;
        this.monitorList = this.addCheckedStatus(array);
        this.htmlRender("#monitor", this.monitorList, 'label')
      }
    })
  },
  //获取电子巡查
  getInspectionReq() {
    this.requestPromise({
      url: this.baseUrl + "/mpsh/client/screen/emergency",
      type: "POST",
    }).then(result => {
      if (result.errno === 0) {
        this.inspection = this.addCheckedStatus(result.data.list);
        this.htmlRender("#inspection", this.inspection, 'task_name')
      }
    })
  },
  //获取围网
  getEnclosureReq() {
    this.htmlRender("#enclosure", this.enclosure, 'label')
  },
  //获取危化品车辆
  getVehicleReq() {
    this.htmlRender("#vehicle", this.vehicle, "label")
  },
  //获取区域
  getAreaReq() {
    this.htmlRender("#area", this.area, "label")
  },
  //渲染列表
  htmlRender: function (element, list, name) {
    let me = this;
    //如果是电子巡查的话  走另一个逻辑
    if (element === '#inspection') {
      this.inspectionRender(element, list, name);
      return
    }
    //如果是危化品车辆的话  走其他逻辑
    if (element === '#vehicle') {
      this.vehicleRender(element, list, name);
      return
    }
    let htmlStr = "";
    let array = $.extend(true, [], list);
    //取消绑定
    $(element).find(".checkbox").unbind("click");
    array.unshift({
      id: -1,
      [name]: "全选"
    })
    //如果是区域，后面加颜色
    array.forEach(item => {
      htmlStr += `<div class="sub-item">
      <input type="checkbox" class="checkbox" index="${item.id}">${item[name]}`;
      htmlStr += element == '#area' ? `<span style="background:${item.itemColor}"></span></div>` : '</div>'
    })
    $(element).html(htmlStr);
    //二级菜单点击事件
    $(element).find(".checkbox").bind("click", function () {
      let index = $(this).attr("index");
      let checked = $(this).attr("checked");
      let checkList = [];
      //点击
      let clickCheck = {
        "#company": me.companyCheck,
        "#monitor": me.monitorCheck,
        "#enclosure": me.enclosureCheck,
        "#area": me.areaCheck
      }
      //如果是全选 
      if (index == -1) {
        //且选中
        if (checked) {
          $($(element).find(".checkbox")).each(function (i, item) {
            $(item).prop("checked", 'checked');
            if ($(item).attr("index") != '-1') {
              checkList.push($(item).attr("index"))
            }
          })
          clickCheck[element](checkList, checked, me);
          return
        }
        //不选中
        $($(element).find(".checkbox")).each(function (i, item) {
          $(item).removeAttr("checked");
        })
        clickCheck[element]([], checked, me);
        return
      }
      //单选
      clickCheck[element](index, checked, me);
    })
  },
  //电子巡查渲染
  inspectionRender(element, list, name) {
    let me = this;
    let htmlStr = "";
    let array = $.extend(true, [], list);
    //取消绑定
    $(element).find(".checkbox").unbind("click");
    array.forEach(item => {
      htmlStr += `<div class="sub-item">
      <input type="checkbox" class="checkbox" index="${item.id}">${item[name]}
      </div>`
    })
    $(element).html(htmlStr);
    //二级菜单点击事件
    $(element).find(".checkbox").bind("click", function () {
      let index = $(this).attr("index");
      let checked = $(this).attr("checked");
      if (checked) {
        me.resetMap();
        $(".legend-inspection").addClass("selected");
        $(this).parent().siblings().find(".checkbox").removeAttr("checked");
        me.inspectionCheck(index);
        return;
      }
      $(".legend-inspection").removeClass("selected");
      me.removeInspectionRoad();
      me.resetMap();
    })
  },
  //危化品车辆渲染
  vehicleRender(element, list, name) {
    let me = this;
    let htmlStr = "";
    let array = $.extend(true, [], list);
    //取消绑定
    $(element).find(".checkbox").unbind("click");
    array.forEach(item => {
      htmlStr += `<div class="sub-item">
      <input type="checkbox" class="checkbox" index="${item.id}">${item[name]}
      </div>`
    })
    $(element).html(htmlStr);
    //二级菜单点击事件
    $(element).find(".checkbox").bind("click", function () {
      let index = $(this).attr("index");
      let checked = $(this).attr("checked");
      if (checked) {
        me.resetMap();
        $(".legend-vehicle").addClass("selected");
        $(this).parent().siblings().find(".checkbox").removeAttr("checked");
        me.vehicleCheck(index);
        return;
      }
      $(".legend-vehicle").removeClass("selected");
      // me.removeInspectionRoad();
      me.removeVehicle();
      me.resetMap();
    })
  },
  //移除所有危化品车辆
  removeVehicle() {
    this.map.remove(this.vehiclePoints);
    this.vehiclePoints = [];
    if (this.setIntervalId) {
      clearInterval(this.setIntervalId);
    }
  },
  //危化品车辆checkbox选中事件
  vehicleCheck(id) {
    //移除所有危化品车辆
    this.removeVehicle();
    let item = this.vehicle.filter(item => {
      return item.id == id;
    })
    this.createVehicle(item);
  },
  //area checkbox选中事件
  areaCheck(id, checked, me) {
    me.removeArea();
    if (checked) {
      type(id) === "[object Array]" ? me.areaItems = id : me.areaItems.push(id);
    } else {
      type(id) === "[object Array]" ? me.areaItems = [] :
        me.areaItems.splice(me.areaItems.indexOf(id), 1);
    }
    let length = $("#area").children().length;
    if (me.areaItems.length > 0) {
      $(".legend-area").addClass("selected");
      //如果全选
      if (length - 1 === me.areaItems.length) {
        me.openAreaFunction({
          content: "all"
        })
        return;
      }
      me.openAreaFunction({
        content: me.areaItems
      })
      return
    }
    $(".legend-area").removeClass("selected");
  },
  //移除区域模块
  removeArea() {
    if (this.polygon.length > 0) {
      this.polygon.map((item, index) => {
        this.map.remove(this.polygon[index]);
      });
    }
    if (this.polygonRoad.length) {
      polygonRoad.map((item, index) => {
        this.map.remove(this.polygonRoad[index]);
      });
    }
  },
  //不想备注了
  openAreaFunction(payload) {
    if (payload.content == "all") {
      polygonDataList.map((item, index) => {
        this.createPolygon(item, index);
      });
      polygonRoad.map((item, index) => {
        this.createPolygonRoad(item, index);
      });
    } else {
      let tempNo = [];
      let tempType = [];
      payload.content.map((item, index) => {
        polygonDataList.map((element, location) => {
          if (item == element.id) {
            tempNo.push(element.no);
            tempType.push(element.id);
          }
        });
      });
      let res = tempNo.join(",").split(",");
      let temp = tempType.join(",").split(",");
      let areaList = polygonDataList;
      let times = -1;
      res.map((item, index) => {
        areaList.map((element, location) => {
          if (item == element.no) {
            times++;
            this.createPolygon(element, times);
          }
        });
      });
      if (temp.indexOf("3") !== -1) {
        polygonRoad.map((item, index) => {
          this.createPolygonRoad(item, index);
        });
      }
    }
  },
  //创建模块管廊路径
  createPolygonRoad(options, index) {
    this.polygonRoad[index] = new AMap.Polyline({
      path: options.path,
      strokeColor: "#A6B500",
      strokeWeight: 7,
      strokeStyle: "solid",
      strokeOpacity: 0.6,
      zIndex: 10,
    });
    this.map.add(this.polygonRoad[index]);
  },
  selectAllVehicle() {
    return this.requestPromise({
      url: this.baseUrl + '/mpsh/client/screen/carposinfo',
      type: "POST"
    })
  },
  selectAllVehicleNew() {
    return this.requestPromise({
      url: this.baseUrl + '/mpsh/client/vehicle/vehicleposinfo',
      type: "POST"
    })
  },
  async createVehicle(payload) {
    let result = "";
    let that = this;
    if (payload[0].id == 1) {
      result = this.selectAllVehicle();
    } else if (payload[0].id == 2) {
      result = this.selectAllVehicleNew();
      that.setIntervalId = setInterval(() => {
        result = this.selectAllVehicleNew();
      }, 30000);
    }
    let type = "vehicle";
    result.then((res) => {
      if (res.errno == 0) {
        if (payload[0].id == 1) {
          this.vehicleList = res.data.list;
        } else if (payload[0].id == 2) {
          this.vehicleList = res.data.list;
        }

        this.vehicleList.map((item, index) => {
          let localtion = "";
          if (item.lng && item.lat && payload[0].id == 1) {
            localtion = gcoord.transform(
              [item.lng, item.lat],
              gcoord.BD09,
              gcoord.WGS84
            );
          } else if (item.point.lon && item.point.lat && payload[0].id == 2) {
            localtion = [item.point.lon, item.point.lat];
          }
          let marker = new AMap.Marker({
            icon: new AMap.Icon({
              image: that.basePath + "/static/img/legendList/car.png",
              size: new AMap.Size(52, 56),
              imageSize: new AMap.Size(52, 26),
              offset: new AMap.Pixel(-26, -13),
            }),
            angle: item.direction ? item.direction : 0,
            position: localtion,
            title: item.electQuantity,
            animation: "AMAP_ANIMATION_DROP", //点标掉落效果   “AMAP_ANIMATION_BOUNCE”，点标弹跳效果
          });
          this.vehiclePoints.push(marker);
          AMap.event.addListener(marker, "click", function () {
            if (payload[0].id == 1) {
              that.getVehicleDetail({ imei: item.imei, id: 1 });
            } else if (payload[0].id == 2) {
              that.getVehicleDetail({ carnum: item.num, id: 2 });
            }
          });
        });
        this.map.add(this.vehiclePoints);
      } else {
        this.$message({
          type: "error",
          message: res.errmsg,
        });
      }
    });
  },
  //添加选中状态
  addCheckedStatus(list) {
    let array = $.extend(true, [], list);
    return array.map(item => {
      item.isChecked = false;
      return item;
    })
  },
  //人员列表选中事件
  companyCheck(id, checked, me) {
    me.removePerson();
    me.resetMap();
    if (checked) {
      type(id) === "[object Array]" ? me.personList = id : me.personList.push(id);
    } else {
      type(id) === "[object Array]" ? me.personList = [] :
        me.personList.splice(me.personList.indexOf(id), 1);
    }
    if (me.personList.length > 0) {
      $(".legend-person").addClass("selected");
      let enterprise_id = {
        enterprise_id: me.personList.join(",")
      }
      me.getPersonPosition(enterprise_id);
      return
    }
    $(".legend-person").removeClass("selected");
  },
  //监控列表选中事件
  monitorCheck(id, checked, me) {
    if (checked) {
      type(id) === "[object Array]" ? me.monitorItem = id : me.monitorItem.push(id);
    } else {
      type(id) === "[object Array]" ? me.monitorItem = [] :
        me.monitorItem.splice(me.monitorItem.indexOf(id), 1);
    }
    if (me.monitorItem.length > 0) {
      $(".legend-monitor").addClass("selected");
      let ids = { ids: me.monitorItem.join(",") };
      me.getMonitorPosition(ids);
      return
    }
    $(".legend-monitor").removeClass("selected");
    me.removeMonitor();
    me.resetMap();
  },
  //围网选中事件
  enclosureCheck(id, checked, me) {
    me.removeEnclosure();
    if (checked) {
      type(id) === "[object Array]" ? me.inspectionItems = id : me.inspectionItems.push(id);
    } else {
      type(id) === "[object Array]" ? me.inspectionItems = [] :
        me.inspectionItems.splice(me.inspectionItems.indexOf(id), 1);
    }
    let length = $("#enclosure").children().length;
    if (me.inspectionItems.length > 0) {
      $(".legend-enclosure").addClass("selected");
      //如果全选
      if (length - 1 === me.inspectionItems.length) {
        me.openEnclosureFunction({
          content: "all"
        })
        return;
      }
      me.openEnclosureFunction({
        content: me.inspectionItems
      })
      return
    }
    $(".legend-enclosure").removeClass("selected");
  },
  //围网取消选中
  removeEnclosure() {
    if (this.enclosure3Dlayer.length > 0) {
      this.enclosure3Dlayer.map((item, index) => {
        this.map.remove(this.enclosure3Dlayer[index]);
      });
    }
  },
  //围网选中
  openEnclosureFunction(options) {
    if (options.content == "all") {
      enclosure.enclosureList.map((item, index) => {
        this.createEnclosure(item, index);
      });
    } else {
      let tempNo = [];
      options.content.map((item, index) => {
        enclosureType.enclosureTypeList.map((element, location) => {
          if (item == element.id) {
            tempNo.push(element.number.join(","));
          }
        });
      });
      let res = tempNo.join(",").split(",");
      let enclosureList = enclosure.enclosureList;
      res.map((item, index) => {
        enclosureList.map((element, location) => {
          if (item == element.id) {
            this.createEnclosure(element, item);
          }
        });
      });

      // console.log(enclosureList, "enclosureList");
    }
  },
  //创建围栏模型
  createEnclosure(options, index) {
    let modelName = "enclosure";
    let that = this;
    let objLoader = new THREE.OBJLoader2();
    let callbackOnLoad = function (event) {
      that.enclosure3Dlayer[index] = new AMap.Object3DLayer();
      let meshes = event.detail.loaderRootNode.children;
      for (let i = 0; i < meshes.length; i++) {
        let vecticesF3 = meshes[i].geometry.attributes.position;
        let vecticesNormal3 = meshes[i].geometry.attributes.normal;
        let vecticesUV2 = meshes[i].geometry.attributes.uv;
        let vectexCount = vecticesF3.count;
        let mesh = new AMap.Object3D.MeshAcceptLights();
        let geometry = mesh.geometry;
        //底部一圈
        // debugger
        let c, opacity;
        let material = meshes[i].material[0] || meshes[i].material;
        // debugger
        if (options.material) mesh.textures.push(options.material);

        c = material.color;

        opacity = material.opacity;
        // debugger
        for (let j = 0; j < vectexCount; j += 1) {
          let s = j * 3;
          geometry.vertices.push(
            vecticesF3.array[s],
            vecticesF3.array[s + 2], -vecticesF3.array[s + 1]
          );
          if (vecticesNormal3) {
            geometry.vertexNormals.push(
              vecticesNormal3.array[s],
              vecticesNormal3.array[s + 2], -vecticesNormal3.array[s + 1]
            );
          }
          if (vecticesUV2) {
            geometry.vertexUVs.push(
              vecticesUV2.array[j * 2],
              1 - vecticesUV2.array[j * 2 + 1]
            );
          }
          geometry.vertexColors.push(c.r, c.g, c.b, opacity);
        }
        // debugger
        mesh.DEPTH_TEST = material.depthTest;
        // mesh.backOrFront = 'both'
        mesh.transparent = opacity < 1;
        mesh.scale(options.scale[0], options.scale[1], options.scale[2]);
        mesh.rotateZ(options.rotateZ);
        mesh.position(new AMap.LngLat(options.lngLatX, options.lngLatY));
        that.enclosure3Dlayer[index].add(mesh);
      }
      that.map.add(that.enclosure3Dlayer[index]);
    };

    let onLoadMtl = function (materials) {
      objLoader.setModelName(modelName);
      objLoader.setMaterials(materials);
      objLoader.load(options.obj, callbackOnLoad, null, null, null, false);
    };
    objLoader.loadMtl(options.mtl, null, onLoadMtl);
  },
  //电子巡查选中事件
  inspectionCheck(id) {
    //移除电子巡查轨迹
    this.removeInspectionRoad();
    this.requestPromise({
      url: this.baseUrl + "/mpsh/client/screen/emergencytrack",
      type: "POST",
      data: JSON.stringify({
        id
      })
    }).then(result => {
      if (result.errno === 0) {
        let tempArry = [];
        result.data.list.map((item, index) => {
          let localtion = gcoord.transform(
            [item.longitude, item.latitude],
            gcoord.BD09,
            gcoord.WGS84
          );
          tempArry.push(localtion);
        });
        let options = {
          name: "inspection",
          lineArr: tempArry,
          zoom: 30,
        };
        if (tempArry.length > 0) {
          this.createAllRoad(options);
        } else {
          $.jqAlert({
            content: "警告电子巡查值为空",
            type: "warning",
          });
        }
      }
    })
  },
  //移除电子巡查轨迹
  removeInspectionRoad() {
    this.moveMarker && this.map.remove(this.moveMarker);
    this.movePolyline && this.map.remove(this.movePolyline);
    this.movePassedPolyline && this.map.remove(this.movePassedPolyline);
  },
  //绘制轨迹
  createAllRoad(options) {
    let that = this;
    let icon = "";
    if (options.name == "inspection") {
      icon = that.basePath + "/static/img/legendList/inspection.png";
    } else if (options.name == "vehicle") {
      icon = that.basePath + "/static/img/legendList/vehicle.png"
    }
    that.moveMarker = new AMap.Marker({
      map: that.map,
      position: options.lineArr[0],
      icon: icon,
      offset: new AMap.Pixel(-22.5, -67),
      // autoRotation: true,
      angle: 0,
    });
    // 绘制轨迹
    that.movePolyline = new AMap.Polyline({
      map: that.map,
      path: options.lineArr,
      showDir: true,
      strokeColor: "#28F", //线颜色
      // strokeOpacity: 1,     //线透明度
      strokeWeight: 6, //线宽
      // strokeStyle: "solid"  //线样式
    });
    //路过轨迹
    that.movePassedPolyline = new AMap.Polyline({
      map: that.map,
      // path: lineArr,
      strokeColor: "#AF5", //线颜色
      // strokeOpacity: 1,     //线透明度
      strokeWeight: 6, //线宽
      // strokeStyle: "solid"  //线样式
    });
    that.moveMarker.on("moving", function (e) {
      that.movePassedPolyline.setPath(e.passedPath);
    });
    that.moveMarker.moveAlong(options.lineArr, 200);
    // that.map.setFitView();
    setTimeout(() => {
      that.map.setCenter(options.lineArr[0]);
      that.map.setZoom(options.zoom);
    }, 500);
  },
  //根据企业Id人员定位
  getPersonPosition(data) {
    this.requestPromise({
      url: this.baseUrl + '/mpsh/client/screen/userposbycompany',
      type: "POST",
      data: JSON.stringify(data)
    }).then(result => {
      this.createPerson([
        result, 'click'
      ])
    })
  },
  //根据监控id定位
  getMonitorPosition(data) {
    this.requestPromise({
      url: this.baseUrl + '/mpsh/client/camera/list',
      type: "POST",
      data: JSON.stringify(data)
    }).then(result => {
      this.createMonitor(result)
    })
  },
  //移除监控
  removeMonitor() {
    if (this.monitorPoints.length > 0) {
      this.map.remove(this.monitorPoints);
      this.monitorPoints = [];
    }
  },
  //创建人员点
  createPerson: function (payload) {
    let type = "person";
    let that = this;
    let personList = payload[0].data;
    if (
      personList.length > 0 &&
      personList[0].longitude &&
      personList[0].latitude
    ) {
      let temp = gcoord.transform(
        [personList[0].longitude, personList[0].latitude],
        gcoord.BD09,
        gcoord.WGS84
      );
      if (payload[1] == "search") {
        that.map.setCenter(temp);
      }
      personList.map((item, index) => {
        if (item.longitude && item.latitude) {
          let localtion = gcoord.transform(
            [item.longitude, item.latitude],
            gcoord.BD09,
            gcoord.WGS84
          );
          let marker = new AMap.Marker({
            icon: new AMap.Icon({
              image: that.basePath + "/static/img/legendList/person.png",
              size: new AMap.Size(42, 56),
              imageSize: new AMap.Size(42, 56),
              offset: new AMap.Pixel(-22.5, -67),
            }),
            position: localtion,
            title: item.name,
            animation: "AMAP_ANIMATION_DROP", //点标掉落效果   “AMAP_ANIMATION_BOUNCE”，点标弹跳效果
          });
          this.personPoints.push(marker);
          AMap.event.addListener(marker, "click", function () {
            that.getPersonDetail({ userid: item.id });
          });
        }
      });
      // this.map.add(this.personPoints);
      this.setMarkerCluster(this.personPoints, type);
    } else {
      $.jqAlert({
        content: "暂无人员！",
        type: "warning"
      });
    }
  },
  //创建聚合点标记
  setMarkerCluster(markers, type) {
    let that = this;
    let count = markers.length;
    let _renderClusterMarker = function (context) {
      var factor = Math.pow(context.count / count, 1 / 17);
      var div = document.createElement("div");
      var Hue = 180 - factor * 180;
      var bgColor = "hsla(" + Hue + ",100%,50%,0.7)";
      var fontColor = "hsla(" + Hue + ",100%,20%,1)";
      var borderColor = "hsla(" + Hue + ",100%,40%,1)";
      var shadowColor = "hsla(" + Hue + ",100%,50%,1)";
      div.style.backgroundColor = bgColor;
      var size = Math.round(30 + Math.pow(context.count / count, 1 / 5) * 20);
      div.style.width = div.style.height = size + "px";
      div.style.border = "solid 1px " + borderColor;
      div.style.borderRadius = size / 2 + "px";
      div.style.boxShadow = "0 0 1px " + shadowColor;
      div.innerHTML = context.count;
      div.style.lineHeight = size + "px";
      div.style.color = fontColor;
      div.style.fontSize = "14px";
      div.style.textAlign = "center";
      context.marker.setOffset(new AMap.Pixel(-size / 2, -size / 2));
      context.marker.setContent(div);
    };
    that.map.plugin(["AMap.MarkerClusterer"], function () {
      if (type == "person") {
        that.personVehicle = new AMap.MarkerClusterer(that.map, markers, {
          maxZoom: 16.9,
          gridSize: 60,
          renderClusterMarker: _renderClusterMarker,
        });
      }
    });
  },
  //创建监控点
  createMonitor: function (payload) {
    let that = this;
    that.saveJankong = [];
    let type = "monitor";
    let monitorList = payload.data.list;
    if (monitorList.length > 0) {
      monitorList.map((item, index) => {
        if (item.longitude2 && item.latitude2) {
          let localtion = [item.longitude2, item.latitude2];
          let marker = new AMap.Marker({
            icon: new AMap.Icon({
              image: that.basePath + "/static/img/legendList/monitor.png",
              size: new AMap.Size(42, 56),
              imageSize: new AMap.Size(42, 56),
              offset: new AMap.Pixel(-22.5, -67),
            }),
            position: localtion,
            // position: [localtionX, localtionY],
            draggable: that.editOff,

            cursor: "move",
            // 设置拖拽效果
            // raiseOnDrag: that.editOff,
            title: item.name,
            animation: "AMAP_ANIMATION_DROP", //点标掉落效果   “AMAP_ANIMATION_BOUNCE”，点标弹跳效果
          });
          this.monitorPoints.push(marker);
          marker.id = item.id;
          marker.index = index;
          AMap.event.addListener(marker, "dragend", function (e) {
            that.setZuobiao(marker, e.lnglat, that.saveJankong);
          });
          AMap.event.addListener(marker, "click", function () {
            //超速摄像头没有打开监控功能
            if (item.sys_id == '38') {
              $("#common-footer").hide();
            }
            let formdata = new FormData();
            formdata.append("indexCode", item["index_code"]);
            that.indexCode = item["index_code"];
            //视频弹窗
            $("#monitorDialog").css("visibility", "visible")
            that.videoPromise(formdata, that.baseUrl + '/mpsh/client/camera/preview').then(result => {
              if (result.errno == 0) {
                if (that.monitorPlayer) {
                  that.monitorPlayer.dispose();
                }
                $("#monitorDialog .common-cont").html(`<video id="monitor-video" class="video-js vjs-default-skin common-video" controls muted></video>`);
                $("#monitorDialog .p-header .text").html(item.name || '视频')
                result.data.url = result.data.url.replace("http://172.16.10.2:83/", "/hkVideo/")
                that.monitorPlayer = videojs("monitor-video", {
                  autoplay: true,
                  sources: [{
                    src: result.data.url
                    // src: "http://172.16.10.2:83/openUrl/qOyaevS/live.m3u8"
                  }]
                });
                that.monitorPlayer.play();
                $("#monitorDialog .monitor-mark").css("visibility", "hidden")
              }
            })
          });
        }
      });
      this.map.add(this.monitorPoints);
      // this.setMarkerCluster(this.monitorPoints, type);
    } else {
      $.jqAlert({
        content: "监控数量为空",
        type: 'warning'
      })
    }
  },
  // 获取人员详情
  getPersonDetail(options) {
    this.requestPromise({
      url: this.baseUrl + '/mpsh/client/screen/userinfo',
      type: "POST",
      data: JSON.stringify(options)
    }).then(result => {
      if (result.errno == 0) {
        let personDetail = result.data;
        this.showData = {
          title: "人员详情",
          detail: [
            { name: "姓名:", text: personDetail.name },
            { name: "电话:", text: personDetail.phone },
          ],
          buttonText: "确定",
          functionName: "close",
        };
        //人员弹窗内容
        let htmlStr = ''
        this.showData.detail.forEach(item => {
          htmlStr += `<div class="element"><div><span class="name">${item.name}</span><span>${item.text}</span></div></div>`
        })
        htmlStr += `<div><i class="button">${this.showData.buttonText}</i></div>`
        $("#commonDialog .p-header").find(".text").html(this.showData.title)
        $("#commonDialog .common-cont").html(htmlStr)
        $("#commonDialog").css("visibility", "visible");
        //绑定确定事件
        $("#commonDialog").find(".button").unbind("click");
        $("#commonDialog").find(".button").bind("click", function () {
          $("#commonDialog").css("visibility", "hidden");
        })
      }
    })
  },
  //移除所有人员定位
  removePerson() {
    this.map.remove(this.personPoints);
    this.map.remove(this.personVehicle);
    this.personVehicle = "";
    this.personPoints = [];
  },
  //重置地图
  resetMap() {
    this.map.setCenter(mapSetting.center);
    this.map.setZoom(mapSetting.zoom);
    this.map.setPitch(mapSetting.pitch);
    this.map.setRotation(mapSetting.rotation);
  },
  //初始化图例
  initLegend: function () {
    let htmlStr = '';
    this.legend.forEach((item, index) => {
      htmlStr += `<div class="item legend-${item.icon}" index="${index}">
      <span class="icon ${item.icon}"></span>
      <span class="text">${item.text}</span>
      <span class="arrow" style="${item.arrow ? 'display:block' : 'display:none'}"></span>
      </div>`
    })
    $(".d-bayonet .b-content").html(htmlStr);
  },
  //展示无人机模块
  handleuav(bool) {
    this.planeOff(bool);
  },
  // 卡口
  handlebayonet(bool) {
    this.bayonetOff(bool)
  },
  bayonetOff(n) {
    if (!n) {
      //移除所有卡口
      this.map.remove(this.bayonetPoints);
      this.bayonetPoints = [];
    } else {
      //获取卡口数据
      this.getbayonetList()
    }
  },
  // 道路
  handleroad(bool) {
    this.roadOff(bool)
  },
  roadOff(n) {
    if (!n) {
      //移除所有道路
      // this.map.remove(this.bayonetPoints);
      // this.bayonetPoints = [];
      roadPathList.map((item, index) => {
        this.map.remove(this.roadPolyline[index]);
      });
      roadNameList.map((item, index) => {
        this.map.remove(this.roadName[index]);
      });
    } else {
      //获取道路数据
      this.getroadList()
    }
  },

  // 区域
  handlearea(bool) {
    this.areaOff(bool)
  },
  selectVehicleDetailById(data) {
    return this.requestPromise({
      url: this.baseUrl + '/mpsh/client/screen/getdetails',
      type: "POST",
      data: JSON.stringify(data)
    })
  },
  selectVehicleDetailByCarnum(data) {
    return this.requestPromise({
      url: this.baseUrl + '/mpsh/client/vehicle/getdetails',
      type: "POST",
      data: JSON.stringify(data)
    })
  },
  // 查询危化品车辆详情
  async getVehicleDetail(options) {
    let res = "";
    if (options.id == 1) {
      res = await this.selectVehicleDetailById(options);
    } else {
      res = await this.selectVehicleDetailByCarnum(options);
    }
    if (res.errno == 0) {
      this.vehicleDetail = res.data;
      this.showData = {
        title: "车辆详情",
        detail: [
          {
            name: "车牌号:",
            text: this.vehicleDetail.carNum
              ? this.vehicleDetail.carNum
              : "暂无信息"
          },
          {
            name: "物品类型:",
            text: this.vehicleDetail.ladingType
              ? this.vehicleDetail.ladingType
              : "暂无信息"
          },
          {
            name: "驾驶员:",
            text: this.vehicleDetail.driverName
              ? this.vehicleDetail.driverName
              : "暂无信息"
          },
          {
            name: "联系电话:",
            text: this.vehicleDetail.driverPhone
              ? this.vehicleDetail.driverPhone
              : "暂无信息"
          },
          {
            name: "发货企业:",
            text: this.vehicleDetail.consigneeEnterpriseName
              ? this.vehicleDetail.consigneeEnterpriseName
              : "暂无信息"
          },
          {
            name: "运输公司:",
            text: this.vehicleDetail.carrierEnterpriseName
              ? this.vehicleDetail.carrierEnterpriseName
              : "暂无信息"
          },
          {
            name: "物品名称:",
            text: this.vehicleDetail.ladingName
              ? this.vehicleDetail.ladingName
              : "暂无信息"
          }
        ],
        buttonText: "轨迹",
        functionName: "drawCarRoad",
        imei: options.imei, //车辆imei
        carnum: this.vehicleDetail.carNum,
        id: options.id
      };
      let htmlStr = ''
      this.showData.detail.forEach(item => {
        htmlStr += `<div class="element"><div><span class="name">${item.name}</span><span>${item.text}</span></div></div>`
      })
      htmlStr += `<div><i class="button">${this.showData.buttonText}</i></div>`
      $("#commonDialog .p-header").find(".text").html(this.showData.title)
      $("#commonDialog .common-cont").html(htmlStr)
      $("#commonDialog").css("visibility", "visible") // 属性名,属性值
      // this.isShowDialog = true;
      // 绑定关闭事件
      $("#commonDialog").find('.button').unbind('click')
      $("#commonDialog").find('.button').bind('click', () => {
        this.getVehicleRoad({
          id: options.id,
          name: this.showData.functionName
        })
      })
    }
  },
  // 时间获取
  getCurrentDate() {
    let date = new Date();
    let yy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    return yy + "-" + mm + "-" + dd
  },
  async getVehicleRoad(payload) {
    let day = this.getCurrentDate();
    let imei = this.showData.imei;
    let carnum = this.showData.carnum;
    let res = "";
    if (payload == 1) {
      res = await this.selectVehicleDetail({
        imei: imei,
        dates: day,
      });
    } else {
      res = await this.selectVehicleDetailNew({
        //  carnum: "苏A4A419",
        // dates: "2021-07-05",
        carnum: carnum,
        dates: day,
      });
    }
    let tempArry = [];
    if (res.errno == 0) {
      res.data.list.map((item, index) => {
        let localtion = "";
        if (payload == 1) {
          localtion = gcoord.transform(
            [item.lng, item.lat],
            gcoord.BD09,
            gcoord.WGS84
          );
        } else {
          localtion = [item.lng, item.lat];
        }
        tempArry.push(localtion);
      });
      let options = {
        name: "vehicle",
        lineArr: tempArry,
        zoom: 14,
      };
      this.createAllRoad(options);
      $("#commonDialog").css("visibility", "hidden") // 属性名,属性值
      this.removeVehicle();
    }
  },
  selectVehicleDetail(data) {
    return this.requestPromise({
      url: this.baseUrl + '/mpsh/client/screen/cartrack',
      type: 'post',
      data: JSON.stringify(data)
    })
  },
  selectVehicleDetailNew(data) {
    return this.requestPromise({
      url: this.baseUrl + '/mpsh/client/vehicle/cartrack',
      type: 'post',
      data: JSON.stringify(data)
    })
  },
  // 卡口数据获取
  getbayonetList() {
    this.requestPromise({
      url: this.baseUrl + '/mpsh/client/camera/bayonet',
      type: "post"
    }).then(res => {
      if (res.errno === 0) {
        let that = this;
        that.saveKakouObject = [];
        let type = "bayonet";
        this.bayonetList = res.data.list;
        this.bayonetList.map((item, index) => {
          if (item.longitude && item.latitude) {
            // let localtion = gcoord.transform(
            //   [item.longitude, item.latitude],
            //   gcoord.BD09,
            //   gcoord.GCJ02
            // );
            let localtion = [item.longitude, item.latitude];
            let marker = new AMap.Marker({
              icon: new AMap.Icon({
                image: that.basePath + "/static/img/legendList/bayonet.png",
                size: new AMap.Size(42, 56),
                imageSize: new AMap.Size(42, 56),
                // offset: new AMap.Pixel(-22.5, -67),
                // 设置是否可以拖拽
              }),
              position: localtion,
              draggable: that.editOff,
              cursor: "move",
              // 设置拖拽效果
              // raiseOnDrag: that.editOff,
              title: item.name,
              label: item.location,
              animation: "AMAP_ANIMATION_DROP", //点标掉落效果   “AMAP_ANIMATION_BOUNCE”，点标弹跳效果
            });
            marker.index = index;
            marker.id = item.id;
            this.bayonetPoints.push(marker);
            // that.editOff
            AMap.event.addListener(marker, "dragend", function (e) {
              that.setZuobiao(marker, e.lnglat, that.saveKakouObject, "ka");
            });

            AMap.event.addListener(marker, "click", function () {
              that.isShowDialog = true;
              that.showData = {
                title: "卡口信息",
                detail: [
                  { name: item.name, text: item.location }
                ],
                buttonText: "确定",
                functionName: "close",
              };
              let htmlStr = ''
              that.showData.detail.forEach(item => {
                htmlStr += `<div class="element"><div><span class="name">${item.name}</span><span>${item.text}</span></div></div>`
              })
              htmlStr += `<div><i class="button">${that.showData.buttonText}</i></div>`
              // 赋值title
              $("#commonDialog .p-header").find(".text").html(that.showData.title)
              //赋值文本
              $("#commonDialog .common-cont").html(htmlStr)
              // 显示弹窗
              $("#commonDialog").css("visibility", "visible")

              // 绑定关闭事件
              $("#commonDialog").find(".button").unbind('click')
              // 点击确定关闭弹窗
              $("#commonDialog").find(".button").bind('click', function () {
                $("#commonDialog").css("visibility", "hidden")
              })
            });
          }
          // console.log(item.longitude, item.latitude, "转换前的");
          // console.log(localtion, "localtion");
        })
        this.map.add(this.bayonetPoints);
      }
    })
  },

  // 获取道路数据
  getroadList() {
    //加载道路
    roadPathList.map((options, index) => {
      // this.createRoad(item, index);
      this.roadPolyline[index] = new AMap.Polyline({
        path: options.path,
        strokeColor: "#0bb5c6",
        strokeOpacity: 1,
        strokeWeight: 1.5,
        strokeStyle: "solid",
        zIndex: 10,
      });

      this.map.add(this.roadPolyline[index]);

    });
    //加载道路名称
    roadNameList.map((options, index) => {
      // this.createRoadName(item, index);
      this.roadName[index] = new AMap.Text({
        text: options.name,
        anchor: "center", // 设置文本标记锚点
        angle: options.angle,
        autoRotation: false,
        style: {
          color: "#ffffff",
          "font-size": "18px",
          "background-color": " #0bb5c6",
          "border-width": 0,
          "border-radius": "20%",
        },
        position: options.position,
      });

      this.map.add(this.roadName[index]);
    });

  },

  // 创建遮罩模块
  createPolygon(options, index) {
    this.polygon[index] = new AMap.Polygon({
      path: options.path,
      fillColor: options.color,
      strokeOpacity: 0,
      fillOpacity: 0.6,
      strokeColor: "#2b8cbe",
      strokeWeight: 0,
      strokeStyle: "dashed",
      strokeDasharray: [5, 5],
      id: options.id,
    });
    this.polygon[index].on("mouseover", (e) => {
      if (e.target.Ce.id == 3) {
        this.polygonRoad.map((element, number) => {
          this.polygonRoad[number].setOptions({
            strokeOpacity: 0.8,
          });
        });
      }
      this.polygon.map((element, location) => {
        if (element.Ce.id == e.target.Ce.id) {
          this.polygon[location].setOptions({
            fillOpacity: 0.8,
            fillColor: options.hoverColor,
          });
        }
      });
    });
    this.polygon[index].on("mouseout", (e) => {
      if (e.target.Ce.id == 3) {
        this.polygonRoad.map((element, number) => {
          this.polygonRoad[number].setOptions({
            strokeOpacity: 0.6,
          });
        });
      }
      this.polygon.map((element, location) => {
        if (element.Ce.id == e.target.Ce.id) {
          this.polygon[location].setOptions({
            fillOpacity: 0.6,
            fillColor: options.color,
          });
        }
      });
    });
    this.map.add(this.polygon[index]);
  },

  creatMap: function () {
    mapLoader().then(async Amap => {
      if (!window.AMapUI) {
        // 如果还没有初始化
        await initAMapUI(); // 这里调用initAMapUI初始化
      }
      await this.initAmap(); //加载地图
      await this.initMapCanvas();
    })
  },
  initAmap: function () {
    this.map = new AMap.Map("amapContainer", {
      viewMode: mapSetting.viewMode,
      resizeEnable: true,
      zooms: mapSetting.zooms,
      zoom: mapSetting.zoom,
      center: mapSetting.center,
      pitch: mapSetting.pitch,
      rotation: mapSetting.rotation,
      mapStyle: mapSetting.mapStyle,
    });
    this.map.AmbientLight = new AMap.Lights.AmbientLight([1, 1, 1], 1);
    this.map.DirectionLight = new AMap.Lights.DirectionLight(
      [-6, -2, 14], [1, 1, 1],
      0.7
    );

    this.initWms();
    this.loadingMapElement();
    let that = this;
    this.map.on("complete", function () {
      window.map = this.map;
      that.MapCanvasLayer = new AMap.CanvasLayer({
        canvas: that.canvas,
        bounds: new AMap.Bounds([119.484999, 34.481996], [119.700435, 34.604466]),
        zooms: mapSetting.zooms,
      });

      that.MapCanvasLayer.setMap(that.map);
    });
    this.map.on("click", function (e) {
      that.localx = e.lnglat.getLng();
      that.localy = e.lnglat.getLat();
    });
    this.map.on("zoomend", function (e) {

    });
    this.map.on("moveend", function (e) {

    });
  },
  initWms() {
    this.wms = new AMap.TileLayer.WMS({
      // url: "mpsh/geoserver/lyg/wms", // wms服务的url地址
      url: "/geoserver/lyg/wms",
      blend: true, // 地图级别切换时，不同级别的图片是否进行混合
      params: {
        FORMAT: "image/png",
        VERSION: "1.1.1",
        LAYERS: "lyg:pyramid",
      },
    });
    this.map.add(this.wms);
  },
  //加载地图元素
  loadingMapElement() {
    //加载公司标注
    this.createCompany();
    // 无人机
    // 石化九路与苏海路交叉口管廊
    this.getDrawCricle([119.5562, 34.533759], 0, "石化九路与苏海路交叉口管廊").then(
      (res) => {
        this.setPlaneData(res);
        // this.map.add(res.markerObj);
      }
    );
    // 重型化工消防站楼顶 ,
    this.getDrawCricle([119.607767, 34.538506], 1, "重型化工消防站楼顶").then((res) => {
      this.setPlaneData(res);
      // this.map.add(res.markerObj);
    });
    // this.getDrawCricle([119.608294, 34.542942]);
  },
  //创建公司标记点
  createCompany() {
    let markers = [];
    let allowCollision = true; // 设置 allowCollision：true，可以让标注避让用户的标注
    this.companyLayer = new AMap.LabelsLayer({
      zooms: [10, 20], //zooms越大可视范围越小
      zIndex: 1000,
      allowCollision,
    });
    // 初始化 labelMarker
    for (let i = 0; i < companyNames.LabelsData.length; i++) {
      let curData = companyNames.LabelsData[i];
      curData.extData = {
        index: i,
      };
      let labelMarker = new AMap.LabelMarker(curData);
      markers.push(labelMarker);
    }
    // 将 marker 添加到图层
    this.companyLayer.add(markers);
    // 图层添加到地图
    this.map.add(this.companyLayer);
  },
  initMapCanvas() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = 1774;
    this.canvas.height = 1247;
    // this.loadingRiverImage();
    // this.computedLength();
  },
  //拖拽元素
  moveDom: function move(targetDom, moveDom, isBoundary, parent) {
    if (targetDom === undefined || targetDom === '') {
      // alert('请传入鼠标指定的dom对象');
      return;
    }
    if (isBoundary === undefined) {
      isBoundary = true;
    } else {
      isBoundary = !!isBoundary;
    }
    if (parent === undefined) {
      parent = !!parent;
    } else {
      parent = true;
    }
    moveDom = moveDom || targetDom;
    var isMove = false;
    var x, y;
    var moveDomStyle = getComputedStyle(moveDom);
    var tf = moveDomStyle.transform;

    var moveDomWidth = parseInt(moveDomStyle.width);
    var moveDomHeight = parseInt(moveDomStyle.height);
    var currentX = parseInt(moveDomStyle.left);
    var currentY = parseInt(moveDomStyle.top);

    if (tf !== 'none') {
      var tfArr = tf.replace(/matrix\(|\)/g, '').split(',');
      var offset_x = parseInt(tfArr[4]);
      var offset_y = parseInt(tfArr[5]);
      moveDom.style.left = currentX + offset_x + 'px';
      moveDom.style.top = currentY + offset_y + 'px';
      moveDom.style.transform = 'translate(0,0)';
      currentX = parseInt(moveDomStyle.left);
      currentY = parseInt(moveDomStyle.top);
    } else {
      moveDom.style.left = currentX + 'px';
      moveDom.style.top = currentY + 'px';
    }
    var clientX, clientY;
    if (parent) {
      var parentNode = moveDom.parentNode;
      var parentNodeStyle = getComputedStyle(parentNode);
      clientX = parseInt(parentNodeStyle.width);
      clientY = parseInt(parentNodeStyle.height);
    } else {
      clientX = document.body.clientWidth;
      clientY = document.body.clientHeight;
    }
    var offsetX = 0;
    var offsetY = 0;
    var maxX = clientX - moveDomWidth;
    var maxY = clientY - moveDomHeight;

    targetDom.addEventListener('mousedown', function (e) {
      e = e || event;
      // if (e.target === targetDom) {
      if ($(e.target).attr("class") === 'close') return;
      isMove = true;
      x = e.clientX;
      y = e.clientY;
      // }
    })
    document.addEventListener('mousemove', function (e) {
      if (isMove) {
        e = e || event;
        var moveX = e.clientX - x;
        var moveY = e.clientY - y;
        var positionX = currentX + moveX;
        var positionY = currentY + moveY;
        if (isBoundary) {
          if (moveX < 0) {
            positionX = Math.max(offsetX, positionX);
          } else {
            positionX = Math.min(maxX, positionX);
          }
          if (moveY < 0) {
            positionY = Math.max(offsetY, positionY);
          } else {
            positionY = Math.min(maxY, positionY);
          }
        }

        moveDom.style.left = positionX + 'px';
        moveDom.style.top = positionY + 'px';
      }
    })
    document.addEventListener('mouseup', function (e) {
      e = e || event;
      e.preventDefault()
      isMove = false;
      currentX = parseInt(moveDomStyle.left);
      currentY = parseInt(moveDomStyle.top);
    })
  },
  //航拍
  getDrawCricle(center, num, name) {
    var that = this;
    return new Promise(function (resolve) {
      var mapContent = `<div class="mapMarker">
                  <div class="mapIcon"><span></span>
                  </div></div>`;

      var markerObj = new AMap.Marker({
        // map: that.map,

        content: mapContent,

        position: center,

        offset: new AMap.Pixel(0, 0),

        title: "",

        animation: "AMAP_ANIMATION_DROP", //点标掉落效果   “AMAP_ANIMATION_BOUNCE”，点标弹跳效果

        label: {
          content: "", //设置文本标注内容

          direction: "top", //设置文本标注方位

          offset: new AMap.Pixel(0, 0), //设置文本标注偏移量
        },

        zIndex: 9999999,
        offset: new AMap.Pixel(-30, -20),
      });

      var zoom = 5;
      //半径、层数、中心点、{填充颜色、初始透明度}

      var circles1_point_lng = center[0] + 0.015;
      var circles1_point_lat = center[1] + 0.014;

      var objed = $CircleLei(that.map, center, 2000);
      // circles1.start(800, 5000); //水波圆开始

      markerObj.on("click", (e) => {
        that.setPlaneWinOff(true);
        if (num == 0) {
          that.getUav(name);
        } else {
          that.getUav2(name);
        }
      });

      resolve({
        // circles1,
        objed,
        markerObj,
        num,
      });
    });
  },
  //无人机开关
  planeOff(n) {
    if (!n) {
      this.planeData.length &&
        this.planeData.map((item, i) => {
          this.map.remove(item.markerObj);
          this.map.remove(item.objed.object3Dlayer);
          item.objed.end();
          clearInterval(window["tt" + i]);
          // item.circles1.circles.map((it) => {
          //   this.map.remove(it);
          // });
        });
    } else {
      this.planeData.length &&
        this.planeData.map((item, i) => {
          this.map.add(item.markerObj);
          this.map.add(item.objed.object3Dlayer);
          item.objed.start();
          window["tt" + i] = setInterval(() => {
            item.objed.scan();
          }, 50 + i * 5);
          // item.circles1.circles.map((it) => {
          //   this.map.add(it);
          // });
          // item.circles1.start(500, 2000);
        });
    }
  },
  setPlaneWinOff: function (bool) {
    this.planeWinOff = bool;
    bool ? $("#pubWin").css("visibility", "visible") : $("#pubWin").css("visibility", "hidden");
  },
  setPlaneData: function (res) {
    this.planeData.push(res);
  },
  // 石化九路与素海璐交叉口管廊上
  getUav: function (name) {
    this.requestPromise({
      url: this.baseUrlInner + '/mpsh/client/screen/uav',
      type: "POST"
    }).then(res => {
      const { data = {} } = res;
      data.planeName = name;
      this.planeDataList = JSON.stringify(data);
    })
  },
  // 重型化工消防站楼顶
  getUav2: function (name) {
    this.requestPromise({
      url: this.baseUrlInner + '/mpsh/client/screen/uav2',
      type: "POST"
    }).then(res => {
      const { data = {} } = res;
      data.planeName = name;
      this.planeDataList = JSON.stringify(data);
    })
  },
  //查询人员
  searchPerson(data) {
    this.removePerson();
    if (!data) {
      $.jqAlert({
        content: "请输入人员姓名！",
        type: "warning",
      });
      this.resetMap();
      return;
    };
    this.requestPromise({
      url: this.baseUrl + '/mpsh/client/screen/userposbysearch',
      type: "POST",
      data: JSON.stringify({
        realname: data
      })
    }).then(res => {
      if (res.errno == 0) {
        this.createPerson([res, "search"]);
      }
    })
  },
  //简单封装ajax请求
  requestPromise: function (params) {
    return new Promise((resolve, reject) => {
      if (!params.url) {
        reject('url不能为空');
        return
      }
      const option = {
        url: params.url,
        type: params.type || 'get',
        async: params.async || true,
        beforeSend: params.beforeSend || undefined,
        contentType: params.contentType || "application/json;charset=utf-8",
        data: params.data || undefined,
        dataType: params.dataType || "json",
      }
      $.ajax({
        url: option.url,
        type: option.type,
        async: option.async,
        data: option.data,
        contentType: option.contentType,
        beforeSend: option.beforeSend,
        dataType: option.dataType,
        success: function (result) {
          if (result.errno == 0) {
            resolve(result);
            return;
          }
          $.jqAlert({
            content: result.errmsg,
            type: "error",
          });
        },
        error: function (error) {
          reject(error);
        }
      })
    })
  },
  //视频请求
  videoPromise: function (formdata, url) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: url,
        type: "POST",
        data: formdata,
        contentType: false,
        processData: false,
        success: function (result) {
          resolve(result);
        },
        error: function (error) {
          reject(error);
        }
      })
    })
  }
}
var iAmp = new indexAmap();
iAmp.init();
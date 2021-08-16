function $CircleLei(map, center, m) {
  var object3Dlayer = new AMap.Object3DLayer();
  map.add(object3Dlayer);
  var radar;
  var buildRadar = function() {
    radar = new AMap.Object3D.Mesh();
    radar.transparent = true;
    radar.backOrFront = 'front';

    var geometry = radar.geometry;
    var radius = m; // 米
    radius = radius / map.getResolution(map.getCenter(), 20);
    var unit = 1;
    var range = 200;
    var count = range / unit;

    for (var i = 0; i < count; i += 1) {
      var angle1 = i * unit * Math.PI / 180;
      var angle2 = (i + 0.5) * unit * Math.PI / 180;

      var p1x = Math.cos(angle1) * radius;
      var p1y = Math.sin(angle1) * radius;
      var p2x = Math.cos(angle2) * radius;
      var p2y = Math.sin(angle2) * radius;

      geometry.vertices.push(0, 0, 0);
      geometry.vertices.push(p1x, p1y, 0);
      geometry.vertices.push(p2x, p2y, 0);

      var opacityStart = getOpacity(i / count);
      var opacityEnd = getOpacity((i + 1) / count);

      geometry.vertexColors.push(1.25, 0.83, 2.55, opacityStart);
      // geometry.vertexColors.push(0, 1, 0.2, opacityStart);
      geometry.vertexColors.push(1.25, 0.83, 2.55, opacityEnd);
    }

    radar.position(center);

    object3Dlayer.add(radar);
  };

  function getOpacity(scale) {
    return 1 - Math.pow(scale, 1);
  }

  function scan() {
    radar.rotateZ(-2);

  }

  function start() {
    buildRadar();
    scan();
  }

  function end() {
    object3Dlayer.remove(radar);
    if (window.tt) {
      clearInterval(window.tt);
    }
  }
  return {
    object3Dlayer: object3Dlayer,
    start: start,
    scan: scan,
    end: end,

  }
}


function type(data) {
  return Object.prototype.toString.call(data);
}
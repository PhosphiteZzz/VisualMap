/**
 * 增加命名空间方法<br>
 * <p>
 * 用法：$.namespace("a.b.c"); a.b.c.testFunction=function(...);
 */
$.extend($, {
	namespace : function() {
		var o, d;
		for (var i = 0, len = arguments.length; i < len; i++) {
			d = arguments[i].split(".");
			o = window[d[0]] = window[d[0]] || {};
			var left = d.slice(1);
			for (var i = 0, len = left.length; i < len; i++) {
				o = o[left[i]] = o[left[i]] || {};
			}
		}
		return o;
	},
	SUCCESS : "success",
	ERROR : "error"
});
/*
 * datagrid json节点的解析
 */
$.extend($.fn.datagrid.defaults, {
	loader : function(param, success, error) {
		var opts = $(this).datagrid("options");
		if (!opts.url) {
			return false;
		}
		$.ajax({
			type : opts.method,
			url : opts.url,
			data : param,
			dataType : "json",
			success : function(data) {
				if(!data){
					success(data);
				}
				// 同步前后台
				if (!data.rows) {
					data.rows = data.content;
				}
				if (!data.total) {
					data.total = data.totalElements;
				}
				success(data);
			},
			error : function() {
				error.apply(this, arguments);
			}
		});
	}
});

/*
 * 日期默认为yyyy/MM/dd
 */
$.extend($.fn.datebox.defaults, {
	formatter : function(date) {
		var y = date.getFullYear();
		var m = date.getMonth() + 1;
		var d = date.getDate();
		return y + '/' + (m < 10 ? ('0' + m) : m) + '/' + (d < 10 ? ('0' + d) : d);
	}
});
$.ajaxSetup ({
    cache: false //close AJAX cache
});
$.extend($.messager, {
	show : function(opt) {
		var defaults = $.extend({}, $.fn.dialog.defaults, {
			title : "",
			width : 450,
			height : 300,
			modal : true,
			closed : true,
			maximizable : true,
			msg : ""
		}, opt);
		defaults.style.zIndex = $.fn.dialog.defaults.zIndex++;
		var win = $("<div class=\"easyui-dialog\"></div>").html(defaults.msg).appendTo("body");
		win.dialog(defaults);
		win.dialog("dialog").css(defaults.style);
		win.dialog("open");
		return win;
	}
});

$.extend($.fn.combobox.defaults, {
	panelHeight : 'auto',
	loader : function(param, success, error) {
		var opts = $(this).combobox('options');
		if (!opts.url)
			return false;
		$.ajax({
			type : opts.method,
			url : opts.url,
			data : param,
			dataType : 'json',
			success : function(data) {
				$(data).each(function() {
					if (this.isDefault == 'Y') {
						this.selected = true;
					}
				})
				success(data);
			},
			error : function() {
				error.apply(this, arguments);
			}
		});
	}
});

$(document).ajaxSuccess(function(event, xhr, settings) {
});

$(document).ajaxStop(function() {
});

$(document).ajaxError(function(event, jqxhr, settings, exception) {
/*	$.messager.show({
		title : 'Error',
		width : 450,
		height : 300,
		modal : true,
		closed : true,
		maximizable : true,
		msg : jqxhr.responseText
	});*/
});

/**
 * 匹配中文 数字 字母 下划线
 */

function checkInput(str) {
	var pattern = /^[\w\u4e00-\u9fa5]+$/gi;
	if (pattern.test(str)) {
		return false;
	}
	return true;
}

// 取消后退键退出系统
$(document).keydown(
		function(e) { // 绑定键盘按下事件
			var doPrevent;
			// for IE && Firefox
			var varkey = (e.keyCode) || (e.which) || (e.charCode);
			if (varkey == 8) {
				var d = e.srcElement || e.target;
				if (d.tagName.toUpperCase() == 'INPUT' || d.tagName.toUpperCase() == 'TEXTAREA') {
					doPrevent = d.readOnly || d.disabled;
					if (d.type.toUpperCase() == 'SUBMIT' || d.type.toUpperCase() == 'RADIO'
							|| d.type.toUpperCase() == 'CHECKBOX'
							|| d.type.toUpperCase() == 'BUTTON') {
						doPrevent = true;
					}
				} else {
					doPrevent = true;
				}
			} else {
				doPrevent = false;
			}
			if (doPrevent) {
				e.preventDefault();
			}
		});
/**
 * 用法<input name="age" class="easyui-validatebox"
 * data-options="required:true,validType:'integer'"/>
 */
$.extend($.fn.validatebox.defaults.rules, {
	minLength : { // 判断最小长度
		validator : function(value, param) {
			return value.length >= param[0];
		},
		message : '最少输入 {0} 个字符。'
	},
	length : {
		validator : function(value, param) {
			var len = $.trim(value).length;
			return len >= param[0] && len <= param[1];
		},
		message : "内容长度介于{0}和{1}之间."
	},
	floatOrInt : { // 验证是否为小数或整数
		validator : function(value) {
			return /^(\d{1,3}(,\d\d\d)*(\.\d{1,3}(,\d\d\d)*)?|\d+(\.\d+))?$/i.test(value);
		},
		message : '请输入数字，并保证格式正确'
	},
	currency : { // 验证货币
		validator : function(value) {
			return /^d{0,}(\.\d+)?$/i.test(value);
		},
		message : '货币格式不正确'
	},
	integer : { // 验证整数
		validator : function(value) {
			return /^[+]?[1-9]+\d*$/i.test(value);
		},
		message : '请输入整数'
	},
	chinese : { // 验证中文
		validator : function(value) {
			return /^[\u0391-\uFFE5]+$/i.test(value);
		},
		message : '请输入中文'
	},
	english : { // 验证英语
		validator : function(value) {
			return /^[A-Za-z]+$/i.test(value);
		},
		message : '请输入英文'
	},
	unnormal : { // 验证是否包含空格和非法字符
		validator : function(value) {
			return /.+/i.test(value);
		},
		message : '输入值不能为空和包含其他非法字符'
	},
	phone : { // 验证电话号码
		validator : function(value) {
			return /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i
					.test(value);
		},
		message : '格式不正确,请使用下面格式:020-88888888'
	},
	mobile : { // 验证手机号码
		validator : function(value) {
			//return /^(13|15|18|17|19)\d{9}$/i.test(value);
			return true;
		},
		message : '手机号码格式不正确'
	},
	idcard : { // 验证身份证
		validator : function(value) {
			//return /^\d{15}(\d{2}[A-Za-z0-9])?$/i.test(value);
			return true;
		},
		message : '身份证号码格式不正确'
	},
	qq : { // 验证QQ,从10000开始
		validator : function(value) {
			return /^[1-9]\d{4,9}$/i.test(value);
		},
		message : 'QQ号码格式不正确'
	},
	username : { // 验证用户名
		validator : function(value) {
			return /^[a-zA-Z][a-zA-Z0-9_]{5,15}$/i.test(value);
		},
		message : '用户名不合法（字母开头，允许6-16字节，允许字母数字下划线）'
	},
	faxno : { // 验证传真
		validator : function(value) {
			// return /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[
			// ]){1,12})+$/i.test(value);
			return /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i
					.test(value);
		},
		message : '传真号码不正确'
	},
	zip : { // 验证邮政编码
		validator : function(value) {
			return /^[1-9]\d{5}$/i.test(value);
		},
		message : '邮政编码格式不正确'
	},
	ip : { // 验证IP地址
		validator : function(value) {
			return /d+.d+.d+.d+/i.test(value);
		},
		message : 'IP地址格式不正确'
	},
	name : { // 验证姓名，可以是中文或英文
		validator : function(value) {
			return /^[\u0391-\uFFE5]+$/i.test(value) | /^\w+[\w\s]+\w+$/i.test(value);
		},
		message : '请输入姓名'
	},
	carNo : {
		validator : function(value) {
			//return /^[\u4E00-\u9FA5][\da-zA-Z]{6}$/.test(value);
			//return /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/.test(value);
			return true;
		},
		message : '车牌号码无效（例：粤J12350）'
	},
	carenergin : {
		validator : function(value) {
			return /^[a-zA-Z0-9]{16}$/.test(value);
		},
		message : '发动机型号无效(例：FG6H012345654584)'
	},
	email : {
		validator : function(value) {
			return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
		},
		message : '请输入有效的电子邮件账号(例：abc@126.com)'
	},
	msn : {
		validator : function(value) {
			return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
		},
		message : '请输入有效的msn账号(例：abc@hotnail(msn/live).com)'
	},
	same : {
		validator : function(value, param) {
			if ($("#" + param[0]).val() != "" && value != "") {
				return $("#" + param[0]).val() == value;
			} else {
				return true;
			}
		},
		message : '两次输入的密码不一致！'
	},
	date : {
		validator : function(value) {
			return /^((?:19|20)\d\d)\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/.test(value);
		},
		message : '请输入有效的日期格式(例：YYYY/MM/DD)'
	}
});

function comboxformatter(value, codelist) {
	var sValue = ""+value;
	for (var i = 0; i < codelist.length; i++) {
		if (sValue == codelist[i].code) {
			return codelist[i].name;
		}
	}
}

function pageinit(cfg, callback) {
	var codeVar = cfg.getCodeCfg.codeVar;
	var codeSign = cfg.getCodeCfg.groupCode;
	var script = "$.when(";
	for (var i = 0; i < codeVar.length; i++) {
		script += "$.ajax({method : 'get',url : '" + codeSign[i] + "',dataType : 'json'}),";
	}
	script = script.substring(0, script.length - 1) + ");";
	var whenstr = eval(script);
	whenstr.done(function() {
		for (var i = 0; i < arguments.length; i++) {
			cfg.getCodeCfg.codeVar[i] = arguments[i][0];
		}
		callback(cfg);
	});
}

// 备注长度限制

function limitTextArea(field) {
	var maxlimit = 250;
	if (field.value.length > maxlimit)
		field.value = field.value.substring(0, maxlimit);
}

// 根据数据库中字段的长度要求截取文本输入框中输入的字符串

function limitTextArea(field, maxLength) {
	if (field.value.length > maxLength)
		field.value = field.value.substring(0, maxLength);
}

// 获得输入文本的短html（截取到20个字符），一般用在EasyUiGrid中的备注字段
function shortDescription(value, row, index) {
	if(value == null){
		value = "";
	}
	if (value.length > 20) {
		return "<span title='" + value + "'>" + value.substring(0, 20) + "..."
				+ "</span>";
	} else {
		return "<span title='" + value + "'>" + value + "</span>";
	}
};

// tree 获取一级子节点
$.extend($.fn.tree.methods, {
	getLeafChildren : function(jq, params) {
		var nodes = [];
		$(params).next().children().children("div.tree-node").each(function() {
			nodes.push($(jq[0]).tree('getNode', this));
		});
		return nodes;
	}
});

// 判断页面中是否存在重复的ID的方法

function checkDuplicate() {
	var i = 0;
	var duplicateIds = new Array();
	$("body [id]").each(function() {
		var id = $(this).attr("id");
		if (id != "" && $("body [id=" + id + "]").length >= 2) {
			// 判断是否已记录重复的值
			if (!contains(duplicateIds, id)) {
				duplicateIds[i] = id;
				alert("id为" + id + "的重复了。");
			}
		}
		i++;
	});
	if (duplicateIds.length == 0) {
		alert("HTML DOM中没有重复的ID")
	}
	return duplicateIds;
};

// 判断某个e元素是否存在于数组a中
function contains(a, e) {
	for (j = 0; j < a.length; j++)
		if (a[j] == e)
			return true;
	return false;
};

/**
 * 动态加载js<br>
 * <p>
 * eg. loadScript.load(["b.js", "a.js"]).done(function() {test();});
 * <p>
 * 参考userMap.js role.usermap.addRoleUser
 */
$.loadScript = (function() {
	var loadOne = function(url) {
		var dtd = $.Deferred();
		var node = document.createElement('script');
		node.type = "text/javascript";
		var onload = function() {
			dtd.resolve();
		};
		$(node).load(onload).bind('readystatechange', function() {
			if (node.readyState == 'loaded') {
				onload();
			}
		});
		document.getElementsByTagName('head')[0].appendChild(node);
		node.src = url;
		return dtd.promise();
	};

	var load = function(urls) {
		if (!$.isArray(urls)) {
			return load([ urls ]);
		}
		var ret = [];
		for (var i = 0; i < urls.length; i++) {
			ret[i] = loadOne(urls[i]);
		}
		return $.when.apply($, ret);
	}

	return {
		load : load
	};
})();

/**
 * 获取元素的outerHTML
 */
$.fn.outerHTML = function() {

    // IE, Chrome & Safari will comply with the non-standard outerHTML, all others (FF) will have a fall-back for cloning
    return (!this.length) ? this : (this[0].outerHTML ||
    (function(el) {
        var div = document.createElement('div');
        div.appendChild(el.cloneNode(true));
        var contents = div.innerHTML;
        div = null;
        return contents;
    })(this[0]));

};

/**
 * 随滚动条滚动
 */
$.extend($.fn.autoScroll = function() {
    var _this = this;
    $(_this).css({
        position: 'absolute'
    });

    $(window).scroll(function() {
        $(_this).css({
            top: $(this).scrollTop() + $(this).height() - 500
        });
    });

});

//去除页面项目空格
function spaceMove(changeNo) {
	var carValue = changeNo.value;
	changeNo.value = carValue.replace(new RegExp(' ','g'),"");
};


/*判断期间是否超出m个月*/
function checkDateDiff(startTime,endTime,m) {
	var time1 = new Date(startTime);
	var time2 = new Date(endTime);
    var diffyear = time2.getFullYear() - time1.getFullYear() ;
    var diffmonth = diffyear * 12 + time2.getMonth() - time1.getMonth() ;
    if(diffmonth < 0 ){
        return true ;
    } else if (diffmonth > m) {
		return false;
	} else if (diffmonth == m) {
		var diffDay = time2.getDate() - time1.getDate() ;
		if(diffDay >= 0) {
			return false;
		} else {
			return true;
		}
	} else {
		return true;
	}
}
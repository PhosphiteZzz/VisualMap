$.namespace("common.orgtree");

/**
 * 构造组织树 <br>
 * cfg.appendTo:自动创建ul时指定tree位置<br>
 * OrgTree的cfg: {needRoot:true,checkbox:false}
 */
common.orgtree.initOrgTree = function(treeName, cfg, onclickFunc) {
    cfg = cfg || {};
    var needRoot = cfg.needRoot;
    var checkbox = cfg.checkbox;
    var url = $.ctx + "/org/tree";
    var startUrl = url;
    if (needRoot) {
        startUrl = startUrl + "?needRoot=Y";
    } else {
        startUrl = startUrl + "?needRoot=N";
    }
    treeName = treeName || 'orgTree';
    var treeComp = $('#' + treeName);
    if (treeComp.length == 0) {
        var ul = "<ul id=\"" + treeName + "\"> </ul>";
        treeComp = $(ul).appendTo("#" + cfg.appendTo);
    }
    treeComp.tree({
        checkbox : checkbox,
        url : startUrl,
        method : "get",
        animate : true,
        onBeforeExpand : function(node, param) {
            $('#' + treeName).tree('options').url = url + "?parentId=" + node.id;
        },
        onClick : function(node) {
            onclickFunc(node)
        },
        onLoadSuccess : function(node, data){
			var root = $('#' + treeName).tree('getRoot');
			$('#' + treeName).tree('expand', root.target);
			$('#' + treeName).tree('select', root.target);
		}
    });
    return treeComp;
};

/**
 * 刷新组织树
 * 
 */
common.orgtree.reloadOrgTree = function(treeName, nodes) {
    // TODO:BUG node从子节点到有子节点时刷新不正确。
    if (nodes) {
        for (var i = 0; i < nodes.length; i++) {
            var node = $('#' + treeName).tree('find', nodes[i]);
            if (node) {
                $('#' + treeName).tree('reload', node.target);
            }
        }
    } else {
        var selectedNode = $('#' + treeName).tree('getSelected');
        if (selectedNode) {
            $('#' + treeName).tree('reload', selectedNode.target);
        } else {
            var root = $('#' + treeName).tree('getRoot');
            $('#' + treeName).tree('reload', root.target);
        }
    }
};
/**
 * 新增多个节点
 */
common.orgtree.treeAddNodes = function(treeName, node, childNodeList) {
    $("#" + treeName).tree('append', {
        parent : node.target,
        data : childNodeList
    });
};

/**
 * 新增节点
 */
common.orgtree.treeAddNode = function(treeName, node, tempNode) {
    var childNodeList = [ tempNode ];
    $("#" + treeName).tree('append', {
        parent : node.target,
        data : childNodeList
    });
};

/**
 * 新增(treeName, parentNode, tempNode)
 */
common.orgtree.addTreeNode = function(treeName, parentNode, tempNode) {
    if (treeName == null || parentNode == null || tempNode == null) {
        return;
    }
    var treeObj = $("#" + treeName);
    var children = treeObj.tree("getChildren", parentNode.target);

    var childNodeList = [ tempNode ];
    // 如果父节点的状态时closed，不执行新增
    if (parentNode.state == 'closed' && children.length == 0)
        return;

    treeObj.tree('append', {
        parent : parentNode.target,
        data : childNodeList
    });
    return;
};

/**
 * 移动(treeName, parentNodeF, parentNodeT, tempNode)
 */
common.orgtree.moveTreeNode = function(treeName, parentNodeF, parentNodeT, tempNode) {
    if (treeName == null || parentNodeF == null || parentNodeT || tempNode == null) {
        return;
    }

    removeTreeNode(treeName, parentNodeF, tempNode);
    addTreeNode(treeName, parentNodeT, tempNode);
};
/**
 * 删除(treeName, parentNode, tempNode)
 */
common.orgtree.removeTreeNode = function(treeName, parentNode, tempNode) {
    if (treeName == null || parentNode == null || tempNode == null) {
        return;
    }
    var treeObj = $("#" + treeName);

    // 移除当前节点
    treeObj.tree("remove", tempNode.target);
    // 得到父节点其他子节点
    var children = treeObj.tree("getChildren", parentNode.target);
    // 如果没有其他子节点，将父节点状态更为open
    if (children.length > 0 || parentNode.state != "closed") {
        return;
    }
    // alert(1);
    var parent = treeObj.tree("getParent", parentNode.target);
    treeObj.tree("remove", parentNode.target);

    parentNode.state = "open";

    var parentNodeList = [ parentNode ];
    treeObj.tree('append', {
        parent : parent.target,
        data : parentNodeList
    });
};
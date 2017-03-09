<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">
    <meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
    <meta http-equiv="description" content="This is my page">
    <title>extHelloworld</title>
    <link href="ext\resources\ext-theme-gray\ext-theme-gray-all.css" rel="stylesheet"
          type="text/css">
    <script type="text/JavaScript" src="ext/ext-all.js"></script>
    <script type="text/javascript" src="ext/locale/ext-lang-zh_CN.js"></script>
    <script type="text/javascript" src="ext/locale/table.js"></script>
  <script type="text/javascript">
      Ext.onReady(function () {
          var store =  Ext.create('Ext.data.Store', {
              id: 'storeId',
              fields: [ 'data', 'validity', 'title', 'content', 'add', 'publisher'],
              data: [{
                  'data': '2011/04/22',
                  'validity': '2011/04/22',
                  'title': '任务1',
                  'content': '内容1',
                  'add': '1',
                  'publisher': '张三',
              },
                  {
                      'data': '2011/04/22',
                      'validity': '2011/04/22',
                      'title': '任务1',
                      'content': '内容1',
                      'add': '1',
                      'publisher': '李四',
                  },
                  {
                      'data': '2011/04/22',
                      'validity': '2011/04/22',
                      'title': '任务1',
                      'content': '内容1',
                      'add': '1',
                      'publisher': '王五',
                  }],
              autoLoad: true
          });
          Ext.create("Ext.container.Viewport",{
              padding: "10 10 5 10",
              renderTo: Ext.getBody(),
              overflowY: "auto",

              items:[{
                  xtype:'panel',
                  border: 0,
                  items:[{
                      xtype:'panel',
                      height:30,
                      items:[{
                          text:'221',
                          xtype:'textfield',
                      }]
                  }],
                  items:[{
                      xtype:'grid',
                      id:'gridd',
                      listeners: {//双击表格任意行弹框显示本行信息
                          dblclick: {
                              element: 'body', //bind to the underlying body property on the panel
                              fn: function(){
                                  var selectedI = Ext.getCmp("gridd").getSelectionModel();
                                  if (selectedI.selected.items
                                          && selectedI.selected.items.length > 0) {
                                      var rec = selectedI.selected.items[0]["data"];
                                      win = Ext.create('widget.window',
                                              {

                                                  titleCollapse :true,
                                                  closable:false,
                                                  width: 500,
                                                  height: 450,
                                                  border:0,
                                                  hidden :true,
                                                  iconCls: "Applicationformedit",
                                                  x: 320,
                                                  y: 150,
                                                  bodyStyle: "background:#ffffff",
                                                  buttons: [
                                                      {
                                                          xtype: "button",
                                                          text: "返回",
                                                          handler: function () {
                                                              win.close();
                                                          }
                                                      }],
                                                  modal: true,
                                                  layout: {
                                                      type: 'border',
                                                      padding: 5
                                                  },
                                                  items: [{
                                                      xtype: "form",
                                                      id: "form1",
                                                      margin: "0 20 0 0",
                                                      layout: "form",
                                                      border: 0,
                                                      items: [
                                                          {
                                                              xtype: "textfield",
                                                              fieldLabel: "标题",
                                                              readOnly: true,
                                                              hideMode:'visibility',
                                                              labelAlign: "right",
                                                              name: "title",
                                                              algins:'center',
                                                              value: rec["title"],
                                                              labelWidth: 65
                                                          },
                                                          {
                                                              xtype: "textfield",
                                                              id: "add",
                                                              name: "add",
                                                              labelAlign: "right",
                                                              value: rec["add"],
                                                              readOnly: true,
                                                              fieldLabel: "附件",
                                                              labelWidth: 65
                                                          }, {
                                                              xtype: "textfield",
                                                              id: "data",
                                                              name: "data",
                                                              readOnly: true,
                                                              labelAlign: "right",
                                                              value: rec["data"],
                                                              fieldLabel: "发布时间",
                                                              labelWidth: 65
                                                          }, {
                                                              xtype: "textarea",
                                                              id: "content",
                                                              height:300,
                                                              name: "content",
                                                              readOnly: true,
                                                              labelAlign: "right",
                                                              value: rec["content"],
                                                              fieldLabel: "内容",
                                                              labelWidth: 65
                                                          }]
                                                  }]
                                              });
                                      win.show(this);
                                  } else {
                                      Ext.Msg.alert(
                                              "提示",
                                              "请选择一行记录进行查看")
                                  }
                              }
                          }
                      },

                      tbar:[{
                          xtype:'searchfield',//searchfield是extjs的扩展组件--搜索框
                          labelWidth:100,
                          store:store
                      }
                          ,{
                              xtype: "button",
                              text: "查看",
                              iconCls: "Applicationformedit",
                              handler: function () {
                                  var selectedI = Ext.getCmp("gridd").getSelectionModel();
                                  if (selectedI.selected.items
                                          && selectedI.selected.items.length > 0) {
                                      var rec = selectedI.selected.items[0]["data"];
                                      win = Ext.create('widget.window',
                                              {
                                                  closable:false,
                                                  width: 500,
                                                  height: 450,
                                                  border:0,
                                                  hidden :true,
                                                  iconCls: "Applicationformedit",
                                                  x: 320,
                                                  y: 150,
                                                  bodyStyle: "background:#ffffff",
                                                  modal: true,
                                                  layout: {
                                                      type: 'border',
                                                      padding: 5
                                                  },
                                                  items: [{
                                                      xtype: "form",
                                                      id: "form1",
                                                      margin: "0 20 0 0",
                                                      layout: "form",
                                                      border: 0,
                                                      items: [
                                                          {
                                                              xtype: "textfield",
                                                              fieldLabel: "标题",
                                                              readOnly: true,
                                                              hideMode:'visibility',
                                                              labelAlign: "right",
                                                              name: "title",
                                                              algins:'center',
                                                              value: rec["title"],
                                                              labelWidth: 65
                                                          },
                                                          {
                                                              xtype: "textfield",
                                                              id: "add",
                                                              name: "add",
                                                              labelAlign: "right",
                                                              value: rec["add"],
                                                              readOnly: true,
                                                              fieldLabel: "附件",
                                                              labelWidth: 65
                                                          }, {
                                                              xtype: "textfield",
                                                              id: "data",
                                                              name: "data",
                                                              readOnly: true,
                                                              labelAlign: "right",
                                                              value: rec["data"],
                                                              fieldLabel: "发布时间",
                                                              labelWidth: 65
                                                          }, {
                                                              xtype: "textarea",
                                                              id: "content",
                                                              height:300,
                                                              name: "content",
                                                              readOnly: true,
                                                              labelAlign: "right",
                                                              value: rec["content"],
                                                              fieldLabel: "内容",
                                                              labelWidth: 65
                                                          }]
                                                  }]
                                              });
                                      win.show(this);
                                  } else {
                                      Ext.Msg.alert(
                                              "提示",
                                              "请选择一行记录进行查看")
                                  }
                              }

                          },],

                      store:store,
                      columns: [
                          {header: '标题', align: 'center', dataIndex: 'title',menuDisabled:true},
                          {header: '内容', align: 'center', dataIndex: 'content',menuDisabled:true,flex: 1},
                          {header: '发布人', align: 'center', dataIndex: 'publisher',menuDisabled:true},
                          {header: '发布日期', align: 'center', dataIndex: 'data', xtype: 'datecolumn', format: 'Y-m-d',menuDisabled:true},
                          {header: '有效日期', align: 'center', dataIndex: 'validity', xtype: 'datecolumn', format: 'Y-m-d',menuDisabled:true},
                          {header: '附件', align: 'center', dataIndex: 'add',menuDisabled:true,
                              renderer:function(){
                                  var html= "<center><a href=# style='text-decoration:none;background-color:#eff10a;cursor:pointer' onclick='sign(this)'>附件</a></center>";
                                  return html;
                              }
                          }
                      ],
                  }]
              }]
          })
      });
  </script>
</head>
<body>
<div id="dqDiv" align="center" style="width: 100%"></div>
<div id="tabPanel" align="center" style="width: 100%"></div>
<div id="my-tabs" align="center" style="width: 100%"></div>
</body>
</html>

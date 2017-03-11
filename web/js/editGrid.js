/**
 * 
 */



 var noticeStore=Ext.create('Ext.data.Store', {
 		//接受部门，发布日期，标题，公告内容，是否发布，附件数，编辑
 	 storeId:'noticeStore',
    	    fields:['id','receiverDept', 'date','endDate', 'title', 'content', 'isPublish', 'attachmentNum'],
    	    /*groupField: 'content',*/
    	/*    reader: {
             type: 'json',
             root: 'users'
         }*/
    	    data:[
    	        { id:1,receiverDept: "全部", date: "2017-02-12", endDate: "2017-02-12",   title: "公告", content: "Management",   isPublish: false, attachmentNum: "0" },
    	        { id:2,receiverDept: "发电部",  date: "2017-02-12", endDate: "2017-02-12", title: "公告", content: "Sales" ,   isPublish: true, attachmentNum: "1"},
    	        { id:3,receiverDept: "发电部",     date: "2017-02-12", endDate: "2017-02-12", title: "公告", content: "Sales",   isPublish: false, attachmentNum: "0" },
    	        { id:4,receiverDept: "安监部",   date: "2017-02-12", endDate: "2017-02-12",  title: "公告", content: "Accounting",   isPublish: true, attachmentNum: "1" }
    	       
    	    ]
 });
 
 Ext.onReady(function(){
 	Ext.create('Ext.grid.Panel', {
    	    title: '发布公告及编辑',
    	    id:'noticegrid',
    	    columnLines:true,
    	    store: Ext.data.StoreManager.lookup('noticeStore'),
    	    listeners: {
        dblclick: {
            element: 'body', //bind to the underlying body property on the panel
            fn: function(){ editAnRecord(); }
        }
    },
    	    tbar:[{
					xtype : "button",
					text : "新建",
					iconCls : "Bulletplus",
					handler : function() {
						 editAnRecord("new");
					}
				},{
					xtype : "button",
					text : "编辑",
					iconCls : "Bulletedit",
					handler : function() {
						 editAnRecord();
					}
				}, {
					xtype : "button",
					text : "删除",
					iconCls : "Cancel",
					handler : function() {
						delARecord();
					}
				} ],
    	    columns : [ {
					text : '接受部门',
					titleAlign : "center",
					align : 'center',
					width : 50,
					dataIndex : 'receiverDept'
				}, {
					text : '<div style="text-align:center">发布日期</div>',
					width : 150,
					dataIndex : 'date'
				}, {
					text : '<div style="text-align:center">有效日期</div>',
					width : 150,
					dataIndex : 'endDate'
				}, {
					text : '标题',
					align : 'center',
					titleAlign : "center",
					width : 90,
					dataIndex : 'title'
				}, {
					text : '公告内容',
					align : 'center',
					flex:1,
					titleAlign : "center",
					width : 80,
					dataIndex : 'content'
				}, {
					text : '是否发布',
					align : 'center',
					titleAlign : "center",
					width : 80,
					dataIndex : 'isPublish',
					renderer:function(value, cellmeta, record, rowIndex, columnIndex, store){
						//当前单元格的值,record是这行的所有数据
						var isP=record.data["isPublish"];
						if(isP){
							return "已发布";						
						}
						return "未发布";
					}							
				} , {
					text : '附件数',
					align : 'center',
					titleAlign : "center",
					width : 80,
					dataIndex : 'attachmentNum'
				}  ],
    	    height: 200,
    	    renderTo: 'grid'
    	});
    	
    	Ext.create('Ext.form.Panel',{
    		 layout: 'hbox',
    		 id:'searchform',
    		 frame:true,
    		 items:[{
			xtype:'datefield',
			name:'pubDate',
			format:'Y-m-d',
			width:200,
			fieldLabel:'发布日期',
			labelWidth:70,
			labelAlign:'right'
		},{
			xtype:'datefield',
			name:'endDate',
			width:200,
			format:'Y-m-d',
			fieldLabel:'截至日期',
			labelAlign:'right'
		},{
			xtype:'button',
			width:100,
			margin:'0 0 0 60',
			text:'搜索',
			handler:function(){
				searchFormSubmit();
			}
		}],
		renderTo:'searchPanel'
    	})
 });
 
 function searchFormSubmit(){
 	Ext.getCmp("searchform").getForm().submit({
 		 	url : '../uploadExcel/search.action',  
            waitMsg : '数据在处理中,请稍后......',  
            waitTitle : '提示',  
            params : {                                  //携带的参数  
         	  "flag":"flag" 
            },  
             method : 'POST',  
            success : function(form, options) {//成功后要做的事情     
                  Ext.Msg.alert("success");
                   Ext.getCmp("createWin").close();
                                              },                                                                                                                 
            failure : function(form, options) {}//失败要做的事情  
                                
 	})
 }
 
 
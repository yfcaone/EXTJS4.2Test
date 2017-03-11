/**
 * 
 */
 // The data store containing the list of states
var states = Ext.create('Ext.data.Store', {
    fields: ['abbr', 'name'],
    data : [
        {"abbr":"1", "name":"发电部"},
        {"abbr":"2", "name":"安监部"},
        {"abbr":"3", "name":"全部"}
        //...
    ]
});


 function delARecord(){
 	var selectedI = Ext.getCmp("noticegrid").getSelectionModel();
		if (selectedI.selected.items && selectedI.selected.items.length > 0) {
			var rec = selectedI.selected.items[0]["data"];
			if(rec["isPublish"]){
				Ext.Msg.alert("提示","该公告已经发布，不能进行删除");
				return;
			}else{
			//删除操作
				Ext.Msg.alert("提示","执行删除操作");
				Ext.getCmp("noticeStore").remove(selectedI);
			}
		}else{
		Ext.Msg.alert("提示","请选择一条记录！");
		}
 }
 
 function editAnRecord(obj){
 	if(obj=="new"){
 		var rec="";
 	}if(obj!="new"){
 		var selectedI = Ext.getCmp("noticegrid").getSelectionModel();
		if (selectedI.selected.items&& selectedI.selected.items.length > 0) {
			var rec = selectedI.selected.items[0]["data"];
			if(rec["isPublish"]){Ext.Msg.alert("提示","该公告已经发布，不能进行编辑");
				return;
			}}
 	}
 	/*alert(noticeStore.getAt(obj).get('content'));*/
			/*Ext.getCmp('editForm').loadRecord(rec);*/
			var createWin=Ext.create("widget.window",{
 	title : '发布公告',
 	closable:false,
	id:'createWin',
	width : 500,
	height : 300,
	x : 320,
	y : 200,
	bbar:['->',{
		xtype:'button',
		text:'发布',
		handler:function(){
			submitForm();
		}
		},{
		xtype:'button',
		text:'保存',
		handler:function(){
			submitForm();
		}
		},{
		xtype:'button',
		text:'取消',
		handler:function(){
			Ext.getCmp("createWin").close();
		}}],
	bodyStyle : "background:#ffffff",
		modal : true,

		items : [ {
				xtype : "form",
				id : "editForm",
				margin : "0 20 0 0",
				layout : "form",
				border : 0,
				items : [
				{
			xtype:'textfield',
			value:rec["id"],
			name:'id',
			width:400,
			fieldLabel:'id',
			labelAlign:'right',
			hidden:true
		},{
			xtype:'textfield',
			value:rec["title"],
			name:'title',
			width:400,
			fieldLabel:'公告标题',
			labelAlign:'right'
		},{
			xtype:'datefield',
			value:rec["endDate"],
			name:'endDate',
			width:400,
			fieldLabel:'有限期限',
			format:'Y-m-d',
			labelAlign:'right'
		},{
			xtype:'combobox',
			width:400,
			value:rec["receiverDept"],
			name:'receiverDept',
			store: states,
			displayField: 'name',
   			 valueField: 'abbr',
			fieldLabel:'接收部门',
			labelAlign:'right'
		},{
				xtype: 'textarea',
      			  labelAlign:'right',
      			  value:rec["content"],
      			  name:'content',
      			  fieldLabel:'内&nbsp;&nbsp;&nbsp;&nbsp;容',
      			  border :'0 0 0 0',
      			  rows:6
     			   
			},{
				xtype: 'filefield',
      			  fieldLabel: '添加附件',
      			  name:'attachment',
      			  labelAlign:'right',
      			  border :'0 0 0 0',
     			   msgTarget: 'side',
     			   allowBlank: false,
      			  anchor: '100%',
      			  buttonText: '浏览。。。'
			}]
		}]
		
 	
 });

  Ext.getCmp('createWin').show();

 }

 
 function submitForm(){
 	Ext.getCmp("editForm").getForm().submit({
 		 	url : '../uploadExcel/createNew.action',  //提交地址
            waitMsg : '数据在处理中,请稍后......',  //提交时的提示信息
            waitTitle : '提示',  
            params : {                                  //携带的参数  
         	  "flag":"flag" 
            },  
             method : 'POST',  
            success : function(form, options) {//成功后要做的事情    
            	console.log(options);
                Ext.Msg.alert("success","表单提交成功！");
                Ext.getCmp("createWin").close();
                                              },                                                                                                                 
            failure : function(form, options) {
            
            }//失败要做的事情  
                                
 	})
 }
 
 
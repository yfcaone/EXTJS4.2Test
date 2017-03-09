Ext.onReady(function () {
        Ext.create("Ext.container.Viewport",
            {
                renderTo: "dqDiv",
                width: Ext.getBody().getWidth(),
                overflowY: 'auto',
                padding: "0 10 5 10",
                defaults: {
                    width: "100%"
                },
                items: [
                    {
                        xtype: "panel",
                        border: 0,
                        items: [{
                            xtype: "button",
                            margin: "20 20 20 20",
                            width: 120,
                            text: "打&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;印"
                        }]
                    },
                    {
                        xtype: "panel",
                        height: 20,
                        bodyStyle: "border-width:1px 0 0 0;border-color:#000000"
                    },

                    {
                        xtype: "panel",
                        border: 0,
                        height: 20,
                        layout: "hbox",
                        items: [
                            {
                                xtype: "panel",
                                width: "85%",
                                border: 0,
                                html: "<b>No.</b> 02YUQE000001"
                            },
                            {
                                xtype: "panel",
                                width: "15%",
                                border: 0,
                                html: "<b>编号：</b> 02YUQBD000004"
                            }]
                    },
                    {
                        xtype: "panel",
                        layout: "hbox",
                        border: 0,
                        items: [
                            {
                                xtype: "panel",
                                border: 0,
                                height: 30,
                                html: "<b>1、工作负责人：</b>"
                            },
                            {
                                xtype: "panel",
                                width: 120,
                                height: 20,
                                margin: "0 5 0 5",
                                bodyStyle: "border-width:0 0 1px 0;border-color:#000000"
                            },
                            {
                                xtype: "panel",
                                border: 0,
                                html: "<b>班组：</b>"
                            },
                            {
                                xtype: "panel",
                                width: 120,
                                height: 20,
                                margin: "0 5 0 5",
                                bodyStyle: "border-width:0 0 1px 0;border-color:#000000"
                            }]
                    },
                    {
                        xtype: "panel",
                        layout: "hbox",
                        border: 0,
                        items: [
                            {
                                xtype: "panel",
                                border: 0,
                                height: 30,
                                width: 80,
                                html: "<b>2、工作内容：</b>"
                            },
                            {
                                xtype: "panel",
                                width: '92.5%',
                                height: 20,
                                margin: "0 5 0 5",
                                bodyStyle: "border-width:0 0 1px 0;border-color:#000000"
                            }]
                    },
                    {
                        xtype: "panel",
                        layout: "hbox",
                        border: 0,
                        items: [
                            {
                                xtype: "panel",
                                border: 0,
                                width: 80,
                                height: 30,
                                html: "<b>3、工作地点：</b>"
                            },
                            {
                                xtype: "panel",
                                width: '95%',
                                height: 20,
                                margin: "0 5 0 5",
                                bodyStyle: "border-width:0 0 1px 0;border-color:#000000"
                            }]
                    },

                    {
                        xtype: "panel",
                        layout: "hbox",
                        border: 0,
                        defaults: {
                            width: "95%",
                            height: 30
                        },
                        items: [
                            {
                                xtype: "panel",
                                border: 0,
                                height: 30,
                                width: 110,
                                html: "<b>4、计划工作时间：</b>"
                            },
                            {
                                xtype: "panel",
                                width: '92.5%',
                                height: 20,
                                // margin : "0 5 0 5",
                                bodyStyle: "border-width:0 0 1px 0;border-color:#000000"
                            },
                            {
                                xtype: "panel",
                                border: 0,
                                columnWidth: 0.018,
                                html: "<b>至：</b>"
                            },
                            {
                                xtype: "panel",
                                columnWidth: 0.1,
                                height: 20,
                                bodyStyle: "border-width:0 0 1px 0;border-color:#000000"
                            }]
                    },
                    {
                        xtype: "panel",
                        layout: "vbox",

                        border: false,
                        items: [
                            {
                                border: 0,
                                height: 20,
                                html: "<b>5、工作条件</b>"
                            },
                            {

                                border: 1,
                                margin: '0 0 0 18',
                                xtype: 'grid',
                                width: 1290,
                                columnLines: true,
                                hideHeaders: true,
                                columns: [
                                    {

                                        align: 'center',
                                        dataIndex: 'rownum',
                                        width: 300

                                    },
                                    {

                                        align: 'center',
                                        dataIndex: 'dangerPoint',
                                        flex: 1
                                    }],
                                store: Ext.create(
                                    'Ext.data.ArrayStore',
                                    {
                                        id: "storeId",
                                        fields: [
                                            'rownum',
                                            'dangerPoint'],
                                        data: [
                                            [
                                                '相关一次设备运行情况',
                                                ''],
                                            [
                                                '被试保护作用的断路器',
                                                ''],
                                            [
                                                '个噢你做盘踞上的运行设备',
                                                ''],
                                            [
                                                '工作盘踞上与其它保护的连接线',
                                                '']],
                                        autoLoad: true
                                    })

                            }]
                    },
                    {

                        xtype: "panel",
                        layout: "vbox",
                        border: false,
                        margin: '20 0 5 0',
                        items: [
                            {
                                border: 0,
                                height: 20,
                                html: "<b>6、危险点分析及控制措施</b>"
                            },
                            {
                                xtype: 'grid',
                                columnLines: true,
                                id: "gridd",
                                margin: '0 0 0 18',
                                width: 1290,

                                tbar: [
                                    {
                                        xtype: "button",
                                        text: "新建",
                                        iconCls: "Add",
                                        handler: function (e) {
                                            win = Ext.create(
                                                'widget.window',
                                                {
                                                    title: '危险点添加',
                                                    closable: false,
                                                    width: 500,
                                                    height: 250,
                                                    x: 320,
                                                    y: 200,
                                                    bodyStyle: "background:#ffffff",
                                                    buttons: [
                                                        {
															xtype : "button",
															text : "保存",
															handler : function() {
																var formData = Ext
																		.getCmp("form")
																		.getForm()
																		.getValues();
																var store = Ext.getStore("storeId");
																store.add(formData);
																win
																		.close();
															}
														},
                                                        {
                                                            xtype: "button",
                                                            text: "取消",
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
                                                        margin: "0 20 0 0",
                                                        layout: "form",
                                                        id:'form',
                                                        border: 0,
                                                        items: [
                                                            {
                                                                xtype: "textfield",
                                                                fieldLabel: "危险点",
                                                                labelAlign: "right",
                                                                name:'dangerPoint',
                                                                labelWidth: 65
                                                            },
                                                            {
                                                                xtype: "textarea",
                                                                rows: 8,
                                                                name:'cuoshi',
                                                                labelAlign: "right",
                                                                fieldLabel: "控制措施",
                                                                labelWidth: 65
                                                            }]
                                                    }]
                                                });
                                            win.show(this);

                                        }
                                    }, {

                                        xtype: "button",
                                        text: "编辑",
                                        iconCls: "Applicationformedit",
                                        handler: function () {
                                            var selectedI = Ext.getCmp("gridd").getSelectionModel();
                                            if (selectedI.selected.items
                                                && selectedI.selected.items.length > 0) {
                                                var rec = selectedI.selected.items[0]["data"];
                                                win = Ext.create('widget.window',
                                                    {
                                                        title: '危险点编辑',
                                                        closable: false,
                                                        width: 500,
                                                        height: 250,
                                                        iconCls: "Applicationformedit",
                                                        x: 320,
                                                        y: 200,
                                                        bodyStyle: "background:#ffffff",
                                                        buttons: [
                                                            {
                                                                xtype: "button",
                                                                text: "保存",
                                                                handler: function () {
                                                                    var formData = Ext.getCmp("form1").getForm()
                                                                        .getValues();
                                                                    var store = Ext.getStore("storeId");
                                                                    var storeRec = store.findRecord("rownum",
                                                                        rec["rownum"]);
                                                                    storeRec["data"]["dangerPoint"] = formData["dangerPoint"];
                                                                    storeRec["data"]["cuoshi"] = formData["cuoshi"];
                                                                    store.update(storeRec);
                                                                    win.close();

                                                                }
                                                            },
                                                            {
                                                                xtype: "button",
                                                                text: "取消",
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
                                                                    fieldLabel: "危险点",
                                                                    labelAlign: "right",
                                                                    name: "dangerPoint",
                                                                    value: rec["dangerPoint"],
                                                                    labelWidth: 65
                                                                },
                                                                {
                                                                    xtype: "textarea",
                                                                    rows: 8,
                                                                    id: "riskMethodE",
                                                                    name: "cuoshi",
                                                                    labelAlign: "right",
                                                                    value: rec["cuoshi"],
                                                                    fieldLabel: "控制措施",
                                                                    labelWidth: 65
                                                                }]
                                                        }]
                                                    });
                                                win.show(this);
                                            } else {
                                                Ext.Msg.alert(
                                                    "提示",
                                                    "请选择一行记录进行编辑")
                                            }
                                        }

                                    },
                                    {
                                        xtype: "button",
                                        text: "删除",
                                        iconCls: "Cancel",
                                        handler: function () {
                                            var selectedI = Ext
                                                .getCmp(
                                                    "gridd")
                                                .getSelectionModel();
                                            if (selectedI.selected.items
                                                && selectedI.selected.items.length > 0) {
                                                var store = Ext
                                                    .getStore("storeId");
                                                store
                                                    .remove(selectedI.selected.items);
                                            } else {
                                                Ext.Msg
                                                    .alert(
                                                        "提示",
                                                        "请选择一条记录进行删除");
                                            }
                                        }
                                    }],
                                columns: [
                                    {
                                        text: '序号',
                                        align: 'center',
                                        dataIndex: 'rownum',
                                        width: 100
                                    },
                                    {
                                        text: '危险点',
                                        align: 'center',
                                        dataIndex: 'dangerPoint',
                                        width: 300,
                                        editor: 'textarea',
                                        renderer: function (val) {
                                            return "<div style=\"text-align:center;\">"
                                                + val
                                                + "</div>";
                                        }
                                    },
                                    {
                                        text: '控制措施',
                                        align: 'center',
                                        dataIndex: 'cuoshi',
                                        editor: 'textarea',
                                        renderer: function (val) {
                                            return "<div style=\"text-align:center;\">"
                                                + val
                                                + "</div>";
                                        },
                                        flex: 1
                                    }],
                                store: Ext.create('Ext.data.ArrayStore',
                                    {
                                        id: "storeId",
                                        fields: [
                                            'rownum',
                                            'dangerPoint',
                                            'cuoshi'],
                                        data: [
                                            [
                                                '1',
                                                'qqqqq',
                                                '啦啦啦啊啊'],
                                            [
                                                '2',
                                                'qqqqq',
                                                '啦啦啦啊啊'],
                                            [
                                                '3',
                                                'qqqqq',
                                                '啦啦啦啊啊'],
                                            [
                                                '4',
                                                'qqqqq',
                                                '啦啦啦啊啊'],
                                            [
                                                '5',
                                                'qqqqq',
                                                '啦啦啦啊啊'],
                                            [
                                                '6',
                                                'qqqqq',
                                                '啦啦啦啊啊']],
                                        autoLoad: true
                                    }),
                            }]

                    },
                    {
                        xtype: "panel",
                        layout: "vbox",
                        margin: '20 0 5 0',
                        border: 0,
                        items: [
                            {
                                xtype: "panel",
                                border: 0,
                                height: 20,
                                html: "<b>7、安全措施：包括应打开及恢复的二次接线、压板、连锁开关，需短接或改动二次接线等，安工作顺序填写安全措"
                                + "施。已执行栏打“√”已恢复在，在恢复栏打“√”</b>"
                            },
                            {
                                xtype: 'grid',
                                width: 1290,
                                id: 'gridd1',
                                columnLines: true,
                                margin: '0 0 0 18',
                                // plugins: [editing1],
                                tbar: [
                                    {
                                        xtype: "button",
                                        text: "新建",
                                        iconCls: "Add",
                                        handler: function (e) {
                                            win = Ext.create('widget.window',
                                                {
                                                    title: '危险点添加',
                                                    closable: false,
                                                    width: 500,
                                                    height: 250,
                                                    x: 320,
                                                    y: 200,
                                                    bodyStyle: "background:#ffffff",
                                                    buttons: [
                                                        {
															xtype : "button",
															text : "保存",
															handler : function() {
																var formData = Ext
																		.getCmp(
																				"form2")
																		.getForm()
																		.getValues();
																var store = Ext
																		.getStore("storeId2");
																store
																		.add(formData);
																win
																		.close();
															}
														},
                                                        {
                                                            xtype: "button",
                                                            text: "取消",
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
                                                        margin: "0 20 0 0",
                                                        layout: "form",
                                                        id:'form2',
                                                        border: 0,
                                                        items: [
                                                            {
                                                                xtype: "textfield",
                                                                fieldLabel: "已执行",
                                                                labelAlign: "right",
                                                                name:'carry',
                                                                labelWidth: 65
                                                            },
                                                            {
                                                                xtype: "textarea",
                                                                rows: 8,
                                                                labelAlign: "right",
                                                                name:'safety',
                                                                fieldLabel: "安全措施内容",
                                                                labelWidth: 65
                                                            },
                                                            {
                                                                xtype: "textarea",
                                                                rows: 8,
                                                                labelAlign: "right",
                                                                name:'restore',
                                                                fieldLabel: "已恢复",
                                                                labelWidth: 65
                                                            }]
                                                    }]
                                                });
                                            win.show(this);

                                        }
                                    }, {

                                        xtype: "button",
                                        text: "编辑",
                                        iconCls: "Applicationformedit",
                                        handler: function () {
                                            var selectedI = Ext.getCmp("gridd1").getSelectionModel();
                                            if (selectedI.selected.items
                                                && selectedI.selected.items.length > 0) {
                                                var rec = selectedI.selected.items[0]["data"];
                                                win = Ext.create('widget.window',
                                                    {
                                                        title: '危险点编辑',
                                                        closable: false,
                                                        width: 500,
                                                        height: 250,
                                                        iconCls: "Applicationformedit",
                                                        x: 320,
                                                        y: 200,
                                                        bodyStyle: "background:#ffffff",
                                                        buttons: [
                                                            {
                                                                xtype: "button",
                                                                text: "保存",
                                                                handler: function () {
                                                                    var formData = Ext
                                                                        .getCmp(
                                                                            "form3")
                                                                        .getForm()
                                                                        .getValues();
                                                                    var store = Ext
                                                                        .getStore("storeId2");
                                                                    var storeRec = store
                                                                        .findRecord(
                                                                            "rownum",
                                                                            rec["rownum"]);
                                                                    storeRec["data"]["carry"] = formData["carry"];
                                                                    storeRec["data"]["safety"] = formData["safety"];
                                                                    storeRec["data"]["restore"] = formData["restore"];
                                                                    store
                                                                        .update(storeRec);
                                                                    win
                                                                        .close();

                                                                }
                                                            },
                                                            {
                                                                xtype: "button",
                                                                text: "取消",
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
                                                            id: "form3",
                                                            margin: "0 20 0 0",
                                                            layout: "form",
                                                            border: 0,
                                                            items: [
                                                                {
                                                                    xtype: "textfield",
                                                                    fieldLabel: "已执行",
                                                                    labelAlign: "right",
                                                                    name: "carry",
                                                                    value: rec["carry"],
                                                                    labelWidth: 65
                                                                },
                                                                {
                                                                    xtype: "textarea",
                                                                    rows: 8,
                                                                    id: "riskMethodE",
                                                                    name: "safety",
                                                                    labelAlign: "right",
                                                                    value: rec["safety"],
                                                                    fieldLabel: "安全措施内容",
                                                                    labelWidth: 65
                                                                },
                                                                {
                                                                    xtype: "textarea",
                                                                    rows: 8,
                                                                    id: "riskMethodEe ",
                                                                    name: "restore",
                                                                    labelAlign: "right",
                                                                    value: rec["restore"],
                                                                    fieldLabel: "已恢复",
                                                                    labelWidth: 65
                                                                }]
                                                        }]
                                                    });
                                                win
                                                    .show(this);
                                            } else {
                                                Ext.Msg
                                                    .alert(
                                                        "提示",
                                                        "请选择一行记录进行编辑")
                                            }
                                        }

                                    },
                                    {
                                        xtype: "button",
                                        text: "删除",
                                        iconCls: "Cancel",
                                        handler: function () {
                                            var selectedI = Ext
                                                .getCmp(
                                                    "gridd1")
                                                .getSelectionModel();
                                            if (selectedI.selected.items
                                                && selectedI.selected.items.length > 0) {
                                                var store = Ext
                                                    .getStore("storeId2");
                                                store
                                                    .remove(selectedI.selected.items);
                                            } else {
                                                Ext.Msg
                                                    .alert(
                                                        "提示",
                                                        "请选择一条记录进行删除");
                                            }
                                        }
                                    }],
                                columns: [
                                    {
                                        text: '序号',
                                        align: 'center',
                                        dataIndex: 'rownum',
                                        width: 100,
                                    },
                                    {
                                        text: '已执行',
                                        align: 'center',
                                        dataIndex: 'carry',
                                        width: 300,
                                        editor: 'textarea',
                                        renderer: function (val) {
                                            return "<div style=\"text-align:center;\">"
                                                + val
                                                + "</div>";
                                        }
                                    },
                                    {
                                        text: '安全措施内容',
                                        align: 'center',
                                        dataIndex: 'safety',
                                        width: 900,
                                        editor: 'textarea',
                                        renderer: function (val) {
                                            return "<div style=\"text-align:center;\">"
                                                + val
                                                + "</div>";
                                        },
                                        flex: 1
                                    },
                                    {
                                        text: '已恢复',

                                        dataIndex: 'restore',
                                        align: 'center',
                                        editor: 'textarea',
                                        renderer: function (val) {
                                            return "<div style=\"text-align:center;\">"
                                                + val
                                                + "</div>";
                                        },
                                        flex: 1
                                    }],
                                // 动态时用Ext.data.ArrayStore
                                store: Ext
                                    .create(
                                        'Ext.data.ArrayStore',
                                        {
                                            id: "storeId2",
                                            fields: [
                                                'rownum',
                                                'carry',
                                                'safety',
                                                'restore'],
                                            data: [
                                                [
                                                    '1',
                                                    'qqqqq',
                                                    '啦啦啦啊啊',
                                                    'fwwefw'],
                                                [
                                                    '2',
                                                    'qqqqq',
                                                    '啦啦啦啊啊',
                                                    'fwwefw'],
                                                [
                                                    '3',
                                                    'qqqqq',
                                                    '啦啦啦啊啊',
                                                    'fwwefw'],
                                                [
                                                    '4',
                                                    'qqqqq',
                                                    '啦啦啦啊啊',
                                                    'fwwefw'],
                                                [
                                                    '5',
                                                    'qqqqq',
                                                    '啦啦啦啊啊',
                                                    'fwwefw'],
                                                [
                                                    '6',
                                                    'qqqqq',
                                                    '啦啦啦啊啊',
                                                    'fwwefw']],
                                            autoLoad: true
                                        })
                            }]
                    },
                    {

                        xtype: "panel",
                        layout: "hbox",
                        border: 0,
                        margin: '20 0 0 0',
                        items: [
                            {
                                xtype: "panel",
                                border: 0,
                                html: "<b>8、工作票签发人：</b>"
                            },
                            {
                                xtype: "panel",
                                width: 120,
                                height: 20,
                                html: "<center><a href=# style='text-decoration:none;background-color:#eff10a;cursor:pointer' onclick='sign(this)'>点击此处签名</a></center>",
                                margin: "0 5 0 5",
                                bodyStyle: "border-width:0 0 1px 0;border-color:#000000"
                            },

                            /*{
                                xtype: "panel",
                                width: 120,
                                height: 20,
                                margin: "0 5 0 5",
                                bodyStyle: "border-width:0 0 1px 0;border-color:#000000"
                            }*/]

                    },
                    {
                        xtype: "panel",
                        border: 0,
                        margin: '15 0 0 0',
                        items: [{
                            xtype: "panel",
                            border: 0,
                            height: 20,
                            html: "<b>9、工作票终结：</b>"
                        }]
                    },
                    {

                        xtype: "panel",
                        layout: "hbox",
                        border: 0,
                        items: [
                            {
                                xtype: "panel",
                                border: 0,

                                margin: "0 0 0 20",
                                html: "<b>执行人：</b>"
                            },
                            {
                                xtype: "panel",
                                width: 120,
                                height: 20,
                                html: "<center><a href=# style='text-decoration:none;background-color:#eff10a;cursor:pointer' onclick='sign(this)'>点击此处签名</a></center>",
                                margin: "0 5 0 5",
                                bodyStyle: "border-width:0 0 1px 0;border-color:#000000"
                            }/*,
                            {
                                xtype: "panel",
                                width: 120,
                                height: 20,
                                margin: "0 5 0 5",
                                bodyStyle: "border-width:0 0 1px 0;border-color:#000000"
                            }*/,
                            {
                                xtype: "panel",
                                border: 0,
                                height: 30,
                                html: "<b>监护人：</b>"
                            },
                            {
                                xtype: "panel",
                                width: 120,
                                html: "<center><a href=# style='text-decoration:none;background-color:#eff10a;cursor:pointer' onclick='sign(this)'>点击此处签名</a></center>",
                                height: 20,
                                margin: "0 5 0 5",
                                bodyStyle: "border-width:0 0 1px 0;border-color:#000000"
                            }/*,
                            {
                                xtype: "panel",
                                width: 120,
                                height: 20,
                                margin: "0 5 0 5",
                                bodyStyle: "border-width:0 0 1px 0;border-color:#000000"
                            }*/]

                    }, {

                        xtype: "panel",
                        border: 0,
                        layout: 'hbox',
                        items: [{
                            xtype: "panel",
                            border: 0,
                            margin: '0 5 0 0',
                            html: "<b>10、备注：</b>"
                        }, {
                            xtype: 'button',
                            border: 0,
                            text: '添加备注'
                        }]

                    }]
            });

    });
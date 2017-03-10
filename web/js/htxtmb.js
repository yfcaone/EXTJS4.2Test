Ext.onReady(function () {
    //使用Viewport布局
    var mypanel = new Ext.container.Viewport({
        layout: 'border',//表格布局
        items: [
            north,
            west,
            center,
            south
        ]
    });
});
//编写 各个模块
//编写north panel
var north = new Ext.panel.Panel({
    region: 'north',
    title: 'xxx公司后台管理系统',
    height: 105,
    html: '<font size="6"><b>xx后台管理系统</b></font>',
    bbar: [{
        text: '行政办公'
    }, '-', {
        text: '电话通信'
    }, '-', {
        text: '客户管理'
    }, '-', {
        text: '人力资源管理'
    }, '-', {
        text: '进销存管理'
    }, '-', {
        text: 'VIP客户管理'
    }, '-', {
        text: '业绩管理'
    }, {
        xtype: "tbfill"
    }, {
        pressed: false, text: '刷新'
    }, {
        pressed: false, text: '帮助'
    }, {
        pressed: false, text: '退出'
    }, {
        xtype: "combo"
    }]
});//north panel 编写

//编写 west panel
var west = new Ext.panel.Panel({
    title: '信息管理栏',
    region: 'west',
    collapsible: true,
    split: true,
    width: 200,
    margins: 1,
    //添加两块面板
    layout: 'auto',

    items: [{
        title: "客户管理",
        height: 285,
        collapsible: true,
        layout: 'accordion',//使用手风琴进行布局
        items: [{
            title: '客户信息管理',
            items: [{
                xtype: 'treepanel',
                border: 0,
                rootVisible: false,//根节点是否可见
                root: {
                    children: [
                        {text: '收购信息', leaf: true},
                        {text: '订单信息', leaf: true},
                        {text: '产品信息', leaf: true},
                        {text: '客户信息', leaf: true},
                        {text: 'VIP客户信息', leaf: true},
                        {text: '销售信息', leaf: true}
                    ]
                },
                listeners: {
                    //如果项被点击的话
                    itemclick: function (view, record, item) {
                        //如果是叶子，对应上面的leaf==true
                        if (record.data.leaf) {
                            //如果没有与当前点击项目id相同的的标签页的话
                            if (!Ext.getCmp(record.data.id)) {
                                //则新建一个与当前点击项目id相同的的标签页
                                Ext.getCmp("center").add({
                                    id: record.data.id,
                                    title: record.data.text,
                                    html: Ext.util.Format.date(new Date(), 'H时i分s秒') + "",
                                    closable: true//允许关闭，同时新建关闭按钮
                                });
                            }
                            //有没有这个标签页都激活这个标签页
                            Ext.getCmp("center").setActiveTab(record.data.id);
                            //然后在状态栏中删除原有的信息，添加新的操作信息
                            Ext.getCmp("center").removeAll();
                            Ext.getCmp("center").add({html: '点击了：' + record.data.text + "！"});
                        }
                    }
                }
            }]
        }, {
            title: 'VIP客户信息管理',
            items: [{
                xtype: 'treepanel',
                border: 0,
                rootVisible: false,//根节点是否可见
                root: {
                    children: [
                        {text: '收购信息', leaf: true},
                        {text: '订单信息', leaf: true},
                        {text: '产品信息', leaf: true},
                        {text: '客户信息', leaf: true},
                        {text: 'VIP客户信息', leaf: true},
                        {text: '销售信息', leaf: true}
                    ]
                }
            }]
        }, {
            title: '商品信息管理系统',
            items: [{
                xtype: 'treepanel',
                border: 0,
                rootVisible: false,//根节点是否可见
                root: {
                    children: [
                        {text: '收购信息', leaf: true},
                        {text: '订单信息', leaf: true},
                        {text: '产品信息', leaf: true},
                        {text: '客户信息', leaf: true},
                        {text: 'VIP客户信息', leaf: true},
                        {text: '销售信息', leaf: true}
                    ]
                }
            }]
        }]
    }, {
        collapsible: true,
        style: 'margin-top: 3px;',
        height: 205,
        title: "未读信息",
        items: [{
            xtype: 'treepanel',
            border: 0,
            rootVisible: false,//根节点是否可见
            root: {
                children: [
                    {text: 'xxx信息消费记录', leaf: true},
                    {text: '财政支出信息', leaf: true},
                    {text: '产品信息', leaf: true},
                    {text: '客户建议信息', leaf: true}
                ]
            }
        }]
    }]
});//编写 west panel
//定义表格数据
var datas = [];

//编写 center panel
var center = new Ext.tab.Panel({
    id: 'center',
    border: false,
    region: 'center',
    tbar: [{
        text: '文件',
        menu: new Ext.menu.Menu({
            ignoreParentCilcks: true,
            items: [{
                text: '打开', handler: win
            }, {
                text: '保存'
            }, {
                text: '退出'
            }]
        })
    }, '-', {
        text: '编辑'
    }, '-', {
        text: '处理'
    }, '-', {
        text: '工程'
    }, '-', {
        text: '视图'
    }, '-', {
        text: '窗口'
    }, '-', {
        text: '帮助'
    }],
    //添加标签
    xtype: "tabpanel",
    items: [{
        title: "主界面",
        items: [{
            border: 0,
            xtype: 'panel',
            layout: {
                type: 'table',
                columns: 3
            },
            items: [{
                title: '代理事宜',
                style: 'margin: 3px;',
                height: 220,
                width: 380,
                layout: 'fit',
                items: [{
                    xtype: 'gridpanel',
                    viewConfig: {
                        forceFit: true,
                        stripeRows: true
                    },
                    columns: [
                        {header: '编号', width: 60, dataIndex: 'id'},
                        {header: '起始时间', width: 80, dataIndex: 'name'},
                        {header: '截止时间', width: 80, dataIndex: 'age'},
                        {header: '代理人', width: 75, dataIndex: 'age'},
                        {header: '代理费用', width: 80, dataIndex: 'age'}
                    ]
                }]
            }, {
                title: '备忘录',
                style: 'margin: 3px;',
                height: 220,
                width: 380,
                layout: 'fit',
                items: [{
                    xtype: 'gridpanel',
                    viewConfig: {
                        forceFit: true,
                        stripeRows: true
                    },
                    columns: [
                        {header: '编号', width: 60, dataIndex: 'id'},
                        {header: '起始时间', width: 80, dataIndex: 'name'},
                        {header: '截止时间', width: 80, dataIndex: 'age'},
                        {header: '备忘内容', width: 75, dataIndex: 'age'},
                        {header: '备忘人员', width: 80, dataIndex: 'age'}
                    ]
                }]
            }, {
                title: '短消息',
                style: 'margin: 3px;',
                height: 220,
                width: 380,
                layout: 'fit',
                items: [{
                    xtype: 'gridpanel',
                    viewConfig: {
                        forceFit: true,
                        stripeRows: true
                    },
                    columns: [
                        {header: '编号', width: 60, dataIndex: 'id'},
                        {header: '起始时间', width: 80, dataIndex: 'name'},
                        {header: '截止时间', width: 80, dataIndex: 'age'},
                        {header: '消息内容', width: 75, dataIndex: 'age'},
                        {header: '发消息人', width: 80, dataIndex: 'age'}
                    ]
                }]
            }, {
                title: '日程安排',
                style: 'margin: 3px;',
                height: 240,
                width: 380,
                layout: 'fit',
                items: [{
                    xtype: 'gridpanel',
                    viewConfig: {
                        forceFit: true,
                        stripeRows: true
                    },
                    columns: [
                        {header: '编号', width: 60, dataIndex: 'id'},
                        {header: '起始时间', width: 80, dataIndex: 'name'},
                        {header: '截止时间', width: 80, dataIndex: 'age'},
                        {header: '日程内容', width: 75, dataIndex: 'age'},
                        {header: '日程人', width: 80, dataIndex: 'age'}
                    ]
                }]
            }, {
                title: '公告',
                style: 'margin: 3px;',
                height: 240,
                width: 380,
                layout: 'fit',
                items: [{
                    xtype: 'gridpanel',
                    viewConfig: {
                        forceFit: true,
                        stripeRows: true
                    },
                    columns: [
                        {header: '编号', width: 60, dataIndex: 'id'},
                        {header: '起始时间', width: 80, dataIndex: 'name'},
                        {header: '截止时间', width: 80, dataIndex: 'age'},
                        {header: '公告人', width: 75, dataIndex: 'age'},
                        {header: '关注程度', width: 80, dataIndex: 'age'}
                    ]
                }]
            }, {
                title: '常用网站',
                style: 'margin: 3px;',
                height: 240,
                width: 380,
                layout: 'fit',
                items: [{
                    xtype: 'gridpanel',
                    viewConfig: {
                        forceFit: true,
                        stripeRows: true
                    },
                    columns: [
                        {header: '编号', width: 60, dataIndex: 'id'},
                        {header: '网站名称', width: 80, dataIndex: 'name'},
                        {header: '截止类型', width: 80, dataIndex: 'age'},
                        {header: '网址', width: 75, dataIndex: 'age'},
                        {header: '使用情况', width: 80, dataIndex: 'age'}
                    ]
                }]
            }]
        }]
    }, {
        title: "员工在外信息",
        items: [{
            xtype: 'grid',
            height: 490,

            border: 0,
            columnLines: true,
            viewConfig: {
                forceFit: true,
                stripeRows: true
            },
            store: store,

            columns: [
                {header: '姓名', width: 85, dataIndex: 'account', align: 'center'},
                {header: '项目名称', width: 150, dataIndex: 'affair', align: 'center'},
                {header: '地点', width: 70, dataIndex: 'locale', align: 'center'},
                {header: '开始时间', width: 70, dataIndex: 'starttime', align: 'center'},
                {header: '结束时间', width: 70, dataIndex: 'endtime', align: 'center'},
                {header: '工作日志', width: 250, dataIndex: 'detail', align: 'center'},
                {header: '管理员', width: 70, dataIndex: 'manager', align: 'center'},
                {header: '是否评分', width: 70, dataIndex: 'isdeal', align: 'center'},
                {header: '分数', width: 100, dataIndex: 'score', align: 'center'},
                {header: '截止日期', width: 100, dataIndex: 'end_date', align: 'center'},
                {header: '商品操作', width: 120, dataIndex: 'book_handler', align: 'center'}
            ],
            bbar: [{
                xtype: 'pagingtoolbar',
                store: store,
                displayInfo: true
            }]
        }]
    }, {
        title: "用户管理"
    }]
});//center panel

//编写south panel
var store = Ext.create('Ext.data.Store', {
    fields: ['account', 'affair', 'locale', 'starttime', 'endtime', 'detail',
        'manager', 'isdeal', 'score', 'end_date', 'book_handler'],
    proxy: {
        type: 'ajax',
        url: 'newfile111.action',
        reader: 'array'
    },
    pageSize: 10,
    autoLoad: true
});

var south = new Ext.panel.Panel({
    id: 'south',
    region: 'south',
    height: 30,
    bbar: [{
        text: '工具栏'
    }, '-', {
        xtype: "tbfill"
    }, '-', {
        text: 'XXX后台管理系统'
    }, '-', {
        text: "XXX信息技术有限公司"
    }, '-', {
        text: '与我们练习'
    }]
});//south panel
// 创建修改窗体
function win() {
    Ext.QuickTips.init();
    Ext.form.Field.prototype.msgTarget = 'side';
    //提交按钮处理方法
    var btnsubmitclick = function () {
        if (form.getForm().isValid()) {
            //通常发送到服务器端获取返回值再进行处理，我们在以后的教程中再讲解表单与服务器的交互问题。
            Ext.Msg.alert("提示", "登陆成功!");
        }
    };
    //重置按钮"点击时"处理方法
    var btnresetclick = function () {
        form.getForm().reset();
    };


    //提交按钮
    var btnsubmit = new Ext.Button({
        text: '提 交',
        handler: btnsubmitclick
    });
    //重置按钮
    var btnreset = new Ext.Button({
        text: '重 置',
        handler: btnresetclick
    });
    //用户名input
    var txtusername = new Ext.form.TextField({
        width: 200,
        allowBlank: false,
        maxLength: 20,
        name: 'username',
        fieldLabel: '用户名',
        blankText: '请输入用户名',
        maxLengthText: '用户名不能超过20个字符'
    });
    //密码input
    var txtpassword = new Ext.form.TextField({
        width: 200,
        allowBlank: false,
        maxLength: 20,
        inputType: 'password',
        name: 'password',
        fieldLabel: '密　码',
        blankText: '请输入密码',
        maxLengthText: '密码不能超过20个字符'
    });
    //验证码input
    var txtcheckcode = new Ext.form.TextField({
        fieldLabel: '验证码',
        id: 'checkcode',
        allowBlank: false,
        width: 176,
        blankText: '请输入验证码！',
        maxLength: 4,
        maxLengthText: '验证码不能超过4个字符!'
    });


    //表单
    var form = new Ext.form.FormPanel({

        labelAlign: 'right',
        labelWidth: 45,
        frame: true,
        cls: 'loginform',
        buttonAlign: 'center',
        bodyStyle: 'padding:6px 0px 0px 15px',
        items: [txtusername, txtpassword, txtcheckcode],
        buttons: [btnsubmit, btnreset]
    });
    //窗体
    var win = new Ext.Window({
        title: '用户登陆',
        iconCls: 'loginicon',
        plain: true,
        width: 276,
        height: 174,
        resizable: false,
        shadow: true,
        modal: true,
        closable: false,
        animCollapse: true,
        items: form,
        url: 'form.action'
    });
    win.show();
}
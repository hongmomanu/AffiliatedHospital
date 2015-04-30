Ext.define('AffiliatedHospital.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Ajax',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',
        activeItem:0,
        fullscreen : true,

        //layout : 'fit',


            items: [
            {
                title: '首页',
                iconCls: 'home',
                xtype:'panel',
                layout : 'fit',
                itemId:'homepage',
                //styleHtmlContent: true,
                scrollable: true,
                html   : '<iframe id="homepage" width="100%" height="100%" src="http://wap.0575fy.com/index.php"></iframe>'
            },
            {
                title: '其他应用',
                iconCls: 'action',

                padding:20,

                items: [
                    {
                        docked: 'top',

                        xtype: 'titlebar',
                        title: '其他应用'
                    },
                    {
                        xtype: 'button',
                        padding:20,
                        handler:function(){

                            if(device.platform==='Android'){

                                //var loadmask=new Ext.LoadMask(Ext.getBody(), {msg:"下载中..."});
                                //loadmask.show();
                                Ext.Viewport.mask({ xtype: 'loadmask',
                                    message: "下载中..." });
                                var onSuccess = function(data) {
                                    //loadmask.hide();
                                    Ext.Viewport.unmask();
                                };

                                function onError(error) {
                                    //loadmask.hide();
                                    Ext.Viewport.unmask();
                                    Ext.Msg.alert("失败","程序下载失败");
                                }
                                window.cordova.plugins.FileOpener.openFile(Globle_Variable.serverurl+"download/doctor.apk",onSuccess, onError);

                            }

                        },
                        text:'e医通医生app下载'
                    },{
                        xtype: 'button',
                        padding:20,
                        handler:function(){

                            if(device.platform==='Android'){

                                Ext.Viewport.mask({ xtype: 'loadmask',
                                    message: "下载中..." });
                                var onSuccess = function(data) {
                                    //loadmask.hide();
                                    Ext.Viewport.unmask();
                                };

                                function onError(error) {
                                    //loadmask.hide();
                                    Ext.Viewport.unmask();
                                    Ext.Msg.alert("失败","程序下载失败");
                                }
                                window.cordova.plugins.FileOpener.openFile(Globle_Variable.serverurl+"download/patient.apk",onSuccess, onError);

                            }

                        },
                        text:'e医通患者app下载'
                    }
                ]
            }
        ]
    }
});

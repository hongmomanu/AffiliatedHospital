Ext.define('AffiliatedHospital.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',
        activeItem:1,


            items: [
            {
                title: '首页',
                iconCls: 'home',
                //styleHtmlContent: true,
                scrollable: true,
                html:  '<div><iframe style="width:100%;height:100%;" src="http://wap.0575fy.com/">Your device does not support iframes.</iframe></div>'
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
                        handler:function(){

                            if(device.platform==='Android'){

                                var loadmask=new Ext.LoadMask(Ext.getBody(), {msg:"下载中..."});
                                loadmask.show();
                                var onSuccess = function(data) {
                                    loadmask.hide();
                                };

                                function onError(error) {
                                    loadmask.hide();
                                    Ext.Msg.alert("失败","程序下载失败");
                                }
                                window.cordova.plugins.FileOpener.openFile(Globle_Variable.serverurl+"download/doctor.apk",onSuccess, onError);

                            }

                        },
                        text:'e医通app下载'
                    }
                ]
            }
        ]
    }
});

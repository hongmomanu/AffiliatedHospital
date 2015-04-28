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
                title: 'Welcome',
                iconCls: 'home',

                //styleHtmlContent: true,
                scrollable: true,


                /*items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2'
                },*/

                html:  '<div><iframe style="width:100%;height:100%;" src="http://wap.0575fy.com/">Your device does not support iframes.</iframe></div>'
            },
            {
                title: 'Get Started',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: '其他应用'
                    },
                    {
                        xtype: 'button',
                        text:'e医通app下载'
                    }
                ]
            }
        ]
    }
});

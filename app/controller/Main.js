/**
 * Created by jack on 14-11-18.
 * main Controller used by Terminal app
 */
Ext.define('AffiliatedHospital.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        views: [
            'Main'
        ],
        models: [




        ],
        stores: [




        ],
        control: {
            nav: {
                initialize: 'initRender'
            }

        },
        refs: {

            nav: 'main'
        }
    },


    initRender: function () {
        var me=this;
        setTimeout(function(){
            me.getNav().setActiveItem(0);
        },100);

    }

});
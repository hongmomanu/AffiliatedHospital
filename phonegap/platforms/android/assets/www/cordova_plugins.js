cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.fourleaf.phonegap.plugin.installApkPlugin/www/installApk.js",
        "id": "com.fourleaf.phonegap.plugin.installApkPlugin.installApk",
        "clobbers": [
            "window.installApk"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.fourleaf.phonegap.plugin.installApkPlugin": "1.0.0"
}
// BOTTOM OF METADATA
});
voltmx.appinit.setApplicationMetaConfiguration("appid", "Rentokil");
voltmx.appinit.setApplicationMetaConfiguration("build", "release");
//startup.js
var appConfig = {
    appId: "Rentokil",
    appName: "Rentokil",
    appVersion: "1.0.0",
    isDebug: false,
    isMFApp: false,
    eventTypes: [],
};
sessionID = "";

function setAppBehaviors() {
    voltmx.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        isMVC: true,
        responsive: true,
        APILevel: 10000,
        FormControllerSyncLoad: false,
        strictMode: false,
        isCompositeApp: false,
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    requirejs.config({
        baseUrl: voltmx.appinit.getStaticContentPath() + 'desktopweb/appjs'
    });
    require(['kvmodules'], function() {
        require(['applicationController'], function(appController) {
            applicationController = appController;
            voltmx.application.setApplicationInitializationEvents({
                init: applicationController.appInit,
                postappinit: applicationController.postAppInitCallBack,
                showstartupform: function() {
                    new voltmx.mvc.Navigation("frmBooking").navigate();
                }
            });
        });
    });
};

function loadResources() {
    _kony.mvc.initCompositeApp(false);
    voltmx.theme.packagedthemes(["default"]);
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    voltmx.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
    if (voltmx.rosettajs) {
        voltmx.rosettajs.API.setDefaultFrameworkAsVoltMX();
        voltmx.rosettajs.API.converter.config.setRosettaJSname('voltmx.rosettajs');
        voltmx.rosettajs.API.setDefaultAPIAsNotes();
    }
};

function initializeApp() {
    voltmx.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //This is the entry point for the application.When Locale comes,Local API call will be the entry point.
    loadResources();
};
voltmx.appinit.setApplicationMetaConfiguration("appid", "Rentokil");
voltmx.appinit.setApplicationMetaConfiguration("build", "release");
//startup.js
var appConfig = {
    appId: "Rentokil",
    appName: "Rentokil",
    appVersion: "1.0.0",
    isturlbase: "http://avdgls16-1.lkil0t22tl1erkgrqhfc3qnidb.rx.internal.cloudapp.net:8080/services",
    isDebug: false,
    isMFApp: true,
    appKey: "bb3f9707d9b7334f67d2ad719f993854",
    appSecret: "e2298301957520f38412e1a42eafcf77",
    serviceUrl: "http://avdgls16-1.lkil0t22tl1erkgrqhfc3qnidb.rx.internal.cloudapp.net:8080/authService/100000002/appconfig",
    svcDoc: {
        "selflink": "http://avdgls16-1.lkil0t22tl1erkgrqhfc3qnidb.rx.internal.cloudapp.net:8080/authService/100000002/appconfig",
        "app_version": "1.0",
        "integsvc": {
            "_internal_logout": "http://avdgls16-1.lkil0t22tl1erkgrqhfc3qnidb.rx.internal.cloudapp.net:8080/services/IST",
            "NewService": "http://avdgls16-1.lkil0t22tl1erkgrqhfc3qnidb.rx.internal.cloudapp.net:8080/services/NewService"
        },
        "service_doc_etag": "0000019E307451B0",
        "appId": "513b8a2f-868a-42a0-ad30-fe741462c50a",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "Rentokil",
        "reportingsvc": {
            "session": "http://avdgls16-1.lkil0t22tl1erkgrqhfc3qnidb.rx.internal.cloudapp.net:8080/services/IST",
            "custom": "http://avdgls16-1.lkil0t22tl1erkgrqhfc3qnidb.rx.internal.cloudapp.net:8080/services/CMS"
        },
        "baseId": "37f57e17-6c7f-48f6-9e17-f6f60b6258aa",
        "app_default_version": "1.0",
        "services_meta": {
            "NewService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "http://avdgls16-1.lkil0t22tl1erkgrqhfc3qnidb.rx.internal.cloudapp.net:8080/services/NewService"
            }
        }
    },
    runtimeAppVersion: "1.0",
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
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl,
    }
    voltmx.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
    if (voltmx.rosettajs) {
        voltmx.rosettajs.API.setDefaultFrameworkAsVoltMX();
        voltmx.rosettajs.API.converter.config.setRosettaJSname('voltmx.rosettajs');
        voltmx.rosettajs.API.setDefaultAPIAsNotes();
    }
};

function onSuccessSDKCallBack() {
    voltmx.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function initializeApp() {
    voltmx.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //This is the entry point for the application.When Locale comes,Local API call will be the entry point.
    loadResources();
};
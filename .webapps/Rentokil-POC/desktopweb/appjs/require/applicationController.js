define({
    appInit: function(params) {
        skinsInit();
        voltmx.mvc.registry.add("CopyflxSampleRowTemplate", {
            "viewName": "CopyflxSampleRowTemplate",
            "controllerName": "CopyflxSampleRowTemplateController"
        });
        voltmx.mvc.registry.add("CopyflxSectionHeaderTemplate", {
            "viewName": "CopyflxSectionHeaderTemplate",
            "controllerName": "CopyflxSectionHeaderTemplateController"
        });
        voltmx.mvc.registry.add("flxSampleRowTemplate", {
            "viewName": "flxSampleRowTemplate",
            "controllerName": "flxSampleRowTemplateController"
        });
        voltmx.mvc.registry.add("flxSectionHeaderTemplate", {
            "viewName": "flxSectionHeaderTemplate",
            "controllerName": "flxSectionHeaderTemplateController"
        });
        voltmx.mvc.registry.add("Form1", {
            "viewName": "Form1",
            "controllerName": "Form1Controller"
        });
        voltmx.mvc.registry.add("serviceBooking", {
            "viewName": "serviceBooking",
            "controllerName": "serviceBookingController"
        });
        setAppBehaviors();
        if (typeof startBackgroundWorker != "undefined") {
            startBackgroundWorker();
        }
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new voltmx.mvc.Navigation("Form1").navigate();
    },
    makeCall: function(eventobject) {
        voltmx.phone.dial(eventobject.text);
    }
});
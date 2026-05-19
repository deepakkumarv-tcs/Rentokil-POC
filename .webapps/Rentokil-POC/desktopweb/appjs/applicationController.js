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
        voltmx.mvc.registry.add("CopyForm", {
            "viewName": "CopyForm",
            "controllerName": "CopyFormController"
        });
        voltmx.mvc.registry.add("Form1", {
            "viewName": "Form1",
            "controllerName": "Form1Controller"
        });
        voltmx.mvc.registry.add("Form2", {
            "viewName": "Form2",
            "controllerName": "Form2Controller"
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
        new voltmx.mvc.Navigation("serviceBooking").navigate();
    },
    makeCall: function(eventobject) {
        voltmx.phone.dial(eventobject.text);
    }
});
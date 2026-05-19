define("CopyForm", function() {
    return function(controller) {
        function addWidgetsCopyForm() {
            this.setDefaultUnit(voltmx.flex.DP);
            var FlexFormContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50.00%",
                "clipBounds": false,
                "height": "78.89%",
                "id": "FlexFormContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "20px",
                "isModalContainer": false,
                "right": "20px",
                "skin": "CopyslFbox0ha1266afa03742",
                "top": "100dp",
                "width": "96%",
                "zIndex": 1,
                "appName": "Rentokil-POC"
            }, {
                "paddingInPixel": false
            }, {});
            FlexFormContainer.setDefaultUnit(voltmx.flex.DP);
            FlexFormContainer.add();
            this.compInstData = {}
            this.add(FlexFormContainer);
        };
        return [{
            "addWidgets": addWidgetsCopyForm,
            "enabledForIdleTimeout": false,
            "id": "CopyForm",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm0d6543377233d46",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "Rentokil-POC",
            "info": {
                "kuid": "cbb1aa9f925a47de8d63007f169d41ea"
            }
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});
define("frmBooking", function() {
    return function(controller) {
        function addWidgetsfrmBooking() {
            this.setDefaultUnit(voltmx.flex.DP);
            var FlexParentContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "85%",
                "id": "FlexParentContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0",
                "skin": "CopyslFbox0ae4610af24f94b",
                "top": "281dp",
                "width": "95%",
                "zIndex": 1,
                "appName": "Rentokil"
            }, {
                "paddingInPixel": false
            }, {});
            FlexParentContainer.setDefaultUnit(voltmx.flex.DP);
            var FlexFormContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 10,
                "centerX": "50%",
                "clipBounds": false,
                "height": "650dp",
                "id": "FlexFormContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "8dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0hfa72fcff73741",
                "width": "100%",
                "zIndex": 1,
                "appName": "Rentokil"
            }, {
                "paddingInPixel": false
            }, {});
            FlexFormContainer.setDefaultUnit(voltmx.flex.DP);
            FlexFormContainer.add();
            FlexParentContainer.add(FlexFormContainer);
            this.add(FlexParentContainer);
        };
        return [{
            "addWidgets": addWidgetsfrmBooking,
            "enabledForIdleTimeout": false,
            "id": "frmBooking",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm0i0856960549343",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "Rentokil",
            "info": {
                "kuid": "b2b5c4b81c314983b784ac7e57221a39"
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
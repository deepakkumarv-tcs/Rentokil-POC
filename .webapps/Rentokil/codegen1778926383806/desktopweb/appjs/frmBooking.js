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
            FlexParentContainer.add();
            var FlexContainer0ccd1c55af20445 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "590dp",
                "id": "FlexContainer0ccd1c55af20445",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0iaba2e257f434d",
                "top": "200dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "Rentokil"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer0ccd1c55af20445.setDefaultUnit(voltmx.flex.DP);
            FlexContainer0ccd1c55af20445.add();
            this.add(FlexParentContainer, FlexContainer0ccd1c55af20445);
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
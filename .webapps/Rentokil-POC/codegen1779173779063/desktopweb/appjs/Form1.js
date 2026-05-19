define("Form1", function() {
    return function(controller) {
        function addWidgetsForm1() {
            this.setDefaultUnit(voltmx.flex.DP);
            var Label0i1996b9b0f9e4a = new voltmx.ui.Label({
                "id": "Label0i1996b9b0f9e4a",
                "isVisible": true,
                "left": "320dp",
                "skin": "defLabel",
                "text": "Welcome",
                "top": "190dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var ServicePageNavbtn = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "ServicePageNavbtn",
                "isVisible": true,
                "left": "424dp",
                "onClick": controller.AS_Button_h7891e1bef9b43d3bfb0e9be01a7df03,
                "skin": "defBtnNormal",
                "text": "Nav to Service page",
                "top": "400dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            this.add(Label0i1996b9b0f9e4a, ServicePageNavbtn);
        };
        return [{
            "addWidgets": addWidgetsForm1,
            "enabledForIdleTimeout": false,
            "id": "Form1",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "Rentokil-POC",
            "info": {
                "kuid": "eb3608449dda4959ba666a2c2bbec4d2"
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
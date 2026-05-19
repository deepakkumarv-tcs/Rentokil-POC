define("Form1", function() {
    return function(controller) {
        function addWidgetsForm1() {
            this.setDefaultUnit(voltmx.flex.DP);
            var FlexFormContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "76.67%",
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
                "appName": "customerlogin"
            }, {
                "paddingInPixel": false
            }, {});
            FlexFormContainer.setDefaultUnit(voltmx.flex.DP);
            var FlexBodyContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50.00%",
                "clipBounds": false,
                "height": "82.54%",
                "id": "FlexBodyContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "CopyslFbox0fefa3fe6629949",
                "top": "7.93%",
                "width": "97.62%",
                "zIndex": 1,
                "appName": "customerlogin"
            }, {
                "paddingInPixel": false
            }, {});
            FlexBodyContainer.setDefaultUnit(voltmx.flex.DP);
            var FlexLeftBoxContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "88.35%",
                "id": "FlexLeftBoxContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0bea8397d74064c",
                "top": "10%",
                "width": "50%",
                "zIndex": 1,
                "appName": "customerlogin"
            }, {
                "paddingInPixel": false
            }, {});
            FlexLeftBoxContainer.setDefaultUnit(voltmx.flex.DP);
            var FlexLBR1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "16%",
                "id": "FlexLBR1",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "CopyslFbox0daa9762b63ac41",
                "top": "0%",
                "width": "100%",
                "zIndex": 1,
                "appName": "customerlogin"
            }, {
                "paddingInPixel": false
            }, {});
            FlexLBR1.setDefaultUnit(voltmx.flex.DP);
            var CstfullName = new voltmx.ui.Label({
                "id": "CstfullName",
                "isVisible": true,
                "left": "10%",
                "skin": "CopydefLabel0bcbdedba55754f",
                "text": "Full Name",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
                "padding": [0, 1, 0, 0],
                "paddingInPixel": false
            }, {});
            var TextFieldCstFullName = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": "0%",
                "centerY": "63.87%",
                "focusSkin": "defTextBoxFocus",
                "height": "17px",
                "id": "TextFieldCstFullName",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "10.00%",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0j2f584fe8dab4d",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "45%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "placeholderSkin": "CopydefTextBoxPlaceholder0g36c304a09fc4a"
            });
            FlexLBR1.add(CstfullName, TextFieldCstFullName);
            var FlexLBR3 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "16%",
                "id": "FlexLBR3",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "-0.01%",
                "isModalContainer": false,
                "skin": "CopyslFbox0f61de43d503649",
                "top": "32%",
                "width": "100%",
                "zIndex": 1,
                "appName": "customerlogin"
            }, {
                "paddingInPixel": false
            }, {});
            FlexLBR3.setDefaultUnit(voltmx.flex.DP);
            var CstHouse = new voltmx.ui.Label({
                "id": "CstHouse",
                "isVisible": true,
                "left": "10%",
                "skin": "CopydefLabel0bcbdedba55754f",
                "text": "House/Flat/Block No",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 1, 0, 0],
                "paddingInPixel": false
            }, {});
            var TextFieldCstHouse = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": "0%",
                "centerY": "63.79%",
                "focusSkin": "defTextBoxFocus",
                "height": "17px",
                "id": "TextFieldCstHouse",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "10.00%",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0j2f584fe8dab4d",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "45%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "placeholderSkin": "CopydefTextBoxPlaceholder0d403a91e4e4b4f"
            });
            FlexLBR3.add(CstHouse, TextFieldCstHouse);
            var FlexLBR4 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "16%",
                "id": "FlexLBR4",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "CopyslFbox0ga36ab7ba47a49",
                "top": "48%",
                "width": "100%",
                "zIndex": 1,
                "appName": "customerlogin"
            }, {
                "paddingInPixel": false
            }, {});
            FlexLBR4.setDefaultUnit(voltmx.flex.DP);
            var CstCity = new voltmx.ui.Label({
                "id": "CstCity",
                "isVisible": true,
                "left": "10%",
                "skin": "CopydefLabel0bcbdedba55754f",
                "text": "City",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 1, 0, 0],
                "paddingInPixel": false
            }, {});
            var TextFieldCstCity = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": "0%",
                "centerY": "63.79%",
                "focusSkin": "defTextBoxFocus",
                "height": "17px",
                "id": "TextFieldCstCity",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "10.00%",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0j2f584fe8dab4d",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "45%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "placeholderSkin": "CopydefTextBoxPlaceholder0fdcea79d948c4a"
            });
            FlexLBR4.add(CstCity, TextFieldCstCity);
            var FlexLBR5 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "16%",
                "id": "FlexLBR5",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "CopyslFbox0b9888c5336e349",
                "top": "64%",
                "width": "100%",
                "zIndex": 1,
                "appName": "customerlogin"
            }, {
                "paddingInPixel": false
            }, {});
            FlexLBR5.setDefaultUnit(voltmx.flex.DP);
            var Cstpincode = new voltmx.ui.Label({
                "id": "Cstpincode",
                "isVisible": true,
                "left": "10%",
                "skin": "CopydefLabel0bcbdedba55754f",
                "text": "Pincode",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 1, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyTextFieldCity0f61e26bc051045 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": "0%",
                "centerY": "63.79%",
                "focusSkin": "defTextBoxFocus",
                "height": "20px",
                "id": "CopyTextFieldCity0f61e26bc051045",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "10.00%",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0j2f584fe8dab4d",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "45%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "placeholderSkin": "CopydefTextBoxPlaceholder0j48fa5f313c348"
            });
            FlexLBR5.add(Cstpincode, CopyTextFieldCity0f61e26bc051045);
            var CopyFlexLBR0d45dc9b4b8ce42 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "16%",
                "id": "CopyFlexLBR0d45dc9b4b8ce42",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "CopyslFbox0b9888c5336e349",
                "top": "80%",
                "width": "100%",
                "zIndex": 1,
                "appName": "customerlogin"
            }, {
                "paddingInPixel": false
            }, {});
            CopyFlexLBR0d45dc9b4b8ce42.setDefaultUnit(voltmx.flex.DP);
            var CstDescription = new voltmx.ui.Label({
                "id": "CstDescription",
                "isVisible": true,
                "left": "10%",
                "skin": "CopydefLabel0bcbdedba55754f",
                "text": "Service Description",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 1, 0, 0],
                "paddingInPixel": false
            }, {});
            var TextArea0f92a2091fef845 = new voltmx.ui.TextArea2({
                "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextAreaFocus",
                "height": "60dp",
                "id": "TextArea0f92a2091fef845",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
                "left": "64dp",
                "numberOfVisibleLines": 3,
                "skin": "CopydefTextAreaNormal0bda690ce98f540",
                "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
                "top": "30dp",
                "width": "45%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [2, 2, 2, 2],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "placeholderSkin": "defTextAreaPlaceholder"
            });
            CopyFlexLBR0d45dc9b4b8ce42.add(CstDescription, TextArea0f92a2091fef845);
            var FlexLBR2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "16%",
                "id": "FlexLBR2",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "CopyslFbox0b24327a38b394a",
                "top": "16%",
                "width": "100%",
                "zIndex": 1,
                "appName": "customerlogin"
            }, {
                "paddingInPixel": false
            }, {});
            FlexLBR2.setDefaultUnit(voltmx.flex.DP);
            var CstemailId = new voltmx.ui.Label({
                "id": "CstemailId",
                "isVisible": true,
                "left": "10%",
                "skin": "CopydefLabel0bcbdedba55754f",
                "text": "Email ID",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 1, 0, 0],
                "paddingInPixel": false
            }, {});
            var TextFieldCstEmail = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": "0%",
                "centerY": "63.79%",
                "focusSkin": "defTextBoxFocus",
                "height": "17px",
                "id": "TextFieldCstEmail",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "10.00%",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0j2f584fe8dab4d",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "45%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "placeholderSkin": "CopydefTextBoxPlaceholder0fecf48d9ccf541"
            });
            FlexLBR2.add(CstemailId, TextFieldCstEmail);
            var CopyFlexLBR0fd9f602b4aef46 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "16%",
                "id": "CopyFlexLBR0fd9f602b4aef46",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "CopyslFbox0b24327a38b394a",
                "top": "15.90%",
                "width": "100%",
                "zIndex": 1,
                "appName": "customerlogin"
            }, {
                "paddingInPixel": false
            }, {});
            CopyFlexLBR0fd9f602b4aef46.setDefaultUnit(voltmx.flex.DP);
            var CopyCstemailId0id2bd1cd0f1f40 = new voltmx.ui.Label({
                "id": "CopyCstemailId0id2bd1cd0f1f40",
                "isVisible": true,
                "left": "10%",
                "skin": "CopydefLabel0bcbdedba55754f",
                "text": "Email ID",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 1, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyTextFieldCstEmail0jed0318ed29c4b = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": "0%",
                "centerY": "63.79%",
                "focusSkin": "defTextBoxFocus",
                "height": "17px",
                "id": "CopyTextFieldCstEmail0jed0318ed29c4b",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "10.00%",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0j2f584fe8dab4d",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "45%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "placeholderSkin": "CopydefTextBoxPlaceholder0fecf48d9ccf541"
            });
            CopyFlexLBR0fd9f602b4aef46.add(CopyCstemailId0id2bd1cd0f1f40, CopyTextFieldCstEmail0jed0318ed29c4b);
            FlexLeftBoxContainer.add(FlexLBR1, FlexLBR3, FlexLBR4, FlexLBR5, CopyFlexLBR0d45dc9b4b8ce42, FlexLBR2, CopyFlexLBR0fd9f602b4aef46);
            var FlexRightBoxContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "88.35%",
                "id": "FlexRightBoxContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0",
                "skin": "CopyslFbox0bea8397d74064c",
                "top": "10%",
                "width": "50%",
                "zIndex": 1,
                "appName": "customerlogin"
            }, {
                "paddingInPixel": false
            }, {});
            FlexRightBoxContainer.setDefaultUnit(voltmx.flex.DP);
            var FlexRBR1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "16%",
                "id": "FlexRBR1",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "CopyslFbox0g5540388ece241",
                "top": "0%",
                "width": "100%",
                "zIndex": 1,
                "appName": "customerlogin"
            }, {
                "paddingInPixel": false
            }, {});
            FlexRBR1.setDefaultUnit(voltmx.flex.DP);
            var CstNumber = new voltmx.ui.Label({
                "id": "CstNumber",
                "isVisible": true,
                "left": "10%",
                "skin": "CopydefLabel0bcbdedba55754f",
                "text": "Contact Number",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
                "padding": [0, 1, 0, 0],
                "paddingInPixel": false
            }, {});
            var TextFieldCstContactNumber = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": "0%",
                "centerY": "63.79%",
                "focusSkin": "defTextBoxFocus",
                "height": "17px",
                "id": "TextFieldCstContactNumber",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "10.00%",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0j2f584fe8dab4d",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "width": "45%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "placeholderSkin": "CopydefTextBoxPlaceholder0a062ec31146044"
            });
            FlexRBR1.add(CstNumber, TextFieldCstContactNumber);
            var CopyFlexRBR0e6b7f92ee9c54d = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "16%",
                "id": "CopyFlexRBR0e6b7f92ee9c54d",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0",
                "skin": "CopyslFbox0g5540388ece241",
                "top": "16.02%",
                "width": "100%",
                "zIndex": 1,
                "appName": "customerlogin"
            }, {
                "paddingInPixel": false
            }, {});
            CopyFlexRBR0e6b7f92ee9c54d.setDefaultUnit(voltmx.flex.DP);
            var CopyCstNumber0ad2ebeac12de45 = new voltmx.ui.Label({
                "id": "CopyCstNumber0ad2ebeac12de45",
                "isVisible": true,
                "left": "10%",
                "skin": "CopydefLabel0bcbdedba55754f",
                "text": "Service type",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
                "padding": [0, 1, 0, 0],
                "paddingInPixel": false
            }, {});
            var ListBox0h4fd0d623b8344 = new voltmx.ui.ListBox({
                "bottom": "15%",
                "focusSkin": "defListBoxFocus",
                "height": "40%",
                "id": "ListBox0h4fd0d623b8344",
                "isVisible": true,
                "left": "10%",
                "masterData": [
                    ["lb1", "Cockroach Contro"],
                    ["lb2", "Termite Control"],
                    ["lb3", "Mosquito Control"],
                    ["Key1972773534", "Rodent Control"]
                ],
                "right": 0,
                "skin": "CopydefListBoxNormal0e721fbdd56a949",
                "top": "39dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "multiSelect": false
            });
            CopyFlexRBR0e6b7f92ee9c54d.add(CopyCstNumber0ad2ebeac12de45, ListBox0h4fd0d623b8344);
            var FlexRBR4 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "16%",
                "id": "FlexRBR4",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "CopyslFbox0ae338992c3a449",
                "top": "48%",
                "width": "100%",
                "zIndex": 1,
                "appName": "customerlogin"
            }, {
                "paddingInPixel": false
            }, {});
            FlexRBR4.setDefaultUnit(voltmx.flex.DP);
            var CstState = new voltmx.ui.Label({
                "id": "CstState",
                "isVisible": true,
                "left": "10%",
                "skin": "CopydefLabel0bcbdedba55754f",
                "text": "State",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 1, 0, 0],
                "paddingInPixel": false
            }, {});
            var ListBox0j367e52851d646 = new voltmx.ui.ListBox({
                "bottom": "15%",
                "focusSkin": "defListBoxFocus",
                "height": "40%",
                "id": "ListBox0j367e52851d646",
                "isVisible": true,
                "left": "10%",
                "masterData": [
                    ["lb1", "Telangana"],
                    ["lb2", "Tamilnadu"],
                    ["lb3", "kerala"]
                ],
                "right": "0",
                "skin": "CopydefListBoxNormal0ef6873927a9640",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "multiSelect": false
            });
            FlexRBR4.add(CstState, ListBox0j367e52851d646);
            var FlexRBR5 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "16%",
                "id": "FlexRBR5",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "CopyslFbox0f4f8607803d649",
                "top": "64%",
                "width": "100%",
                "zIndex": 1,
                "appName": "customerlogin"
            }, {
                "paddingInPixel": false
            }, {});
            FlexRBR5.setDefaultUnit(voltmx.flex.DP);
            var CstCountry = new voltmx.ui.Label({
                "id": "CstCountry",
                "isVisible": true,
                "left": "10%",
                "onTouchStart": controller.AS_Label_d05d0318bd0f4bf6a7bf0bf765e1467d,
                "skin": "CopydefLabel0bcbdedba55754f",
                "text": "Country",
                "top": "0%",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 1, 0, 0],
                "paddingInPixel": false
            }, {});
            var ListBox0fce068026c6946 = new voltmx.ui.ListBox({
                "bottom": "15%",
                "focusSkin": "defListBoxFocus",
                "height": "40%",
                "id": "ListBox0fce068026c6946",
                "isVisible": true,
                "left": "10%",
                "masterData": [
                    ["lb1", "India"],
                    ["lb2", "USA"],
                    ["lb3", "China"]
                ],
                "skin": "CopydefListBoxNormal0gc435b74cf9942",
                "top": "45dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "multiSelect": false
            });
            FlexRBR5.add(CstCountry, ListBox0fce068026c6946);
            var FlexRBR2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "16%",
                "id": "FlexRBR2",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "-0.07%",
                "isModalContainer": false,
                "skin": "CopyslFbox0b18754cedbfa4b",
                "top": "32%",
                "width": "100%",
                "zIndex": 1,
                "appName": "customerlogin"
            }, {
                "paddingInPixel": false
            }, {});
            FlexRBR2.setDefaultUnit(voltmx.flex.DP);
            var CstAppartment = new voltmx.ui.Label({
                "id": "CstAppartment",
                "isVisible": true,
                "left": "10%",
                "skin": "CopydefLabel0bcbdedba55754f",
                "text": "Appartment/Road/Area",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 1, 0, 0],
                "paddingInPixel": false
            }, {});
            var TextFieldCstAppartment = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": "0%",
                "centerY": "63.79%",
                "focusSkin": "defTextBoxFocus",
                "height": "17px",
                "id": "TextFieldCstAppartment",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "10.00%",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0j2f584fe8dab4d",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "45%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "placeholderSkin": "CopydefTextBoxPlaceholder0g762f8b11c6644"
            });
            FlexRBR2.add(CstAppartment, TextFieldCstAppartment);
            FlexRightBoxContainer.add(FlexRBR1, CopyFlexRBR0e6b7f92ee9c54d, FlexRBR4, FlexRBR5, FlexRBR2);
            FlexBodyContainer.add(FlexLeftBoxContainer, FlexRightBoxContainer);
            var FlexButtonContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0",
                "centerX": "50%",
                "clipBounds": false,
                "height": "68dp",
                "id": "FlexButtonContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": 20,
                "skin": "CopyslFbox0a5402e4bab254b",
                "width": "97.62%",
                "zIndex": 1,
                "appName": "customerlogin"
            }, {
                "paddingInPixel": false
            }, {});
            FlexButtonContainer.setDefaultUnit(voltmx.flex.DP);
            var FlexRightButtonContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0",
                "clipBounds": false,
                "height": "99.87%",
                "id": "FlexRightButtonContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0",
                "skin": "CopyslFbox0h712666f3cd64c",
                "width": "39.12%",
                "zIndex": 1,
                "appName": "customerlogin"
            }, {
                "paddingInPixel": false
            }, {});
            FlexRightButtonContainer.setDefaultUnit(voltmx.flex.DP);
            var ButtonSubmit = new voltmx.ui.Button({
                "height": "50px",
                "id": "ButtonSubmit",
                "isVisible": true,
                "onClick": controller.AS_Button_c62d4ddc8d2346578e5bd510bc8e5588,
                "right": "0",
                "skin": "CopydefBtnNormal0f740fef529b049",
                "text": "Proceed",
                "top": "8dp",
                "width": "30%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var ButtonCancel = new voltmx.ui.Button({
                "centerX": "50%",
                "height": "50px",
                "id": "ButtonCancel",
                "isVisible": true,
                "left": "6dp",
                "skin": "CopydefBtnNormal0c81365fee1434d",
                "text": "Cancel",
                "top": "8dp",
                "width": "30%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexRightButtonContainer.add(ButtonSubmit, ButtonCancel);
            FlexButtonContainer.add(FlexRightButtonContainer);
            var CstTitle = new voltmx.ui.Label({
                "id": "CstTitle",
                "isVisible": true,
                "left": "55dp",
                "skin": "CopydefLabel0fa216f2fffca40",
                "text": "Genaral information",
                "top": "42dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexFormContainer.add(FlexBodyContainer, FlexButtonContainer, CstTitle);
            this.add(FlexFormContainer);
        };
        return [{
            "addWidgets": addWidgetsForm1,
            "enabledForIdleTimeout": false,
            "id": "Form1",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm0d6543377233d46",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "customerlogin",
            "info": {
                "kuid": "j839ebd0b5aa4cf697205926527db37f"
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
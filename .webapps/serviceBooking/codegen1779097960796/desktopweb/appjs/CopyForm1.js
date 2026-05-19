define("CopyForm1", function() {
    return function(controller) {
        function addWidgetsCopyForm1() {
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
                "text": "Customer Name",
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
                "onTextChange": controller.AS_TextField_efde8ff0faf14c9da584438cd6d3adc2,
                "secureTextEntry": false,
                "skin": "TextFieldPincode",
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
                "onTextChange": controller.AS_TextField_ccd61b9b989543ac9fc45d96ac6e0d18,
                "secureTextEntry": false,
                "skin": "TextFieldPincode",
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
                "onTextChange": controller.AS_TextField_gae790e473cb4d5c8cfc38ef5efda319,
                "secureTextEntry": false,
                "skin": "TextFieldPincode",
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
            var TextFieldPincode = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": "0%",
                "centerY": "63.79%",
                "focusSkin": "defTextBoxFocus",
                "height": "20px",
                "id": "TextFieldPincode",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "10.00%",
                "onTextChange": controller.AS_TextField_e1694c3691514d34b708024cba9e7ec7,
                "secureTextEntry": false,
                "skin": "TextFieldPincode",
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
            FlexLBR5.add(Cstpincode, TextFieldPincode);
            var FlexLBR6 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "16%",
                "id": "FlexLBR6",
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
            FlexLBR6.setDefaultUnit(voltmx.flex.DP);
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
            var TextAreaDes = new voltmx.ui.TextArea2({
                "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextAreaFocus",
                "height": "60dp",
                "id": "TextAreaDes",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
                "left": "64dp",
                "numberOfVisibleLines": 3,
                "onTextChange": controller.AS_TextArea_c06dbe8c1e8e4d6581f23e177abc7a88,
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
            FlexLBR6.add(CstDescription, TextAreaDes);
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
                "skin": "TextFieldPincode",
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
            var CstEmail = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": "0%",
                "centerY": "63.79%",
                "focusSkin": "defTextBoxFocus",
                "height": "17px",
                "id": "CstEmail",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "10.00%",
                "onTextChange": controller.AS_TextField_a6770eb1b7a042cf9d62605b08206d9d,
                "secureTextEntry": false,
                "skin": "TextFieldPincode",
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
            CopyFlexLBR0fd9f602b4aef46.add(CopyCstemailId0id2bd1cd0f1f40, CstEmail);
            FlexLeftBoxContainer.add(FlexLBR1, FlexLBR3, FlexLBR4, FlexLBR5, FlexLBR6, FlexLBR2, CopyFlexLBR0fd9f602b4aef46);
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
                "onTextChange": controller.AS_TextField_e99b349ebfff4421afbcd706710ac41b,
                "secureTextEntry": false,
                "skin": "TextFieldPincode",
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
            var FlexRBR2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "16%",
                "id": "FlexRBR2",
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
            FlexRBR2.setDefaultUnit(voltmx.flex.DP);
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
            var ListBoxServiceType = new voltmx.ui.ListBox({
                "bottom": "15%",
                "focusSkin": "defListBoxFocus",
                "height": "40%",
                "id": "ListBoxServiceType",
                "isVisible": true,
                "left": "10%",
                "masterData": [
                    ["lb1", "Cockroach Contro"],
                    ["lb2", "Termite Control"],
                    ["lb3", "Mosquito Control"],
                    ["Key1972773534", "Rodent Control"]
                ],
                "onSelection": controller.AS_ListBox_b58adc021d33425a91a375ea15dbb851,
                "right": 0,
                "skin": "CopydefListBoxNormal0e721fbdd56a949",
                "top": "39dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "multiSelect": false
            });
            FlexRBR2.add(CopyCstNumber0ad2ebeac12de45, ListBoxServiceType);
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
            var ListBoxState = new voltmx.ui.ListBox({
                "bottom": "15%",
                "focusSkin": "defListBoxFocus",
                "height": "40%",
                "id": "ListBoxState",
                "isVisible": true,
                "left": "10%",
                "masterData": [
                    ["lb1", "Telangana"],
                    ["lb2", "Tamilnadu"],
                    ["lb3", "kerala"]
                ],
                "onSelection": controller.AS_ListBox_jc4fc4e01b9540ea833eb8c1c9e2e89d,
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
            FlexRBR4.add(CstState, ListBoxState);
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
                "onTouchStart": controller.AS_Label_df6c7d10b50c4b03b92764eedc45d69e,
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
            var ListBoxCountry = new voltmx.ui.ListBox({
                "bottom": "15%",
                "focusSkin": "defListBoxFocus",
                "height": "40%",
                "id": "ListBoxCountry",
                "isVisible": true,
                "left": "10%",
                "masterData": [
                    ["lb1", "India"],
                    ["lb2", "USA"],
                    ["lb3", "China"]
                ],
                "onSelection": controller.AS_ListBox_bf3bb80354bf498d80d8c75f2364f8c3,
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
            FlexRBR5.add(CstCountry, ListBoxCountry);
            var FlexRBR3 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "16%",
                "id": "FlexRBR3",
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
            FlexRBR3.setDefaultUnit(voltmx.flex.DP);
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
                "onTextChange": controller.AS_TextField_i443597d6fe34f46830b782f35df2ff1,
                "secureTextEntry": false,
                "skin": "TextFieldPincode",
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
            FlexRBR3.add(CstAppartment, TextFieldCstAppartment);
            FlexRightBoxContainer.add(FlexRBR1, FlexRBR2, FlexRBR4, FlexRBR5, FlexRBR3);
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
                "onClick": controller.AS_Button_f26ecf7e0f0f487d841e461abadc8921,
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
                "onClick": controller.AS_Button_c523dd0add254b8c9bf19995d3aee962,
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
                "text": "General information",
                "top": "42dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexFormContainer.add(FlexBodyContainer, FlexButtonContainer, CstTitle);
            this.compInstData = {}
            this.add(FlexFormContainer);
        };
        return [{
            "addWidgets": addWidgetsCopyForm1,
            "enabledForIdleTimeout": false,
            "id": "CopyForm1",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm0d6543377233d46",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "customerlogin",
            "info": {
                "kuid": "e58e0d224a2246e4b6ec50ae82574624"
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
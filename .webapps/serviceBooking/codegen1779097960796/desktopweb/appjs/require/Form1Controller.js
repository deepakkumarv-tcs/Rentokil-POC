define("userForm1Controller", {
    //Type your controller code here 
});
define("Form1ControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for ButtonCancel **/
    AS_Button_a40ae1bdbeb4456cac761c7cf4ab5f81: function AS_Button_a40ae1bdbeb4456cac761c7cf4ab5f81(eventobject) {
        var self = this;
        // 'this.view' points to the current form
        var form = this.view;
        // Clear text fields
        form.TextFieldCstFullName.text = "";
        form.TextFieldCstHouse.text = "";
        form.TextFieldCstCity.text = "";
        form.TextFieldCstPincode.text = "";
        form.TextFieldCstEmail.text = "";
        form.TextFieldCstContact.text = "";
        form.TextFieldCstApartment.text = "";
        // Reset dropdowns / listboxes
        form.ListBoxState.selectedKey = "0"; // default key
        form.ListBoxCountry.selectedKey = "0";
    },
    /** onClick defined for ButtonSubmit **/
    AS_Button_c62d4ddc8d2346578e5bd510bc8e5588: function AS_Button_c62d4ddc8d2346578e5bd510bc8e5588(eventobject) {
        var self = this;

        function INVOKE_SERVICE_g28f52f7f1c6449fbcd5d0ba23e9df3d_Callback(status, rentokil_db_service_request_trx_create) {}
        if (rentokil_db_service_request_trx_create_inputparam == undefined) {
            var rentokil_db_service_request_trx_create_inputparam = {};
        }
        rentokil_db_service_request_trx_create_inputparam["serviceID"] = "NewService$rentokil_db_service_request_trx_create";
        rentokil_db_service_request_trx_create_inputparam["customer_name"] = self.view.TextFieldCstFullName.text;
        rentokil_db_service_request_trx_create_inputparam["location_name"] = self.view.TextFieldCstHouse.text;
        rentokil_db_service_request_trx_create_inputparam["city"] = self.view.TextFieldCstCity.text;
        rentokil_db_service_request_trx_create_inputparam["pin"] = self.view.TextFieldPincode.text;
        rentokil_db_service_request_trx_create_inputparam["service_description"] = self.view.TextAreaDes.text;
        rentokil_db_service_request_trx_create_inputparam["email_id"] = self.view.TextFieldCstEmail.text;
        var rentokil_db_service_request_trx_create_httpheaders = {};
        rentokil_db_service_request_trx_create_inputparam["httpheaders"] = rentokil_db_service_request_trx_create_httpheaders;
        var rentokil_db_service_request_trx_create_httpconfigs = {};
        rentokil_db_service_request_trx_create_inputparam["httpconfig"] = rentokil_db_service_request_trx_create_httpconfigs;
        NewService$rentokil_db_service_request_trx_create = mfintegrationsecureinvokerasync(rentokil_db_service_request_trx_create_inputparam, "NewService", "rentokil_db_service_request_trx_create", INVOKE_SERVICE_g28f52f7f1c6449fbcd5d0ba23e9df3d_Callback);
    },
    /** onTouchStart defined for CstCountry **/
    AS_Label_d05d0318bd0f4bf6a7bf0bf765e1467d: function AS_Label_d05d0318bd0f4bf6a7bf0bf765e1467d(eventobject, x, y) {
        var self = this;
        voltmx.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
    },
    /** onTextChange defined for TextFieldCstFullName **/
    AS_TextField_c6548104b0234e019518feeca8c90dc1: function AS_TextField_c6548104b0234e019518feeca8c90dc1(eventobject, changedtext) {
        var self = this;
        var customerName = txtCustomerName;
    },
    /** onTextChange defined for CstEmail **/
    AS_TextField_g83bca74cd0846108a2d81877224a2d0: function AS_TextField_g83bca74cd0846108a2d81877224a2d0(eventobject, changedtext) {
        var self = this;
        var customerEmail = txtCustomerEmail;
    },
    /** onTextChange defined for TextFieldCstHouse **/
    AS_TextField_ff2904b8288d4d5ca15b3edb3fbbc6df: function AS_TextField_ff2904b8288d4d5ca15b3edb3fbbc6df(eventobject, changedtext) {
        var self = this;
        var customerHouseNo = txtCustomerHouseNo;
    },
    /** onTextChange defined for TextFieldCstCity **/
    AS_TextField_c6413755635f451592cb2b3ec8e18d1a: function AS_TextField_c6413755635f451592cb2b3ec8e18d1a(eventobject, changedtext) {
        var self = this;
        var customerCity = txtCustomerCity;
    },
    /** onTextChange defined for TextFieldPincode **/
    AS_TextField_ee4cdceb874f477c89f86223c1494fdd: function AS_TextField_ee4cdceb874f477c89f86223c1494fdd(eventobject, changedtext) {
        var self = this;
        var customerPin = txtCustomerPin;
    },
    /** onTextChange defined for TextAreaDes **/
    AS_TextArea_eca1f2b369cb494ab93c0b0c0b3c47e9: function AS_TextArea_eca1f2b369cb494ab93c0b0c0b3c47e9(eventobject) {
        var self = this;
        var customerServiceDes = txtCustomerServiceDes;
    },
    /** onTextChange defined for TextFieldCstContactNumber **/
    AS_TextField_b6dc147f364647369a906e656678d4d6: function AS_TextField_b6dc147f364647369a906e656678d4d6(eventobject, changedtext) {
        var self = this;
        var customerNumber = txtCustomerNumber;
    },
    /** onSelection defined for ListBoxServiceType **/
    AS_ListBox_dde8078d79cc43d981d9fa7848853e59: function AS_ListBox_dde8078d79cc43d981d9fa7848853e59(eventobject) {
        var self = this;
        var customerServicetype = CustomerServicetype;
    },
    /** onTextChange defined for TextFieldCstAppartment **/
    AS_TextField_i6ff08d6ebc5495986582f5f452bb262: function AS_TextField_i6ff08d6ebc5495986582f5f452bb262(eventobject, changedtext) {
        var self = this;
        var customerAppartment = txtCustomerAppartment;
    },
    /** onSelection defined for ListBoxState **/
    AS_ListBox_e882492fc84c4f8289dd686ae0295b9f: function AS_ListBox_e882492fc84c4f8289dd686ae0295b9f(eventobject) {
        var self = this;
        var customerState = txtCustomerState;
    },
    /** onSelection defined for ListBoxCountry **/
    AS_ListBox_e027052228c14343aadf1432b3152c90: function AS_ListBox_e027052228c14343aadf1432b3152c90(eventobject) {
        var self = this;
        var customerCountry = txtCustomerCountry;
    }
});
define("Form1Controller", ["userForm1Controller", "Form1ControllerActions"], function() {
    var controller = require("userForm1Controller");
    var controllerActions = ["Form1ControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

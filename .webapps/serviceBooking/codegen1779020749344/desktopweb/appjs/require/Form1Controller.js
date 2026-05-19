define("userForm1Controller", {
    //Type your controller code here 
});
define("Form1ControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchStart defined for CstCountry **/
    AS_Label_d05d0318bd0f4bf6a7bf0bf765e1467d: function AS_Label_d05d0318bd0f4bf6a7bf0bf765e1467d(eventobject, x, y) {
        var self = this;
        voltmx.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
    },
    /** onClick defined for ButtonSubmit **/
    AS_Button_c62d4ddc8d2346578e5bd510bc8e5588: function AS_Button_c62d4ddc8d2346578e5bd510bc8e5588(eventobject) {
        var self = this;

        function INVOKE_SERVICE_g28f52f7f1c6449fbcd5d0ba23e9df3d_Callback(status, rentokil_db_service_request_trx_create) {}
        if (rentokil_db_service_request_trx_create_inputparam == undefined) {
            var rentokil_db_service_request_trx_create_inputparam = {};
        }
        rentokil_db_service_request_trx_create_inputparam["serviceID"] = "NewService$rentokil_db_service_request_trx_create";
        var rentokil_db_service_request_trx_create_httpheaders = {};
        rentokil_db_service_request_trx_create_inputparam["httpheaders"] = rentokil_db_service_request_trx_create_httpheaders;
        var rentokil_db_service_request_trx_create_httpconfigs = {};
        rentokil_db_service_request_trx_create_inputparam["httpconfig"] = rentokil_db_service_request_trx_create_httpconfigs;
        NewService$rentokil_db_service_request_trx_create = mfintegrationsecureinvokerasync(rentokil_db_service_request_trx_create_inputparam, "NewService", "rentokil_db_service_request_trx_create", INVOKE_SERVICE_g28f52f7f1c6449fbcd5d0ba23e9df3d_Callback);
    }
});
define("Form1Controller", ["userForm1Controller", "Form1ControllerActions"], function() {
    var controller = require("userForm1Controller");
    var controllerActions = ["Form1ControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

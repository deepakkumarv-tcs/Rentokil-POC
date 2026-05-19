define("userfrmBookingController", {
    //Type your controller code here 
});
define("frmBookingControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("frmBookingController", ["userfrmBookingController", "frmBookingControllerActions"], function() {
    var controller = require("userfrmBookingController");
    var controllerActions = ["frmBookingControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

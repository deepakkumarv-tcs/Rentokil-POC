define("userForm1Controller", {
    //Type your controller code here 
});
define("Form1ControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for ServicePageNavbtn **/
    AS_Button_h7891e1bef9b43d3bfb0e9be01a7df03: function AS_Button_h7891e1bef9b43d3bfb0e9be01a7df03(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("serviceBooking");
        ntf.navigate();
    }
});
define("Form1Controller", ["userForm1Controller", "Form1ControllerActions"], function() {
    var controller = require("userForm1Controller");
    var controllerActions = ["Form1ControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

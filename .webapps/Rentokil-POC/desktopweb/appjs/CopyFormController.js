define("userCopyFormController", {
    //Type your controller code here 
});
define("CopyFormControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("CopyFormController", ["userCopyFormController", "CopyFormControllerActions"], function() {
    var controller = require("userCopyFormController");
    var controllerActions = ["CopyFormControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

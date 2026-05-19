define("Form2Controller", ["userForm2Controller", "Form2ControllerActions"], function() {
    var controller = require("userForm2Controller");
    var controllerActions = ["Form2ControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

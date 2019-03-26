sap.ui.define([
     "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";

    return Controller.extend("sap.suite.ui.commons.demokit.tutorial.icecream.01.controller.ChartContainer", {
		onNavButtonPressed: function() {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("home");
        }        
    });
});
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
	],
		function(Controller, JSONModel) {
			"use restrict";
			return Controller.extend("brait_app.controller.VSSqlUsers", {
				onInit : function() {
                    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    oRouter.initialize();
				},
				onPress : function(oEvent) {
					var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
					oRouter.getTargets().display("users")
				}
			});
		});
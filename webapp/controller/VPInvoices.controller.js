sap.ui.define([ 
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (Controller,  MessageToast, JSONModel) { 
	"use strict"; 
	return Controller.extend("brait_app.controller.VPInvoices", {
		onInit : function () {
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		}
	});
}); 
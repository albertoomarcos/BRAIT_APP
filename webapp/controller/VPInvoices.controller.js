sap.ui.define([ 
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"../model/formatterInvoices"
], function (Controller,  MessageToast, JSONModel,formatter) { 
	"use strict"; 
	return Controller.extend("brait_app.controller.VPInvoices", {
		formatter: formatter,
		onInit : function () {
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		}
	});
}); 
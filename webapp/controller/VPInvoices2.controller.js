sap.ui.define([
		'jquery.sap.global',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	], function(jQuery, Controller, JSONModel) {
	"use strict";

	var ListController = Controller.extend("brait_app.controller.VPInvoices2", {

		onInit : function (evt) {
			// set explored app's demo model on this sample
			//https://brait.cc/scpdev/facturas.json
			//var oModel = new JSONModel(sap.ui.require.toUrl("brait.cc/scpdev") + "/facturas.json");
			var oModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock") + "/products.json");
			this.getView().setModel(oModel);
		},

		handleReject: function (evt) {
			var oList = evt.getSource().getParent();
			oList.removeAggregation("items", oList.getSwipedItem());
			oList.swipeOut();
		}

	});


	return ListController;

});
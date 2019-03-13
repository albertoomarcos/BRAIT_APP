sap.ui.define([ 
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast" 
], function (Controller,  MessageToast) { 
	"use strict"; 
	return Controller.extend("brait_app.controller.App", {
	onItemSelected: function(oEvent) {
			var oSelectedItem = oEvent.getParameter("listItem");
			var oContext = oSelectedItem.getBindingContext();
			var sPath = oContext.getPath();
			var oProductDetailPanel = this.byId("productDetailsPanel");

			oProductDetailPanel.bindElement({path : sPath });
			this.byId("productDetailsPanel").setVisible(true); 
	}
	});
}); 
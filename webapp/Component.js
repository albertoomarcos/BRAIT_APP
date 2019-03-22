sap.ui.define([
"sap/ui/core/UIComponent",
"sap/ui/model/json/JSONModel"


], function(UIComponent, JSONModel) {

	"use strict";

	return UIComponent.extend("brait_app.Component", {

		metadata : {

			manifest : "json"

		},

		init : function() {

			// call the init function of the parent 

			UIComponent.prototype.init.apply(this, arguments);

			// additional initialization can be done here 
			this.getRouter().initialize();
		
			//
			var oProductsModel = new JSONModel();
			oProductsModel.loadData("https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/products.json");
			oProductsModel.setSizeLimit(1000);
			this.setModel(oProductsModel, 'products');
		}
	});

});
sap.ui.define([
	'sap/ui/core/UIComponent',
	'sap/ui/model/json/JSONModel'
], function(UIComponent, JSONModel) {
	'use strict';

	return UIComponent.extend('sap.ui.demo.fiori2.Component', {

		metadata: {
			manifest: 'json'
		},

		init: function () {
			var oProductsModel;

			UIComponent.prototype.init.apply(this, arguments);

			// set products demo model on this sample
			//url=https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/products.json
			//oProductsModel = new JSONModel(sap.ui.require.toUrl('sap/ui/demo/mock') + '/products.json'); //ESTO FUNCIONA
			//oProductsModel = new JSONModel(sap.ui.require.toUrl('sap/ui/demo/mock') + '/products.json');
			oProductsModel = new JSONModel();
			oProductsModel.loadData("https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/products.json");
			oProductsModel.setSizeLimit(1000);
			this.setModel(oProductsModel, 'products');
		}
	});
});
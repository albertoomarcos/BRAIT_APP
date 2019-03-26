sap.ui.define([
"sap/ui/core/UIComponent",
"sap/ui/model/json/JSONModel",
"sap/f/library"

], function(UIComponent, JSONModel, fioriLibrary) {

	"use strict";

	return UIComponent.extend("brait_app.Component", {

		metadata : {

			manifest : "json"

		},

		init : function() {
			var oModel,	oRouter;
			// call the init function of the parent 

			UIComponent.prototype.init.apply(this, arguments);
			
			oModel = new JSONModel();
			this.setModel(oModel);

			// additional initialization can be done here 
			this.getRouter().initialize();
		
			//
			var oProductsModel = new JSONModel();
			oProductsModel.loadData("https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/products.json");
			oProductsModel.setSizeLimit(1000);
			this.setModel(oProductsModel, 'products');
			
			oRouter = this.getRouter();
			oRouter.attachBeforeRouteMatched(this._onBeforeRouteMatched, this);
			oRouter.initialize();
		},

		_onBeforeRouteMatched: function(oEvent) {
			var oModel = this.getModel(),
				sLayout = oEvent.getParameters().arguments.layout;

			// If there is no layout parameter, set a default layout (normally OneColumn)
			if (!sLayout) {
				sLayout = fioriLibrary.LayoutType.OneColumn;
			}

			oModel.setProperty("/layout", sLayout);
		}
	});

});
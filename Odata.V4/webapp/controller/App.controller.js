sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
	"use strict";

	return Controller.extend("sap.ui.core.tutorial.odatav4.controller.App", {

		/**
		 *  Hook for initializing the controller
		 */
		onInit : function () {
			/*
			var oJSONData = {
				busy : false
			};
			var oModel = new JSONModel(oJSONData);
			this.getView().setModel(oModel, "appView");
			*/
			this.oView = this.getView();
			this.oComponent = sap.ui.component(sap.ui.core.Component.getOwnerIdFor(this.oView));
			this.cargarTabla();
			this.cargarDatosVarios();
		},
		cargarTabla : function()
		{
			var oDataModel = new sap.ui.model.odata.v2.ODataModel("http://192.168.5.151:8000/sap/opu/odata/sap/ZMIS_TEXTOS_SRV");
			this.oView.setModel(oDataModel);
		},
		cargarDatosVarios : function()
		{
			var that = this;
			var oModel = this.oView.getModel();
			oModel.read("/TextosGeneralesSet" , {
				success: function(data){
					MessageToast.show("Leyendo datos");
					var oDatosVarios = {
						num_lineas : 0
					};
					oDatosVarios.num_lineas = data.results.length;
					that.oView.setModel(new JSONModel(oDatosVarios),"datosVarios");
				},
				error : function(){
					MessageToast.show("ERROR....");
				}
			});
		}
	});
});
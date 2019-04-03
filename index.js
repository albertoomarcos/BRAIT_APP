sap.ui.define([
	"sap/m/Button",
	"sap/m/MessageToast"
], function (Button, MessageToast) {
	"use strict";

	new Button({
		text: "APLICACION HELADOS",
		press: function () {
			MessageToast.show("Abriendo...");
			sap.m.URLHelper.redirect("/SmartControls/webapp/index.html");
		}
	}).placeAt("content");
	
	new Button({
		text: "APLICACION BRAIT",
		press: function () {
			MessageToast.show("Abriendo...");
			sap.m.URLHelper.redirect("/Brait_app/webapp/index.html");
		}
	}).placeAt("content");
	
	new Button({
		text: "APLICACION FIORI2",
		press: function () {
			MessageToast.show("Abriendo...");
			sap.m.URLHelper.redirect("/Fiori2/webapp/index.html");
		}
	}).placeAt("content");

});
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/format/DateFormat"
], function(Controller, DateFormat) {
	"use strict";
	return Controller.extend("sap.suite.ui.commons.demokit.tutorial.icecream.01.controller.Reviews", {
		onInit: function() {
			this.oTimeline = this.byId("timeline");
		},
		addReview: function() {
			var oModel = this.getView().getModel("reviews"),
				oData = oModel.getData(),
				oTemplateEntry = oData.UserReviews[0];
			oTemplateEntry.template = false;
			// Add new template entry to the beginning
			oData.UserReviews.unshift({
				"user": "",
				"userPic": "",
				"rating": 10,
				"quote": "",
				"dateTime": "now",
				"template": true
			});
			oModel.setData(oData);
		},
		formatDateTime: function(dateTime) {
			var oDateInstance = DateFormat.getDateInstance();
			return oDateInstance.format(oDateInstance.parse(dateTime));
		},
		onNavButtonPressed: function() {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("home");
		},
		onHorizontalSwitchChange: function(event) {
			if (event.getParameter("state")) {
				this.oTimeline.setAxisOrientation("Horizontal");
			} else {
				this.oTimeline.setAxisOrientation("Vertical");
			}
		}
	});
});
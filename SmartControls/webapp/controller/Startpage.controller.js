sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/format/NumberFormat"
], function (Controller, NumberFormat) {
	"use strict";

	return Controller.extend("sap.suite.ui.commons.demokit.tutorial.icecream.01.controller.Startpage", {
		onInit: function () {
			
		},
		getProgress: function (aNodes) {
			if (!aNodes || aNodes.length === 0) {
				return 0;
			}
			var iSum = 0;
			for (var i = 0; i < aNodes.length; i++) {
				iSum += aNodes[i].state === "Positive";
			}
			var fPercent = (iSum / aNodes.length) * 100;
			return fPercent.toFixed(0);
		},
		getEntityCount: function (entities) {
			return entities && entities.length || 0;
		},
		formatNumber: function(value) {
            var oFloatFormatter = NumberFormat.getFloatInstance({
                style: "short",
                decimals: 1
            });
            return oFloatFormatter.format(value);
        }
	});
});
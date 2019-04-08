function initModel() {
	var sUrl = "https://brait.corp:5200/sap/opu/odata/sap/ZMIS_TEXTOS_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}
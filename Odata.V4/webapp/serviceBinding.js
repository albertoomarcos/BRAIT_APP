function initModel() {
	var sUrl = "http://192.168.5.151:8000/sap/opu/odata/sap/ZMIS_TEXTOS_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}
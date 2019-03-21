sap.ui.jsview("brait_app.view.UsersSQL", {
  getControllerName: function() {
    return "brait_app.controller.UsersSQL";
  },
  createContent: function(oController) {

    var oItem = new sap.m.ObjectListItem({
      intro: "{desc}",
      title: "{idCategoria}",
      type: sap.m.ListType.Active,
      press: oController.onItemPress
    });
	
    var oList = new sap.m.List({
      mode:  sap.m.ListMode.SingleSelectMaster    

    });

    //oList.bindItems("/categorias", oItem);
    
    return [oList];
    /*
    var oButton = new sap.m.Button({text:"Hello JS View"});
      oButton.attachPress(oController.handleButtonClicked);
      return oButton; */
  },
  onAfterRendering: function() {
  }
});
//EventProvider.attachEvent: fnFunction must be a function
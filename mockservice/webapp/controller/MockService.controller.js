sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, formatter, MockServer, Log) {
        "use strict";

        return Controller.extend("sapips.training.mockservice.controller.MockService", {

        onSelectProduct: function(oEvent){

            //Get the Control(List)
            var oList = oEvent.getSource();

            //Get the selected item
            var oSelItem = oList.getSelectedItem();

            //Get the context binding path
            var sSelItemPath = oSelItem.getBindingContextPath();

            //Bind the selected item to control(simpleform in Panel4)
            this.getView().byId("idP4").bindElement( {

                path: sSelItemPath,
                model: "ProductsModel",

            } )

        }

        });
    });
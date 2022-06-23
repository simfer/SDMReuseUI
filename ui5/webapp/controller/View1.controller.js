sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ns.ui5.controller.View1", {
            onInit: function () {
                const settings = this.getOwnerComponent().getManifestEntry("/sap.ui5/componentUsages/documentTable/settings");
                const repositoryId = settings.repositoryId;
                const objectId = settings.objectId;
 
                // OPTIONAL: pass the same settings here, if not added in 'manifest.json' as per previous steps
                this.getView().byId("sdi-container").setSettings({
                    "repositoryId": repositoryId,
                    "objectId": objectId,
                    "forceLoad": false
                });
            }
        });
    });

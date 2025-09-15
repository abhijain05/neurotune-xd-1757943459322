sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
  "use strict";

  return Controller.extend("converted.employeeformview.controller.App", {
    /**
     * Called when the app controller is initialized.
     * Sets up the router and handles initial navigation.
     */
    onInit: function () {
      console.log("App controller initialized");

      // Get the router instance
      var oRouter = UIComponent.getRouterFor(this);

      if (oRouter) {
        console.log("Router found, initializing navigation");

        // Add error handling for routing
        oRouter.attachBypassed(function (oEvent) {
          console.log("Route bypassed:", oEvent.getParameter("hash"));
        });

        // Navigate to main view if no hash is set
        if (!window.location.hash || window.location.hash === "#") {
          console.log("No hash found, navigating to main route");
          setTimeout(function () {
            oRouter.navTo("main"); // Changed RouteMain to main
          }, 100);
        }
      } else {
        console.error("Router not found in App controller");
      }
    }
  });
});

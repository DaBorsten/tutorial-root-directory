sap.ui.define(["sap/ui/base/Object","sap/m/MessageBox","sap/ui/model/Filter","sap/ui/model/FilterOperator"],function(e,s,t,n){"use strict";return e.extend("ns.mitigations.controller.ErrorHandler",{constructor:function(e){var s=sap.ui.getCore().getMessageManager(),i=s.getMessageModel(),o=e.getModel("i18n").getResourceBundle(),r=o.getText("errorText"),a=o.getText("multipleErrorsText");this._oComponent=e;this._bMessageOpen=false;this.oMessageModelBinding=i.bindList("/",undefined,[],new t("technical",n.EQ,true));this.oMessageModelBinding.attachChange(function(e){var t=e.getSource().getContexts(),n=[],i;if(this._bMessageOpen||!t.length){return}t.forEach(function(e){n.push(e.getObject())});s.removeMessages(n);i=n.length===1?r:a;this._showServiceError(i,n[0].message)},this)},_showServiceError:function(e,t){this._bMessageOpen=true;s.error(e,{id:"serviceErrorMessageBox",details:t,styleClass:this._oComponent.getContentDensityClass(),actions:[s.Action.CLOSE],onClose:function(){this._bMessageOpen=false}.bind(this)})}})});
//# sourceMappingURL=ErrorHandler.js.map
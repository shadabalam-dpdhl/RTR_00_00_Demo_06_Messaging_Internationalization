const cds = require('@sap/cds');
const textBundle = require('./util/textBundle');

module.exports = cds.service.impl(async function () {

    this.after('READ', 'PurchaseOrders', (PurchaseOrders, req) => {
        const locale = req.user.locale;
        const bundle = textBundle.getTextBundle(locale);
        req.info(200, bundle.getText("DataReadSuccess"));        
    });

});
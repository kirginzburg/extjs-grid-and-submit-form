Ext.define('TestGridApp.store.ProductsFromFile', {
    extend: 'Ext.data.Store',
    proxy: {
        type: 'ajax',
        url: 'data/data.json'
    }
});

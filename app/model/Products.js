Ext.define('TestGridApp.model.Products', {
    extend: 'TestGridApp.model.Base',

    fields: [
        'id',
        'product_name',
        'product_price', {
            name: 'date_created',
            type: 'date',
        }, {
            name: 'online_date',
            type: 'date',
        },
        'user_created',
        'user_created_id'
    ]
});

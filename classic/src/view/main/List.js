/**
 * This view is an example list of people.
 */
Ext.define('TestGridApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    reference: 'mainlist',
    plugins: 'gridfilters',

    requires: [
        'TestGridApp.store.Products'
    ],

    title: 'Products',
    tbar: [
        {
            xtype: 'textfield',
            emptyText: 'Search',
            listeners: {
                change: 'onSearchQueryChange'
            }
        }
    ],
    store: {
        type: 'products',
    },

    columns: [{
        text: 'Id',
        dataIndex: 'id',
        flex: 1
    }, {
        text: 'Product name',
        dataIndex: 'product_name',
        flex: 1
    }, {
        text: 'Product price',
        dataIndex: 'product_price',
        flex: 1
    }, {
        text: 'Create date',
        dataIndex: 'date_created',
        xtype: 'datecolumn',
        format: 'Y-m-d',
        flex: 1,
        filter: {
            type: 'date'
        }
    }, {
        text: 'Online date',
        dataIndex: 'online_date',
        flex: 1,
        xtype: 'datecolumn',
        format: 'Y-m-d',
    }, {
        text: 'User created',
        dataIndex: 'user_created',
        flex: 1,
        filter: {
            type: 'list',
            options: ['Egor', 'Anton', 'Peter']
        }
    }],

    listeners: {
        select: 'onItemSelected'
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Displaying topics {0} - {1} of {2}',
        emptyMsg: "No topics to display",
    }
});

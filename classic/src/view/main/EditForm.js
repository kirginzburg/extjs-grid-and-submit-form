Ext.define('TestGridApp.view.main.EditForm', {
    extend: 'Ext.form.Panel',
    xtype: 'editform',
    title: 'Edit Form',
    items: [
        {
            xtype: 'textfield',
            name: 'product_name',
            fieldLabel: 'Product name',
            allowBlank: false
        },
        {
            xtype: 'numberfield',
            name: 'product_price',
            fieldLabel: 'Product price',
            minValue: 0.01
        },
        {
            xtype: 'datefield',
            name: 'online_date',
            fieldLabel: 'Online date',
            minValue: new Date()
        },
        {
            xtype: 'button',
            text: 'submit',
            listeners: {
                click: 'onFormSubmit'
            }
        }
    ]
});
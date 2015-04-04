require.config({
    baseUrl: '../../static/js/vendor',
    
    paths: {
        jquery: 'jquery',
        datatables: 'jquery.dataTables.min',
        dtbootstrap: 'dataTables.bootstrap'
    },
    shim: {
        datatables: {
            deps: ['jquery']
        },
        dtbootstrap: {
            deps: ['datatables']
        }
    }
});

requirejs(['../../../../static/js/cacs_app/main']);

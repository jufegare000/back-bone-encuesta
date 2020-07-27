var Encuesta = Backbone.Model.extend({
    initialize: function () {
        console.log('Se ha creado una nueva instancia');
        this.on('change', function () {
            console.log('el modelo ha cambiado')
        })
    },
    urlRoot: '/encuestas'
})


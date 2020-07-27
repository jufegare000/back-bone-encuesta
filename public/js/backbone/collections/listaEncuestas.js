var EncuestasCollection = Backbone.Collection.extend({
    model: Encuesta,
    url: '/encuestas'
})

var encuestasX = new EncuestasCollection();
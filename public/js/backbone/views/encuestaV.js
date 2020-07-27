var encuestaV = Backbone.View.extend({
    initialize: function () {
        console.log("inició");
        $("#tablita").hide();
    },
    events: {
        'click .enviar': 'enviarForm',
        'click .regresarB': 'regresar'
    },
    enviarForm: function (e) {
        e.preventDefault();
        console.log($('#nombre').val());
        console.log($('#ciudad').val());
        console.log($('#estres').prop('checked'));
        console.log($('#nivel').val());
        console.log($('#ingresos').val());
        console.log($('#estrato').val());
        console.log($('#protocolos').prop('checked'));
        console.log($('#labora').prop('checked'));

        var encuestaNueva = new Encuesta({
            nombre: $('#nombre').val(),
            estres: $('#estres').prop('checked'),
            nivel: $('#nivel').val(),
            estrato: $('#estrato').val(),
            protocolos: $('#protocolos').prop('checked'),
            labora: $('#labora').prop('checked')
        })
        encuestasX.add(encuestaNueva);
        console.log(encuestasX.toJSON());
        $("#tablita").show();
        $("#formulario").hide();
    },
    regresar: function (e) {
        e.preventDefault();
        $("#formulario").show();
        $("#tablita").hide();
    }
});

var encuesta2 = Backbone.View.extend({
    events: {
        'click .regresarB': 'regresar'
    },
    regresar: function (e) {
        e.preventDefault();
        console.log("why?")
        $("#formulario").show();
        $("#tablita").hide();
    }
});

var vmm = new encuestaV({ el: $('#botonEnviar') });
var vmm2 = new encuesta2({ el: $('#botonRegresar') });

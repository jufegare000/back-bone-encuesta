var encuestaV = Backbone.View.extend({
    events: {
        'click .enviar': 'enviarForm'
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
        $("#tablita").css("visibility", "visible");
    }
});

var vmm = new encuestaV({ el: $('#botonEnviar') });

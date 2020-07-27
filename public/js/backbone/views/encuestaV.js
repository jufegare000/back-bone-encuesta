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
            ciudad: $('#ciudad').val(),
            estres: $('#estres').prop('checked'),
            nivel: $('#nivel').val(),
            ingresos: $('#ingresos').val(),
            estrato: $('#estrato').val(),
            protocolos: $('#protocolos').prop('checked'),
            labora: $('#labora').prop('checked')
        })
        encuestasX.add(encuestaNueva);
        console.log(encuestasX.toJSON());
        $("#formf").trigger("reset");
        $("#tablita").show();
        $("#formulario").hide();
        this.agregarAtabla();
    },
    regresar: function (e) {
        //e.preventDefault();

        $("#formulario").show();
        $("#tablita").hide();
    },
    agregarAtabla: function () {
        var tabla = $("#tablafinal");
        tabla.find("tbody tr").remove();
        var models = encuestasX.models;
        var html = "<tbody>"
        for (var i = 0; i < models.length; i++) {
            console.log("dato: " + models[i].attributes.estrato);
            html = html + "<tr><td>" + models[i].attributes.nombre + "</td>" +
                "<td>" + models[i].attributes.ciudad + "</td>" +
                "<td>" + models[i].attributes.estres + "</td>" +
                "<td>" + models[i].attributes.nivel + "</td>" +
                "<td>" + models[i].attributes.ingresos + "</td>" +
                "<td>" + models[i].attributes.estrato + "</td>" +
                "<td>" + models[i].attributes.protocolos + "</td>" +
                "<td>" + models[i].attributes.labora + "</td>" +
                "</tr>";
        }
        html = html + "</tbody>"
        tabla.append(html);
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

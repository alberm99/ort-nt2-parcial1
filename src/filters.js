export default {
    mounted: function(){
     
    },
    methods:{
      formatoFecha: function (fyh){
        return new Date(fyh).toLocaleString()
      }
      ,formatoDinero: function (valor) {
        return '$'+valor
      }
    }
}
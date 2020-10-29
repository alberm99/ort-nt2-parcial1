<template>
  <section class="src-components-estructura">
    <div class="jumbotron">
      <h1>Tabla</h1>
      <hr>

      <div class="form-group">
        <label for="presupuesto">Presupuesto</label>
        <input type="number" id="presupuesto" class="form-control" v-model="presupuesto">
      </div>
      

      <div class="table-responsive">
        <table class="table">
          <tr class="bg-success text-white">
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Importe</th>
            <th>Fecha</th>
          </tr>
          <tr class="bg-info text-white" v-for="(d, index) in datos" :key="index">
            <td>{{ d.nombre }}</td>
            <td>{{ d.desc }}</td>
            <td>{{ formatoDinero(d.importe) }}</td>
            <td>{{ formatoFecha(d.createdAt) }}</td>
          </tr>
          <tr class="bg-warning text-white">
            <th></th>
            <th></th>
            <th :style="{color: getColorTotal()}">Importe total {{total}}</th>
            <th></th>
          </tr>
        </table>
      </div>

      <!-- <pre>{{datos}}</pre> -->
    </div>
  </section>
</template>

<script>
  import filters from '../filters.js'

  export default {
    name: "src-components-estructura",
    props: [],
    mixins:[filters]
    ,mounted() {
      this.getTotal()
    },
    data() {
      return {
      url: 'https://5f7cf6e3834b5c0016b05b16.mockapi.io/datosParcial'
      ,datos: []
      ,total: 0
      ,presupuesto: 0
      };
    },
    methods: {
      async getDatos(){
        try {
          let res = await this.axios.get(this.url)
          this.datos = (res.data)
        } catch (error) {
          console.error( 'HTTP GET ERROR' ,error)
        }
      },
      async getTotal(){
        await this.getDatos()
        for(let i=0; i<this.datos.length; i++){
          this.total += Number(this.datos[i].importe)
        }
        this.getColorTotal()
      }
      ,getColorTotal(){
        let color
        if(this.total > this.presupuesto){
          color = 'red'
        }
        else if(this.total < 1000){
          color = 'green'
        }else if(this.total <= 5000){
          color = 'magenta'
        }else{
          color = 'orange'
        }
        return color
      }
    },
    computed: {
      
    },
  };
</script>

<style scoped lang="css">
.src-components-estructura {
}

.jumbotron {
 
  color: white;
}

hr {
  background-color: #222;
  
}
label{
  color: #000;
  font-size: 35px;
}

h1{
  color: #000
}
.table td, .table th {
  vertical-align: middle;
}
</style>

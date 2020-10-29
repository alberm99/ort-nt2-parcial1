<template>

  <section class="src-components-padre">
    <div class="jumbotron"> 
      <h1>Multiple Choice</h1>
      <hr>
      
      <div class="table-responsive">
        <table class="table">
          <tr class="bg-info text-white">
            <th>Pregunta</th>
            <th>Respuestas</th>
          </tr>
          <tr class="bg-secondary text-white" v-for="(p, index) in preguntas" :key="index">
            <td>{{ p.pregunta }}</td>
            <td>{{ p.respuestas }}</td>
          </tr>
        </table>
      </div>  

    </div>  
  </section>

</template>

<script>



  export default  {
    name: 'src-components-padre',
    props: ['contIni','colorFondo','colorTexto','subtitulo'],
    mounted () {
      
    },
    data () {
      return {
        preguntas: [
          {pregunta: 1, respuestas:['b','d']}
          ,{pregunta: 2, respuestas:['b']}
          ,{pregunta: 3, respuestas:['c']}
          ,{pregunta: 4, respuestas:['d']}
          ,{pregunta: 5, respuestas:['e']}
        ]
      }
    },
    methods: {
      
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  
.jumbotron {
  background-color: #ccc;
  color: white;
}

hr {
  background-color: #000
}

.table td, .table th {
  vertical-align: middle;
}
</style>

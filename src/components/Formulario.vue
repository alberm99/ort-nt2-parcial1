<template>

  <section class="src-components-binding">
    <div class="jumbotron">
      <h1>Formulario</h1>
      <hr>
      <form novalidate autocomplete="off" @submit.prevent="enviar()">
        
        <div class="from-group mt-2">
          <label for="nombre">Nombre</label>
          <input type="text" id="nombre" class="form-control" v-model="$v.f.nombre.$model">

          <div v-if="$v.f.nombre.$error && $v.f.nombre.$dirty" class="alert alert-danger mt-1">
            <div v-if="$v.f.nombre.required.$invalid"> {{ $v.f.nombre.required.$message }}</div>
            <div v-if="$v.f.nombre.minimo.$invalid"> {{ $v.f.nombre.minimo.$message }}</div>
            <div v-if="$v.f.nombre.maximo.$invalid"> {{ $v.f.nombre.maximo.$message }}</div>
          </div>

          
        </div>


        <div class="from-group mt-2">
          <label for="desc">Descripción</label>
          <input type="text" id="desc" class="form-control" v-model="$v.f.desc.$model">

           <div v-if="$v.f.desc.$error && $v.f.desc.$dirty" class="alert alert-danger mt-1">
            <div v-if="$v.f.desc.required.$invalid"> {{ $v.f.desc.required.$message }}</div>
          </div>

        </div>


        <div class="from-group mt-2">
          <label for="importe">Importe</label>
          <input type="number" id="importe" class="form-control" v-model="$v.f.importe.$model">

           <div v-if="$v.f.importe.$error && $v.f.importe.$dirty" class="alert alert-danger mt-1">
            <div v-if="$v.f.importe.required.$invalid"> {{ $v.f.importe.required.$message }}</div>
          </div>

        </div>


        <div class="from-group mt-2" >
          <input type="submit" class="btn btn-success my-3" value="Enviar" :disabled="$v.$invalid">
        </div>

        <!-- <pre>{{$v}}</pre> -->


      </form>
    </div>
    
  </section>

</template>

<script>

  import { minLength, maxLength, required } from '@vuelidate/validators'

  export default  {
    name: 'src-components-binding',
    props: [],
    mounted () {
      this.resetForm()
    },
    data () {
      return {
        f: this.resetForm()
        ,url: 'https://5f7cf6e3834b5c0016b05b16.mockapi.io/datosParcial'
      }
    },
    validations: {
      f: {
        nombre: { 
          required 
          ,minimo: minLength(5)
          ,maximo: maxLength(15)
        },
        desc:{
          required
        }
        ,importe: { 
          required
        }
      }
    }
    ,methods: {
      resetForm(){
       return{
          nombre: ''
          ,desc: ''
          ,importe: ''
        }
      }
      ,async sendDatos(datos){
         try {
          let res = await this.axios.post(this.url, datos, {'content-type': 'application/json'})
          console.log(res.data)
        } catch (error) {
          console.error( 'HTTP POST ERROR' ,error)     
        }
      }
      ,async enviar(){

        this.$v.$touch()
        if(!this.$v.$invalid){
          console.log(this.f)
          await this.sendDatos(this.f)
          this.f = this.resetForm()
          this.$v.$reset()
        }
      }
    },
    computed: {

    }
  }  



</script>

<style scoped lang="css">

.jumbotron {
  background-color: rgb(23, 23, 151);
  color: white;

}
pre{
  color: white
}

h1{
  color: white;
}

hr {
  background-color: #ddd
}
</style>

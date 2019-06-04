<template>
    <div class="shadow bg-white rounded container px-2 py-3 my-5">
        
        <div class="w-100 text-center mt-2 pl-2" > 
          <h2 class="pb-2 mt-3 mb-3 " style="font-weight:500;">Lista de funcionários</h2>
          <hr style="margin-top: 8px; margin-bottom: 12px;">
        </div>
        <b-row class="my-3">
        <b-col md="6" >
            <b-form-group label-cols-sm="2" label-size="md" label="Filtro" class="mb-0">
            <b-input-group>
                <b-form-input v-model="filter" placeholder="Pesquisar"></b-form-input>
                <b-input-group-append>
                <b-button :disabled="!filter" @click="filter = ''">Limpar</b-button>
                </b-input-group-append>
            </b-input-group>
            </b-form-group>
        </b-col>

        <b-col md="6" >
        <b-form-group label-cols-sm="3" label="Per page" class="mb-0">
          <b-form-select v-model="perPage" :options="pageOptions"></b-form-select>
        </b-form-group>
        </b-col>   

        </b-row>

        <b-table striped hover 
        show-empty
        stacked="md"
        :current-page="currentPage"
        :per-page="perPage"
        :filter="filter"
        @filtered="onFiltered"
        :items="employees" 
        :fields="fields">    
        <template slot="delete" slot-scope="row">
            <div class="container">
                <font-awesome-icon :icon="['far','trash-alt']" id="trash" @click="removeItem(row)"/>
            </div>
        </template>
        </b-table>
        <b-row>
            <b-col md="7" class="my-1 ml-auto">
                <b-pagination
                v-model="currentPage"
                :total-rows="totalRows"
                :per-page="perPage"
                class="my-0"
                ></b-pagination>
            </b-col>
        </b-row>
        <!-- fazer lista aqui na ficha de avaliacao vc vai colocar o nome e o departamento e resolver
        os dados entao serao mandados pra ca, 4 competencias, comunicacao, desempenho em projetos, 
        adesao a normas e comportamento, velocidade e horario de trabalho -->

    </div>
</template>

<script>
export default {
    data(){
        return{
            fields:[
                {key: 'nome', label: 'Nome', sortable: true},
                {key: `departamento`, label: "Departamento", sortable: true},
                {key: `eval.comp1`, label: "Comunicação", sortable: true},
                {key: `eval.comp2`, label: "Desempenho em projetos", sortable: true},
                {key: `eval.comp3`, label: "Adesão à normas e comportamentos", sortable: true},
                {key: `eval.comp4`, label: "Velocidade e horário de trabalho", sortable: true}, 
                {key: 'delete', label: ''}
                ],
                totalRows: 1,
                currentPage: 1,
                perPage: 10,
                filter: null,
                pageOptions: [5, 10, 15],
                }
    },
    computed: {
        employees(){
            for (let index = 0; index < this.$store.state.users.length; index++) {
                const element = this.$store.state.users[index];
                    if(element.username === this.$route.params.username) return element.employees;
            }
        }
  
    },
    methods: {
        removeItem(employee){
            this.$store.dispatch('removeEmployee', this.$route.params.username, employee)
            console.log('dispatch')
        },
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },mounted() {
      // Set the initial number of items
      this.totalRows = employees.length
      console.log(this.totalRows)
    },
    }
    
   

}
</script>

<style scoped>

.container-fluid{
    background-color: white;
}

#trash:hover{
    color: rgb(57, 108, 190);
    cursor: pointer
}
</style>

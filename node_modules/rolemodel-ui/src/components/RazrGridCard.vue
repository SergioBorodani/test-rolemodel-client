<template>
<v-container fluid>
    <v-row>
        <v-col sm="1">
            <v-button class="mb20 h36" :action="addPerm" text="Добавить" />
        </v-col>
        <v-col sm="1">
            <v-button class="mb20 h36" :action="deletePerm" text="Удалить" />
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-filter-input class="mb20" v-model="filter"/>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <lyra-grid
              ref="lyraGrid2"
              formclass="ru.curs.rolemodel.lyra.RazrLyra"
              instanceid="grid2"
              :context="getInitContext()"
              v-on:click="myclick"
            />
        </v-col>
    </v-row>
</v-container>
</template>

<script>
    import axios from 'axios'
    const VButton = () => import('axeta-vue-elements/src/components/v-button')
    const VFilterInput = () => import('axeta-vue-elements/src/components/v-filter-input')

export default {
  name: 'RazrGridCard',
  components: {
    lyraGrid: () => import('lyra-grid'),
      VButton,
      VFilterInput
  },

  data: () => ({
      currentRazrId: null,
      filter: null
  }),

    watch: {
        filter: function (n, o) {
            if (n) {
                this.refresh1()
            }
        }
    },

  methods: {

    getInitContext() {
      return {
        refreshParams:
                    {
                      sort: ["razr"],
                        filter: {
                            filter1: "",
                        }
                    },
      }
    },

      addPerm () {
          this.$router.push({path: '/addRazr'})
      },

      deletePerm () {
          const path = '/api/rolemodel/deleterazr'
          const param = {
              razrId: this.currentRazrId
          }
          axios.get(path, {
              params: param
          }).then(response => {
              this.refresh1()
          }).catch(err => {
              alert(err)
          })
      },

      refresh1: function () {
          let context =
              '{' +
              '"refreshParams": {' +

              '"sort": ["razr"],' +

              '"filter": {' +
              '"filter1": "' + (this.filter ? this.filter : '') + '"' +
              '}' +

              '}' +
              '}'

        if (this.$refs.lyraGrid2) {
              this.$refs.lyraGrid2.$emit('refresh', JSON.parse(context))
          }
      },

      myclick: function (formClass, instanceId, obj) {
        this.currentRazrId = obj.currentRowData.razr
          console.log(this.currentRazrId)
      }

  },

};
</script>

<style>


</style>

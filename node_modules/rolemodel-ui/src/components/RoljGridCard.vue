<template>
<v-container fluid>
    <v-row>
        <v-col sm="1">
            <v-button class="mb20 h36" :action="addRole" text="Добавить" />
        </v-col>
        <v-col sm="1">
            <v-button class="mb20 h36" :action="deleteRole" text="Удалить" />
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
              ref="lyraGrid1"
              formclass="ru.curs.rolemodel.lyra.RoljLyra"
              instanceid="grid1"
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
  name: 'RoljGridCard',
  components: {
      lyraGrid: () => import('lyra-grid'),
      VButton,
      VFilterInput
  },

  data: () => ({
      currentRoleId: null,
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
                      sort: ["rolj"],
                        filter: {
                            filter1: "",
                        }
                    },
      }
    },

      addRole () {
          this.$router.push({path: '/addRolj'})
      },

      deleteRole () {
          const path = '/api/rolemodel/deleterole'
          const param = {
              roleId: this.currentRoleId
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

          if (this.$refs.lyraGrid1) {
              this.$refs.lyraGrid1.$emit('refresh', JSON.parse(context))
          }
      },

      myclick: function (formClass, instanceId, obj) {
          this.currentRoleId = obj.currentRowData.rolj
          console.log(this.currentRoleId)
      },


  },

};
</script>

<style>



</style>

<template>
<v-container fluid>
    <v-row>
        <v-col sm="1">
            <v-button class="mb20 h36" :action="addUser" text="Добавить" />
        </v-col>
        <v-col sm="1">
            <v-button class="mb20 h36" :action="deleteUser" text="Удалить" />
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
              ref="lyraGrid3"
              formclass="ru.curs.rolemodel.lyra.PoljzovateljLyra"
              instanceid="grid3"
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
  name: 'PoljzovateljGridCard',
  components: {
      lyraGrid: () => import('lyra-grid'),
      VButton,
      VFilterInput
  },

  data: () => ({
      currentUserSid: null,
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
                      sort: ["sid"],
                        filter: {
                            filter1: "",
                        }
                    },
       }
    },

      addUser () {
          this.$router.push({path: '/addPoljz'})
      },

      deleteUser () {
        const path = '/api/rolemodel/deleteuser'
        const param = {
            userSId: this.currentUserSid
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

      if (this.$refs.lyraGrid3) {
        this.$refs.lyraGrid3.$emit('refresh', JSON.parse(context))
      }
    },

    myclick: function (formClass, instanceId, obj) {
      this.currentUserSid = obj.currentRowData.sid
      //this.buttonsDisabled = false
        console.log(this.currentUserSid)
    }

  },

};
</script>


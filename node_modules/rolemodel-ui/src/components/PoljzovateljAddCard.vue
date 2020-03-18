<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <v-input v-model="userLogin" label="Логин пользователя" class="input_style_2 mt8" width="700px"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-select v-model="userRole" :list="userRoles" icon_left="true" defailt_value="Список ролей" text_center="true" width="500px" />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-button class="mb20 h36" :action="saveData" text="Сохранить" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import axios from 'axios'

    const VButton = () => import('axeta-vue-elements/src/components/v-button')
    const VInput = () => import('axeta-vue-elements/src/components/v-input')
    const VSelect = () => import('axeta-vue-elements/src/components/v-select')

    export default {
        name: 'PoljzovateljAddCard',
        components: {
            VButton,
            VInput,
            VSelect
        },

        data: () => ({
            userLogin: null,
            userRole: null,
            userRoles: []
        }),

        created () {
            this.getUserRoles()
        },

        methods: {
            getUserRoles () {
                const path = '/api/rolemodel/getroles'
                axios.get(path)
                    .then(response => {
                        this.userRoles = response.data
                    }).catch(err => {
                    alert(err)
                })
            },

            saveData () {
                console.log(this.userLogin)
                console.log(this.userRole)

                if(!this.userLogin || !this.userRole) {
                    return
                }

                const path = '/api/rolemodel/saveuserrole'
                const params = {
                    userLogin: this.userLogin,
                    userRole: this.userRole
                }
                axios.get(path, {
                    params: params
                }).then(response => {
                  this.getUserRoles()
                }).catch(err => {
                    alert(err)
                })
            }
        }
    }

</script>

<style>
</style>
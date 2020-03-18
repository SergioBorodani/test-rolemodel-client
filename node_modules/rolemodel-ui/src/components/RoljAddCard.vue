<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <v-input v-model="roleName" label="Название роли" class="input_style_2 mt8" width="700px"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-select v-model="rolePerm" :list="rolePerms" icon_left="true" defailt_value="Список разрешений" text_center="true" width="500px" />
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
        name: 'RoljAddCard',
        components: {
            VButton,
            VInput,
            VSelect
        },

        data: () => ({
            roleName: null,
            rolePerm: null,
            rolePerms: []
        }),

        created () {
            this.getRolePerms()
        },

        methods: {
            getRolePerms () {
                const path = '/api/rolemodel/getperms'
                axios.get(path)
                    .then(response => {
                        this.rolePerms = response.data
                    }).catch(err => {
                    alert(err)
                })
            },

            saveData () {
                console.log(this.roleName)
                console.log(this.rolePerm)

                if(!this.roleName || !this.rolePerm) {
                    return
                }

                const path = '/api/rolemodel/saveroleperm'
                const params = {
                    roleName: this.roleName,
                    rolePerm: this.rolePerm
                }
                axios.get(path, {
                    params: params
                }).then(response => {
                    this.getRolePerms()
                }).catch(err => {
                    alert(err)
                })
            }
        }
    }

</script>

<style>
</style>
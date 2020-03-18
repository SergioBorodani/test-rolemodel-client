<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <v-input v-model="permName" label="Название разрешения" class="input_style_2 mt8" width="700px"/>
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

    export default {
        name: 'RazrAddCard',
        components: {
            VButton,
            VInput,
        },

        data: () => ({
            permName: null,
        }),


        methods: {
            saveData () {
                console.log(this.permName)

                if(!this.permName) {
                    return
                }

                const path = '/api/rolemodel/saveperm'
                const param = {
                    permName: this.permName,
                }
                axios.get(path, {
                    params: param
                }).then(response => {
                  // TODO
                }).catch(err => {
                    alert(err)
                })
            }
        }
    }

</script>

<style>
</style>
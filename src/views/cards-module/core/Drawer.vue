<template>
    <v-navigation-drawer
            v-model="drawer"
            :color="color"
            :expand-on-hover="expandOnHover"
            :mini-variant="miniVariant"
            :permanent="permanent"
            dark
            width="310"
            app
            class="elevation-8"
    >
        <v-list
                dense
                nav
                class="py-0"
        >
            <v-list-item two-line :class="miniVariant && 'px-0'">
                <v-list-item-avatar>
                        <img src="../../../assets/11111111111.png"/>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title><h3>Ведение</h3></v-list-item-title>
                    <v-list-item-title><h3>гериатрических карт</h3></v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
                    :to="item.to"
                    exact
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>

        <dashboard-core-footer/>
    </v-navigation-drawer>
</template>

<script>
    export default {
        data() {
            return {
                drawer: true,
                items: [
                    {title: 'На главную', icon: 'mdi-home', to:"/"},
                    {title: 'О модуле', icon: 'mdi-information-outline', to:"/modules/cards/"},
					{title: 'Параметры карточки', icon: 'mdi-information-outline', to:"/modules/cards/manage/"},
                    {title: 'Архив карт', icon: 'mdi-information-outline', to:"/modules/cards/archive"},
                    {title: 'Общие сведения', icon: 'mdi-information-outline', to:"/modules/cards/overall"},
                    {title: 'Хронические заболевания', icon: 'mdi-information-outline', to:"/modules/cards/chronic"},
                    {title: 'Лекарственная терапия', icon: 'mdi-information-outline', to:"/modules/cards/therapy"},
                    {title: 'Лабораторные исследования', icon: 'mdi-information-outline', to:"/modules/cards/research"},
                    {title: 'Результаты динамометрии', icon: 'mdi-information-outline', to:"/modules/cards/dynamometry"},
                    {title: 'Шкала депрессии', icon: 'mdi-information-outline', to:"/modules/cards/depression"},
                    {title: 'Индекс Бартел', icon: 'mdi-information-outline', to:"/modules/cards/bartel"},
                    {title: 'Тест часов', icon: 'mdi-information-outline', to:"/modules/cards/clock"},
                    {title: 'Заключение гериатра', icon: 'mdi-information-outline', to:"/modules/cards/conclusion"},
                    {title: 'Настройки', icon: 'mdi-information-outline', to:"/modules/cards/settings"},
                ],
                color: 'primary',
                right: false,
                permanent: false,
                miniVariant: false,
                expandOnHover: false,
            }
        },
        components: {
            // DashboardCoreFooter: () => import('./Footer'),
        },
    }
</script>

<style lang="sass">
    @import '../../../../node_modules/vuetify/src/styles/tools/rtl'

    #core-navigation-drawer
        .v-list-group__header.v-list-item--active:before
            opacity: .24

        .v-list-item
            &__icon--text,
            &__icon:first-child
                justify-content: center
                text-align: center
                width: 20px

                +ltr()
                    margin-right: 24px
                    margin-left: 12px !important

                +rtl()
                    margin-left: 24px
                    margin-right: 12px !important

        .v-list--dense
            .v-list-item
                &__icon--text,
                &__icon:first-child
                    margin-top: 10px

        .v-list-group--sub-group
            .v-list-item
                +ltr()
                    padding-left: 8px

                +rtl()
                    padding-right: 8px

            .v-list-group__header
                +ltr()
                    padding-right: 0

                +rtl()
                    padding-right: 0

                .v-list-item__icon--text
                    margin-top: 19px
                    order: 0

                .v-list-group__header__prepend-icon
                    order: 2

                    +ltr()
                        margin-right: 8px

                    +rtl()
                        margin-left: 8px
</style>

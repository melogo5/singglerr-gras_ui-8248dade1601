<template>
    <v-app>
        <dashboard-core-app-bar :title="title" />

        <dashboard-core-drawer />
        <dashboard-core-view />
    </v-app>
</template>

<script>
    export default {
        name: 'CardsModule',

        components: {
            DashboardCoreAppBar: () => import('../risk-module/core/AppBar'),
            DashboardCoreDrawer: () => import('./core/Drawer'),
            DashboardCoreView: () => import('../risk-module/core/View'),
        },

        data: () => ({
            title: `Модуль "Ведениывввеывфвф гериатрических карт"`,
        }),
    }
</script>
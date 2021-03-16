<template>
    <router-view/>
</template>

<script>
    global.jQuery = require('jquery');
    var $ = global.jQuery;
    window.$ = $;
    export default {
        name: 'App',

        data: () => ({
            //
        }),
    };
</script>
<style>

</style>
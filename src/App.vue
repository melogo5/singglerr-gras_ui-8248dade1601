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
        head: {
            title: function () {
                return {
                    inner: this.title
                };
            },
            meta: [{
                    "http-equiv": "content-type",
                    content: "text/html; charset=UTF-8"
                },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0"
                }
            ],
            link: [{
                    rel: "stylesheet",
                    href: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css"
                },
                {
                    rel: "stylesheet",
                    href: "https://bootstraptema.ru/snippets/effect/2017/ihover9/ihover.css"
                },
                {
                    rel: "stylesheet",
                    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
                }
            ],
            script: [{
                    src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js"
                },
                {
                    src: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"
                },
            ]
        }
    };

</script>
<style>

</style>
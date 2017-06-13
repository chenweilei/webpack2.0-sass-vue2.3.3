<!-- 简单写个title和一个循环 -->
<template>
    <div id="example">
        <h1>{{ msg }}</h1>
        <ul>
            <li v-for="n in 5">{{ n }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'example',
    data: function() {
        return {
            msg: 'Hello World!'
        }
    }
}
</script>

<style lang="sass" scoped>
    h1
        font-size: 40px
        color: red
        line-height: 60px

    #example
        background: #eee
        color: #000
        height: 100vh
</style>
<template>
    <div class="input-box">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "AppInput",
    }
</script>

<style lang="scss" scoped>
.input-box{
    position: relative;
    width: 100%;
}
</style>
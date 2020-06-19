<template>
    <button @click="fatherMethod()">点击</button>
</template>
<script>
export default {
    props: {
        fatherMethod: {
            type: Function,
            default: null
        }
    },
    methods: {}
};
</script>
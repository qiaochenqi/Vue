<template lang="html">
    <div>
        子组件:
        <span>{{inputName}}</span>
    </div>
</template>

<script>
export default {
    props:{
        inputName : String,
        required: true
    }
}
</script>

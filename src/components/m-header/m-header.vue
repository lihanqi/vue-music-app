<template>
    <div class="m-header">
        <h1>Chicken Music</h1>
    </div>
</template>
    
<script>
    
export default {
    name: 'MHeader'
}
</script>
    
<style lang="scss" scoped>
@import '@/common/scss/index.scss';

.m-header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;
    color: $color-text
}

</style>

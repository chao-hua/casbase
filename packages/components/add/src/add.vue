<template>
    <div class="cb-add">
        <span>currentValue:{{ currentValue }}</span>
        <button @click="add">Add</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Model } from 'vue-property-decorator';

@Component
export default class CbAdd extends Vue {
    @Model('input')
    value: number;

    currentValue: number = this.value;

    @Watch('value')
    watchvalue(val: number) {
        this.currentValue = val;
    }

    @Watch('currentValue')
    watchCurrentValue(val: number) {
        this.$emit('input', val);
    }

    add() {
        this.currentValue = this.currentValue + 1;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.cb-add {
    top: 0;
    bottom: 1px;
    padding: 10px;
    border: solid 1px #666;
}
</style>

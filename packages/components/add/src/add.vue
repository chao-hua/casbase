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
    @Model('input', { default: 0 })
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
    padding: 10px;
    border: solid 1px #666;
}
</style>

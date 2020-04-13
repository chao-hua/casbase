<template>
    <div class="home">
        Home:{{ value }}<button @click="reset">reset</button>
        <cb-add v-model="value" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import { CbAdd } from 'packages/';

@Component({
    components: {
        // CbAdd
    }
})
export default class Home extends Vue {
    value = 0;

    reset() {
        this.value = 0;
    }
}
</script>

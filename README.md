# cusbase

## 1.安装
```
npm install cusbase
```

## 2.引用

- 方式一：全部组件引用

```js
import Cusbase from 'cusbase'
require('cusbase/lib/cusbase.css')

Vue.use(Cusbase)
```

- 方式二：部分组件引用

```js
import { CbAdd } from 'cusbase';

@Component({
    components: {
        CbAdd
    }
})
```

## 3.组件使用

```vue
<template>
    <div class="home">
        Home:{{ value }}<button @click="reset">reset</button>
        <cb-add v-model="value" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { CbAdd } from 'cusbase';

@Component({
    components: {
        CbAdd
    }
})
export default class Home extends Vue {
    value = 0;

    reset() {
        this.value = 0;
    }
}
</script>

```

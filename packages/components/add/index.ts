import CbAdd from './src/add.vue';

(CbAdd as any).install = (Vue: any) => {
    Vue.component('CbAdd', CbAdd);
};

export default CbAdd;

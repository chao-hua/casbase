import CbAdd from './components/add';

const components = [CbAdd];

const install = (Vue: any) => {
    if ((install as any).installed) return;
    components.forEach(item => {
        Vue.component(item.name, item);
    });
};

const Cusbase = {
    install,
    ...components
};

export default Cusbase;

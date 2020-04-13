import Add from './components/add';

const components = [Add];

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

export const CbAdd = Add;

export default Cusbase;

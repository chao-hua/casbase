import CbAdd from './components/add';

const components = [CbAdd];

const install = (Vue: any) => {
    if ((install as any).installed) return;
    components.forEach(item => {
        Vue.component(item.name, item);
    });
};

const Cusbase = {
    varsion: '0.0.1',
    install,
    ...components
};

export default Cusbase;

import Loadable from 'react-loadable';
import Loading from '../views/loading';

const Index = Loadable({
    loader: () =>
        import ('../views/index'),
    loading: Loading,
});
const Home = Loadable({
    loader: () =>
        import ('../views/home/index'),
    loading: Loading,
});
const Rank = Loadable({
    loader: () =>
        import ('../views/rank/index'),
    loading: Loading,
});
const My = Loadable({
    loader: () =>
        import ('../views/my/index'),
    loading: Loading,
});
const Classify = Loadable({
    loader: () =>
        import ('../views/classify/index'),
    loading: Loading,
})
const Save = Loadable({
    loader: () =>
        import ('../views/save/index'),
    loading: Loading,
})

export default [{
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        component: Index,
        children: [{
            path: '/index/home',
            component: Home
        }, {
            path: '/index/rank',
            component: Rank
        }, {
            path: '/index/my',
            component: My
        }, {
            path: '/index',
            redirect: '/index/home'
        }]
    },
    {
        path: '/classify/:id',
        component: Classify
    }, {
        path: '/save',
        component: Save
    }
]
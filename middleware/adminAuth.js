export default function ({ redirect, store, route})
{
    const isLogined = store.getters["adminAuth/isLogined"]

    if (!isLogined && route.path !== '/admin/login') {
        redirect('/admin/login');
    }
}
import{ routes as auth } from '../modules/auth'
import{ routes as dashboard } from  '../pages/dashboard'
import{ routes as home } from  '../pages/home'
import{ routes as qrcodebuilder } from  '../pages/qrcodebuilder'
import{ routes as register } from  '../pages/register'

export default [
    ...auth,
    ...dashboard,
    ...home,
    ...qrcodebuilder,
    ...register
]
import{ routes as auth } from '../modules/auth'
import{ routes as dashboard } from  '../pages/dashboard'
import{ routes as home } from  '../pages/home'
import{ routes as generate } from  '../pages/generate'
import{ routes as register } from  '../pages/register'

export default [
    ...auth,
    ...dashboard,
    ...home,
    ...generate,
    ...register
]
import Vue from 'vue'
import { routes } from './routes'
const eventHub = new Vue()
const loadingNotify = (p) => {
  eventHub.$emit('begin-loading')
  return p.then((r) => {
    eventHub.$emit('finish-loading')
    return r
  })
}

const children = []
routes.forEach((route) => {
  children.push({
    path: route.path,
    name: route.name,
    // component: () => import(`../views/${route.filePath}/${route.fileName}.vue`),
    /* eslint-disable */
    component: () => loadingNotify(import(`../views/${route.filePath}`)),
    /* eslint-enable */
    meta: {
      index: route.index,
      keepAlive: true,
      intro: route.intro
    }
  })
})

export const routers = [
  {
    path: '/',
    /* eslint-disable */
    component: () => import(`../views/home.vue`),
    /* eslint-enable */
    children: children
  }
]

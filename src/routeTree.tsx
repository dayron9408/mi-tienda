import { RootRoute, Route } from '@tanstack/react-router'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import CheckoutReview from './pages/CheckoutReview'
import ThankYou from './pages/ThankYou'

const rootRoute = new RootRoute({
    component: RootLayout,
})

const homeRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home,
})


const checkoutRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/checkout',
    component: Checkout,
})

const checkoutReviewRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/confirmation',
    component: CheckoutReview,
})
const thanksRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/thanks',
    component: ThankYou,
})



export const routeTree = rootRoute.addChildren([homeRoute, checkoutRoute, checkoutReviewRoute, thanksRoute])

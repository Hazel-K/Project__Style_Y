import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/index")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login")
  },
  {
    path: "/find",
    name: "Find",
    component: () => import("../views/find")
  },
  {
    path: "/join",
    name: "Join",
    component: () => import("../views/join")
  },
  {
    path: "/search/:searchString",
    name: "Search",
    component: () => import("../views/search")
  },
  {
    path: "/mypage",
    name: "Mypage",
    children: [
      {
        path: "/mypage/chkUser",
        name: "ChkUser",
        component: () => import("../views/mypage/chkUser")
      },
      {
        path: "/mypage/chkShip",
        name: "ChkShip",
        component: () => import("../views/mypage/chkShip")
      },
      {
        path: "/mypage/buyList",
        name: "BuyList",
        component: () => import("../views/mypage/buyList")
      },
      {
        path: "/mypage/wishList",
        name: "WishList",
        component: () => import("../views/mypage/wishList")
      },
      {
        path: "/mypage/report",
        name: "Report",
        component: () => import("../views/mypage/report")
      },
      {
        path: "/mypage/admin",
        name: "Admin",
        component: () => import("../views/mypage/admin")
      }
    ],
    component: () => import("../views/mypage")
  },
  { path: "/*", redirect: { name: "Index" } }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

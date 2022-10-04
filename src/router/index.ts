import HomeView from "../views/HomeView.vue";
import FindPlaceView from "../views/FindPlaceView.vue";
import SelectPlaceView from "../views/SelectPlaceView.vue";
import SummaryView from "../views/SummaryView.vue";
import WitnessView from "../views/WitnessView.vue";
import DriverView from "../views/DriverView.vue";
import ShortageView from "../views/ShortageView.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { useUserStore } from "../store/userStore";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/find",
    name: "find",
    component: FindPlaceView,
  },
  {
    path: "/find/select",
    name: "select",
    props: true,
    component: SelectPlaceView,
  },
  {
    path: "/summary",
    name: "summary",
    component: SummaryView,
  },
  {
    path: "/witness",
    name: "witness",
    component: WitnessView,
  },
  {
    path: "/driver",
    name: "driver",
    component: DriverView,
  },
  {
    path: "/shortage",
    name: "shortage",
    component: ShortageView,
  },
];

const router = createRouter({
  routes: routes,
  history: createWebHashHistory(),
});

router.beforeEach(async (to) => {
  const userStore = useUserStore();
  if (!userStore.getToken() && to.name !== "home") {
    return { name: "home" };
  }
});

export default router;

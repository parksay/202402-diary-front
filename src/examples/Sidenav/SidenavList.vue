<template>
  <div
    class="collapse navbar-collapse w-auto h-auto h-100"
    id="sidenav-collapse-main"
  >
    <ul class="navbar-nav">
      <li class="nav-item mt-3">
        <h6
          class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6"
        >
          개인페이지
        </h6>
      </li>
      <li class="nav-item">
        <a
          data-bs-toggle="collapse"
          href="#dashboardsExamples"
          class="nav-link active"
          aria-controls="dashboardsExamples"
          role="button"
        >
          <div
            class="icon icon-shape icon-sm text-center d-flex align-items-center justify-content-center"
          >
            <i class="ni ni-shop text-primary text-sm opacity-10"></i>
          </div>
          <span class="nav-link-text ms-1">폴더1</span>
        </a>
        <div class="collapse" id="dashboardsExamples" style="">
          <ul class="nav ms-4">
            <li class="nav-item active">
              <a
                class="nav-link active"
                href="../../pages/dashboards/landing.html"
              >
                <span class="sidenav-mini-icon"> </span>
                <span class="sidenav-normal"> 새글1 </span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                <span class="sidenav-mini-icon"> D </span>
                <span class="sidenav-normal"> 새글2 </span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                <span class="sidenav-mini-icon"> A </span>
                <span class="sidenav-normal"> 새글3 </span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                <span class="sidenav-mini-icon"> S </span>
                <span class="sidenav-normal"> 새글4 </span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                <span class="sidenav-mini-icon"> C </span>
                <span class="sidenav-normal"> + 신규글쓰기 </span>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <!-- 추후 herf 유지하고(마우스 버튼표시) @click 이벤트 걸어야함 -->
        <a class="nav-link active" href="">
          <div
            class="icon icon-shape icon-sm text-center d-flex align-items-center justify-content-center"
          ></div>
          <span class="nav-link-text ms-1">+ 신규폴더생성</span>
        </a>
      </li>

      <li class="nav-item">
        <hr class="horizontal dark" />
        <h6
          class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6"
        >
          신규 뭔가할꺼?
        </h6>
      </li>
      <li class="nav-item">
        <!-- 공지사항 링크 추가 필요 -->
        <router-link
          :to="{ name: 'Tables' }"
          class="px-0 nav-link font-weight-bold text-white"
          target="blank"
        >
          <a class="nav-link" role="button">
            <div
              class="icon icon-shape icon-sm text-center d-flex align-items-center justify-content-center"
            >
              <i class="ni ni-spaceship text-dark text-sm"></i>
            </div>
            <span class="nav-link-text ms-1">공지사항</span>
          </a>
        </router-link>
      </li>
      <li class="nav-item">
        <a
          data-bs-toggle="collapse"
          href="#componentsExamples"
          class="nav-link collapsed"
          aria-controls="componentsExamples"
          role="button"
          aria-expanded="false"
        >
          <div
            class="icon icon-shape icon-sm text-center d-flex align-items-center justify-content-center"
          >
            <i class="ni ni-app text-dark text-sm"></i>
          </div>
          <span class="nav-link-text ms-1">Components</span>
        </a>
        <div class="collapse" id="componentsExamples" style="">
          <ul class="nav ms-4">
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.creative-tim.com/learning-lab/bootstrap/alerts/argon-dashboard"
                target="_blank"
              >
                <span class="sidenav-mini-icon"> A </span>
                <span class="sidenav-normal"> Alerts </span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.creative-tim.com/learning-lab/bootstrap/badge/argon-dashboard"
                target="_blank"
              >
                <span class="sidenav-mini-icon"> B </span>
                <span class="sidenav-normal"> Badge </span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.creative-tim.com/learning-lab/bootstrap/buttons/argon-dashboard"
                target="_blank"
              >
                <span class="sidenav-mini-icon"> B </span>
                <span class="sidenav-normal"> Buttons </span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.creative-tim.com/learning-lab/bootstrap/cards/argon-dashboard"
                target="_blank"
              >
                <span class="sidenav-mini-icon"> C </span>
                <span class="sidenav-normal"> Card </span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.creative-tim.com/learning-lab/bootstrap/carousel/argon-dashboard"
                target="_blank"
              >
                <span class="sidenav-mini-icon"> C </span>
                <span class="sidenav-normal"> Carousel </span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.creative-tim.com/learning-lab/bootstrap/collapse/argon-dashboard"
                target="_blank"
              >
                <span class="sidenav-mini-icon"> C </span>
                <span class="sidenav-normal"> Collapse </span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.creative-tim.com/learning-lab/bootstrap/dropdowns/argon-dashboard"
                target="_blank"
              >
                <span class="sidenav-mini-icon"> D </span>
                <span class="sidenav-normal"> Dropdowns </span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.creative-tim.com/learning-lab/bootstrap/forms/argon-dashboard"
                target="_blank"
              >
                <span class="sidenav-mini-icon"> F </span>
                <span class="sidenav-normal"> Forms </span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.creative-tim.com/learning-lab/bootstrap/modal/argon-dashboard"
                target="_blank"
              >
                <span class="sidenav-mini-icon"> M </span>
                <span class="sidenav-normal"> Modal </span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.creative-tim.com/learning-lab/bootstrap/navs/argon-dashboard"
                target="_blank"
              >
                <span class="sidenav-mini-icon"> N </span>
                <span class="sidenav-normal"> Navs </span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.creative-tim.com/learning-lab/bootstrap/navbar/argon-dashboard"
                target="_blank"
              >
                <span class="sidenav-mini-icon"> N </span>
                <span class="sidenav-normal"> Navbar </span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.creative-tim.com/learning-lab/bootstrap/pagination/argon-dashboard"
                target="_blank"
              >
                <span class="sidenav-mini-icon"> P </span>
                <span class="sidenav-normal"> Pagination </span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.creative-tim.com/learning-lab/bootstrap/popovers/argon-dashboard"
                target="_blank"
              >
                <span class="sidenav-mini-icon"> P </span>
                <span class="sidenav-normal"> Popovers </span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.creative-tim.com/learning-lab/bootstrap/progress/argon-dashboard"
                target="_blank"
              >
                <span class="sidenav-mini-icon"> P </span>
                <span class="sidenav-normal"> Progress </span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.creative-tim.com/learning-lab/bootstrap/spinners/argon-dashboard"
                target="_blank"
              >
                <span class="sidenav-mini-icon"> S </span>
                <span class="sidenav-normal"> Spinners </span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.creative-tim.com/learning-lab/bootstrap/tables/argon-dashboard"
                target="_blank"
              >
                <span class="sidenav-mini-icon"> T </span>
                <span class="sidenav-normal"> Tables </span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.creative-tim.com/learning-lab/bootstrap/tooltips/argon-dashboard"
                target="_blank"
              >
                <span class="sidenav-mini-icon"> T </span>
                <span class="sidenav-normal"> Tooltips </span>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          href="https://github.com/creativetimofficial/ct-argon-dashboard-pro/blob/main/CHANGELOG.md"
          target="_blank"
        >
          <div
            class="icon icon-shape icon-sm text-center me-2 d-flex align-items-center justify-content-center"
          >
            <i class="ni ni-align-left-2 text-dark text-sm"></i>
          </div>
          <span class="nav-link-text ms-1">Changelog</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
// import SidenavItem from "./SidenavItem.vue";
// import SidenavCard from "./SidenavCard.vue";

export default {
  name: "SidenavList",
  props: {
    cardBg: String,
  },
  data() {
    return {
      title: "Argon Dashboard 2",
      controls: "dashboardsExamples",
      isActive: "active",
    };
  },
  components: {
    // SidenavItem,
    // SidenavCard
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },
  },
};
</script>

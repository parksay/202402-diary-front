<!--
=========================================================
* Vue Argon Dashboard 2 - v3.0.0
=========================================================

* Product Page: https://creative-tim.com/product/vue-argon-dashboard
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
-->
<template>
  <div
    v-show="this.$store.state.layout === 'landing'"
    class="landing-bg h-100 bg-gradient-primary position-fixed w-100"
  ></div>
  <sidenav
    :custom_class="this.$store.state.mcolor"
    :class="[
      this.$store.state.isTransparent,
      this.$store.state.isRTL ? 'fixed-end' : 'fixed-start',
    ]"
    v-if="this.$store.state.showSidenav"
  />
  <main
    class="main-content position-relative max-height-vh-100 h-100 border-radius-lg"
  >
    <!-- nav -->
    <navbar
      :class="[navClasses]"
      :textWhite="
        this.$store.state.isAbsolute ? 'text-white opacity-8' : 'text-white'
      "
      :minNav="navbarMinimize"
      v-if="this.$store.state.showNavbar"
    />
    <router-view :key="$route.fullPath"></router-view>
    <configurator
      :toggle="toggleConfigurator"
      :class="[
        this.$store.state.showConfig ? 'show' : '',
        this.$store.state.hideConfigButton ? 'd-none' : '',
      ]"
    />
  </main>
</template>
<script>
import Sidenav from "./examples/Sidenav";
import Configurator from "@/examples/Configurator.vue";
import Navbar from "@/examples/Navbars/Navbar.vue";
import { mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    Sidenav,
    Configurator,
    Navbar,
  },
  methods: {
    ...mapMutations(["toggleConfigurator", "navbarMinimize"]),
  },
  computed: {
    navClasses() {
      return {
        "position-sticky bg-white left-auto top-2 z-index-sticky":
          this.$store.state.isNavFixed && !this.$store.state.darkMode,
        "position-sticky bg-default left-auto top-2 z-index-sticky":
          this.$store.state.isNavFixed && this.$store.state.darkMode,
        "position-absolute px-4 mx-0 w-100 z-index-2": this.$store.state
          .isAbsolute,
        "px-0 mx-4": !this.$store.state.isAbsolute,
      };
    },
  },
  beforeMount() {
    this.$store.state.isTransparent = "bg-transparent";

    // >>>>>>>>>>>>>>>>>>>>> 로그인 권한 처리 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const vm = this;
    // 로그인해야 하는 경우 처리
    const requestLogin = function () {
      alert("로그인 후 이용해주세요");
      vm.$router.push({ name: "Signin" });
    };
    // 로그인하지 않아도 axios 요청 보낼 수 있는 url
    const allowUrlList = ["/api/auth/login"];
    // 요청 인터셉터 추가하기
    this.axios.interceptors.request.use(
      function (config) {
        // 요청이 전달되기 전에 작업 수행
        if (
          allowUrlList.includes(config.url) ||
          (!allowUrlList.includes(config.url) &&
            config.headers.Authorization != null &&
            config.headers.Authorization.startsWith("Bearer "))
        ) {
          // 허용 url 리스트에 있거나, 리스트에 없지만 header 에 토큰 정보가 있는 경우
          return config;
        }
        // 로그인해야 하는 경우
        requestLogin();
      },
      function (error) {
        // 요청 오류가 있는 작업 수행
        return Promise.reject(error);
      }
    );

    // 응답 인터셉터 추가하기
    this.axios.interceptors.response.use(
      function (response) {
        // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
        // 응답 데이터가 있는 작업 수행
        return response;
      },
      function (error) {
        // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
        // 응답 오류가 있는 작업 수행
        if (error.response.status == 403) {
          // 로그인해야 하는 경우
          requestLogin();
        }
        return Promise.reject(error);
      }
    );

    // 로그인 없이도 접근할 수 있는 router path 목록
    const allowPathList = ["/signin", "/signup"];
    // router 에 네비게이션 비포 가드 설정
    this.$router.beforeEach((to, from, next) => {
      const loginInfo = vm.$globalFunctions.getLoginInfo();
      if (
        allowPathList.includes(to.path) ||
        (loginInfo != null &&
          loginInfo.accessToken != null &&
          loginInfo.accessToken.split(".").length == 3)
      ) {
        next();
      } else {
        alert("로그인 후 이용해주세요");
        next({ name: "Signin" });
      }
    });

    // router 네비게이션 비포 가드 샘플
    // this.$router.beforeEach((to, from, next) => {
    //   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
    //   else next()
    // });
  },
};
</script>

<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar isBtn="bg-gradient-light" />
      </div>
    </div>
  </div>
  <main class="main-content mt-0">
    <div
      class="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"
      style="
        background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-cover.jpg');
        background-position: top;
      "
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
    </div>
    <div class="container">
      <div class="row mt-lg-n12 mt-md-n11 mt-n10 justify-content-center">
        <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
          <div class="card z-index-0">
            <div class="card-header text-center pt-4">
              <h5>회원가입</h5>
            </div>
            <div class="card-body" style="padding: 0.5rem !important">
              <form role="form">
                <argon-input type="text" placeholder="Name" aria-label="Name" />
                <argon-input
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                />
                <argon-input
                  type="password"
                  placeholder="Password"
                  aria-label="Password"
                />

                <div class="text-center">
                  <argon-button
                    fullWidth
                    color="dark"
                    variant="gradient"
                    class="my-2 mb-2"
                    >회원가입</argon-button
                  >
                </div>
                <p class="text-sm mt-3 mb-0" style="text-align: center">
                  Already have an account?
                  <br />
                  <router-link
                    class="text-success text-gradient font-weight-bold"
                    to="/signIn"
                  >
                    로그인
                  </router-link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <app-footer />
</template>

<script>
import Navbar from "@/examples/PageLayout/Navbar.vue";
import AppFooter from "@/examples/PageLayout/Footer.vue";
import ArgonInput from "@/components/ArgonInput.vue";
// import ArgonCheckbox from "@/components/ArgonCheckbox.vue";
import ArgonButton from "@/components/ArgonButton.vue";
const body = document.getElementsByTagName("body")[0];

export default {
  name: "signin",
  components: {
    Navbar,
    AppFooter,
    ArgonInput,
    // ArgonCheckbox,
    ArgonButton,
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
};
</script>

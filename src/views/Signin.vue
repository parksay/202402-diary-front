<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar
          isBlur="blur  border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow"
          v-bind:darkMode="true"
          isBtn="bg-gradient-success"
        />
      </div>
    </div>
  </div>
  <main class="mt-0 main-content">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div
              class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0"
            >
              <div class="card card-plain">
                <div class="pb-0 card-header text-start">
                  <h4 class="font-weight-bolder">로그인</h4>
                  <p class="mb-0">Enter your email and password to sign in</p>
                </div>
                <div class="card-body">
                  <div>
                    <div class="mb-3">
                      <argon-input
                        type="text"
                        placeholder="ID"
                        name="loginID"
                        size="lg"
                        v-on:input="inputHandler"
                        v-model:value="param.loginID"
                        @keyup.enter="onclickLogin"
                      />
                    </div>
                    <div class="mb-3">
                      <argon-input
                        type="password"
                        placeholder="PASSWORD"
                        name="password"
                        size="lg"
                        v-on:input="inputHandler"
                        v-model:value="param.password"
                        @keyup.enter="onclickLogin"
                      />
                    </div>
                    <argon-switch id="rememberMe">Remember me</argon-switch>

                    <div class="text-center">
                      <argon-button
                        class="mt-4"
                        variant="gradient"
                        color="success"
                        fullWidth
                        size="lg"
                        v-on:click="onclickLogin"
                        >Sign in</argon-button
                      >
                    </div>
                  </div>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-4 text-sm">
                    Don't have an account?
                    <router-link class="nav-link me-2" to="/sign">
                      <a
                        class="text-success text-gradient font-weight-bold"
                      ></a>
                      회원가입
                    </router-link>
                  </p>
                </div>
              </div>
            </div>
            <div
              class="top-0 my-auto text-center col-6 d-lg-flex d-none h-100 pe-0 position-absolute end-0 justify-content-center flex-column"
            >
              <div
                class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                style="
                  background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg');
                  background-size: cover;
                "
              >
                <span class="mask bg-gradient-success opacity-6"></span>
                <h4
                  class="mt-5 text-white font-weight-bolder position-relative"
                >
                  "Attention is the new currency"
                </h4>
                <p class="text-white position-relative">
                  The more effortless the writing looks, the more effort the
                  writer actually put into the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Navbar from "@/examples/PageLayout/Navbar.vue";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonSwitch from "@/components/ArgonSwitch.vue";
import ArgonButton from "@/components/ArgonButton.vue";

const body = document.getElementsByTagName("body")[0];

export default {
  name: "signin",
  components: {
    Navbar,
    ArgonInput,
    ArgonSwitch,
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
  mounted: function () {
    this.axios.defaults.headers.common["Authorization"] = null;
    // this.$store.state.loginInfo = null; // 이렇게 하면 store 에서 state mutation 을 catch 하지 못함 // this.$store.commit("changeLoginInfo", null); // 해놓고 store 선언할 때 mutations 에다가 loadLoginInfo 함수 선언해줘야 함

    this.$store.commit("changeLoginInfo", null);

    // localStorage.setItem("accessToken", null); // 이렇게 하는 거보다 전체 삭제 //  localStorage.clear();  // 나중에 뭐 필요한 거 남겨둬야 하면 골라서 해야겠지만 지금은 전체 삭제 하는 게 깔끔.
    localStorage.clear();
  },
  data: function () {
    return {
      param: {
        loginID: "",
        password: "",
      },
    };
  },
  methods: {
    onclickLogin: function () {
      let vm = this;
      this.axios(
        {
          url: "/api/auth/login",
          data: vm.param,
          method: "post",
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((response) => {
          if (!response.data.result) {
            alert("아이디와 비밀번호를 확인해 주세요");
            return;
          }
          this.axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${response.data.accessToken}`;

          localStorage.setItem("loginInfo", JSON.stringify(response.data));

          this.$store.commit("changeLoginInfo", response.data);
          // this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    inputHandler: function (e) {
      let vm = this;
      const targetName = e.target.name;
      vm.param[targetName] = e.target.value;
    },
    testHandler: function () {
      //  <button v-on:click="testHandler">test button</button>
      const loginInfo = this.getLoginInfo();
      console.log(loginInfo);
      const loginID = loginInfo.loginID;
      console.log(loginID);
      const memberSeq = loginInfo.memberSeq;
      console.log(memberSeq);
    },
  },
};
</script>

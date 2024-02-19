<template>
  <div class="py-4 container-fluid" style="margin-left: 5rem !important">
    <div class="row">
      <div class="col-lg-12">
        <div class="row" style="height: 50%">
          <div class="col-lg-3 col-md-3 col-5">
            <Calendar></Calendar>
          </div>
          <!-- <div class="col-lg-3 col-md-6 col-10">
            <div class="d-flex">
              <div class="me-auto">
                <h1 class="mb-0 display-1 font-weight-bold mt-n4">12°C</h1>
                <h6 class="mb-0 text-uppercase ms-1">Cloudy</h6>
              </div>
              <div class="ms-auto">
                <img
                  class="w-50 float-end mt-lg-n4"
                  src="@/assets/img/small-logos/icon-sun-cloud.png"
                  alt="image sun"
                />
              </div>
            </div>
          </div> -->
        </div>
        <div class="row">
          <div class="col-lg-7 mb-lg">
            <div class="card z-index-1">
              <Content />
            </div>
          </div>
          <!-- 최근작성한 글  -->
          <div class="col-lg-4 mb-lg">
            <TransactionCard></TransactionCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Content from "./Content.vue";
import Calendar from "@/examples/Calendar.vue";
// import CardToDo from "./components/CardToDo.vue";
import TransactionCard from "./components/TransactionCard.vue";
</script>
<script>
// import Carousel from "./components/Carousel.vue";
import axios from "axios";

export default {
  data() {
    return {
      testData: "",

      stats: {},
    };
  },
  components: {
    Content,
    Calendar,
    TransactionCard,
  },

  created() {
    axios.post("/api/test").then((res) => {
      console.log(res.data);
      this.testData = res.data;
    });
  },

  beforeMount() {
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
  },
  beforeUnmount() {
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
  },
  methods() {},
};
</script>

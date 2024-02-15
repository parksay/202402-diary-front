<template>
  <div class="py-4 container-fluid" style="margin-left: 5rem !important">
    <div class="row">
      <div class="col-lg-12">
        <div class="row" style="height: 50%">
          <div class="col-lg-3 col-md-6 col-12">
            <h1>추가기능 예정</h1>
          </div>
          <paginate
            v-model="page"
            :page-count="20"
            :page-range="3"
            :margin-pages="2"
            :click-handler="clickCallback"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'pagination'"
            :page-class="'page-item'"
          >
          </paginate>
        </div>
        <div class="row">
          <div class="col-lg-7 mb-lg">
            <!-- line chart -->
            <div class="card z-index-2">
              <Content />
            </div>
          </div>
          <!-- <div class="col-lg-5">
            <carousel />
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Content from "./Content.vue";
</script>
<script>
// import Carousel from "./components/Carousel.vue";

import US from "@/assets/img/icons/flags/US.png";
import DE from "@/assets/img/icons/flags/DE.png";
import GB from "@/assets/img/icons/flags/GB.png";
import BR from "@/assets/img/icons/flags/BR.png";

export default {
  data() {
    return {
      stats: {
        money: {
          title: "Today's Money",
          value: "$53,000",
          percentage: "+55%",
          iconClass: "ni ni-money-coins",
          detail: "since yesterday",
          iconBackground: "bg-gradient-primary",
        },
        users: {
          title: "Today's Users",
          value: "2,300",
          percentage: "+3%",
          iconClass: "ni ni-world",
          iconBackground: "bg-gradient-danger",
          detail: "since last week",
        },
        clients: {
          title: "New Clients",
          value: "+3,462",
          percentage: "-2%",
          iconClass: "ni ni-paper-diploma",
          percentageColor: "text-danger",
          iconBackground: "bg-gradient-success",
          detail: "since last quarter",
        },
        sales: {
          title: "Sales",
          value: "$103,430",
          percentage: "+5%",
          iconClass: "ni ni-cart",
          iconBackground: "bg-gradient-warning",
          detail: "than last month",
        },
      },
      sales: {
        us: {
          country: "United States",
          sales: 2500,
          value: "$230,900",
          bounce: "29.9%",
          flag: US,
        },
        germany: {
          country: "Germany",
          sales: "3.900",
          value: "$440,000",
          bounce: "40.22%",
          flag: DE,
        },
        britain: {
          country: "Great Britain",
          sales: "1.400",
          value: "$190,700",
          bounce: "23.44%",
          flag: GB,
        },
        brasil: {
          country: "Brasil",
          sales: "562",
          value: "$143,960",
          bounce: "32.14%",
          flag: BR,
        },
      },
    };
  },
  components: {
    Content,
    // Carousel,
  },

  beforeMount() {
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
  },
  beforeUnmount() {
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
  },
};
</script>

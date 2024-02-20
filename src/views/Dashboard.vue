<template>
  <div class="py-4 container-fluid" style="margin-left: 5rem !important">
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-5"></div>
        </div>
        <div class="row">
          <!-- 달력 -->
          <div class="col-lg-7 mb-lg">
            <Calendar></Calendar>
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
import Calendar from "@/examples/Calendar.vue";
import TransactionCard from "./components/TransactionCard.vue";
</script>
<script>
export default {
  data() {
    return {
      testData: "",
    };
  },
  components: {
    Calendar,
    TransactionCard,
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

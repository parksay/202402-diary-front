<template>
  <div class="card h-100 mb-4">
    <div class="card-header pb-0 px-3">
      <div class="row">
        <div class="col-md-6">
          <h6 class="mb-0">최근 작성한글</h6>
        </div>
      </div>
    </div>
    <div class="card-body pt-4 p-3">
      <ul class="list-group">
        <li
          v-for="list in items"
          :key="list.contents_seq"
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex align-items-center">
            <argon-button
              color="dark"
              variant="outline"
              size="sm"
              class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-exclamation" aria-hidden="true"></i>
            </argon-button>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-dark text-">{{ list.title }}</h6>
              <span class="text-xs">{{ list.create_date }}</span>
            </div>
          </div>
          <div
            class="d-flex align-items-center text-dark text-sm font-weight-bold"
          ></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ArgonButton from "@/components/ArgonButton.vue";

export default {
  name: "transaction-card",

  data() {
    return {
      items: [],
    };
  },

  components: {
    ArgonButton,
  },
  created() {
    let params = {
      member_seq: this.$globalFunctions.getLoginInfo().memberSeq,
    };

    this.axios.post("/api/main/contentsList", params).then((res) => {
      this.items = res.data;
    });
  },
};
</script>

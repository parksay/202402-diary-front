<template>
  <div class="py-4 container-fluid" style="margin-left: 5rem !important">
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-7 mb-lg">
            <div class="card z-index-1">
              <div class="card">
                <div class="p-3 card-body" style="width: 60%; height: 600px">
                  <template v-for="item in items" :key="item.contents_seq">
                    <h6>{{ item.title }}</h6>
                    <h6>{{ item.contents_seq }}</h6>
                  </template>
                </div>
                <div class="ms-auto text-end" style="margin: 5px">
                  <a
                    class="btn btn-link text-dark px-3 mb-0"
                    href="javascript:;"
                  >
                    <i
                      class="fas fa-pencil-alt text-dark me-2"
                      aria-hidden="true"
                    ></i
                    >수정
                  </a>
                  <a
                    class="btn btn-link text-danger text-gradient px-3 mb-0"
                    href="javascript:;"
                  >
                    <i class="far fa-trash-alt me-2" aria-hidden="true"></i>삭제
                  </a>
                </div>
              </div>
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

<script>
import axios from "axios";
import TransactionCard from "./components/TransactionCard.vue";

export default {
  data: function () {
    return {
      items: [],
      title: "글제목을 입력",
      sch_title: "확인용데이터",
      contents: "",
    };
  },
  components: {
    TransactionCard,
  },
  mounted() {
    // this.search();
  },
  methods: {
    search: function () {
      //alert('search');

      let vm = this;

      let params = new URLSearchParams();
      params.append("title", this.sch_title);

      axios
        .post("/api/contentsList", params)
        .then(function (response) {
          console.log(response.data.contents);
          vm.items = response.data.contents;
        })
        .catch(function (error) {
          alert("에러! API 요청에 오류가 있습니다. " + error);
        });

      // axios
      //   .post('/api/system/contentsListvue.do', params)
      //   .then(function (response) {
      //     console.log(response.data.contents);
      //     vm.items = response.data.contents;
      //   })
      //   .catch(function (error) {
      //     alert('에러! API 요청에 오류가 있습니다. ' + error);
      //   });
    },
  },
};
</script>

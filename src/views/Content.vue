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

                  <h6>{{ folderSeq }}</h6>
                  <h6>{{ contentsSeq }}</h6>
                </div>
                <div class="ms-auto text-end" style="margin: 5px">
                  <a
                    class="btn btn-link text-dark px-3 mb-0"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#ContentUpdate"
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
          <!-- <div class="col-lg-4 mb-lg">
            <TransactionCard></TransactionCard>
          </div> -->
        </div>
      </div>
    </div>
  </div>
  <!-- 신규 글 작성 Modal -->
  <div class="col-md-4">
    <div
      class="modal fade"
      id="ContentUpdate"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalSignTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-md" role="document">
        <div class="modal-content">
          <div class="modal-body p-0">
            <div class="card card-plain">
              <div class="card-header pb-0 text-left">
                <h3 class="font-weight-bolder text-primary text-gradient">
                  글 수정
                </h3>
              </div>
              <div class="card-body pb-3">
                <form role="form text-left">
                  <label>글 제목</label>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="글 제목"
                      aria-label="글 제목"
                      aria-describedby="name-addon"
                      v-model="title"
                    />
                  </div>
                  <label>글 내용</label>
                  <div class="input-group mb-3">
                    <textarea
                      class="form-control"
                      placeholder="글 내용"
                      aria-label="With textarea"
                      v-model="contents"
                      style="height: 300px; resize: none"
                    ></textarea>
                  </div>
                  <div class="text-center">
                    <button
                      data-bs-dismiss="modal"
                      type="button"
                      class="btn bg-gradient-primary btn-lg btn-rounded w-100 mt-4 mb-0"
                      @click="ContentUpdate()"
                    >
                      글 수정
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import TransactionCard from "./components/TransactionCard.vue";

export default {
  data() {
    return {
      items: [],
      title: "글제목을 입력",
      sch_title: "확인용데이터",
      folderSeq: "",
      contentsSeq: "",
    };
  },
  components: {
    // TransactionCard,
  },
  created() {
    // this.search();

    // 글 조회에 필요한 데이터
    console.log("folderSeq ---> ", this.$route.query.folderSeq);
    console.log("contentsSeq ---> ", this.$route.query.contentsSeq);
    this.folderSeq = this.$route.query.folderSeq;
    this.contentsSeq = this.$route.query.contentsSeq;
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

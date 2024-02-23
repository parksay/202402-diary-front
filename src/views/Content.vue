<template>
  <div class="py-4 container-fluid" style="margin-left: 5rem !important">
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-7 mb-lg">
            <div class="card z-index-1">
              <div class="card">
                <div
                  class="p-3 card-body"
                  style="width: 60%; height: 600px; white-space: pre"
                >
                  <h6 style="font-size: 25px">{{ item.title }}</h6>
                  <h6 style="font-size: 14px">{{ item.contents }}</h6>
                </div>
                <div class="ms-auto text-end" style="margin: 5px">
                  <a
                    class="btn btn-link text-dark px-3 mb-0"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#ContentUpdate"
                    @click="search()"
                  >
                    <i
                      class="fas fa-pencil-alt text-dark me-2"
                      aria-hidden="true"
                    ></i
                    >수정
                  </a>
                  <a
                    class="btn btn-link text-danger text-gradient px-3 mb-0"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#contentsDelete"
                  >
                    <i class="far fa-trash-alt me-2" aria-hidden="true"></i>삭제
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!--href="javascript:;" -->
          <!-- 최근작성한 글  -->

          <!-- <div class="col-lg-4 mb-lg">
            <TransactionCard></TransactionCard>
          </div> -->
        </div>
      </div>
    </div>
  </div>
  <!-- 글 수정 Modal -->
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
                      placeholder="modal_title"
                      aria-label="글 제목"
                      aria-describedby="name-addon"
                      v-model="modal_title"
                    />
                  </div>
                  <label>글 내용</label>
                  <div class="input-group mb-3">
                    <textarea
                      class="form-control"
                      aria-label="With textarea"
                      v-model="modal_contents"
                      style="height: 300px; resize: none"
                    ></textarea>
                  </div>
                  <div class="text-center">
                    <button
                      data-bs-dismiss="modal"
                      type="button"
                      class="btn bg-gradient-primary btn-lg btn-rounded w-100 mt-4 mb-0"
                      @click="contentUpdate()"
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

  <div class="col-md-4">
    <!-- 글 삭제 Modal -->
    <div
      class="modal fade"
      id="contentsDelete"
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
                  삭제 하시겠습니까?
                </h3>
              </div>
              <div class="card-body pb-3">
                <form role="form text-left">
                  <div class="modal-footer">
                    <button
                      data-bs-dismiss="modal"
                      type="button"
                      class="btn bg-gradient-primary btn-lg btn-rounded w-100 mt-4 mb-0"
                      @click="contentsDelete()"
                    >
                      삭제
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
//import EventBus from "../EeventBus"; // 생성한 EventBus
//import { EventBus } from "../../EventBus";

export default {
  data() {
    return {
      item: {},
      modal_title: "",
      modal_contents: "",
      folderSeq: "",
      contentsSeq: "",
      memberSeq: "",
      action: "",
    };
  },
  components: {
    // TransactionCard,
  },
  created() {
    this.search();
  },
  methods: {
    search: function () {
      let vm = this;
      let contentsSeq = this.$route.query.contentsSeq;

      let params = {
        contents_seq: contentsSeq,
        folder_seq: this.$route.query.folderSeq,
        member_seq: this.$route.query.memberSeq,
      };

      this.axios
        .post("/api/contentsDetail", params)
        .then(function (response) {
          vm.modal_contents = response.data.contents;
          vm.modal_title = response.data.title;
          vm.item = response.data;
        })
        .catch(function (error) {
          console.log(error);
          if (error.response.status < 500) {
            return;
          }
          alert("에러! API 요청에 오류가 있습니다. " + error);
        });
    },
    //글 수정
    contentUpdate: function () {
      let params = {
        contents_seq: this.$route.query.contentsSeq,
        folder_seq: this.$route.query.folderSeq,
        member_seq: this.$route.query.memberSeq,
        title: this.modal_title,
        contents: this.modal_contents,
        action: "U",
      };

      console.log("params==>" + params);
      let vm = this;

      this.axios
        .post("/api/contentsSave", params)
        .then(() => {
          console.log("글이 성공적으로 수정되었습니다.");
          alert("글이 성공적으로 수정되었습니다.");
          vm.search();
        })
        .catch(function (error) {
          if (error.response.status < 500) {
            return;
          }
          console.error("글 수정 중 오류가 발생했습니다.", error);
        });
    },
    // 글 삭제
    contentsDelete: function () {
      // alert("글 삭제 ~~~~ ");
      let vm = this;
      let contentsSeq = this.$route.query.contentsSeq;

      let params = {
        contents_seq: contentsSeq,
      };
      this.axios
        .post("/api/contentsDelete", params)
        .then(function (response) {
          console.log("글이 성공적으로 삭제되었습니다.");
          alert("글이 성공적으로 삭제되었습니다.");
          vm.contentsSeq = response.data.contents_seq;
          vm.item = response.data;
        })
        .catch(function (error) {
          console.log(error);
          if (error.response.status < 500) {
            return;
          }
          alert("에러! API 요청에 오류가 있습니다. " + error);
        });
    },
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

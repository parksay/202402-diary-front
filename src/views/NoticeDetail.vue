<template>
  <div
    class="py-4 container-fluid"
    style="margin-left: 5rem !important; margin-top: 5%"
  >
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-7 mb-lg">
            <div class="card z-index-2">
              <div class="card">
                <div class="pb-0 card-header">
                  <h6>{{ this.oneNotice.title }}</h6>
                </div>
                <div class="p-3 card-body" style="width: 100%; height: 400px">
                  <div>{{ this.oneNotice.contents }}</div>
                </div>
                <!-- 수정 삭제 a 태그 href 유지후 @click 이벤트 걸것 -->
                <!-- 관리자이외 일반 유저 진입시 v-if로 수정 삭제 버튼 막을것 -->
                <!-- 공지사항 목록 -> 상세 진입시 페이징번호 들고와서 반환 처리 필요 -->
                <div class="ms-auto text-end" style="margin: 5px">
                  <router-link :to="{ name: 'Tables' }">
                    <a class="btn btn-link text-dark px-3 mb-0">
                      <i
                        class="fas fas fa-home text-dark me-2"
                        aria-hidden="true"
                      ></i
                      >목록
                    </a>
                  </router-link>
                  <a
                    v-if="this.$store.state.loginInfo.loginID === 'admin'"
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
                    v-if="this.$store.state.loginInfo.loginID === 'admin'"
                    class="btn btn-link text-danger text-gradient px-3 mb-0"
                    type="button"
                    @click="deletNotice()"
                  >
                    <i class="far fa-trash-alt me-2" aria-hidden="true"></i>삭제
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
                  공지사항 수정
                </h3>
              </div>
              <div class="card-body pb-3">
                <form role="form text-left">
                  <label>글 제목</label>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      aria-label="title"
                      aria-describedby="name-addon"
                      v-model="title"
                    />
                  </div>
                  <label>글 내용</label>
                  <div class="input-group mb-3">
                    <textarea
                      class="form-control"
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
                      @click="noticeUpdate()"
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
export default {
  data() {
    return {
      oneNotice: [],
      title: "",
      contents: "",
      notice_seq: "",
    };
  },
  components: {},
  created() {
    let param = { notice_seq: this.$route.query.notice_seq };
    this.axios
      .post("/api/oneNotice", param)
      .then((res) => {
        // console.log(res, "12121212121212");
        // console.log(res.data, "26545454654654");
        this.oneNotice = res.data;
        this.title = res.data.title;
        this.contents = res.data.contents;
        this.notice_seq = res.data.notice_seq;
      })
      .catch(function (error) {
        alert("에러! API 요청에 오류가 있습니다. " + error);
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
  methods: {
    noticeUpdate() {
      let param = {
        title: this.title,
        contents: this.contents,
        notice_seq: this.notice_seq,
      };
      this.axios
        .post("/api/noticeUpdate", param)
        .then((res) => {
          //console.log("확인이이이이@@@", res.data);
          if (res.data == 1) {
            alert("수정되었습니다");
            location.reload();
          }
        })
        .catch(function (error) {
          alert("에러! API 요청에 오류가 있습니다. " + error);
        });
    },
    deletNotice() {
      let param = {
        notice_seq: this.notice_seq,
      };
      var result = confirm("삭제하시겠습니까?");
      if (result) {
        this.axios
          .post("/api/noticeDelete", param)
          .then((res) => {
            //console.log("확인이이이이@@@", res.data);
            if (res.data == 1) {
              alert("삭제되었습니다.");
              this.$router.push("tables");
            }
          })
          .catch(function (error) {
            alert("에러! API 요청에 오류가 있습니다. " + error);
          });
      } else {
        alert("취소하셨습니다.");
      }
    },
  },
};
</script>

<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>공지사항</h6>
      <span
        v-if="this.loginStatus != null"
        style="display: flex; justify-content: flex-end"
      >
        <a
          class="btn btn-success"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#ContentUpdate"
        >
          <i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i
          >등록
        </a>
      </span>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center justify-content-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-3"
              >
                번호
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                제목
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                작성자
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2"
              >
                등록일
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in this.NotList" v-bind:key="item">
              <td>
                <div class="d-flex px-3">
                  <div class="my-auto">
                    <h6 class="mb-0 text-sm">{{ item.rowNum }}</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0">
                  <router-link
                    :to="{
                      name: 'NoticeDetail',
                      query: { notice_seq: item.notice_seq },
                    }"
                    >{{ item.title }}
                  </router-link>
                </p>
              </td>
              <td>
                <span class="text-xs font-weight-bold">{{ item.loginID }}</span>
              </td>
              <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="me-2 text-xs font-weight-bold">{{
                    item.create_date
                  }}</span>
                  <div></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div
          style="display: flex; justify-content: space-around; margin-top: 5%"
        ></div>
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
                  공지사항 작성
                </h3>
              </div>
              <div class="card-body pb-3">
                <form role="form text-left">
                  <label>글 제목</label>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="공지사항 제목을 작성 하세요."
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
                      placeholder="공지사항 내용을 작성 하세요."
                      v-model="contents"
                      style="height: 300px; resize: none"
                    ></textarea>
                  </div>
                  <div class="text-center">
                    <button
                      data-bs-dismiss="modal"
                      type="button"
                      class="btn bg-gradient-primary btn-lg btn-rounded w-100 mt-4 mb-0"
                      @click="noticeWrite()"
                    >
                      글 작성
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
  name: "projects-table",

  data() {
    return {
      items: [],
      groupDetail: [],
      groupDetail2: [],
      NotList: [],
      currentPage: 1,
      currentPage2: 1,
      pageSize: 5,
      pageSize2: 5,
      totalPage: 2,
      totalCnt: 0,
      totalCnt2: 0,
      searchKey: "",
      sname: "",
      action: "",
      groupCode: "",
      countShow: true,
      grdNo: 1,
      title: "",
      contents: "",
      notice_seq: "",
      count: "",
      minSeq: "",
      loginID: "",
      loginStatus: null,
    };
  },
  created() {
    if (this.$globalFunctions.getLoginInfo() != null) {
      if (this.$globalFunctions.getLoginInfo().loginID == "admin") {
        this.loginStatus = this.$globalFunctions.getLoginInfo();
      }
    }
    this.axios
      .post("/api/noticePage")
      .then((res) => {
        this.NotList = res.data;
      })
      .catch(function (error) {
        alert("에러! API 요청에 오류가 있습니다. " + error);
      });
    this.axios
      .post("/api/maxSEQ")
      .then((res) => {
        this.notice_seq = res.data + 1;
      })
      .catch(function (error) {
        alert("에러! API 요청에 오류가 있습니다. " + error);
      });

    this.axios
      .post("/api/minSEQ")
      .then((res) => {
        this.minSeq = res.data;
      })
      .catch(function (error) {
        alert("에러! API 요청에 오류가 있습니다123. " + error);
      });

    this.axios
      .post("/api/count")
      .then((res) => {
        this.count = res.data;
      })
      .catch(function (error) {
        alert("에러! API 요청에 오류가 있습니다. " + error);
      });
  },
  methods: {
    clickCallback() {},
    noticeWrite() {
      if (this.count > 9) {
        let param = {
          notice_seq: this.minSeq,
          title: this.title,
          contents: this.contents,
          member_seq: this.$globalFunctions.getLoginInfo().member_seq,
          user_status: 1,
        };
        console.log(param, "if");
        this.axios
          .post("/api/noticeDelete", param)
          .then((res) => {
            if (res.data == 1) {
              alert("작성되었습니다");
              location.reload();
            }
          })
          .catch(function (error) {
            alert("에러! API 요청에 오류가 있습니다. " + error);
          });
      }
      let param = {
        notice_seq: this.notice_seq,
        title: this.title,
        contents: this.contents,
        member_seq: 1,
        user_status: 1,
      };
      console.log(param, "else");
      this.axios
        .post("/api/noticeWrite", param)
        .then((res) => {
          if (res.data == 1) {
            alert("작성되었습니다");
            location.reload();
          }
        })
        .catch(function (error) {
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

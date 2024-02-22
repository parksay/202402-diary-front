<template>
  <div
    class="collapse navbar-collapse w-auto h-auto h-100"
    id="sidenav-collapse-main"
  >
    <ul class="navbar-nav">
      <li class="nav-item mt-3">
        <h6
          class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6"
        >
          개인페이지
        </h6>
      </li>
      <!-- 대분류 메뉴 -->
      <template
        v-for="(list, index) in folderInfo.folderList"
        :key="list.folder_seq"
      >
        <li class="nav-item">
          <!-- href로 소분류 찾아서 컨트롤 함 onclick 이벤트 필요 없습니다.-->
          <a
            data-bs-toggle="collapse"
            v-bind:href="'#' + 'contents' + index"
            class="nav-link active"
            aria-controls="dashboardsExamples"
            role="button"
            v-bind:id="'folder' + index"
          >
            <div
              class="icon icon-shape icon-sm text-center d-flex align-items-center justify-content-center"
            >
              <i class="ni ni-shop text-primary text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">{{ list.folder_name }}</span>
          </a>
          <!-- 소분류 메뉴 -->
          <div class="collapse" v-bind:id="'contents' + index" style="">
            <ul class="nav ms-4">
              <template v-for="i in list.nodeList" :key="i.folder_seq">
                <li class="nav-item active">
                  <router-link
                    :to="{
                      name: 'Content',
                      query: {
                        folderSeq: i.folder_seq,
                        contentsSeq: i.contents_seq,
                      },
                    }"
                  >
                    <a class="nav-link active">
                      <span class="sidenav-mini-icon"> </span>
                      <span class="sidenav-normal"> {{ i.title }} </span>
                    </a>
                  </router-link>
                </li>
              </template>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#ContentCreate"
                >
                  <span class="sidenav-mini-icon"> C </span>
                  <span class="sidenav-normal"> + 신규글쓰기 </span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#folderModify"
                  @click="folderSeq(list.folder_seq, list.folder_name)"
                >
                  <span class="sidenav-mini-icon"> C </span>
                  <span class="sidenav-normal">
                    <i class="ni ni-settings-gear-65"></i>
                    폴더관리
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </template>
      <li class="nav-item">
        <a
          class="nav-link active"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#folderCreate"
        >
          <div
            class="icon icon-shape icon-sm text-center d-flex align-items-center justify-content-center"
          ></div>
          <span class="nav-link-text ms-1"> + 신규폴더생성</span>
        </a>
      </li>

      <li class="nav-item">
        <hr class="horizontal dark" />
        <h6
          class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6"
        >
          공지사항
        </h6>
      </li>
      <li class="nav-item">
        <!-- 공지사항 링크 추가 필요 -->
        <router-link
          :to="{ name: 'Tables' }"
          class="px-0 nav-link font-weight-bold text-white"
          target="blank"
        >
          <a class="nav-link" role="button">
            <div
              class="icon icon-shape icon-sm text-center d-flex align-items-center justify-content-center"
            >
              <i class="ni ni-spaceship text-dark text-sm"></i>
            </div>
            <span class="nav-link-text ms-1">공지사항</span>
          </a>
        </router-link>
      </li>
    </ul>
  </div>

  <div class="col-md-4">
    <!-- Modal -->
    <div
      class="modal fade"
      id="folderCreate"
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
                  신규폴더 생성
                </h3>
              </div>
              <div class="card-body pb-3">
                <form role="form text-left">
                  <label>폴더명</label>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Name"
                      aria-label="Name"
                      aria-describedby="name-addon"
                      v-model="folder_Name"
                    />
                  </div>
                  <div class="text-center">
                    <button
                      data-bs-dismiss="modal"
                      type="button"
                      class="btn bg-gradient-primary btn-lg btn-rounded w-100 mt-4 mb-0"
                      @click="folderCreate()"
                    >
                      폴더 생성
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
    <!-- Modal -->
    <div
      class="modal fade"
      id="folderModify"
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
                  폴더 관리
                </h3>
              </div>
              <div class="card-body pb-3">
                <form role="form text-left">
                  <label>폴더명</label>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Name"
                      aria-label="Name"
                      aria-describedby="name-addon"
                      v-model="pmodfolderName"
                    />
                  </div>
                  <div class="modal-footer">
                    <button
                      data-bs-dismiss="modal"
                      type="button"
                      class="btn bg-gradient-primary btn-lg btn-rounded w-100 mt-4 mb-0"
                      @click="folderModify('U')"
                    >
                      수정
                    </button>
                    <button
                      data-bs-dismiss="modal"
                      type="button"
                      class="btn bg-gradient-primary btn-lg btn-rounded w-100 mt-4 mb-0"
                      @click="folderModify('D')"
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

  <!-- 신규 글 작성 Modal -->
  <div class="col-md-4">
    <div
      class="modal fade"
      id="ContentCreate"
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
                  신규글 생성
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
                      @click="ContentCreate()"
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
  name: "SidenavList",
  props: {
    cardBg: String,
  },
  data() {
    return {
      folderInfo: {
        folderList: [],
        loginId: "",
      },
      pfolderSeq: "",
      pfolderName: "",
      pmodfolderName: "",
      isActive: "active",

      // 글 관련 데이터
      title: "",
      contents: "",
    };
  },
  components: {},
  mounted() {
    let loginInfo = this.$store.state.loginInfo;
    console.log("loginInfo : " + JSON.stringify(loginInfo));

    if (loginInfo.memberSeq != undefined) {
      console.log("memberSeq : " + loginInfo.memberSeq);
      this.member_seq = loginInfo.memberSeq;
      this.search();
    }
  },
  methods: {
    //폴더 조회
    search: function () {
      let vm = this;
      let params = new URLSearchParams();
      params.append("member_seq", this.member_seq);
      this.axios
        .post("/api/folderView", params)
        .then((response) => {
          // console.log(JSON.stringify(response));
          vm.folderInfo = response.data;
        })
        .catch(function (error) {
          alert("에러! API 요청에 오류가 있습니다. " + error);
        });
    },
    //폴더 생성
    folderCreate: function () {
      let params = new URLSearchParams();
      params.append("member_seq", this.member_seq);
      params.append("folder_name", this.folder_Name);

      if (this.folder_Name != null) {
        this.axios
          .post("/api/folderCreate", params)
          .then((response) => {
            console.log(JSON.stringify(response));
            this.folder_Name = "";
            location.reload();
            this.search();
          })
          .catch(function (error) {
            alert("에러! API 요청에 오류가 있습니다. " + error);
          });
      } else {
        alert("에러 폴더명을 입력해주세요.");
      }
    },
    folderSeq: function (folderSeq, folderName) {
      // console.table(folderSeq + " " + folderName);
      this.PfolderSeq = folderSeq;
      this.pmodfolderName = folderName;
    },
    //폴더 수정
    folderModify: function (stat) {
      let params = new URLSearchParams();
      params.append("folder_seq", this.PfolderSeq);
      params.append("folder_name", this.pmodfolderName);
      params.append("stat", stat);
      if (this.pmodfolderName != null) {
        this.axios
          .post("/api/folderModify", params)
          .then((response) => {
            console.log(JSON.stringify(response));
            this.pmodfolderName = "";
            location.reload();
            this.search();
          })
          .catch(function (error) {
            alert("에러! API 요청에 오류가 있습니다. " + error);
          });
      } else {
        alert("에러 폴더명을 입력해주세요.");
      }
    },
  },
};
</script>

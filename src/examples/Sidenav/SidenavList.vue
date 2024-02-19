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
                  <a
                    class="nav-link active"
                    href=""
                    @click="contentsMove($event, i.folder_seq, i.contents_seq)"
                  >
                    <span class="sidenav-mini-icon"> </span>
                    <span class="sidenav-normal"> {{ i.title }} </span>
                  </a>
                </li>
              </template>
              <li class="nav-item">
                <a class="nav-link" href="">
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
        <!-- 추후 herf 유지하고(마우스 버튼표시) @click 이벤트 걸어야함 -->
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
          신규 뭔가할꺼?
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
                      v-model="mod_folder_Name"
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
</template>
<script>
import axios from "axios";

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
      isActive: "active",
    };
  },
  components: {},
  mounted() {
    //let loginInfo = this.$store.state.loginInfo;
    //this.member_seq = loginInfo.loginId;
    this.member_seq = "1";
    this.search();
  },
  methods: {
    //폴더 조회
    search: function () {
      let vm = this;
      let params = new URLSearchParams();
      params.append("member_seq", this.member_seq);
      axios
        .post("/api/folderView", params)
        .then((response) => {
          console.log(JSON.stringify(response));
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
        axios
          .post("/api/folderCreate", params)
          .then((response) => {
            console.log(JSON.stringify(response));
            this.folder_Name = "";
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
      console.table(folderSeq + " " + folderName);
      this.PfolderSeq = folderSeq;
      this.mod_folder_Name = folderName;
    },
    //폴더 수정
    folderModify: function (stat) {
      let params = new URLSearchParams();
      params.append("folder_seq", this.PfolderSeq);
      params.append("folder_name", this.mod_folder_Name);
      params.append("stat", stat);
      if (this.folder_Name != null) {
        axios
          .post("/api/folderModify", params)
          .then((response) => {
            console.log(JSON.stringify(response));
            this.mod_folder_Name = "";
            this.search();
          })
          .catch(function (error) {
            alert("에러! API 요청에 오류가 있습니다. " + error);
          });
      } else {
        alert("에러 폴더명을 입력해주세요.");
      }
    },
    contentsMove: function (e, folderSeq, contentsSeq) {
      e.preventDefault();
      console.log(folderSeq, contentsSeq);
      console.log(
        "store : " +
          this.$store.state.folderSeq +
          " " +
          this.$store.state.contentsSeq
      );
      //prop 에 담고 api 호출
      this.$store.state.folderSeq = folderSeq;
      this.$store.state.contentsSeq = contentsSeq;
      console.log(
        "store : " +
          this.$store.state.folderSeq +
          " " +
          this.$store.state.contentsSeq
      );
    },
  },
};
</script>

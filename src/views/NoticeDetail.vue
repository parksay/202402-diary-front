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
                  <h6>{{ title }}</h6>
                </div>
                <div class="p-3 card-body" style="width: 100%; height: 400px">
                  <div>{{ detail1 }}</div>
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "공지사항 제목 테스트입니다.",
      detail1: "공지사항 내용입니다.",
    };
  },
  components: {},

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

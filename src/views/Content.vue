<template>
  <div class="card">
    <div class="pb-0 card-header">
      <h6>{{ title }}</h6>
    </div>
    <div class="p-3 card-body" style="width: 100%; height: 400px">
      <div>{{ detail1 }}</div>
    </div>
    <div class="ms-auto text-end" style="margin: 5px">
      <a class="btn btn-link text-dark px-3 mb-0" href="javascript:;">
        <i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>수정
      </a>
      <a
        class="btn btn-link text-danger text-gradient px-3 mb-0"
        href="javascript:;"
      >
        <i class="far fa-trash-alt me-2" aria-hidden="true"></i>삭제
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",

  data() {
    return {
      title: "글제목",
      detail1: "글내용입니다.",
    };
  },
  mounted() {},
};
</script>

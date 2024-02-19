<template>
  <div class="card">
    
    <div class="p-3 card-body" style="width: 100%; height: 400px">     
       
      <template
      v-for="item in items" :key="item.contents_seq">
      <h6>{{ item.title }}</h6>
      <h6>{{ item.contents_seq }}</h6>
      </template>

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
import axios from "axios";

export default {
  data: function (){
    return {
      items:[],
      title: '글제목을 입력',
      sch_title: "확인용데이터",
      contents: ''
    };
  },
  mounted() {
    this.search();
  },
  methods: {
    search: function () {
      //alert('search');

      let vm = this;

      let params = new URLSearchParams();
      params.append('title', this.sch_title);

      axios
        .post('/api/contentsList', params)
        .then(function (response) {
          console.log(response.data.contents);
          vm.items = response.data.contents;
        })
        .catch(function (error) {
          alert('에러! API 요청에 오류가 있습니다. ' + error);
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

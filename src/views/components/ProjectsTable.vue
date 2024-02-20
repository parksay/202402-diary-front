<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>공지사항</h6>
      <router-link
        :to="{
          name: 'NoticeWrite',
        }"
      >
        <span style="display: flex; justify-content: flex-end">
          <button type="button" class="btn btn-success">등록</button></span
        ></router-link
      >
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
                    <h6 class="mb-0 text-sm">{{ item.notice_seq }}</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0">
                  <router-link
                    :to="{
                      name: 'NoticeDetail',
                      query: { test: 'test' },
                    }"
                    >{{ item.title }}
                  </router-link>
                </p>
              </td>
              <td>
                <span class="text-xs font-weight-bold">{{
                  item.contents
                }}</span>
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
        >
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a
                  class="page-link"
                  href="#"
                  aria-label="Previous"
                  style="color: #8392ab !important"
                >
                  <i class="fa fa-angle-left"></i>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" style="color: #8392ab !important" href="#"
                  >1</a
                >
              </li>
              <li class="page-item">
                <a class="page-link" style="color: #8392ab !important" href="#"
                  >2</a
                >
              </li>
              <li class="page-item">
                <a class="page-link" style="color: #8392ab !important" href="#"
                  >3</a
                >
              </li>
              <li class="page-item">
                <a
                  class="page-link"
                  href="#"
                  aria-label="Next"
                  style="color: #8392ab !important"
                >
                  <i class="fa fa-angle-right"></i>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <paginate
          class="justify-content-center"
          v-model="currentPage"
          :page-count="totalPage"
          :page-range="5"
          :margin-pages="0"
          :click-handler="clickCallback"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
          :page-class="'page-item'"
        ></paginate>
      </div>
    </div>
  </div>
</template>
<script>
import Paginate from "vuejs-paginate-next";
import axios from "axios";
export default {
  name: "projects-table",

  components: { paginate: Paginate },
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
    };
  },
  created() {
    axios
      .post("/api/noticePage")
      .then((res) => {
        this.NotList = res.data;
      })
      .catch(function (error) {
        alert("에러! API 요청에 오류가 있습니다. " + error);
      });
  },
  methods: {
    clickCallback() {},
  },
};
</script>

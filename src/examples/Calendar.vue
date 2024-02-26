<template>
  <div class="card widget-calendar h-100">
    <!-- Card header -->
    <div class="p-3 pb-0 card-header">
      <h6 class="mb-0">{{ title }}</h6>
      <div class="d-flex">
        <div class="mb-0 text-sm p font-weight-bold widget-calendar-day">
          {{ Calendartoday }}
        </div>
        <span>,&nbsp;</span>
        <div class="mb-1 text-sm p font-weight-bold widget-calendar-year">
          {{ Calendaryear }}
        </div>
      </div>
    </div>
    <!-- Card body -->
    <div class="p-3 card-body">
      <div data-toggle="widget-calendar" id="widget-calendar"></div>
    </div>
  </div>
</template>

<script>
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
export default {
  name: "Calendar",

  data() {
    return {
      // 달력 초기값 설정
      Calendartoday: new Date().toLocaleDateString("en-us", {
        weekday: "long",
      }),
      Calendaryear: new Date().getFullYear(),

      // 오늘 날짜
      today: "",
    };
  },

  props: {
    title: {
      type: String,
      default: "Calendar",
    },
  },
  mounted() {
    // 오늘 날짜 호출
    this.getToday();

    // let params = {
    //   member_seq: "",
    // };

    // this.axios.post("/api/calendarList", params).then((res) => {
    //   console.log(res);
    // });

    // this.axios.post("/api/main/contentsList", params).then((res) => {
    //   console.log(res);
    // });

    var calendar = new Calendar(document.getElementById("widget-calendar"), {
      contentHeight: "auto",
      plugins: [dayGridPlugin],
      initialView: "dayGridMonth",
      headerToolbar: false,
      selectable: true,
      editable: true,
      initialDate: this.today,
      events: [
        {
          title: "Call with Dave",
          start: "2020-11-18",
          end: "2020-11-18",
          className: "bg-gradient-danger",
        },

        {
          title: "Lunch meeting",
          start: "2020-11-21",
          end: "2020-11-22",
          className: "bg-gradient-warning",
        },

        {
          title: "All day conference",
          start: "2020-11-29",
          end: "2020-11-29",
          className: "bg-gradient-success",
        },

        {
          title: "Meeting with Mary",
          start: "2020-12-01",
          end: "2020-12-01",
          className: "bg-gradient-info",
        },

        {
          title: "Winter Hackaton",
          start: "2020-12-03",
          end: "2020-12-03",
          className: "bg-gradient-danger",
        },

        {
          title: "Digital event",
          start: "2020-12-07",
          end: "2020-12-09",
          className: "bg-gradient-warning",
        },

        {
          title: "Marketing event",
          start: "2020-02-22",
          end: "2020-02-22",
          className: "bg-gradient-primary",
        },

        {
          title: "Dinner with Family",
          start: "2020-12-19",
          end: "2020-12-19",
          className: "bg-gradient-danger",
        },

        {
          title: "Black Friday",
          start: "2020-12-23",
          end: "2020-12-23",
          className: "bg-gradient-info",
        },

        {
          title: "Cyber Week",
          start: "2020-12-02",
          end: "2020-12-02",
          className: "bg-gradient-warning",
        },
      ],
    });

    calendar.render();
  },
  methods: {
    getToday() {
      // 오늘 날짜 포맷
      let today = new Date();

      let dateFormat =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1 < 9
          ? "0" + (today.getMonth() + 1)
          : today.getMonth() + 1) +
        "-" +
        (today.getDate() < 9 ? "0" + today.getDate() : today.getDate());

      // 오늘 날짜 설정
      this.today = dateFormat;
    },
  },
};
</script>

<template>
  <svg style="display: none">
    <symbol id="arrow" viewBox="0 0 24 24">
      <g>
        <path
          d="M19,11H7.14l3.63-4.36A1,1,0,1,0,9.23,5.36l-5,6a1.19,1.19,0,0,0-.09.15c0,.05,0,.08-.07.13A1,1,0,0,0,4,12H4a1,1,0,0,0,.07.36c0,.05,0,.08.07.13a1.19,1.19,0,0,0,.09.15l5,6A1,1,0,0,0,10,19a1,1,0,0,0,.64-.23,1,1,0,0,0,.13-1.41L7.14,13H19a1,1,0,0,0,0-2Z"
        />
      </g>
    </symbol>

    <symbol id="quotes" viewBox="0 0 100 78">
      <g>
        <path
          d="M92.8571 0H71.4286L57.1429 31.2V78H100V31.2H78.5714L92.8571 0ZM35.7143 0H14.2857L0 31.2V78H42.8571V31.2H21.4286L35.7143 0Z"
          fill="#FEE9CD"
        />
      </g>
    </symbol>
    <symbol id="figure" viewBox="0 0 100 330">
      <g>
        <circle cx="9" cy="2" r="2" fill="#FE8700" />
        <circle cx="9" cy="106" r="2" fill="#FE8700" />
        <circle cx="9" cy="54" r="2" fill="#FE8700" />
        <circle cx="9" cy="158" r="2" fill="#FE8700" />
        <circle cx="9" cy="28" r="2" fill="#FE8700" />
        <circle cx="9" cy="132" r="2" fill="#FE8700" />
        <circle cx="9" cy="80" r="2" fill="#FE8700" />
        <circle cx="9" cy="184" r="2" fill="#FE8700" />
        <circle cx="9" cy="15" r="2" fill="#FE8700" />
        <circle cx="9" cy="119" r="2" fill="#FE8700" />
        <circle cx="9" cy="67" r="2" fill="#FE8700" />
        <circle cx="9" cy="171" r="2" fill="#FE8700" />
        <circle cx="9" cy="41" r="2" fill="#FE8700" />
        <circle cx="9" cy="145" r="2" fill="#FE8700" />
        <circle cx="9" cy="93" r="2" fill="#FE8700" />
        <circle cx="9" cy="197" r="2" fill="#FE8700" />
        <circle cx="22" cy="2" r="2" fill="#FE8700" />
        <circle cx="22" cy="106" r="2" fill="#FE8700" />
        <circle cx="22" cy="54" r="2" fill="#FE8700" />
        <circle cx="22" cy="158" r="2" fill="#FE8700" />
        <circle cx="22" cy="28" r="2" fill="#FE8700" />
        <circle cx="22" cy="132" r="2" fill="#FE8700" />
        <circle cx="22" cy="80" r="2" fill="#FE8700" />
        <circle cx="22" cy="184" r="2" fill="#FE8700" />
        <circle cx="22" cy="15" r="2" fill="#FE8700" />
        <circle cx="22" cy="119" r="2" fill="#FE8700" />
        <circle cx="22" cy="67" r="2" fill="#FE8700" />
        <circle cx="22" cy="171" r="2" fill="#FE8700" />
        <circle cx="22" cy="41" r="2" fill="#FE8700" />
        <circle cx="22" cy="145" r="2" fill="#FE8700" />
        <circle cx="22" cy="93" r="2" fill="#FE8700" />
        <circle cx="22" cy="197" r="2" fill="#FE8700" />
        <circle cx="35" cy="2" r="2" fill="#FE8700" />
        <circle cx="35" cy="106" r="2" fill="#FE8700" />
        <circle cx="35" cy="54" r="2" fill="#FE8700" />
        <circle cx="35" cy="158" r="2" fill="#FE8700" />
        <circle cx="35" cy="28" r="2" fill="#FE8700" />
        <circle cx="35" cy="132" r="2" fill="#FE8700" />
        <circle cx="35" cy="80" r="2" fill="#FE8700" />
        <circle cx="35" cy="184" r="2" fill="#FE8700" />
        <circle cx="87" cy="2" r="2" fill="#FE8700" />
        <circle cx="165" cy="2" r="2" fill="#FE8700" />
        <circle cx="87" cy="106" r="2" fill="#FE8700" />
        <circle cx="165" cy="106" r="2" fill="#FE8700" />
        <circle cx="87" cy="54" r="2" fill="#FE8700" />
        <circle cx="165" cy="54" r="2" fill="#FE8700" />
        <circle cx="87" cy="158" r="2" fill="#FE8700" />
        <circle cx="165" cy="158" r="2" fill="#FE8700" />
        <circle cx="87" cy="28" r="2" fill="#FE8700" />
        <circle cx="165" cy="28" r="2" fill="#FE8700" />
        <circle cx="87" cy="132" r="2" fill="#FE8700" />
        <circle cx="165" cy="132" r="2" fill="#FE8700" />
        <circle cx="87" cy="80" r="2" fill="#FE8700" />
        <circle cx="165" cy="80" r="2" fill="#FE8700" />
        <circle cx="87" cy="184" r="2" fill="#FE8700" />
        <circle cx="165" cy="184" r="2" fill="#FE8700" />
        <circle cx="35" cy="15" r="2" fill="#FE8700" />
        <circle cx="35" cy="119" r="2" fill="#FE8700" />
        <circle cx="35" cy="67" r="2" fill="#FE8700" />
        <circle cx="35" cy="171" r="2" fill="#FE8700" />
        <circle cx="35" cy="41" r="2" fill="#FE8700" />
        <circle cx="35" cy="145" r="2" fill="#FE8700" />
        <circle cx="35" cy="93" r="2" fill="#FE8700" />
        <circle cx="35" cy="197" r="2" fill="#FE8700" />
        <circle cx="87" cy="15" r="2" fill="#FE8700" />
        <circle cx="165" cy="15" r="2" fill="#FE8700" />
        <circle cx="87" cy="119" r="2" fill="#FE8700" />
        <circle cx="165" cy="119" r="2" fill="#FE8700" />
        <circle cx="87" cy="67" r="2" fill="#FE8700" />
        <circle cx="165" cy="67" r="2" fill="#FE8700" />
        <circle cx="87" cy="171" r="2" fill="#FE8700" />
        <circle cx="165" cy="171" r="2" fill="#FE8700" />
        <circle cx="87" cy="41" r="2" fill="#FE8700" />
        <circle cx="165" cy="41" r="2" fill="#FE8700" />
        <circle cx="87" cy="145" r="2" fill="#FE8700" />
        <circle cx="165" cy="145" r="2" fill="#FE8700" />
        <circle cx="87" cy="93" r="2" fill="#FE8700" />
        <circle cx="165" cy="93" r="2" fill="#FE8700" />
        <circle cx="87" cy="197" r="2" fill="#FE8700" />
        <circle cx="165" cy="197" r="2" fill="#FE8700" />
        <circle cx="48" cy="2" r="2" fill="#FE8700" />
        <circle cx="48" cy="106" r="2" fill="#FE8700" />
        <circle cx="48" cy="54" r="2" fill="#FE8700" />
        <circle cx="48" cy="158" r="2" fill="#FE8700" />
        <circle cx="48" cy="28" r="2" fill="#FE8700" />
        <circle cx="48" cy="132" r="2" fill="#FE8700" />
        <circle cx="48" cy="80" r="2" fill="#FE8700" />
        <circle cx="48" cy="184" r="2" fill="#FE8700" />
        <circle cx="100" cy="2" r="2" fill="#FE8700" />
        <circle cx="178" cy="2" r="2" fill="#FE8700" />
        <circle cx="100" cy="106" r="2" fill="#FE8700" />
        <circle cx="178" cy="106" r="2" fill="#FE8700" />
        <circle cx="100" cy="54" r="2" fill="#FE8700" />
        <circle cx="178" cy="54" r="2" fill="#FE8700" />
        <circle cx="100" cy="158" r="2" fill="#FE8700" />
        <circle cx="178" cy="158" r="2" fill="#FE8700" />
        <circle cx="100" cy="28" r="2" fill="#FE8700" />
        <circle cx="178" cy="28" r="2" fill="#FE8700" />
        <circle cx="100" cy="132" r="2" fill="#FE8700" />
        <circle cx="178" cy="132" r="2" fill="#FE8700" />
        <circle cx="100" cy="80" r="2" fill="#FE8700" />
        <circle cx="178" cy="80" r="2" fill="#FE8700" />
        <circle cx="100" cy="184" r="2" fill="#FE8700" />
        <circle cx="178" cy="184" r="2" fill="#FE8700" />
        <circle cx="48" cy="15" r="2" fill="#FE8700" />
        <circle cx="48" cy="119" r="2" fill="#FE8700" />
        <circle cx="48" cy="67" r="2" fill="#FE8700" />
        <circle cx="48" cy="171" r="2" fill="#FE8700" />
        <circle cx="48" cy="41" r="2" fill="#FE8700" />
        <circle cx="48" cy="145" r="2" fill="#FE8700" />
        <circle cx="48" cy="93" r="2" fill="#FE8700" />
        <circle cx="48" cy="197" r="2" fill="#FE8700" />
        <circle cx="100" cy="15" r="2" fill="#FE8700" />
        <circle cx="178" cy="15" r="2" fill="#FE8700" />
        <circle cx="100" cy="119" r="2" fill="#FE8700" />
        <circle cx="178" cy="119" r="2" fill="#FE8700" />
        <circle cx="100" cy="67" r="2" fill="#FE8700" />
        <circle cx="178" cy="67" r="2" fill="#FE8700" />
        <circle cx="100" cy="171" r="2" fill="#FE8700" />
        <circle cx="178" cy="171" r="2" fill="#FE8700" />
        <circle cx="100" cy="41" r="2" fill="#FE8700" />
        <circle cx="178" cy="41" r="2" fill="#FE8700" />
        <circle cx="100" cy="145" r="2" fill="#FE8700" />
        <circle cx="178" cy="145" r="2" fill="#FE8700" />
        <circle cx="100" cy="93" r="2" fill="#FE8700" />
        <circle cx="178" cy="93" r="2" fill="#FE8700" />
        <circle cx="100" cy="197" r="2" fill="#FE8700" />
        <circle cx="178" cy="197" r="2" fill="#FE8700" />
        <circle cx="61" cy="2" r="2" fill="#FE8700" />
        <circle cx="139" cy="2" r="2" fill="#FE8700" />
        <circle cx="61" cy="106" r="2" fill="#FE8700" />
        <circle cx="139" cy="106" r="2" fill="#FE8700" />
        <circle cx="61" cy="54" r="2" fill="#FE8700" />
        <circle cx="139" cy="54" r="2" fill="#FE8700" />
        <circle cx="61" cy="158" r="2" fill="#FE8700" />
        <circle cx="139" cy="158" r="2" fill="#FE8700" />
        <circle cx="61" cy="28" r="2" fill="#FE8700" />
        <circle cx="139" cy="28" r="2" fill="#FE8700" />
        <circle cx="61" cy="132" r="2" fill="#FE8700" />
        <circle cx="139" cy="132" r="2" fill="#FE8700" />
        <circle cx="61" cy="80" r="2" fill="#FE8700" />
        <circle cx="139" cy="80" r="2" fill="#FE8700" />
        <circle cx="61" cy="184" r="2" fill="#FE8700" />
        <circle cx="139" cy="184" r="2" fill="#FE8700" />
        <circle cx="113" cy="2" r="2" fill="#FE8700" />
        <circle cx="191" cy="2" r="2" fill="#FE8700" />
        <circle cx="113" cy="106" r="2" fill="#FE8700" />
        <circle cx="191" cy="106" r="2" fill="#FE8700" />
        <circle cx="113" cy="54" r="2" fill="#FE8700" />
        <circle cx="191" cy="54" r="2" fill="#FE8700" />
        <circle cx="113" cy="158" r="2" fill="#FE8700" />
        <circle cx="191" cy="158" r="2" fill="#FE8700" />
        <circle cx="113" cy="28" r="2" fill="#FE8700" />
        <circle cx="191" cy="28" r="2" fill="#FE8700" />
        <circle cx="113" cy="132" r="2" fill="#FE8700" />
        <circle cx="191" cy="132" r="2" fill="#FE8700" />
        <circle cx="113" cy="80" r="2" fill="#FE8700" />
        <circle cx="191" cy="80" r="2" fill="#FE8700" />
        <circle cx="113" cy="184" r="2" fill="#FE8700" />
        <circle cx="191" cy="184" r="2" fill="#FE8700" />
        <circle cx="61" cy="15" r="2" fill="#FE8700" />
        <circle cx="139" cy="15" r="2" fill="#FE8700" />
        <circle cx="61" cy="119" r="2" fill="#FE8700" />
        <circle cx="139" cy="119" r="2" fill="#FE8700" />
        <circle cx="61" cy="67" r="2" fill="#FE8700" />
        <circle cx="139" cy="67" r="2" fill="#FE8700" />
        <circle cx="61" cy="171" r="2" fill="#FE8700" />
        <circle cx="139" cy="171" r="2" fill="#FE8700" />
        <circle cx="61" cy="41" r="2" fill="#FE8700" />
        <circle cx="139" cy="41" r="2" fill="#FE8700" />
        <circle cx="61" cy="145" r="2" fill="#FE8700" />
        <circle cx="139" cy="145" r="2" fill="#FE8700" />
        <circle cx="61" cy="93" r="2" fill="#FE8700" />
        <circle cx="139" cy="93" r="2" fill="#FE8700" />
        <circle cx="61" cy="197" r="2" fill="#FE8700" />
        <circle cx="139" cy="197" r="2" fill="#FE8700" />
        <circle cx="113" cy="15" r="2" fill="#FE8700" />
        <circle cx="191" cy="15" r="2" fill="#FE8700" />
        <circle cx="113" cy="119" r="2" fill="#FE8700" />
        <circle cx="191" cy="119" r="2" fill="#FE8700" />
        <circle cx="113" cy="67" r="2" fill="#FE8700" />
        <circle cx="191" cy="67" r="2" fill="#FE8700" />
        <circle cx="113" cy="171" r="2" fill="#FE8700" />
        <circle cx="191" cy="171" r="2" fill="#FE8700" />
        <circle cx="113" cy="41" r="2" fill="#FE8700" />
        <circle cx="191" cy="41" r="2" fill="#FE8700" />
        <circle cx="113" cy="145" r="2" fill="#FE8700" />
        <circle cx="191" cy="145" r="2" fill="#FE8700" />
        <circle cx="113" cy="93" r="2" fill="#FE8700" />
        <circle cx="191" cy="93" r="2" fill="#FE8700" />
        <circle cx="113" cy="197" r="2" fill="#FE8700" />
        <circle cx="191" cy="197" r="2" fill="#FE8700" />
        <circle cx="74" cy="2" r="2" fill="#FE8700" />
        <circle cx="152" cy="2" r="2" fill="#FE8700" />
        <circle cx="74" cy="106" r="2" fill="#FE8700" />
        <circle cx="152" cy="106" r="2" fill="#FE8700" />
        <circle cx="74" cy="54" r="2" fill="#FE8700" />
        <circle cx="152" cy="54" r="2" fill="#FE8700" />
        <circle cx="74" cy="158" r="2" fill="#FE8700" />
        <circle cx="152" cy="158" r="2" fill="#FE8700" />
        <circle cx="74" cy="28" r="2" fill="#FE8700" />
        <circle cx="152" cy="28" r="2" fill="#FE8700" />
        <circle cx="74" cy="132" r="2" fill="#FE8700" />
        <circle cx="152" cy="132" r="2" fill="#FE8700" />
        <circle cx="74" cy="80" r="2" fill="#FE8700" />
        <circle cx="152" cy="80" r="2" fill="#FE8700" />
        <circle cx="74" cy="184" r="2" fill="#FE8700" />
        <circle cx="152" cy="184" r="2" fill="#FE8700" />
        <circle cx="126" cy="2" r="2" fill="#FE8700" />
        <circle cx="204" cy="2" r="2" fill="#FE8700" />
        <circle cx="126" cy="106" r="2" fill="#FE8700" />
        <circle cx="204" cy="106" r="2" fill="#FE8700" />
        <circle cx="126" cy="54" r="2" fill="#FE8700" />
        <circle cx="204" cy="54" r="2" fill="#FE8700" />
        <circle cx="126" cy="158" r="2" fill="#FE8700" />
        <circle cx="204" cy="158" r="2" fill="#FE8700" />
        <circle cx="126" cy="28" r="2" fill="#FE8700" />
        <circle cx="204" cy="28" r="2" fill="#FE8700" />
        <circle cx="126" cy="132" r="2" fill="#FE8700" />
        <circle cx="204" cy="132" r="2" fill="#FE8700" />
        <circle cx="126" cy="80" r="2" fill="#FE8700" />
        <circle cx="204" cy="80" r="2" fill="#FE8700" />
        <circle cx="126" cy="184" r="2" fill="#FE8700" />
        <circle cx="204" cy="184" r="2" fill="#FE8700" />
        <circle cx="74" cy="15" r="2" fill="#FE8700" />
        <circle cx="152" cy="15" r="2" fill="#FE8700" />
        <circle cx="74" cy="119" r="2" fill="#FE8700" />
        <circle cx="152" cy="119" r="2" fill="#FE8700" />
        <circle cx="74" cy="67" r="2" fill="#FE8700" />
        <circle cx="152" cy="67" r="2" fill="#FE8700" />
        <circle cx="74" cy="171" r="2" fill="#FE8700" />
        <circle cx="152" cy="171" r="2" fill="#FE8700" />
        <circle cx="74" cy="41" r="2" fill="#FE8700" />
        <circle cx="152" cy="41" r="2" fill="#FE8700" />
        <circle cx="74" cy="145" r="2" fill="#FE8700" />
        <circle cx="152" cy="145" r="2" fill="#FE8700" />
        <circle cx="74" cy="93" r="2" fill="#FE8700" />
        <circle cx="152" cy="93" r="2" fill="#FE8700" />
        <circle cx="74" cy="197" r="2" fill="#FE8700" />
        <circle cx="152" cy="197" r="2" fill="#FE8700" />
        <circle cx="126" cy="15" r="2" fill="#FE8700" />
        <circle cx="204" cy="15" r="2" fill="#FE8700" />
        <circle cx="126" cy="119" r="2" fill="#FE8700" />
        <circle cx="204" cy="119" r="2" fill="#FE8700" />
        <circle cx="126" cy="67" r="2" fill="#FE8700" />
        <circle cx="204" cy="67" r="2" fill="#FE8700" />
        <circle cx="126" cy="171" r="2" fill="#FE8700" />
        <circle cx="204" cy="171" r="2" fill="#FE8700" />
        <circle cx="126" cy="41" r="2" fill="#FE8700" />
        <circle cx="204" cy="41" r="2" fill="#FE8700" />
        <circle cx="126" cy="145" r="2" fill="#FE8700" />
        <circle cx="204" cy="145" r="2" fill="#FE8700" />
        <circle cx="126" cy="93" r="2" fill="#FE8700" />
        <circle cx="204" cy="93" r="2" fill="#FE8700" />
        <circle cx="126" cy="197" r="2" fill="#FE8700" />
        <circle cx="204" cy="197" r="2" fill="#FE8700" />
        <path
          d="M169 193.5C169 220.497 160.994 246.888 145.996 269.335C130.997 291.783 109.678 309.278 84.7363 319.61C59.7942 329.941 32.3486 332.644 5.87017 327.377C-20.6082 322.11 -44.9302 309.11 -64.0201 290.02L32.5 193.5H169Z"
          fill="#FFDA44"
        />
      </g>
    </symbol>
  </svg>
  <div class="section">
    <svg class="figure-block-1">
      <use xlink:href="#figure"></use>
    </svg>
    <svg class="figure-block-2">
      <use xlink:href="#figure"></use>
    </svg>

    <div class="container">
      <div class="header">
        <h1>Наши топ-блогеры</h1>
        <div>
          <p>Лучше специалисты в своем деле,</p>
          <p>средний опыт работы в профессии - 27 лет</p>
        </div>
      </div>
      <div class="carousel">
        <div class="btns-block">
          <button class="btn" @click="clickLeft()">
            <svg class="arrow-left">
              <use xlink:href="#arrow"></use>
            </svg>
          </button>
          <button class="btn" @click="clickRight()">
            <svg class="arrow-right">
              <use xlink:href="#arrow"></use>
            </svg>
          </button>
        </div>
        <!-- cards -->
        <transition>
          <div class="cards-block">
            <div
              class="card"
              v-for="item of visibleUsers"
              :key="item.id"
              @click="select(item)"
            >
              <div class="image"></div>
              <div
                class="info"
                :class="{
                  'info-orange': selectUser === item,
                }"
              >
                <div class="name">{{ item.name }}</div>
                <div class="company">{{ item.company }}</div>
              </div>
            </div>
          </div>
        </transition>
        <!-- cards -->
      </div>
      <!-- posts -->
      <div class="post-block" v-if="selectUser">
        <h2 class="post-title">
          3 актуальных поста {{ selectUser.company }}
          <svg class="quotes-class">
            <use xlink:href="#quotes"></use>
          </svg>
        </h2>
        <div class="post" v-for="item of posts" :key="item.id">
          <div class="content-title">{{ item.title }}</div>
          <div class="content">{{ item.body }}</div>
        </div>
      </div>
      <!-- posts -->
    </div>
  </div>
</template>

<script>
import { loadUsers } from "./api";
import { loadPosts } from "./api";
export default {
  name: "App",

  data() {
    return {
      users: [],
      posts: [],
      selectUser: null,
      selectUserPosts: [],
      page: 1,
    };
  },

  created: async function () {
    const userList = await loadUsers();
    userList.forEach((element) => {
      const user = {
        id: element.id,
        name: element.name,
        company: element.company.name,
      };
      this.users.push(user);
    });
  },

  watch: {
    selectUser() {
      this.posts = [];
      const load = async () => await loadPosts(this.selectUser.id);
      load().then((data) => {
        this.posts.push(
          this.upperCaseFunc(data[0]),
          this.upperCaseFunc(data[1]),
          this.upperCaseFunc(data[2])
        );
      });
    },
  },

  computed: {
    startIndex() {
      return this.page - 1;
    },

    endIndex() {
      return this.page + 3;
    },

    visibleUsers() {
      return this.users.slice(this.startIndex, this.endIndex);
    },
  },

  methods: {
    clickRight() {
      if (this.users.length > this.endIndex) {
        this.page += 1;
        if (this.users.length === this.endIndex) {
          this.page -= 1;
          let value = this.users.shift();
          this.users.push(value);
        }
      }
    },

    clickLeft() {
      if (this.page >= 1) {
        this.page -= 1;
        if (this.page === 0) {
          this.page += 1;
          let value = this.users.pop();
          this.users.unshift(value);
        }
      }
    },

    select(user) {
      this.selectUser = user;
    },

    upperCaseFunc(data) {
      return {
        title: data.title[0].toUpperCase() + data.title.slice(1),
        body: data.body[0].toUpperCase() + data.body.slice(1),
        id: data.id,
      };
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Poppins:wght@400;500;600&display=swap");

body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: #606f81;

  background-color: #fff;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

h1,
h2 {
  margin: 0;
}

p {
  margin: 0 0 10px;
}

.figure-block-1 {
  position: absolute;
  bottom: 104px;
  left: -104px;
  width: 310px;
  height: 330px;
  z-index: -1;
}

.figure-block-2 {
  position: absolute;
  width: 310px;
  height: 330px;
  z-index: -1;
  top: 259px;
  right: -67px;
}

.section {
  width: 100%;
  max-width: 1440px;
  height: 1364px;
  margin: 0 auto;
  position: relative;
}

.container {
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0;
  position: relative;
}

.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header h1 {
  margin-top: 64px;
  margin-bottom: 47px;
  font-size: 48px;
  font-weight: 600;
  line-height: 20px;
  color: #384758;
}

.header div {
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  max-width: 432px;
  text-align: center;
}

.carousel {
  margin: 0 auto;
}

.btns-block {
  margin-top: 31px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.cards-block {
  width: 100%;
}

.btn {
  padding: 0;
  margin: 0 10px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background-color: #fe8700;
  opacity: 1;
  transition: opacity 0.2s linear;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn:hover {
  cursor: pointer;
  opacity: 0.7;
}

.arrow-left {
  width: 40px;
  height: 40px;
  fill: #fff;
}

.arrow-right {
  width: 40px;
  height: 40px;
  fill: #fff;
  transform: rotate(180deg);
}

.card {
  display: inline-block;
  width: 300px;
  height: auto;
  margin: 20px 15px 50px 15px;
  transition: 0.2s linear;
}
.card:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.image {
  width: 300px;
  height: 300px;
  background: url(https://i.pravatar.cc/300) center no-repeat;
  background-size: cover;
}

.info {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20px;
  opacity: 1;
  transition: opacity 0.2s linear;
}

.info-orange {
  padding-top: 15px;
  border-top: 5px solid #fe8700;
}

.info-orange div {
  color: #fe8700;
}

.name {
  font-size: 24px;
  line-height: 36px;
  font-weight: 500;
  color: #384758;
}

.company {
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  color: #606f81;
}

.post-block {
  width: 75%;
  color: #384758;
  position: absolute;
  right: 0;
}

.post-title {
  font-size: 48px;
  line-height: 48px;
  font-weight: 600;
  height: 78px;
  vertical-align: top;
  margin-bottom: 27px;
  position: relative;
  padding-right: 15px;
}

.quotes-class {
  position: absolute;
  top: 0;
  left: -134px;
  width: 100px;
  height: 78px;
}

.post {
  padding-bottom: 20px;
  padding-right: 15px;
}

.content-title {
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
  padding-bottom: 7px;
  text-align: left;
}

.content {
  color: #606f81;
  font-size: 20px;
  line-height: 28px;
  font-weight: 400;
  text-align: left;
}
</style>

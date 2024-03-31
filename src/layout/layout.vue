<template>
  <el-container>
    <el-aside width="240px">
      <!-- <el-menu
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
     
        <el-menu-item index="1">
          <span slot="title">
            <router-link to="/home">首页</router-link>
          </span>
        </el-menu-item>

        <el-submenu index="2">
          <template slot="title">
            <span>贷款管理</span>
          </template>
          <el-menu-item index="2-1">
            <router-link to="/loan-input/index">贷款申请</router-link>
          </el-menu-item>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <span>申请管理</span>
          </template>
          <el-menu-item index="3-1">
            <router-link to="/application-manage/index">申请列表</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <span>贷款审批</span>
          </template>
          <el-menu-item index="4-1">
            <router-link to="/loan-approve/first">初审</router-link>
          </el-menu-item>
          <el-menu-item index="4-2">
            <router-link to="/loan-approve/end">终审</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <span>合同管理</span>
          </template>
          <el-menu-item index="5-1">
            <router-link to="/contract-manage/index">合同列表</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <span>权限管理</span>
          </template>
          <el-menu-item index="6-1">
            <router-link to="/permission/create">创建管理员</router-link>
          </el-menu-item>
          <el-menu-item index="6-2">
            <router-link to="/permission/list">列表展示</router-link>
          </el-menu-item>
        </el-submenu>
      </el-menu> -->
      <!-- 添加router，开启路由模式-->
      <el-menu
        router
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <!-- for循环菜单组件，传入每一个菜单项-->
        <asideMenu
          v-for="(menu, index) in menuList"
          :menu="menu"
          :key="index"
        />
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <!--//左侧面包屑-->
        <div class="left"><Breadcrumb /></div>
        <!--//右侧用户名-->
        <div class="right">
          <!--// //下拉菜单-->
          <el-dropdown @command="doCommand">
            <span class="el-dropdown-link">您好， {{ userName }} ！</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template> 

<script>
import asideMenu from "@/components/AsideMenu.vue";
import { logout } from "@/apis/user";
import Breadcrumb from "@/components/Breadcrumb.vue";
export default {
  components: {
    Breadcrumb,
    asideMenu,
  },
  methods: {
    async doCommand(e) {
      console.log(e);
      if (e === "logout") {
        //logout接口，成功返回code为20000
        let res = await logout();
        if (res.data.code === 20000) {
          //如果成功跳转到login页面
          //这里需要await阻塞一下，避免下面刷新先执行
          await this.$router.replace("/login");
          //退出成功时清掉所有的存储信息
          localStorage.clear();
          //跳转后刷新下页面，清除掉路由信息
          window.location.reload();
        }
      }
    },
  },
  computed: {
    userName() {
      return this.$store.state.userName;
    },
    menuList() {
      return this.$store.state.menuList;
    },
  },
};
</script>

<style scoped>
a:link {
  text-decoration: none;
  color: #fff;
}

/* 状态二: 已经访问过的链接 */
a:visited {
  text-decoration: none;
  color: #fff;
}

/* 状态三: 鼠标划过(停留)的链接(默认红色) */
a:hover {
  text-decoration: none;
  color: #fff;
}
/* 状态四: 被点击的链接 */
a:active {
  text-decoration: none;
  color: #fff;
}
.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

.el-container {
  height: 100%;
}
.el-menu-vertical-demo {
  border: none;
}
.router-link-active {
  color: rgba(255, 208, 75) !important;
}
</style>
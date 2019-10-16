<template>
  <div>
    <HeadNav></HeadNav>
    <div>
      <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px"  style="background-color: rgb(238, 241, 246);height:623px ">
          <el-menu :default-openeds="['1']" :unique-opened="true" :router="true">

            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>Welcome</template>
                <el-menu-item index="/index/welcome">Welcome</el-menu-item>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title"><i class="el-icon-message"></i>用户中心</template>
              <el-menu-item index="1-1">用户管理</el-menu-item>
              <el-menu-item index="1-1">添加用户</el-menu-item>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title"><i class="el-icon-message"></i>影片中心</template>
              <el-menu-item index="1-1">影片管理</el-menu-item>
            </el-submenu>

            <el-submenu index="4">
              <template slot="title"><i class="el-icon-message"></i>评论中心</template>
              <el-menu-item index="1-1">用户管理</el-menu-item>
            </el-submenu>

            <el-submenu index="4">
              <template slot="title"><i class="el-icon-message"></i>Home</template>
              <el-menu-item index="1-1">Home</el-menu-item>
            </el-submenu>


           <!--
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-setting"></i>导航三</template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="3-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="3-4">
                <template slot="title">选项4</template>
                <el-menu-item index="3-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>-->
          </el-menu>
        </el-aside>

      <el-container class="box">
          <el-main >
            <router-view></router-view>
          </el-main>
      </el-container>

      </el-container>
    </div>
  </div>
</template>

<script>
    import HeadNav from '../components/Head'

    export default {
        name: 'Index',
        components: {
            HeadNav
        },
        data () {
            return {}
        },
        methods: {}
    }
</script>

<style scoped>
    .box{
       height: 623px;
      width: 1200px;
    }
  .el-container{
    width: 1470px;
    height: 600px;
  }
</style>

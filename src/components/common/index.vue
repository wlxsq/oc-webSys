
<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <Row type="flex">
            <Col class="layout-menu-left" :span="spanLeft">
                <Menu theme="dark" width="auto" :active-name="setActive" @on-select="routeTo">
                    <div class="layout-logo-left">
                        <h3>内部管理系统</h3>
                    </div>
                    <MenuItem name="test1">
                        <Icon type="ios-navigate" :size="iconSzie"></Icon>
                        <span class="layout-text">发布通知</span>
                    </MenuItem>
                    <MenuItem name="test2">
                        <Icon type="ios-navigate" :size="iconSzie"></Icon>
                        <span class="layout-text">上课记录</span>
                    </MenuItem>
                    <MenuItem name="test3">
                        <Icon type="ios-navigate" :size="iconSzie"></Icon>
                        <span class="layout-text">数据分析</span>
                    </MenuItem>
                    <MenuItem name="test4">
                        <Icon type="ios-navigate" :size="iconSzie"></Icon>
                        <span class="layout-text">老师管理</span>
                    </MenuItem>
                    <MenuItem name="test4">
                        <Icon type="ios-navigate" :size="iconSzie"></Icon>
                        <span class="layout-text">课程管理</span>
                    </MenuItem>
                    <MenuItem name="test4">
                        <Icon type="ios-navigate" :size="iconSzie"></Icon>
                        <span class="layout-text">教室管理</span>
                    </MenuItem>
                    <MenuItem name="login">
                        <Icon type="ios-navigate" :size="iconSzie"></Icon>
                        <span class="layout-text">登录日志</span>
                    </MenuItem>
                </Menu>
            </Col>
            <Col :span="spanRight">
                <div class="layout-header">
                    <Button type="text" @click.native="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </Button>
                </div>
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <BreadcrumbItem>首页</BreadcrumbItem>
                        <BreadcrumbItem>页面</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <transition mode="out-in">
                        <router-view></router-view>
                    </transition>
                </div>
                <div class="layout-copy">
                    <footer>一码学程后台管理系统 | Copyright © 2018-2018 author:ONECODE</footer>
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
    data(){
        return {
            spanLeft: 5,
            spanRight: 19,
            page: ['login', 'login', 'login', 'login', 'login'],
        }
    },
    computed:{
        setActive() {
            return this.$route.path.replace('/','');
        },
        iconSzie() {
            return this.spanLeft ===5 ? 14: 24;
        }
    },
    methods:{
        toggleClick() {
            if(this.spanLeft===5){
                this.spanLeft=2;
                this.spanRight=22;
            }else{
                this.spanLeft=5;
                this.spanRight=19;
            }
        },
        routeTo(e) {
            console.log(e);
            this.$router.push(e);
        }
    }
}
</script>
<style scoped>
.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}

.layout-breadcrumb {
    padding: 10px 15px 0;
}

.layout-content {
    min-height: 600px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
}

.layout-content-main {
    padding: 20px 10px;
}

.layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}

.layout-menu-left {
    background: #464c5b;
    /*min-width: 100px;*/
}

.layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

.layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
    line-height: 30px;
    color: white;
    text-align: center;
    vertical-align: middle;
    overflow: hidden;
}

.layout-ceiling-main a {
    color: #9ba7b5;
}

.layout-hide-text .layout-text {
    display: none;
}

.ivu-col {
    transition: width .2s ease-in-out;
}
</style>
<template>
    <div class="container">
        <span>{{username}}</span>
        <span>已登录</span>
    </div>
</template>

<script>
export default {
    name:"userinfo",
    computed:{
        username(){
            return this.$store.state.userinfo.username;
        }
    },
}
</script>
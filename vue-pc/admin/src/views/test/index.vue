<template>
    <div class="list-detail">
        <list :list="list"></list>
    </div>
</template>
<script>
import list from "./list";
export default {
    name: "Parent",
    components: { list },
    data() {
        return {
            list: [{
                name: "经济",
                children: [{
                    name: "如家",
                    children: [{
                        name: "上江路-如家"
                    },
                    {
                        name: "望江路-如家"
                    }]
                }, {
                    name: "7天",
                    children: [{
                        name: "长江路-7天"
                    },
                    {
                        name: "望江路-7天"
                    }]
                }]
            }]
        }
    }
}
</script>
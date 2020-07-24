<template>
    <div class="common-table">
        <el-table :data="tableData" height="90%" stripe v-loading="config.loading">
            <!-- 序号单独 -->
            <el-table-column label="序号" width="85">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ (config.page - 1) * 20 + scope.$index + 1 }}</span>
                </template>
            </el-table-column>

            <!-- 数据字段-表头 -->
            <el-table-column
                show-overflow-tooltip
                v-for="item in tableLabel"
                :key="item.prop"
                :label="item.label"
                :width="item.width ? item.width : 125"
            >
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row[item.prop] }}</span>
                </template>
            </el-table-column>

            <!-- 操作部分单独 -->
            <el-table-column label="操作" min-width="180">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 分页 -->
        <el-pagination
            class="pager"
            layout="prev, pager, next"
            :total="config.total"
            :current-page.sync="config.page"
            @current-change="changePage"
            :page-size="20"
        ></el-pagination>
    </div>
</template>

<script>
export default {
    name: "common-table",
    props: {
        tableData: Array, // 传⼊入的数据列列表
        tableLabel: Array, // 传⼊入的数据字段
        config: Object // 配置项/分页/页数/
    },
    data() {
        return {};
    },
    methods: {
        // 编辑
        handleEdit(row) {
            this.$emit("editUser", row);
        },
        // 删除
        handleDelete(row) {
            this.$emit("delUser", row);
        },
        // 分页切换
        changePage(page) {
            this.$emit("changePage", page);
        }
    }
};
</script>

<style lang='scss' scoped>
.common-table {
    height: calc(100% - 62px);
    background-color: #fff;
    position: relative;
    .pager {
        position: absolute;
        bottom: 5px;
        right: 20px;
    }
}
</style>
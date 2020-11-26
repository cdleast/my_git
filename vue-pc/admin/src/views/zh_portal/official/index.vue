<template>
    <div class="official">
        <el-row :gutter="20">
            <el-col :span="18" class="left-nav">
                <div class="left-wrap" v-for="i in 4" :key="i">
                    <div class="title">公文管理 》</div>
                    <div class="content">
                        <span>党委发文</span>
                        <span>党委发文</span>
                        <span>党委发文</span>
                        <span>党委发文</span>
                        <span>党委发文</span>
                        <span>党委发文</span>
                        <span>党委发文</span>
                        <span>党委发文</span>
                        <span>党委发文</span>
                        <span>党委发文</span>
                    </div>
                </div>
            </el-col>
            <el-col :span="6" class="right-search">
                <div class="card">
                    <div class="header">文件查询</div>
                    <el-form ref="form" :model="form" label-width="80px" size="mini">
                        <el-form-item label="文件编号">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="文件标题">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="文件种类">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="拟稿人">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="拟稿时间" class="date-picker">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 48%;"></el-date-picker>
                            <span class="line" style="width: 4%;display:inline-block;text-align:center;">-</span>
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date2" style="width: 48%;"></el-date-picker>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">开始查询</el-button>
                            <el-button>清空</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'zh_portal-official',
    data() {
        return {
            form: {}
        }
    },
    methods: {
        onSubmit() {

        }
    }
};
</script>

<style lang='scss' scoped>
.official /deep/ {
    .left-wrap {
        display: flex;
        padding-top: 20px;

        .title {
            width: 100px;
            color: #333;
            font-size: 16px;
            font-weight: 700;
        }

        .content {
            flex: 1;
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            grid-row-gap: 20px;
            grid-column-gap: 20px;
            padding-bottom: 20px;
            border-bottom: 1px dashed #ccc;

            span {
                color: #222;
                font-size: 14px;
                cursor: pointer;
            }
        }
    }

    .left-wrap:first-child {
        padding-top: 0;
    }

    .right-search {
        .card {
            .header {
                color: #333;
                font-size: 16px;
                font-weight: 700;
                padding-bottom: 10px;
                border-bottom: 1px dashed #ccc;
            }

            .el-form {
                padding: 15px 0;
            }
        }
    }
}
</style>
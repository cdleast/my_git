<template>
    <div class="pdf-preview">
        <header-bar title="文件预览"></header-bar>

        <pdf
            v-for="i in numPages"
            :key="i"
            :page="i"
            :src="src"
            @num-pages="pageCount = $event"
            @page-loaded="currentPage = $event"
        ></pdf>
    </div>
</template>

<script>
import homeApi from "@/api/home";
import pdf from "vue-pdf";
export default {
    name: "pdf-preview",
    components: {
        pdf
    },
    data() {
        return {
            url: this.$route.query.src,
            numPages: undefined
        };
    },
    computed: {
        src() {
            return pdf.createLoadingTask(this.url);
        }
    },
    mounted() {
        this.src.promise.then(pdf => {
            this.numPages = pdf.numPages;
        });
    }
};
</script>

<style lang='scss' scoped>
.pdf-preview {
    height: 100%;
    overflow-x: hidden;
}
</style>
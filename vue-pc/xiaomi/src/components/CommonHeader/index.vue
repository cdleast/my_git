<template>
    <div class="common-header clearfix">
        <!-- 头部黑色 -->
        <div class="header">
            <div class="site-topbar">
                <!-- 左侧导航 -->
                <div class="topbar-nav">
                    <div class="el-link-wrap" v-for="(item,index) in topbarNav" :key="index">
                        <el-link
                            :underline="false"
                            href="https://element.eleme.io"
                            target="_blank"
                        >{{ item.name }}</el-link>
                        <span class="sep">|</span>
                    </div>
                </div>

                <!-- 购物车 -->
                <div class="topbar-cart">
                    <div class="cart-mini">
                        <i class="icon icon-gouwuche"></i>
                        购物车
                        <span class="cart-mini-num">(0)</span>
                    </div>
                    <div class="cart-menu">
                        <div class="msg">购物车中还没有商品，赶紧选购吧！</div>
                    </div>
                </div>

                <!-- 登录注册 -->
                <div class="topbar-info">
                    <div class="el-link-wrap" v-for="(item,index) in topbarInfo" :key="index">
                        <el-link
                            :underline="false"
                            target="_blank"
                            @click="clickEvent(index)"
                        >{{ item.name }}</el-link>
                        <span class="sep">|</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- 头部下拉内容 -->
        <div class="site-header">
            <div class="container clearfix">
                <div class="header-logo">
                    <el-link :underline="false" class="logo"></el-link>
                </div>
                <div class="header-nav">
                    <ul class="nav-list clearfix">
                        <li
                            class="nav-category nav-item"
                            v-for="(item,index) in allGoods"
                            :key="'index0-'+index"
                            @mouseover="mouseLeaveNavItem"
                        >
                            {{ item.name }}
                            <div class="site-category">
                                <ul class="site-category-list clearfix">
                                    <li
                                        class="category-item"
                                        v-for="(itemson,indexson) in item.children"
                                        :key="indexson"
                                        @mouseover="mouseoverSite(indexson)"
                                        @mouseleave="mouseLeaveSite(indexson)"
                                    >
                                        <div class="title">
                                            {{ itemson.name }}
                                            <span
                                                class="icon icon-arrow-right-bold"
                                            ></span>
                                        </div>
                                        <div
                                            ref="children"
                                            class="children clearfix"
                                            v-if="allGoods[0].children"
                                            v-show="!curSiteCategory"
                                        >
                                            <div
                                                class="children-list"
                                                v-for="(item,index) in allGoods[0].children[curSiteCategory].childrenList"
                                                :key="index"
                                            >
                                                <el-image
                                                    style="width: 40px; height: 40px"
                                                    :src="item.imgUrl"
                                                    fit="fit"
                                                ></el-image>
                                                <span class="desp">{{ item.desp }}</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li
                            class="nav-item"
                            v-for="(item,index) in navCategory"
                            :key="'index1-'+index"
                            @mouseover="mouseoverNavItem(index)"
                        >{{ item.name }}</li>
                        <li class="nav-item">服务</li>
                        <li class="nav-item">社区</li>
                    </ul>
                </div>

                <!-- 搜索框 -->
                <div class="header-search">
                    <el-input placeholder="请输入内容" v-model="search">
                        <el-button
                            slot="append"
                            icon="el-icon-search"
                            @click="searchButton(search)"
                        ></el-button>
                    </el-input>
                </div>
            </div>

            <!-- 鼠标滑过显示 -->
            <div
                ref="headerNavMenu"
                class="header-nav-menu"
                @mouseleave="mouseLeaveNavItem"
            >
                <div class="container">
                    <ul class="children-list clearfix" v-if="navCategory[curNavItem]">
                        <li v-for="(item,index) in navCategory[curNavItem].children" :key="index">
                            <div class="figure-thumb">
                                <el-image
                                    style="width: 160px; height: 110px"
                                    :src="item.imgUrl"
                                    fit="fit"
                                ></el-image>
                            </div>
                            <div class="title">{{ item.desp }}</div>
                            <p class="price">{{ item.price }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 弹窗 -->
        <el-dialog
            title="协议声明"
            width="800px"
            :visible.sync="loginVisible"
            :close-on-click-modal="false"
            :before-close="handleClose"
            :destroy-on-close="true"
            custom-class="login-dialog"
        >
            <div class="desc">
                <span class="agree-tab">《小米商城用户协议》</span>、
                <span class="agree-tab">《小米商城隐私政策》</span>、
                <span class="agree-tab">《小米帐号用户协议》</span>、
                <span class="agree-tab">《小米帐号隐私政策》</span>请您仔细阅读以上协议，其中有对您权利义务的特别约定等重要条款，同意后方可使用本软件
            </div>
            <div class="content">
                感谢您选择中国移动的和彩云服务！本协议是您在使用和彩云服务时与中国移动通信集团有限公司（以下简称“中国移动”）所订立的协议。如您不同意本协议条款或和彩云对其进行的修改，您可以主动取消和彩云提供的服务；您一旦使用和彩云提供的服务，即视为您已了解并完全同意本使用协议中服务条款各项内容，包括和彩云对服务条款所做的任何修改。本协议适用于任何和彩云网盘服务，包括本协议期限内的用户所使用的各项服务和软件的升级和更新。
                一、使用须知
                1、中国移动和彩云是一个向广大用户提供上传空间和技术的信息存储空间服务平台，通过和彩云服务技术为用户提供个人数据存储、同步和分享等在线服务。
                2、和彩云服务本身不直接上传、提供内容，对用户存储的内容不做任何编辑和修改。任何经由和彩云提供的服务上传、发布、传送、存储的文档、图片、音乐、视频、应用程序、或其它资料（以下简称“内容”），无论系公开还是私下传送，均由内容上传者对其行为自行承担责任。和彩云服务作为信息存储空间服务平台，无法控制经由本服务传送之内容，也无法对用户的使用行为进行全面控制，因此不能保证内容的合法性、正确性、完整性、真实性或品质；用户已预知使用本服务时，可能会接触到令人不快、不适当等内容，并同意将自行加以判断并承担所有风险，而不依赖于和彩云服务。
                3、和彩云服务仅提供相关的网络服务，使用和彩云服务所需的设备（如PC、手机等）及费用（如为接入互联网而支付的电话费及上网费、为使用移动网而支付的手机费）均由用户自行负担。
                4、和彩云可向所有用户提供安全、便捷、高效的个人云存储服务，它帮助用户对个人数字内容进行云备份、同步和统一管理：
                ●为了向用户提供更及时的自动备份、同步服务，当手机开启后将在后台运行驻留进程，以及时获取照片、视频、日历、通讯录、短彩信的更新变化；
                ●为了使用和彩云的通讯录服务，首次安装或更换SIM卡时，会调用用户手机发送短信以完成注册，该短信不收取任何费用；
                ●为使客户及时、全面了解中国移动及和彩云提供的各项服务，经客户同意，和彩云可向其推送相关市场营销、产品信息、客户服务信息等相关信息；
                ●用户使用照片、视频、日历、通讯录、短彩信等相关云备份、同步服务，和彩云会读取和传送用户通讯录、短信数据、彩信数据、日历数据、本地图片、本地视频信息；
                ●用户使用短信分享、分享给其他用户功能，将上传分享接收人手机号码到服务器，由系统向接收人发送分享短信，对用户不产生短信费用；
                ●用户进行上传、下载、备份、恢复同步操作以及使用自动备份、同步服务均会使用移动通信网络或WLAN网络连接与和彩云服务端进行数据交换而产生网络流量；
                ●和彩云应用故障时自动上报日志，日志仅用于故障定位分析；
                ●了使用和彩云的自动登录服务，用户使用帐号和密码登录时默认同意保存帐号和密码信息或使用中国移动数据网络下启动客户端会调用本机号码注册并登录。
                5、和彩云始终在不断优化和改进服务。和彩云有权在必要时通过在网页上发出公告等合理方式修改本用户协议及各单项服务的相关协议。客户在享受各项服务时，应及时查阅了解修改的内容，并自觉遵守修改后的用户协议及各单项服务的相关协议。如客户继续使用服务，则视为客户已同意修改的内容，发生有关争议时，以最新的用户协议为准；如客户不同意修改内容，则应停止使用该项服务。
                6、若用户使用和彩云服务的行为不符合本协议，和彩云在经由通知、举报等途径发现时有权做出独立判断，且有权在无需事先通知用户的情况下立即终止向用户提供部分或全部服务。用户若通过和彩云服务散布和传播反动、色情或其他违反国家法律、法规的信息，和彩云服务的系统记录有可能作为用户违反法律法规的证据；因用户进行上述内容在和彩云服务的上载、传播而导致任何第三方提出索赔要求或衍生的任何损害或损失，由用户自行承担全部责任。
                7、移动认证号与手机号码解绑后，不保留用户的和彩云数字资产，移动认证号与手机号码解绑情形包括但不限于：手机号码销户、取消移动认证任意基础业务、携号转网、换号、过户等；
                8、和彩云用户携号转网注意事项：
                (1) 用户从其它运营商携号转网至中国移动，在携入发生后，用户的和彩云账号资产不受影响，对应的运营商属性，将自动调整。
                (2) 用户从中国移动携号转网至其它运营商，用户的和彩云账号将按注销处理，与和彩云账号相关联的资产将被清空。用户应提前自行备份保存和彩云网盘、和笔记、家庭相册、139邮箱等全部资产。对于用户携号转网引发的包括但不限于用户数据丢失、泄露等问题及纠纷由用户自行承担责任，中国移动不承担任何责任。
                (3) 如果客户对携号转网有任何疑问，请拨打客户服务电话：10086进行咨询并在咨询后再进行转网。
                9、和彩云基础功能使用不收取任何费用，部分增值服务是以收费方式提供的，如您使用收费服务，请遵守相关的协议，当使用话费支付方式订购包月增值业务时，次月会默认续期，每月自动扣费，如客户需终止订购增值业务，应及时向和彩云提出申请，客户申请自受理后将于下一计费周期生效。如客户使用第三方支付方式（包括但不限于支付宝和微信支付）进行增值业务订购的，则需客户每月手动进行续订。和彩云可能根据实际需要对收费服务的收费标准、方式进行修改和变更，和彩云也可能会对部分不收费服务开始收费。前述修改、变更或开始收费前，和彩云将在对应的服务页面进行通知或公告等方式通知客户。和彩云保留变更或终止服务的权利。如果您不同意上述修改、变更或付费内容，则应及时向和彩云申请停止相关增值服务业务的订购，客户申请自受理后将于下一计费周期生效。
                二、所有权
                1、和彩云保留对以下各项内容、信息完全的、不可分割的所有权及知识产权：
                ●除用户自行上传、传播的内容外，和彩云服务及其所有元素，包括但不限于所有内容、数据、技术、软件、代码、用户界面以及与其相关的任何衍生作品；
                ●用户信息；
                ●用户向和彩云服务提供的与该平台服务相关的任何信息及反馈。
                未经中国移动同意，上述资料均不得在任何媒体直接或间接发布、播放、出于播放或发布目的而改写或再发行，或者被用于其他任何商业目的。上述资料或其任何部分仅可作为私人用途而保存在某台计算机内。和彩云服务不就由上述资料产生或在传送或递交全部或部分上述资料过程中产生的延误、不准确、错误和遗漏或从中产生或由此产生的任何损害赔偿，以任何形式向用户或任何第三方负法律、经济责任；
                2、和彩云服务为提供网络服务而使用的任何软件（包括但不限于软件中所含的任何图像、照片、动画、录像、录音、音乐、文字和附加程序、随附的帮助材料）的一切权利均属于该软件的著作权人，未经该软件的著作权人许可，用户不得对该软件进行反向工程（reverse engineer）、反向编译（decompile）或反汇编（disassemble），或以其他方式发现其原始编码，以及实施任何涉嫌侵害著作权的行为。
                三、承诺与保证
                1、用户向和彩云服务上传的内容不得并禁止直接或间接的：
                ●以任何方式干扰或企图干扰和彩云服务任何部分或功能的正常运行；
                ●未获得中国移动事先书面同意以书面格式或图形方式使用源自和彩云的任何注册或未注册的作品、服务标志、公司徽标(LOGO)、URL或其他标志；
                ●使用任何标志，包括但不限于以对此类标志的所有者的权利的玷污、削弱和损害的方式使用和彩云标志，或者以违背本协议的方式为自己或向其他任何人设定或声明设定任何义务或授予任何权利或权限；
                用户违反上述任何一款的保证，中国移动均有权就其情节，对其做出警告、屏蔽、直至取消资格的处罚，中国移动有权封禁该帐号网盘功能或取消该帐号会员资格而无须给与任何补偿；如因用户违反上述保证而给和彩云服务、和彩云服务用户或中国移动的任何合作伙伴造成损失，用户自行负责承担一切法律责任并赔偿损失。
                2、用户利用和彩云服务提供的网络服务上传、发布、传送或通过其他方式传播的内容，不得含有任何违反国家法律法规政策的信息，包括但不限于下列信息：
                (1) 反对宪法所确定的基本原则的；
                (2) 危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；
                (3) 损害国家荣誉和利益的；
                (4) 煽动民族仇恨、民族歧视，破坏民族团结的；
                (5) 破坏国家宗教政策，宣扬邪教和封建迷信的；
                (6) 散布谣言，扰乱社会秩序，破坏社会稳定的；
                (7) 散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；
                (8) 侮辱或者诽谤他人，侵害他人合法权益的；
                (9) 含有法律、行政法规禁止的其他内容的信息；
                如因用户利用和彩云服务提供的网络服务上传、发布、传送或通过其他方式传播的内容存在权利瑕疵或侵犯了第三方的合法权益（包括但不限于专利权、商标权、著作权及著作权邻接权、肖像权、隐私权、名誉权等）而导致中国移动或与中国移动合作的其他单位面临任何投诉、举报、质询、索赔、诉讼；或者使中国移动或者与中国移动合作的其他单位因此遭受任何名誉、声誉或者财产上的损失，用户应积极地采取一切可能采取的措施，以保证中国移动及与中国移动合作的其他单位免受上述索赔、诉讼的影响。同时用户对中国移动及与中国移动合作的其他单位因此遭受的直接及间接经济损失负有全部的损害赔偿责任。
                四、隐私保护
                尊重用户个人隐私是中国移动的一贯要求，中国移动有严格的制度保护用户隐私信息。和彩云将会采取合理的措施保护用户的个人隐私信息，除法律或有法律赋予权限的政府部门要求等原因外，未经用户同意不向除本业务运营支撑等合作单位以外的第三方公开、透露用户个人隐私信息。
                五、知识产权保护
                如果用户上传的内容允许其他用户下载、查看或以其他方式访问或分发，其必须保证该内容的发布和相关行为实施符合相关知识产权法律法规中相关的版权政策，包括但不限于：
                ●用户在收到侵权通知之时，应立即删除或禁止访问声明的侵权内容，并同时联系递送通知的人员以了解详细信息。
                ●用户知悉并同意中国移动根据相关法律法规对第三方发出的合格的侵权通知进行处理，中国移动有权按照要求删除或禁止访问声明的侵权内容，采用并实施适当的政策，以期杜绝在相应条件下重复侵权。
                六、免责声明
                1、鉴于网络服务的特殊性，用户同意和彩云服务有权在提前告知用户的情况下变更、中断或终止部分或全部的网络服务。无需对任何用户或任何第三方承担任何责任。
                2、和彩云服务需要定期或不定期地对提供网络服务的平台或相关的设备进行检修或者维护，如因此类情况而造成收费网络服务在合理时间内的中断，和彩云服务无需为此承担任何责任，但和彩云服务应尽可能事先进行通告。
                3、和彩云服务不保证（包括但不限于）：
                ●和彩云服务适合用户的使用要求；
                ●和彩云服务不受干扰，及时、安全、可靠或不出现错误；及用户经由和彩云服务取得的任何产品、服务或其他材料符合用户的期望;
                ●用户使用经由和彩云服务下载或取得的任何资料，其风险由用户自行承担；因该等使用导致用户电脑系统损坏或资料流失，用户应自己负完全责任。
                4、由于用户授权第三方（包括第三方应用）访问/使用其和彩云服务空间的内容所导致的纠纷或损失，应由用户自行负责，与中国移动无关。
                5、用户因通讯线路故障、技术问题、网络、电脑故障、系统不稳定性及其他各种不可抗力事件影响到服务的正常运行的，中国移动及合作单位承诺在第一时间内与相关单位配合，及时处理进行修复，但用户因此而遭受的一切损失，中国移动及合作单位不承担责任。
                6、本服务同大多数互联网服务一样，受包括但不限于用户原因、网络服务质量、社会环境等因素的差异影响，可能受到各种安全问题的侵扰，如他人利用用户的资料，造成现实生活中的骚扰；用户下载安装的其它软件或访问的其他网站中含有“特洛伊木马”等病毒，威胁到用户的计算机信息和数据的安全，继而影响本服务的正常使用等等。对因此导致用户不能正常使用服务的，中国移动不承担任何责任。用户应加强信息安全及使用者资料的保护意识，要注意加强密码保护，以免遭致损失和骚扰。
                7、用户在使用本服务过程中存在有来自任何他人的包括威胁性的、诽谤性的、令人反感的或非法的内容或行为或对他人权利的侵犯（包括知识产权）的匿名或冒名的信息的风险，用户确认并同意承担以上风险，中国移动和合作公司对本服务不作任何类型的担保，不论是明确的或隐含的，包括所有有关信息真实性、适商性、适于某一特定用途、所有权和非侵权性的默示担保和条件，对因此导致任何因用户不正当或非法使用服务产生一切损失不承担任何责任。
                8、在任何情况下，中国移动均不对任何间接性、后果性、惩罚性、偶然性、特殊性或刑罚性的损害承担责任。尽管本协议中可能含有相悖的规定，中国移动对您承担的全部责任，无论因何原因或何种行为方式，始终不超过您在成员期内因使用和彩云服务而支付给中国移动的费用(如有)。
                七、其他条款
                1、郑重提醒用户注意本《协议》中免除中国移动责任和加重用户义务的条款，请用户仔细阅读，自主考虑风险。未成年人应在法定监护人的陪同下阅读本《协议》，并应取得您的监护人的同意。
                2、本《协议》所定的任何条款的部分或全部无效者，不影响其它条款的效力。
                3、本《协议》签订地为广州。本《协议》的解释、效力及纠纷的解决，适用于中华人民共和国法律。若用户和中国移动之间发生任何纠纷或争议，首先应友好协商解决，协商不成的，用户在此完全同意将纠纷或争议提交广州市天河区人民法院管辖。
                4、本《协议》的版权由中国移动所有，对本协议及产品政策的所有内容享有修订权及法律范围内的解释权。
                5、若您对中国移动及本服务有任何意见，欢迎垂询中国移动客服中心。
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="$router.push('/login')">同 意</el-button>
                <el-button @click="loginVisible = false">不同意</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: "CommonHeader",
    data() {
        return {
            topbarNav: [], // 左侧导航
            topbarInfo: [], // 登录注册
            loginVisible: false, // 登录弹窗
            search: "", // 搜索
            allGoods: [], // 全部商品分类
            navCategory: [], // 商品类别
            curNavItem: 0, // NavItem部分
            curSiteCategory: 0, // 全部商品部分
        };
    },
    created() {
        this.getHeadDataList();
    },
    methods: {
        // 获取数据
        async getHeadDataList() {
            await this.$api.getHeadDataList().then((res) => {
                this.topbarNav = res.data.topbarNav;
                this.topbarInfo = res.data.topbarInfo;
                this.allGoods = res.data.allGoods;
                this.navCategory = res.data.navCategory;
            });
        },

        // 判断点击事件
        clickEvent(index) {
            switch (index) {
                case 0:
                    this.isLoginVisible();
                    break;
                case 1:
                    this.registered();
                    break;
                case 2:
                    break;
            }
        },

        // 打开用户协议弹窗
        isLoginVisible() {
            this.loginVisible = true;
        },

        // 关闭用户协议弹窗
        handleClose(done) {
            done();
        },

        // 注册
        registered() {
            console.log(222);
        },

        // 搜索按钮
        searchButton(item) {
            if (this.search.trim()) {
                console.log(item);
            }
        },

        // 头部类别部分鼠标移入
        mouseoverNavItem(index) {
            this.curNavItem = index;
            this.$refs.headerNavMenu.style.height = 229 + "px";
            this.$refs.headerNavMenu.style.borderTop = "1px solid #e0e0e0";
        },

        // 头部类别部分鼠标移出
        mouseLeaveNavItem() {
            this.$refs.headerNavMenu.style.height = 0;
            this.$refs.headerNavMenu.style.borderTop = "none";
        },

        // 左侧全部商品部分移入
        mouseoverSite(index) {
            this.curSiteCategory = index;
            this.$nextTick(() => {
                this.$refs.children[index].style.display = "block";
            });
        },

        // 左侧全部商品部分移出
        mouseLeaveSite(index) {
            this.$nextTick(() => {
                this.$refs.children[index].style.display = "none";
            });
        },
    },
};
</script>

<style lang='scss' scoped>
.common-header /deep/ {
    width: 100%;

    .header {
        background: #333;

        .site-topbar {
            width: 1226px;
            margin-right: auto;
            margin-left: auto;
            font-size: 12px;
            color: #b0b0b0;
            z-index: 30;
            height: 40px;
        }

        .el-link-wrap {
            display: flex;
        }

        .el-link-wrap:last-child .sep {
            display: none;
        }

        .el-link {
            font-size: 12px;
            color: #b0b0b0;

            &:hover {
                color: #ff6700;
            }
        }

        .sep {
            margin: 0 0.5em;
            color: #424242;
        }

        // 左侧导航
        .topbar-nav {
            float: left;
            height: 40px;
            line-height: 40px;
            display: flex;
        }

        // 登录注册
        .topbar-info {
            float: right;
            height: 40px;
            line-height: 40px;
            display: flex;
        }

        // 购物车
        .topbar-cart {
            position: relative;
            float: right;
            width: 120px;
            height: 40px;
            margin-left: 15px;
            -webkit-transition: all 0.2s;
            transition: all 0.2s;
            font-size: 12px;
            cursor: pointer;

            .cart-mini {
                position: relative;
                z-index: 32;
                display: block;
                height: 40px;
                line-height: 40px;
                text-align: center;
                color: #b0b0b0;
                background: #424242;

                .icon-gouwuche {
                    margin-right: 4px;
                    font-size: 20px;
                    vertical-align: bottom;
                }
            }

            .cart-menu {
                position: absolute;
                right: 0;
                top: 40px;
                z-index: 31;
                width: 316px;
                height: 0;
                color: #424242;
                background: #fff;
                -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
                overflow: hidden;
                -webkit-transition: height 0.3s;
                transition: height 0.3s;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            &:hover .cart-mini {
                color: #ff6700;
                background: #fff;
            }

            &:hover .cart-menu {
                height: 100px;
            }
        }
    }

    .site-header {
        z-index: 20;
        height: 100px;

        .container {
            height: 100%;

            .header-logo {
                float: left;
                width: 62px;
                margin-top: 22px;

                .logo {
                    position: relative;
                    display: block;
                    width: 55px;
                    height: 55px;
                    overflow: hidden;
                    background-color: #ff6700;

                    &::before,
                    &::after {
                        position: absolute;
                        left: 0;
                        top: 0;
                        z-index: 1;
                        width: 55px;
                        height: 55px;
                        content: "";
                        -webkit-transform-origin: 50% 50%;
                        -ms-transform-origin: 50% 50%;
                        transform-origin: 50% 50%;
                        -webkit-transition: all 0.2s;
                        transition: all 0.2s;
                    }

                    &::before {
                        background: url("~@/assets/images/home/mi-logo.png")
                            no-repeat 50% 50%;
                        opacity: 1;
                    }

                    &::after {
                        background: url("~@/assets/images/home/mi-home.png")
                            no-repeat 50% 50%;
                        opacity: 0;
                        margin-left: -55px;
                    }
                }

                .logo:after,
                .logo:before {
                    -webkit-transform: translateZ(0);
                    transform: translateZ(0);
                }

                .logo:hover::after,
                .logo:hover::before {
                    -webkit-transform: translate3d(55px, 0, 0);
                    transform: translate3d(55px, 0, 0);
                }

                .logo:hover:before {
                    opacity: 0;
                }

                .logo:hover:after {
                    opacity: 1;
                }
            }

            .header-nav {
                float: left;

                .nav-list {
                    z-index: 10;
                    font-size: 16px;
                    margin-left: 30px;
                    height: 100px;

                    .nav-item {
                        float: left;
                        padding: 0 15px;
                        cursor: pointer;
                        position: relative;
                        height: 100%;
                        line-height: 100px;

                        .site-category {
                            position: absolute;
                            top: 101px;
                            left: -92px;
                            z-index: 21;
                            width: 234px;
                            height: 460px;
                            font-size: 14px;
                            display: none;

                            .site-category-list {
                                margin: 0;
                                padding: 20px 0;
                                list-style-type: none;
                                border: 1px solid #ff6700;
                                color: #424242;
                                background: #fff;

                                .title {
                                    position: relative;
                                    display: block;
                                    padding-left: 30px;
                                    height: 42px;
                                    line-height: 42px;
                                    color: #424242;

                                    &:hover {
                                        color: #fff;
                                        background: #ff6700;
                                    }

                                    .icon {
                                        position: absolute;
                                        top: 12px;
                                        right: 20px;
                                        font-size: 16px;
                                        line-height: 16px;
                                        color: #e0e0e0;
                                    }
                                }

                                // 子级
                                .children {
                                    width: 992px;
                                    position: absolute;
                                    left: 234px;
                                    top: 0;
                                    z-index: 24;
                                    height: 462px;
                                    border: 1px solid #e0e0e0;
                                    border-left: 0;
                                    background: #fff;
                                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.18);
                                    display: none;

                                    .children-list {
                                        width: 25%;
                                        height: 77px;
                                        padding: 18px 20px;
                                        display: flex;
                                        align-items: center;
                                        float: left;

                                        .desp {
                                            white-space: nowrap;
                                            text-overflow: ellipsis;
                                            overflow: hidden;
                                            line-height: 20px;
                                            padding-left: 10px;
                                        }
                                    }
                                }
                            }
                        }

                        &:hover {
                            color: #ff6700;
                        }
                    }

                    .nav-category:hover .site-category {
                        display: block;
                    }
                }
            }

            .header-search {
                float: right;
                width: 296px;
                margin-top: 30px;

                .el-input-group--append {
                    .el-input__inner {
                        border-right: none;
                    }
                }

                .el-input-group__append {
                    background: #409eff;
                    color: #fff;
                    border: 1px solid #409eff;

                    &:hover {
                        background: #409eff;
                        color: #fff;
                        border-color: #409eff;
                    }
                }
            }
        }

        .header-nav-menu {
            position: absolute;
            top: 140px;
            left: 0;
            z-index: 24;
            width: 100%;
            height: 0;
            background: #fff;
            -webkit-box-shadow: 0 3px 4px rgba(0, 0, 0, 0.18);
            box-shadow: 0 3px 4px rgba(0, 0, 0, 0.18);
            -webkit-transition: height 0.3s, -webkit-box-shadow 0.2s;
            transition: height 0.3s, -webkit-box-shadow 0.2s;
            transition: box-shadow 0.2s, height 0.3s;
            transition: box-shadow 0.2s, height 0.3s, -webkit-box-shadow 0.2s;
            overflow: hidden;

            .children-list {
                margin: 0;
                padding: 0;
                list-style-type: none;
                font-size: 12px;

                li {
                    position: relative;
                    float: left;
                    width: 204px;
                    padding: 35px 12px 0;
                    text-align: center;
                    cursor: pointer;

                    .figure-thumb {
                        width: 160px;
                        height: 110px;
                        margin: 0 auto 16px;
                        text-align: center;
                    }

                    .title {
                        color: #333;
                        line-height: 20px;
                    }

                    .price {
                        margin: 0;
                        line-height: 20px;
                        color: #ff6700;
                        font-size: 12px;
                    }

                    &::before {
                        position: absolute;
                        left: 0;
                        top: 35px;
                        z-index: 1;
                        width: 1px;
                        height: 100px;
                        content: "";
                        background-color: #e0e0e0;
                    }

                    &:first-child::before {
                        display: none;
                    }
                }
            }
        }
    }

    // 内容部分
    .page-main {
        background: #f5f5f5;
        padding-bottom: 80px;
    }
}

// 登录弹窗
.login-dialog {
    .desc {
        margin-bottom: 20px;

        .agree-tab {
            color: #ff6700;
            cursor: pointer;
        }
    }

    .content {
        max-height: 300px;
        overflow: auto;
        font-size: 14px;
        line-height: 24px;
        text-align: left;
    }
}
</style>
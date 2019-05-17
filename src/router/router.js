import Main from '@/views/Main.vue'
export const mainRouter = {
        path: '/',
        name: 'main',
        redirect: '/login',
        component: Main,
        children: [
            //下载APK
            {
                path: 'download',
                name: 'download',
                component: () => import('@/views/home/download.vue'),
            },
            //发票统计
            {
                path: 'invoice',
                name: 'invoice',
                component: () => import('@/views/home/invoice.vue'),
            },
            //统计报表
            {
                path: 'charts',
                name: 'charts',
                component: () => import('@/views/home/charts.vue'),
            },
            //公海列表
            {
                path: 'public/list',
                name: 'public-list',
                component: () => import('@/views/public/public-list.vue'),
            },
            // 公海客户信息
            {
                path: 'public/info',
                name: 'public-info',
                component: () => import('@/views/public/public-info.vue'),
            },
            //测试
            {
                path: 'test',
                name: 'test',
                component: () => import('@/views/my/test.vue'),
            },
            //我的
            {
                path: 'my',
                name: 'my',
                component: () => import('@/views/my/my.vue'),
            },
            //头像
            {
                path: 'my/photo',
                name: 'my-photo',
                component: () => import('@/views/my/my-photo.vue'),
            },
            //修改图片
            {
                path: 'my/photoEdit',
                name: 'photoEdit',
                component: () => import('@/views/my/photo-edit.vue'),
            },
            //我的信息
            {
                path: 'my/info',
                name: 'my-info',
                component: () => import('@/views/my/my-info.vue'),
            },
            //修改电话
            {
                path: 'my/telphone',
                name: 'modify-telphone',
                component: () => import('@/views/my/modify-telphone.vue'),
            },
            //修改密码
            {
                path: 'my/password',
                name: 'modify-password',
                component: () => import('@/views/my/modify-password.vue'),
            },
            //签名维护
            {
                path: 'my/sign',
                name: 'my-sign',
                component: () => import('@/views/my/my-sign.vue'),
            },
            //修改密码
            {
                path: 'my/sign/password',
                name: 'sign-password',
                component: () => import('@/views/my/sign-password.vue'),
            },
            //设置密码
            {
                path: 'my/sign/setpass',
                name: 'sign-setpass',
                component: () => import('@/views/my/sign-setpass.vue'),
            },
            //修改签名
            {
                path: 'my/sign/setting',
                name: 'sign-setting',
                component: () => import('@/views/my/sign-setting.vue'),
            },
            //吐槽与建议
            {
                path: 'my/proposal',
                name: 'my-proposal',
                component: () => import('@/views/my/my-proposal.vue'),
            },
            //私海客户信息
            {
                path: 'private/info',
                name: 'private-info',
                component: () => import('@/views/private/private-info.vue'),
            },
            //客户跟进列表
            {
                path: 'follow/list',
                name: 'follow-list',
                component: () => import('@/views/follow/follow-list.vue'),
            },
            //跟进详情
            {
                path: 'follow/detail',
                name: 'follow-detail',
                component: () => import('@/views/follow/follow-detail.vue'),
            },
            //下属列表
            {
                path: 'under/list',
                name: 'under-list',
                component: () => import('@/views/private/under-list.vue'),
            },
            //私海列表
            {
                path: 'private/list',
                name: 'private-list',
                component: () => import('@/views/private/private-list.vue'),
            },
            //新增客户
            {
                path: 'private/addCustomer',
                name: 'add-customer',
                component: () => import('@/views/private/add-customer.vue'),
            },
            //客户信息
            {
                path: 'company/info',
                name: 'company-info',
                component: () => import('@/views/company/company-info.vue'),
            },
            //关联客户
            {
                path: 'company/relation',
                name: 'relation-company',
                component: () => import('@/views/company/relation-company.vue'),
            },
            //添加关联客户
            {
                path: 'private/addRelation',
                name: 'private-addRelation',
                component: () => import('@/views/private/add-relation.vue'),
            },
            //联合跟进人
            {
                path: 'private/people',
                name: 'private-people',
                component: () => import('@/views/private/add-people.vue'),
            },

            //私海联系人列表
            {
                path: 'private/contact',
                name: 'private-contact',
                component: () => import('@/views/private/private-contact.vue'),
            },
            //添加联系人
            {
                path: 'private/addContact',
                name: 'add-contact',
                component: () => import('@/views/private/add-contact.vue'),
            },
            //写跟进
            {
                path: 'private/addFollow',
                name: 'add-follow',
                component: () => import('@/views/private/add-follow.vue'),
            },
            //联系人跟进列表
            {
                path: 'follow/contact',
                name: 'contact-follow',
                component: () => import('@/views/follow/contact-follow.vue'),
            },
            //联系人列表
            {
                path: 'contact/contactList',
                name: 'contact-list',
                component: () => import('@/views/contact/contact-list.vue'),
            },
            //联系人详情
            {
                path: 'contact/contactInfo',
                name: 'contact-info',
                component: () => import('@/views/contact/contact-info.vue'),
            },
            //跟进记录
            {
                path: 'follow/home',
                name: 'home-follow',
                component: () => import('@/views/follow/home-follow.vue'),
            },

            //我发布的
            {
                path: 'task/my',
                name: 'my-task',
                component: () => import('@/views/task/my-task.vue'),
            },
            //我负责的
            {
                path: 'task/response',
                name: 'my-response',
                component: () => import('@/views/task/my-response.vue'),
            },
            //我执行的
            {
                path: 'task/operate',
                name: 'my-operate',
                component: () => import('@/views/task/my-operate.vue'),
            },
            //抄送我的
            {
                path: 'task/cc',
                name: 'my-cc',
                component: () => import('@/views/task/my-cc.vue'),
            },
            //下属任务
            {
                path: 'task/all',
                name: 'task-all',
                component: () => import('@/views/task/task-all.vue'),
            },
            //发布任务
            {
                path: 'task/release',
                name: 'task-release',
                component: () => import('@/views/task/task-release.vue'),
            },
            //任务详情
            {
                path: 'task/info',
                name: 'task-info',
                component: () => import('@/views/task/task-info.vue'),
            },
            //更多追加需求
            {
                path: 'task/addition',
                name: 'addition-list',
                component: () => import('@/views/task/addition-list.vue'),
            },
            //轨迹列表
            {
                path: 'task/log',
                name: 'log-list',
                component: () => import('@/views/task/log-list.vue'),
            },
            //接受任务
            {
                path: 'task/accept',
                name: 'accept-task',
                component: () => import('@/views/task/accept-task.vue'),
            },
            //变更负责人
            {
                path: 'task/change',
                name: 'change-leader',
                component: () => import('@/views/task/change-leader.vue'),
            },
            //负责人编辑
            {
                path: 'task/response/edit',
                name: 'response-edit',
                component: () => import('@/views/task/response-edit.vue'),
            },
            //发布人编辑
            {
                path: 'task/release/edit',
                name: 'release-edit',
                component: () => import('@/views/task/release-edit.vue'),
            },
            //发布人重启
            {
                path: 'task/restart',
                name: 'task-restart',
                component: () => import('@/views/task/task-restart.vue'),
            },
            //追加需求
            {
                path: 'task/add',
                name: 'add-request',
                component: () => import('@/views/task/add-request.vue'),
            },
            //通知列表
            {
                path: 'notice/list',
                name: 'notice-list',
                component: () => import('@/views/notice/notice-list.vue'),
            },
            //通讯录
            {
                path: 'tel/list',
                name: 'tel-book',
                component: () => import('@/views/tel/tel-book.vue'),
            },
            //流程中心-人事流程-列表
            {
                path: 'process/process-personnel',
                name: 'process-personnel',
                component: () => import('@/views/process/process-personnel.vue'),
            },
            //流程中心-我的流程-我申请的
            {
                path: 'process/process-my',
                name: 'process-my',
                component: () => import('@/views/process/process-my.vue'),
            },
            //流程中心-我的流程-待我审批的
            {
                path: 'process/process-notexamine',
                name: 'process-notexamine',
                component: () => import('@/views/process/process-notexamine.vue'),
            },
            //流程中心-我的流程-我已审批的
            {
                path: 'process/process-examined',
                name: 'process-examined',
                component: () => import('@/views/process/process-examined.vue'),
            },
            //流程中心-我的流程-抄送我的
            {
                path: 'process/process-send',
                name: 'process-send',
                component: () => import('@/views/process/process-send.vue'),
            },
            //流程中心-我的流程-请假详情
            {
                path: 'process/vacation-info',
                name: 'vacation-info',
                component: () => import('@/views/process/vacation-info.vue'),
            },//流程中心-我的流程-加班详情
            {
                path: 'process/overtime-info',
                name: 'overtime-info',
                component: () => import('@/views/process/overtime-info.vue'),
            },
            //加班申请
            {
                path: 'process/overtime-apply',
                name: 'overtime-apply',
                component: () => import('@/views/process/overtime-apply.vue'),
            },
        ]
    };

export const routers = [
    loginRouter,
    mainRouter
];

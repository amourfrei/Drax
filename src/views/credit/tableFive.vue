<template>
  <div>
  <a-table :columns="columns" :dataSource="data" :scroll="{ x: 2500}">
    <!-- <a slot="action" slot-scope="text" href="javascript:;">
      <span @click="showConfirm">认领 | </span> 
      <span @click="showModal2">查看 | </span>
      <span @click="showModal">审批</span>
    </a> -->
  </a-table>
  <a-modal
      title="初审人：Bruno"
      :visible="visible"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
      cancelText="驳回"
      okText="通过"
    >
    <a-row>
      <a-col :span="8">申请额度： 500000</a-col>
      <a-col class="text-align-right" :span="8" :offset="8">贷款期限：12个月</a-col>
    </a-row>
    <a-row>
      <a-col>
        <textarea class="approval-opinion" rows="5"></textarea>
      </a-col>
    </a-row>
  </a-modal>

  <a-modal
      title="申请单：5917 登录名字：Bruno"
      :visible="visible2"
      @ok="handleOk2"
      :confirmLoading="confirmLoading2"
      @cancel="handleCancel2"
      :width="900"
    >
    <a-form layout="inline">
    <a-row>
      <a-col>
        <h3>授信人渠道</h3>
      </a-col>
    </a-row>
    <a-row :gutter="48">
          <a-col :md="8" :sm="24">
            <a-form-item label="渠道">
              SMB
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="企业类型">
              自助申请企业
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="授信额度/消费上限">
             10000.00
            </a-form-item>
          </a-col>
    </a-row>
    <a-divider dashed />
    <a-row>
      <a-col>
        <h3>单位信息</h3>
      </a-col>
    </a-row>
    <a-row :gutter="48">
          <a-col :md="8" :sm="24">
            <a-form-item label="单位名称">
              成都携恩科技有限公司
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="实际经营地址">
              成都市高新区G1103
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="单位电话">
             028-85337235
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="员工数">
             20
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="主营业务">
             系统集成
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="年营业额">
             1000~2000万
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="电核备注">
             电话可查
            </a-form-item>
          </a-col>
    </a-row>

    <a-divider dashed />
    <a-row>
      <a-col>
        <h3>法人代表信息</h3>
      </a-col>
    </a-row>
    <a-row :gutter="48">
          <a-col :md="8" :sm="24">
            <a-form-item label="姓名">
              刘洋
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="身份证号">
              513101198401210510
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="手机号">
             13908000429
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="电核备注">
             未取得联系
            </a-form-item>
          </a-col>
    </a-row>

    <a-divider dashed />
    <a-row>
      <a-col>
        <h3>财务控管人</h3>
      </a-col>
    </a-row>
    <a-row :gutter="48">
          <a-col :md="8" :sm="24">
            <a-form-item label="姓名">
              李雪梅
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="所在部门">
              财务
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="手机号">
             18683958245
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="办公座机">
             028-85337235
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="工作邮箱">
             lxm@shine-tec.com
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="电核备注">
             财务部负责人，硬件，电脑耗材
            </a-form-item>
          </a-col>
    </a-row>

    <a-divider dashed />
    <a-row>
      <a-col>
        <h3>紧急联系人</h3>
      </a-col>
    </a-row>
    <a-row :gutter="48">
          <a-col :md="8" :sm="24">
            <a-form-item label="姓名">
              周艳
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="所在部门">
              采购
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="手机号">
             13880259882
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="办公座机">
             028-85337235
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="工作邮箱">
             zhouyan@shine-tec.com
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="电核备注">
             未取得联系
            </a-form-item>
          </a-col>
    </a-row>

    <a-divider dashed />
    <a-row>
      <a-col>
        <h3>审批意见</h3>
      </a-col>
    </a-row>
    <a-row :gutter="48">
          <a-col :md="8" :sm="24">
            <a-form-item label="审批人">
              yanliuyi3
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="金融初审审批">
              通过审批
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="审批时间">
             2018-5-19 09:09:40
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="审核意见备注">
             同意
            </a-form-item>
          </a-col>
    </a-row>

    <a-row :gutter="48">
          <a-col :md="8" :sm="24">
            <a-form-item label="审批人">
              yaoshuya
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="授信终审审批">
              通过审批
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="审批时间">
             2018-5-20 10:08:40
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="审核意见备注">
             通过
            </a-form-item>
          </a-col>
    </a-row>

    </a-form>
    </a-modal>
  </div>
</template>
<script>
const columns = [
  { title: '序号', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: '申请时间', dataIndex: 'val1', key: '1', width: 150 },
  { title: '贷款单编号', dataIndex: 'val2', key: '2', width: 150 },
  { title: '初审完成时间', dataIndex: 'val3', key: '3', width: 150 },
  { title: '初审审核人', dataIndex: 'val4', key: '4', width: 150 },
  { title: '复审完成时间', dataIndex: 'val17', key: '17', width: 150 },
  { title: '复审审核人', dataIndex: 'val18', key: '18', width: 150 },
  { title: '复审审核状态', dataIndex: 'val19', key: '19', width: 150 },
  { title: '客户编号', dataIndex: 'val6', key: '6', width: 150 },
  { title: '客户名称', dataIndex: 'val7', key: '7', width: 150 },
  { title: '放款主体', dataIndex: 'val8', key: '8', width: 150 },
  { title: '还款方式', dataIndex: 'val9', key: '9', width: 150 },
  { title: '贷款期限', dataIndex: 'val10', key: '10', width: 150 },
  { title: '日利率 %/天', dataIndex: 'val11', key: '11', width: 150 },
  { title: '可贷金额', dataIndex: 'val12', key: '12', width: 150 },
  { title: '贷款金额', dataIndex: 'val13', key: '13', width: 150 },
  { title: '还款金额', dataIndex: 'val14', key: '14', width: 150 },
  { title: '还款时间', dataIndex: 'val15', key: '15', width: 150 },
  { title: '备注', dataIndex: 'val16', key: '16', width: 150 },
];

const data = [{
    key: 1,
    name: '1',
    val1: '2019-4-25 08:12:51',
    val2: `443534534`,
    val3: '2019-4-25 14:34:23',
    val4: '张三',
    val6: 'wangwu',
    val7: 'xx公司',
    val8: 'xx小贷',
    val9: '先息后本',
    val10: '6个月',
    val11: '0.05%',
    val12: '1,000,000.00',
    val13: '1,000,000.00',
    val14: '1,090,000.00',
    val15: '2019-10-25',
    val16: '资料不全，有待补充',
    val17: '2019-4-25 15:43:35',
    val18: '李四',
    val19: '已驳回'
}];
for (let i = 2; i < 100; i++) {
  data.push({
    key: i,
    name: `${i}`,
    val1: '2019-4-25 11:41:51',
    val2: `${443534534 + i}`,
    val3: '2019-4-25 14:34:23',
    val4: '张三',
    val6: 'zhangwei37',
    val7: 'xx公司',
    val8: 'xx小贷',
    val9: '每月等额',
    val10: '12个月',
    val11: '0.05%',
    val12: '1,000,000.00',
    val13: '500,000.00',
    val14: '590,000.00',
    val15: '2020-4-25',
    val16: '',
    val17: '2019-4-25 15:55:24',
    val18: '李四',
    val19: '已通过'
  });
}

export default {
  data() {
    return {
      data,
      columns,
      visible:false,
      visible2: false,
      confirmLoading: false,
      confirmLoading2: false
    }
  },
  methods: {
     showConfirm() {
      this.$confirm({
        title: '认领人：Bruno',
        content: '确认认领该笔贷款单？',
        onOk() {
        },
        onCancel() {},
      });
    },
    showModal() {
      this.visible = true
    },
    handleOk(e) {
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel(e) {
      this.visible = false
    },
    showModal2() {
      this.visible2 = true
    },
    handleOk2(e) {
      this.confirmLoading2 = true;
      setTimeout(() => {
        this.visible2 = false;
        this.confirmLoading2 = false;
      }, 2000);
    },
    handleCancel2(e) {
      this.visible2 = false
    },
  }
}
</script>

<style scoped>
.approval-opinion{
  width: 100%;
  border:1px solid #f1f1f1;
  border-radius: 2px;
  padding:10px;
}
.text-algin-right{
  text-align: right;
}
</style>

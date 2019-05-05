<template>
  <div>
    <a-table
      :columns="columns"
      :dataSource="data"
      :scroll="{ x: 1600}"
    >
      <a
        slot="action"
        slot-scope="text"
        href="javascript:;"
      >
        <span @click="showModal2">查看 | </span>
        <span @click="showModal">审批</span>
      </a>
    </a-table>
    <a-modal
      title="我来贷-工薪贷"
      :visible="visible"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
      cancelText="驳回"
      okText="通过"
    >
      <a-row>
        <a-col>
          <img
            width="100%"
            src="../../assets/sample-3.jpg"
          >
        </a-col>
      </a-row>
      <a-row style="margin-top:10px;">
        <a-col style="padding:0 20px;">
          <textarea
            class="approval-opinion"
            rows="2"
          ></textarea>
        </a-col>
      </a-row>
    </a-modal>

    <a-modal
      title="我来贷-工薪贷"
      :visible="visible2"
      @ok="handleOk2"
      :confirmLoading="confirmLoading2"
      @cancel="handleCancel2"
    >
      <a-form layout="inline">
        <a-row>
          <a-col>
            <img
              width="100%"
              src="../../assets/sample-2.jpg"
            >
          </a-col>
        </a-row>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
const columns = [
  { title: '产品编号', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: '发布时间', dataIndex: 'val1', key: '1', width: 150 },
  { title: '产品名称', dataIndex: 'val2', key: '2', width: 150 },
  { title: '发布人', dataIndex: 'val3', key: '3', width: 150 },
  { title: '审批人', dataIndex: 'val4', key: '4', width: 150 },
  { title: '额度范围', dataIndex: 'val7', key: '7', width: 150 },
  { title: '贷款期限', dataIndex: 'val8', key: '8', width: 150 },
  { title: '计息方式', dataIndex: 'val15', key: '15', width: 150 },
  { title: '日利率', dataIndex: 'val9', key: '9', width: 150 },
  { title: '还款方式', dataIndex: 'val10', key: '10', width: 150 },
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    width: 180,
    scopedSlots: { customRender: 'action' }
  }
]

const data = [
  {
    key: 1,
    name: '885',
    val1: '2019-4-25 08:12:51',
    val2: `wangwu`,
    val3: 'xxx公司',
    val4: '赵二',
    val15: '张三',
    val7: '500,000.00',
    val8: '12个月',
    val9: '0.05%',
    val10: '2'
  }
]
for (let i = 2; i < 100; i++) {
  data.push({
    key: i,
    name: `${884 + i}`,
    val1: '2019-4-25 18:07:23',
    val2: `zhangwei37`,
    val3: 'xxx公司',
    val4: '王五',
    val15: '张三',
    val7: '100,000,000.00',
    val8: '6个月',
    val9: '0.05%',
    val10: '1'
  })
}

export default {
  data() {
    return {
      data,
      columns,
      visible: false,
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
        onOk() {},
        onCancel() {}
      })
    },
    showModal() {
      this.visible = true
    },
    handleOk(e) {
      this.confirmLoading = true
      setTimeout(() => {
        this.visible = false
        this.confirmLoading = false
      }, 2000)
    },
    handleCancel(e) {
      this.visible = false
    },
    showModal2() {
      this.visible2 = true
    },
    handleOk2(e) {
      this.confirmLoading2 = true
      setTimeout(() => {
        this.visible2 = false
        this.confirmLoading2 = false
      }, 2000)
    },
    handleCancel2(e) {
      this.visible2 = false
    }
  }
}
</script>

<style scoped>
.approval-opinion {
  width: 100%;
  border: 1px solid #f1f1f1;
  border-radius: 2px;
  padding: 10px;
}
.text-algin-right {
  text-align: right;
}
</style>

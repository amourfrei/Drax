<template>
  <div>
  <a-table :rowSelection="rowSelection" :columns="columns" :dataSource="data" :scroll="{ x: 2500}">
    <a slot="action" slot-scope="text" href="javascript:;">
      <span @click="showConfirm">通过 | </span> 
      <span @click="showModal">驳回</span>
    </a>
  </a-table>

  </div>
</template>
<script>
const columns = [
  { title: '序号', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: '申请时间', dataIndex: 'val1', key: '1', width: 150 },
  { title: '贷款单编号', dataIndex: 'val2', key: '2', width: 150 },
  { title: '初审完成时间', dataIndex: 'val3', key: '3', width: 150 },
  { title: '初审审核人', dataIndex: 'val4', key: '4', width: 150 },
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
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    width: 120,
    scopedSlots: { customRender: 'action' },
  }
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

const data = [{
    key: 1,
    name: '1',
    val1: '2019-4-25 08:12:51',
    val2: `443534534`,
    val3: '2019-4-25 10:09:23',
    val4: '张三',
    val6: 'zhaoer',
    val7: 'xx公司',
    val8: 'xx小贷',
    val9: '先息后本',
    val10: '6个月',
    val11: '0.05%',
    val12: '1,000,000.00',
    val13: '1,000,000.00',
    val14: '1,090,000.00',
    val15: '2019-10-25'
}];
for (let i = 1; i < 100; i++) {
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
    val15: '2020-4-25'
  });
}

export default {
  data() {
    return {
      data,
      columns,
      rowSelection
    }
  },
  methods: {
    showConfirm() {
      this.$confirm({
        title: '确认',
        content: '确定要通过吗？',
        onOk() {
        },
        onCancel() {},
      });
    },
    showModal() {
      this.$emit('showReject', true)
    }
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

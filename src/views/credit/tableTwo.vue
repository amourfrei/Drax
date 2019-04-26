<template>
  <div>
  <a-table :rowSelection="rowSelection" :columns="columns" :dataSource="data" :scroll="{ x: 2000}">
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
  { title: '客户编号', dataIndex: 'val4', key: '4', width: 150 },
  { title: '客户名称', dataIndex: 'val5', key: '5', width: 150 },
  { title: '放款主体', dataIndex: 'val6', key: '6', width: 150 },
  { title: '还款方式', dataIndex: 'val7', key: '7', width: 150 },
  { title: '贷款期限', dataIndex: 'val8', key: '8', width: 150 },
  { title: '日利率 %/天', dataIndex: 'val9', key: '9', width: 150 },
  { title: '可贷金额', dataIndex: 'val10', key: '10', width: 150 },
  { title: '贷款金额', dataIndex: 'val11', key: '11', width: 150 },
  { title: '还款金额', dataIndex: 'val12', key: '12', width: 150 },
  { title: '还款时间', dataIndex: 'val14', key: '14', width: 150 },
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
    val4: 'wangwu',
    val5: 'xxx公司',
    val6: 'xx小贷',
    val7: '先息后本',
    val8: '6个月',
    val9: '0.05%',
    val10: '1,000,000.00',
    val11: '1,000,000.00',
    val12: '1,090,000.00',
    val14: '2019-10-25'
}];
for (let i = 2; i < 100; i++) {
  data.push({
    key: i,
    name: `${i}`,
    val1: '2019-4-25 11:41:51',
    val2: `${443534534 + i}`,
    val4: 'zhangwei37',
    val5: 'xxx公司',
    val6: 'xx小贷',
    val7: '每月等额',
    val8: '12个月',
    val9: '0.05%',
    val10: '1,000,000.00',
    val11: '500,000.00',
    val12: '590,000.00',
    val14: '2020-4-25'
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

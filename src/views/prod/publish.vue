<template>
  <a-card :bordered="false">
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-col
            :md="6"
            :sm="24"
          >
            <a-form-item label="产品编码">
              <a-input
                v-model="queryParam.id"
                placeholder=""
              />
            </a-form-item>
          </a-col>
          <a-col
            :md="6"
            :sm="24"
          >
            <a-form-item label="发布人">
              <a-input
                v-model="queryParam.customId"
                placeholder=""
              />
            </a-form-item>
          </a-col>
          <a-col
            :md="6"
            :sm="24"
          >
            <a-form-item label="审批人">
              <a-input
                v-model="queryParam.customId"
                placeholder=""
              />
            </a-form-item>
          </a-col>
          <a-col
            :md="6"
            :sm="24"
          >
            <a-form-item label="业务审批状态">
              <a-select
                v-model="queryParam.status"
                placeholder="请选择"
                default-value="0"
              >
                <a-select-option value="0">全部</a-select-option>
                <a-select-option value="1">产品A</a-select-option>
                <a-select-option value="2">产品B</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col
            :md="6"
            :sm="24"
          >
            <a-form-item label="产品名称">
              <a-input
                v-model="queryParam.customId"
                placeholder=""
              />
            </a-form-item>
          </a-col>
          <a-col
            :md="12"
            :sm="24"
          >
            <a-form-item label="发布时间">
              <a-range-picker
                v-model="queryParam.date"
                style="width: 100%"
              />
            </a-form-item>
          </a-col>
          <a-col
            :md="6"
            :sm="24"
          >
            <a-form-item label="监管审核状态">
              <a-select
                v-model="queryParam.status"
                placeholder="请选择"
                default-value="0"
              >
                <a-select-option value="0">全部</a-select-option>
                <a-select-option value="1">产品A</a-select-option>
                <a-select-option value="2">产品B</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col
            :md="!advanced && 8 || 24"
            :sm="24"
          >
            <span
              class="table-page-search-submitButtons"
              :style="advanced && { float: 'right', overflow: 'hidden' } || {} "
            >
              <a-button
                type="primary"
                @click="$refs.table.refresh(true)"
              >查询</a-button>
              <a-button
                style="margin-left: 15px"
                @click="showModal"
              >新增产品</a-button>
              <!-- <a @click="toggleAdvanced" style="margin-left: 8px">
                {{ advanced ? '收起' : '展开' }}
                <a-icon :type="advanced ? 'up' : 'down'"/>
              </a> -->
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <j-table></j-table>

    <a-modal
      title="新增产品"
      :visible="visible"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
      cancelText="取消"
      okText="提交"
    >
    <div class="prod-modal table-page-search-wrapper">
      <a-form layout="inline">
        <a-row>
          <a-col>
            <a-form-item label="产品编号">
              <span>000001</span>
            </a-form-item>
          </a-col>
          <a-col>
            <a-form-item label="产品名称">
              <a-input
                v-model="queryParam.customId"
                placeholder=""
              />
            </a-form-item>
          </a-col>
          <a-col>
            <a-form-item label="产品类型">
              <a-select
                v-model="queryParam.status"
                placeholder="请选择"
                default-value="0"
              >
                <a-select-option value="0">全部</a-select-option>
                <a-select-option value="1">产品A</a-select-option>
                <a-select-option value="2">产品B</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col>
            <a-form-item label="金额范围">
              <a-input
                v-model="queryParam.customId"
                placeholder=""
              />
            </a-form-item>
          </a-col>
          <a-col>
            <a-form-item label="期限范围">
              <a-input
                v-model="queryParam.customId"
                placeholder=""
              />
            </a-form-item>
          </a-col>
          <a-col>
            <a-form-item label="利率">
              <a-input
                v-model="queryParam.customId"
                placeholder=""
              />
            </a-form-item>
          </a-col>
          <a-col>
            <a-form-item label="违约金利率">
              <a-input
                v-model="queryParam.customId"
                placeholder=""
              />
            </a-form-item>
          </a-col>
          <a-col>
            <a-form-item label="产品类型">
              <a-select
                v-model="queryParam.status"
                placeholder="请选择"
                default-value="0"
              >
                <a-select-option value="0">全部</a-select-option>
                <a-select-option value="1">产品A</a-select-option>
                <a-select-option value="2">产品B</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col>
            <a-form-item label="产品类型">
              <a-select
                v-model="queryParam.status"
                placeholder="请选择"
                default-value="0"
              >
                <a-select-option value="0">全部</a-select-option>
                <a-select-option value="1">产品A</a-select-option>
                <a-select-option value="2">产品B</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col>
            <a-form-item label="产品类型">
              <a-select
                v-model="queryParam.status"
                placeholder="请选择"
                default-value="0"
              >
                <a-select-option value="0">全部</a-select-option>
                <a-select-option value="1">产品A</a-select-option>
                <a-select-option value="2">产品B</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </div>
    </a-modal>
  </a-card>
</template>

<script>
import moment from 'moment'
import JTable from './tableOne'

const statusMap = {
  0: {
    status: 'default',
    text: '关闭'
  },
  1: {
    status: 'processing',
    text: '运行中'
  },
  2: {
    status: 'success',
    text: '已上线'
  },
  3: {
    status: 'error',
    text: '异常'
  }
}

export default {
  name: 'publish',
  components: {
    JTable
  },
  data() {
    return {
      mdl: {},
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      visible: false,
      confirmLoading: false
    }
  },
  filters: {},
  created() {},
  methods: {
    tableOption() {
      if (!this.optionAlertShow) {
        this.options = {
          alert: {
            show: true,
            clear: () => {
              this.selectedRowKeys = []
            }
          },
          rowSelection: {
            selectedRowKeys: this.selectedRowKeys,
            onChange: this.onSelectChange
          }
        }
        this.optionAlertShow = true
      } else {
        this.options = {
          alert: false,
          rowSelection: null
        }
        this.optionAlertShow = false
      }
    },

    handleEdit(record) {
      console.log(record)
      this.$refs.modal.edit(record)
    },
    handleSub(record) {
      if (record.status !== 0) {
        this.$message.info(`${record.no} 订阅成功`)
      } else {
        this.$message.error(`${record.no} 订阅失败，规则已关闭`)
      }
    },
    handleOk() {
      this.$refs.table.refresh()
    },
    onSelectChange(selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    toggleAdvanced() {
      this.advanced = !this.advanced
    },
    resetSearchForm() {
      this.queryParam = {
        date: moment(new Date())
      }
    },
    showModal() {
      this.visible = true
    },
    handleCancel(e) {
      this.visible = false
    },
    handleOk(e) {
      this.confirmLoading = true
      setTimeout(() => {
        this.visible = false
        this.confirmLoading = false
      }, 2000)
    }
  }
}
</script>
<style scoped lang="less">
.prod-modal{
  padding: 0 20px;
}
</style>
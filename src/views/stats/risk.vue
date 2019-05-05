<template>
  <a-card :bordered="false">
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="48">

          <a-col
            :md="8"
            :sm="24"
          >
            <a-form-item label="查询时间段">
              <a-range-picker
                v-model="queryParam.date"
                style="width: 100%"
              />
            </a-form-item>
          </a-col>
          <a-col
            :md="8"
            :sm="24"
          >
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

        <a-row>
          <a-button
            type="primary"
            ghost
          >全部</a-button>
          <a-button style="margin-left: 20px;">近一年</a-button>
          <a-button style="margin-left: 20px;">近一月</a-button>
          <a-button style="margin-left: 20px;">近一周</a-button>
        </a-row>

        <a-row style="margin-top: 40px;">
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
                size="large"
                style="width: 200px; text-align: center;"
                @click="$refs.table.refresh(true)"
              >查询</a-button>
              <!-- <a @click="toggleAdvanced" style="margin-left: 8px">
                {{ advanced ? '收起' : '展开' }}
                <a-icon :type="advanced ? 'up' : 'down'"/>
              </a> -->
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <a-row :gutter="30">
      <a-col
        :md="12"
        :sm="24"
      >
        <div class="c-card">
          <div class="c-title">
            <span>企业实名通过率：</span><b>77.82%</b>
          </div>

          <div class="c-main">
            <v-chart
              :forceFit="true"
              :height="height"
              :data="data[0]"
              :scale="scale"
              :padding="['40', '40', '60', '40']"
            >
              <v-tooltip />
              <v-axis />
              <v-legend />
              <v-smooth-line
                position="month*temperature"
                color="city"
                shape="smooth"
              />
              <v-point
                position="month*temperature"
                color="city"
                shape="circle"
              />
            </v-chart>
          </div>
        </div>
      </a-col>

      <a-col
        :md="12"
        :sm="24"
      >
        <div class="c-card">
          <div class="c-title">
            <span>企业贷款通过率：</span><b>75.42%</b>
          </div>

          <div class="c-main">
            <v-chart
              :forceFit="true"
              :height="height"
              :data="data[1]"
              :scale="scale"
              :padding="['40', '40', '60', '40']"
            >
              <v-tooltip />
              <v-axis />
              <v-legend />
              <v-smooth-line
                position="month*temperature"
                color="city"
                shape="smooth"
              />
              <v-point
                position="month*temperature"
                color="city"
                shape="circle"
              />
            </v-chart>
          </div>
        </div>
      </a-col>

      <a-col
        :md="12"
        :sm="24"
      >
        <div class="c-card">
          <div class="c-title">
            <span>贷款单通过率：</span><b>92.82%</b>
          </div>

          <div class="c-main">
            <v-chart
              :forceFit="true"
              :height="height"
              :data="data[2]"
              :scale="scale"
              :padding="['40', '40', '60', '40']"
            >
              <v-tooltip />
              <v-axis />
              <v-legend />
              <v-smooth-line
                position="month*temperature"
                color="city"
                shape="smooth"
              />
              <v-point
                position="month*temperature"
                color="city"
                shape="circle"
              />
            </v-chart>
          </div>
        </div>
      </a-col>

      <a-col
        :md="12"
        :sm="24"
      >
        <div class="c-card">
          <div class="c-title">
            <span>逾期率：</span><b>7.82%</b>
          </div>

          <div class="c-main">
            <v-chart
              :forceFit="true"
              :height="height"
              :data="data[3]"
              :scale="scale"
              :padding="['40', '40', '60', '40']"
            >
              <v-tooltip />
              <v-axis />
              <v-legend />
              <v-smooth-line
                position="month*temperature"
                color="city"
                shape="smooth"
              />
              <v-point
                position="month*temperature"
                color="city"
                shape="circle"
              />
            </v-chart>
          </div>
        </div>
      </a-col>

      <a-col
        :md="12"
        :sm="24"
      >
        <div class="c-card">
          <div class="c-title">
            <span>坏账率：</span><b>10.82%</b>
          </div>

          <div class="c-main">
            <v-chart
              :forceFit="true"
              :height="height"
              :data="data[4]"
              :scale="scale"
              :padding="['40', '40', '60', '40']"
            >
              <v-tooltip />
              <v-axis />
              <v-legend />
              <v-smooth-line
                position="month*temperature"
                color="city"
                shape="smooth"
              />
              <v-point
                position="month*temperature"
                color="city"
                shape="circle"
              />
            </v-chart>
          </div>
        </div>
      </a-col>

      <a-col
        :md="12"
        :sm="24"
      >
        <div class="c-card">
          <div class="c-title">
            <span>企业风险评估比：</span><b>77.82%</b>
          </div>

          <div class="c-main">
            <j-pie :vals="0" />
          </div>
        </div>
      </a-col>

    </a-row>
  </a-card>
</template>

<script>
import JPie from './pie'
const DataSet = require('@antv/data-set')
const sourceData1 = [
  { month: '1991-04', 年期存款: 7.0, 年期贷款: 3.9 },
  { month: '1993-07', 年期存款: 6.9, 年期贷款: 4.2 },
  { month: '1996-04', 年期存款: 9.5, 年期贷款: 5.7 },
  { month: '2007-04', 年期存款: 25.2, 年期贷款: 17.0 },
  { month: '2008-04', 年期存款: 26.5, 年期贷款: 16.6 },
  { month: '2010-04', 年期存款: 23.3, 年期贷款: 14.2 },
  { month: '2014-04', 年期存款: 18.3, 年期贷款: 10.3 },
  { month: '2015-04', 年期存款: 13.9, 年期贷款: 6.6 },
  { month: '2017-04', 年期存款: 9.6, 年期贷款: 4.8 }
]

const sourceData2 = [
  { month: '1991-04', 年期存款: 7.0, 年期贷款: 3.9 },
  { month: '1993-07', 年期存款: 6.9, 年期贷款: 4.2 },
  { month: '1996-04', 年期存款: 9.5, 年期贷款: 5.7 },
  { month: '2007-04', 年期存款: 2.2, 年期贷款: 1.0 },
  { month: '2008-04', 年期存款: 21.5, 年期贷款: 16.6 },
  { month: '2010-04', 年期存款: 23.3, 年期贷款: 1.2 },
  { month: '2014-04', 年期存款: 12.3, 年期贷款: 10.3 },
  { month: '2015-04', 年期存款: 19.9, 年期贷款: 12.6 },
  { month: '2017-04', 年期存款: 19.6, 年期贷款: 5.8 }
]

const sourceData3 = [
  { month: '1991-04', 年期存款: 7.0, 年期贷款: 3.9 },
  { month: '1993-07', 年期存款: 6.9, 年期贷款: 4.2 },
  { month: '1996-04', 年期存款: 9.5, 年期贷款: 5.7 },
  { month: '2007-04', 年期存款: 2.2, 年期贷款: 13.0 },
  { month: '2008-04', 年期存款: 26.5, 年期贷款: 16.6 },
  { month: '2010-04', 年期存款: 3.3, 年期贷款: 12.2 },
  { month: '2014-04', 年期存款: 8.3, 年期贷款: 1.3 },
  { month: '2015-04', 年期存款: 13.9, 年期贷款: 16.6 },
  { month: '2017-04', 年期存款: 9.6, 年期贷款: 4.8 }
]

const sourceData4 = [
  { month: '1991-04', 年期存款: 17.0, 年期贷款: 13.9 },
  { month: '1993-07', 年期存款: 6.9, 年期贷款: 4.2 },
  { month: '1996-04', 年期存款: 9.5, 年期贷款: 5.7 },
  { month: '2007-04', 年期存款: 25.2, 年期贷款: 7.0 },
  { month: '2008-04', 年期存款: 2.5, 年期贷款: 16.6 },
  { month: '2010-04', 年期存款: 3.3, 年期贷款: 14.2 },
  { month: '2014-04', 年期存款: 1.3, 年期贷款: 10.3 },
  { month: '2015-04', 年期存款: 13.9, 年期贷款: 6.6 },
  { month: '2017-04', 年期存款: 9.6, 年期贷款: 4.8 }
]

const sourceData5 = [
  { month: '1991-04', 年期存款: 7.0, 年期贷款: 3.9 },
  { month: '1993-07', 年期存款: 6.9, 年期贷款: 14.2 },
  { month: '1996-04', 年期存款: 19.5, 年期贷款: 5.7 },
  { month: '2007-04', 年期存款: 25.2, 年期贷款: 17.0 },
  { month: '2008-04', 年期存款: 22.5, 年期贷款: 6.6 },
  { month: '2010-04', 年期存款: 31.3, 年期贷款: 14.2 },
  { month: '2014-04', 年期存款: 8.3, 年期贷款: 0.3 },
  { month: '2015-04', 年期存款: 13.9, 年期贷款: 6.6 },
  { month: '2017-04', 年期存款: 9.6, 年期贷款: 4.8 }
]
const sd = [sourceData1, sourceData2, sourceData3, sourceData4, sourceData5]
const data = []
sd.forEach(item => {
  const dv = new DataSet.View().source(item)
  dv.transform({
    type: 'fold',
    fields: ['年期存款', '年期贷款'],
    key: 'city',
    value: 'temperature',
    as: 'val'
  })
  data.push(dv.rows)
})

const scale = [
  {
    dataKey: 'val',
    min: 0,
    formatter: '.2%'
  }
]
export default {
  name: 'risk',
  components: {
    JPie
  },
  data() {
    return {
      advanced: false,
      queryParam: {},
      data,
      scale,
      height: 300
    }
  },
  mounted() {
    //rerender chart to trigger force fit.
    window.dispatchEvent(new Event('resize'))
  }
}
</script>

<style scoped lang="less">
.c-card {
  width: 100%;
  margin-top: 20px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .c-main {
    width: 100%;
    height: 320px;
  }
  .c-title {
    width: 100%;
    height: 48px;
    line-height: 48px;
    background: #f9f6f6;
    padding: 0 20px;
    b {
      font-size: 24px;
    }
  }
}
</style>

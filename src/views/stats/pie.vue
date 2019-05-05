<template>
  <div>
    <v-chart
      :forceFit="true"
      :height="height"
      :data="data[vals]"
      :scale="scale"
    >
      <v-tooltip
        :showTitle="false"
        dataKey="item*percent"
      />
      <v-axis />
      <v-legend dataKey="item" />
      <v-pie
        position="percent"
        color="item"
        :vStyle="pieStyle"
        :label="labelConfig"
      />
      <v-coord type="theta" />
    </v-chart>
  </div>
</template>

<script>
const DataSet = require('@antv/data-set')

const sourceData = [
  { item: '70以下', count: 40 },
  { item: '110以上', count: 30 },
  { item: '90-110', count: 17 },
  { item: '70-90', count: 13 }
]

const sourceData1 = [
  { item: '抵押贷', count: 40 },
  { item: '小额贷', count: 30 },
  { item: '个人现金贷', count: 17 },
  { item: '预授信', count: 13 }
]

const sourceData2 = [
  { item: '110以上', count: 40 },
  { item: '90-110', count: 30 },
  { item: '70-90', count: 17 },
  { item: '60-70', count: 13 }
]

const sourceData3 = [{ item: '0-20万', count: 40 }, { item: '20-50万', count: 30 }, { item: '50万以上', count: 17 }]

const scale = [
  {
    dataKey: 'percent',
    min: 0,
    formatter: '.0%'
  }
]
const data = []
let sd = [sourceData, sourceData1, sourceData2, sourceData3]
sd.forEach((item) => {
  const dv = new DataSet.View().source(item)
  dv.transform({
    type: 'percent',
    field: 'count',
    dimension: 'item',
    as: 'percent'
  })
  data.push(dv.rows)
})

export default {
  name: 'JPie',
  props: {
    vals: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      data,
      scale,
      height: 350,
      pieStyle: {
        stroke: '#fff',
        lineWidth: 1
      },
      labelConfig: [
        'percent',
        {
          offset: -40,
          textStyle: {
            rotate: 0,
            textAlign: 'center',
            shadowBlur: 2,
            fill: '#ffffff',
            shadowColor: 'rgba(0, 0, 0, .45)'
          }
        }
      ]
    }
  }
}
</script>

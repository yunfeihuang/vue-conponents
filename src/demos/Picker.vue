<template>
  <page>
    <x-nav slot="header" title="Picker"></x-nav>
    <page-body slot="body">
      <group :title="'value：'+value">
        <picker placeholder="请选择" v-model="value" :options="options"></picker>
      </group>
    </page-body>
  </page>
</template>

<script>
export default {
  data () {
    return {
      options: [{
        value: '010101',
        label: '南山区'
      },
      {
        value: '010102',
        label: '福田区'
      },
      {
        value: '010103',
        label: '罗湖区'
      },
      {
        value: '010104',
        label: '宝安区'
      },
      {
        value: '010105',
        label: '龙华区'
      },
      {
        value: '010106',
        label: '龙岗区'
      },
      {
        value: '010107',
        label: '盐田区'
      },
      {
        value: '010108',
        label: '坪山区'
      },
      {
        value: '010109',
        label: '光明区'
      }],
      value: '010101'
    }
  }
}
</script>

<template>
  <page type="primary">
    <x-nav slot="header" title="Carousel"></x-nav>
    <page-body slot="body">
      <carousel :active="active" :pagination="true" @change="handleChange" :options="options" class="swiper-demo">
        <carousel-item>
          <img src="http://assets.bittyos.com/images/swiper/01.jpg"/>
        </carousel-item>
        <carousel-item>
          <img src="http://assets.bittyos.com/images/swiper/02.jpg"/>
        </carousel-item><carousel-item>
          <img src="http://assets.bittyos.com/images/swiper/03.jpg"/>
        </carousel-item><carousel-item>
          <img src="http://assets.bittyos.com/images/swiper/04.jpg"/>
        </carousel-item><carousel-item>
          <img src="http://assets.bittyos.com/images/swiper/05.jpg"/>
        </carousel-item>
      </carousel>
    </page-body>
  </page>
</template>

<script>
export default {
  methods: {
    handleChange (value) {
      this.active = value
    }
  },
  data () {
    return {
      active: 0,
      options: {
        speed: 500
      }
    }
  }
}
</script>

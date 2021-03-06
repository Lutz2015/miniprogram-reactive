const { initComponent } = require('../../../scripts/index')

initComponent(Component, {
  data: {
    game: 'game'
  },
  properties: {
    name: Number
  },
  watch: {
    game: {
      handler () {
        console.log('shallow watch immdeiate game: ' + this.data.game)
      },
      immediate: true
    }
  },
  computed: {
    vGame () {
      return `${this.data.game}--`
    }
  },
  attached () {
    // console.log(this)
  },
  methods: {
    changeGame () {
      const { game } = this.data
      if (game === 'game') {
        this.setData({
          game: 'title'
        })
      } else {
        this.setData({
          game: 'game'
        })
      }
    }
  }
})

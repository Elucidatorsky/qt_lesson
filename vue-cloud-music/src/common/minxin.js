import { mapGetters, mapMutation, mapActions } from 'vuex'

export const searchMinxin = {
  data () {
    return {
      query: '',
      refreshDelay: 120
    }
  },
  computed: {

  },
  methods: {
    saveSearch (song) {
      // console.log(song)
      this.selectPlaySong(song)
    },
    ...mapActions([
      'selectPlaySong'
    ])
  }
}

export const playerMinxin = {
  computed: {
    ...mapGetters([
      'currentSong'
    ])
  }
}

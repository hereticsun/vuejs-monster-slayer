new Vue ({
    el: '#app',
    data: {
        play: false,
        actions: [
            {
                class: 'monster-turn',
                desc: 'Monster hits player'
            },
            {
                class: 'player-turn',
                desc: 'Player hits monster'
            }
        ],
        yourHealth: 100,
        monsterHealth: 100
    },
    computed: {},
    methods: {},
    watch: {}
});
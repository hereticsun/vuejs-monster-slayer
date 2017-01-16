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
        yourHealth: 80,
        monsterHealth: 80
    },
    computed: {},
    methods: {},
    watch: {}
});
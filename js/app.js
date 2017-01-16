new Vue ({
    el: '#app',
    data: {
        play: false,
        actions: [
        ],
        yourHealth: 100,
        monsterHealth: 100
    },
    computed: {},
    methods: {
        startGame: function() {
            this.play = true;
            this.actions = [];
            this.yourHealth = 100;
            this.monsterHealth = 100;
        },
        quitGame: function() {
            this.play = false;
        },
        monsterTurn: function() {
            var dmg = Math.floor(Math.random() * 10) + 1;
            this.yourHealth -= dmg;
            var action = {
                class: 'monster-turn',
                desc: 'Monster hits player for ' + dmg
            };
/*
            action.class = 'monster-turn';
            action.desc = 'Monster hits player for ' + dmg;
*/
            this.actions.push(action);
        }
    },
    watch: {}
});
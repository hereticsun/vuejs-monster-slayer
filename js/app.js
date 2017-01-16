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
            this.actions.push(action);
        },
        attack: function() {
            var dmg = Math.floor(Math.random() * 10) + 1;
            this.monsterHealth -= dmg;
            var action = {
                class: 'player-turn',
                desc: 'Player hits monster for ' + dmg
            };
            this.actions.push(action);
            this.monsterTurn();
        },
        spAttack: function() {
            var dmg = Math.floor(Math.random() * 20) + 1;
            this.monsterHealth -= dmg;
            var action = {
                class: 'player-turn',
                desc: 'Player hits monster for ' + dmg
            };
            this.actions.push(action);
            this.monsterTurn();
        },
        heal: function() {
            var dmg = 10;
            this.yourHealth += dmg;
            var action = {
                class: 'player-turn',
                desc: 'Player heals himself for ' + dmg
            };
            this.actions.push(action);
            this.monsterTurn();
        },
    },
    watch: {
        monsterHealth: function(monsterHealth) {
            var vm = this;
            if(vm.monsterHealth <= 0) {
                alert('You slayed the monster!');
            }
        },
        yourHealth: function(yourHealth) {
            var vm = this;
            if(vm.yourHealth <= 0) {
                alert('Game over. You died!');
            }
        }
    }
});
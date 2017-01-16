new Vue ({
    el: '#app',
    data: {
        play: false,
        actions: [],
        yourHealth: 100,
        monsterHealth: 100
    },
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
        calcDamage: function(max) {
            return dmg = Math.floor(Math.random() * max) + 1;
        },
        monsterTurn: function() {
            var dmg = this.calcDamage(10);
            this.yourHealth -= dmg;
            var action = {
                class: 'monster-turn',
                desc: 'Monster hits player for ' + dmg
            };
            this.actions.unshift(action);
        },
        attack: function() {
            var dmg = this.calcDamage(10);
            this.monsterHealth -= dmg;
            var action = {
                class: 'player-turn',
                desc: 'Player hits monster for ' + dmg
            };
            this.actions.unshift(action);
            this.monsterTurn();
        },
        spAttack: function() {
            var dmg = this.calcDamage(20);
            this.monsterHealth -= dmg;
            var action = {
                class: 'player-turn',
                desc: 'Player hits monster for ' + dmg
            };
            this.actions.unshift(action);
            this.monsterTurn();
        },
        heal: function() {
            if(this.yourHealth <= 90) {
                var dmg = 10;
                this.yourHealth += dmg;
            } else {
                this.yourHealth = 100;
            }

            var action = {
                class: 'player-turn',
                desc: 'Player heals himself for 10'
            };
            this.actions.unshift(action);
            this.monsterTurn();
        },
    },
    watch: {
        monsterHealth: function(monsterHealth) {
            var vm = this;
            if(vm.monsterHealth <= 0) {
                this.play = false;
                alert('You slayed the monster!');
            }
        },
        yourHealth: function(yourHealth) {
            var vm = this;
            if(vm.yourHealth <= 0) {
                this.play = false;
                alert('Game over. You died!');
            }
        }
    }
});

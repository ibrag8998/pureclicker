var pl_dmg = 1;
var pl_dmg_increase = 1;
var crit_cd = 0;
var auto_cd = 0;
var midas_cd = 0;
var hp_on_start = 10;
var gold_reward = 7;
var tap_dmg_cost = 100;

function tap() {
    if (crit_cd > 0) {
        document.getElementById('value-hp-bar').value -= pl_dmg * 3;
        crit_cd -= 1;
    }
    else {
        document.getElementById('value-hp-bar').value -= pl_dmg;
    }
    if (document.getElementById('value-hp-bar').value <= 0) {
        if (midas_cd > 0) {
            document.getElementById('value-res-gold').value = parseInt(document.getElementById('value-res-gold').value) + gold_reward * 5;
            midas_cd -= 1;
        }
        else {
            document.getElementById('value-res-gold').value = parseInt(document.getElementById('value-res-gold').value) + gold_reward;
        }
        hp_on_start = Math.round(hp_on_start * 1.2);
        gold_reward = Math.ceil(gold_reward * 1.05);
        document.getElementById('value-hp-bar').value = hp_on_start;
    }
}

function crit() {
    crit_cd = 5;
}

function auto() {
    auto_cd = 100;
    while (auto_cd > 0) {
        tap();
        auto_cd -= 1;
    }
}

function midas() {
    midas_cd = 3
}

function buy_tap_dmg() {
    if (document.getElementById('value-res-gold').value >= tap_dmg_cost) {
        pl_dmg += pl_dmg_increase;
        document.getElementById('value-res-gold').value = document.getElementById('value-res-gold').value - tap_dmg_cost;
        tap_dmg_cost = Math.ceil(tap_dmg_cost * 1.1);
        pl_dmg_increase = Math.ceil(pl_dmg_increase * 1.05);
        document.getElementById('cost-tap-dmg').innerHTML = tap_dmg_cost;
    }
    else {
        alert('Not enough gold')
    }
}
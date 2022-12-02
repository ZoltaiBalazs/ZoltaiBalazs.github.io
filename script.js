
var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var deck = new Array();
var players = new Array();
var currentPlayer = 1;
var player_num = 2
function createDeck() {
    deck = new Array();
    for (var i = 0; i < values.length; i++) {
        for (var x = 0; x < suits.length; x++) {
            var weight = parseInt(values[i]);
            if (values[i] == "J" || values[i] == "Q" || values[i] == "K")
                weight = 10;
            if (values[i] == "A")
                weight = 11;
            var card = { Value: values[i], Suit: suits[x], Weight: weight };
            deck.push(card);
        }
    }
}

function createPlayers(num) {
    players = new Array();
    var hand = new Array();
    var player = { Name: 'Dealer', ID: 0, Points: 0, Hand: hand };
    players.push(player);
    for (var i = 1; i <= num; i++) {
        var hand = new Array();
        var player = { Name: 'Player ' + i, ID: i, Points: 0, Hand: hand };
        players.push(player);
    }

}

function createPlayersUI() {
    document.getElementById('players').innerHTML = '';
    var div_player = document.createElement('div');
    var div_playerid = document.createElement('div');
    var div_hand = document.createElement('div');
    var div_points = document.createElement('div');
    div_points.className = 'points';
    div_points.id = 'points_' + 0;
    div_player.id = 'player_' + 0;
    div_player.className = 'player';
    div_hand.id = 'hand_' + 0;
    div_playerid.innerHTML = 'Dealer';
    div_player.appendChild(div_playerid);
    div_player.appendChild(div_hand);
    div_player.appendChild(div_points);
    document.getElementById('players').appendChild(div_player);
    for (var i = 1; i < players.length; i++)
    {
        var div_player = document.createElement('div');
        var div_playerid = document.createElement('div');
        var div_hand = document.createElement('div');
        var div_points = document.createElement('div');

        div_points.className = 'points';
        div_points.id = 'points_' + i;
        div_player.id = 'player_' + i;
        div_player.className = 'player';
        div_hand.id = 'hand_' + i;

        div_playerid.innerHTML = 'Player ' + players[i].ID;
        div_player.appendChild(div_playerid);
        div_player.appendChild(div_hand);
        div_player.appendChild(div_points);
        document.getElementById('players').appendChild(div_player);
    }
}

function shuffle() {
    for (var i = 0; i < 1000; i++) {
        var location1 = Math.floor((Math.random() * deck.length));
        var location2 = Math.floor((Math.random() * deck.length));
        var tmp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
}

function startblackjack() {
    document.getElementById('btnStart').value = 'Restart';
    document.getElementById("status").style.display = "none";
    currentPlayer = 1;
    createDeck();
    shuffle();
    createPlayers(player_num);
    createPlayersUI();
    dealHands();
    document.getElementById('player_' + currentPlayer).classList.add('active');
    if (players[currentPlayer].Points == 21) {
        stay()        
    }
}

function dealHands() {
    for (var i = 0; i < 2; i++) {
        for (var x = 0; x < players.length; x++) {
            var card = deck.pop();
            if (card.Value == 'A' && i == 0) {
                card.Weight = 11;
            }
            else if (i == 1 && card.Value == 'A' && players[x].Hand[i-1].Value == 'A') {
                card.Weight = 1;
            }
            players[x].Hand.push(card);
            renderCard(card, x);
            updatePoints();
        }
    }
    players.forEach(element => {
        if (element.Points == 21) {
            document.getElementById('status').innerHTML = element.Name + ' Blackjack!';
            document.getElementById('status').style.display = "inline-block";
        }
    //     else if (element.points == 22) {
    //         element.Hand[0].Weight = 1;
    //         updatePoints()
    //     }
    });
    updateDeck();
}

function renderCard(card, player) {
    var hand = document.getElementById('hand_' + player);
    hand.appendChild(getCardUI(card));
}

function getCardUI(card) {
    var el = document.createElement('div');
    var icon = '';
    if (card.Suit == 'Hearts')
        icon = '&hearts;';
    else if (card.Suit == 'Spades')
        icon = '&spades;';
    else if (card.Suit == 'Diamonds')
        icon = '&diams;';
    else
        icon = '&clubs;';

    el.className = 'card';
    el.innerHTML = card.Value + '<br/>' + icon;
    return el;
}

function getPoints(player) {
    var points = 0;
    for (var i = 0; i < players[player].Hand.length; i++) {
        points += players[player].Hand[i].Weight;
    }
    players[player].Points = points;
    return points;
}

function updatePoints() {
    for (var i = 0; i < players.length; i++) {
        getPoints(i);
        if (players[i].Points > 21) {
            document.getElementById('points_' + i).innerHTML = 'Bust';
        }
        else {
            document.getElementById('points_' + i).innerHTML = players[i].Points;
        }
    }
}

function hitMe() {
    var card = deck.pop();
    if (players[currentPlayer].Points + card.Weight > 21) {
        if (card.Value == 'A') {
            card.Weight = 1;
            updatePoints();
        }
        else {
            for (var i = 0; i < players[currentPlayer].Hand.length; i++) {
                if  (players[currentPlayer].Hand[i].Value == 'A' && (players[currentPlayer].Points + card.Weight) > 21) {
                    players[currentPlayer].Hand[i].Weight = 1;
                    updatePoints();
            }
        }
    }
    }
    players[currentPlayer].Hand.push(card);
    renderCard(card, currentPlayer);
    updatePoints();
    updateDeck();
    check();
}

function stay() {
    if (currentPlayer != players.length - 1) {
        document.getElementById('player_' + currentPlayer).classList.remove('active');
        currentPlayer += 1;
        document.getElementById('player_' + currentPlayer).classList.add('active');
    }

    else {
        currentPlayer = 0;
        end();
    }
}

function dealer() {
    while (players[currentPlayer].Points < 17) {
        hitMe();
    }
}


function end() {
    dealer();
    var winner = -1;
    var score = 0;

    for (var i = 0; i < players.length; i++) {
        if (players[i].Points > score && players[i].Points <= 21) {
            winner = i;
            score = players[winner].Points;
        }
    }

    if (players[winner].Name == 'Dealer') {
        document.getElementById('status').innerHTML = 'Winner: Dealer';
    }
    else {
        document.getElementById('status').innerHTML = 'Winner: Player ' + players[winner].ID;
    }
    document.getElementById("status").style.display = "inline-block";
}

function check() {
    if (players[currentPlayer].Points > 21 && players[currentPlayer].ID < players.length-1) {
        if (players[currentPlayer].Name == 'Dealer') {
            document.getElementById('status').innerHTML = 'Dealer LOST';
        }
        else {
            document.getElementById('status').innerHTML = 'Player: ' + players[currentPlayer].ID + ' LOST';
            stay();
        }
        document.getElementById('status').style.display = "inline-block";
        // end();
    }
    else if (players[currentPlayer].Points > 21 && players[currentPlayer].ID == players.length-1) {
        stay();
    }
}

function updateDeck() {
    document.getElementById('deckcount').innerHTML = deck.length;
}

window.addEventListener('load', function () {
    createDeck();
    shuffle();
    createPlayers(1);
});
function player_update() {
    player_num = document.querySelector('#NOP').value
    console.log(player_num)
}
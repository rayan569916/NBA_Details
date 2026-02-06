from flask import Blueprint,jsonify
from nba_api.stats.static import players

nba_player=Blueprint('nba_player',__name__)

@nba_player.requests('/nba_player_list')
def nba_player_list():
    all_player=players.get_players()

    return jsonify(all_player),200
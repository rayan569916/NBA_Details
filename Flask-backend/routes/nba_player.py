from flask import Blueprint,jsonify
from nba_api.stats.static import players
from nba_api.stats.endpoints import commonplayerinfo

nba_player=Blueprint('nba_player',__name__)

@nba_player.route('/nba_player_list',methods=['GET'])
def nba_player_list():
    all_player=players.get_active_players()
    return jsonify(all_player),200

@nba_player.route('/nba_team_name/<int:player_id>',methods=['GET'])
def nba_team_name(player_id):
    player_info=commonplayerinfo.CommonPlayerInfo(player_id=player_id)
    df = player_info.get_data_frames()
    # Convert list of DataFrames to list of dictionaries for JSON serialization
    json_data = [d.to_dict(orient='records') for d in df]
    return jsonify(json_data),200


# nba_team_name()
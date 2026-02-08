from flask import Flask
from flask_cors import CORS

def create_app():
    app=Flask(__name__)
    CORS(app,origins=["http://localhost:4200",
                "http://127.0.0.1:4200",
                "http://192.168.0.126:4200"])

    from routes.nba_player import nba_player
    app.register_blueprint(nba_player,url_prefix="/api/nba")

    return app

if __name__=="__main__":
    app = create_app()
    app.run()
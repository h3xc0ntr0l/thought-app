from flask import Flask
from flask import render_template
import humongolus as orm

app = Flask(__name__)




@app.route("/static")
def return_static_files(path):
	return send_from_directory('js', path)

@app.route("/")
def index():
  return render_template("index.html")





app.run()

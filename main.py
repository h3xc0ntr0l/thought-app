from flask import Flask, jsonify, render_template
import humongolus as orm

app = Flask(__name__)




@app.route('/static')
def return_static_files(path):
	return send_from_directory('js', path)

@app.route('/')
def index():
  return render_template('index.html')


@app.route('/<path:path>', defaults={'path': ''})
def catch_all(path):
	return jsonify({'message': 'endpoint not in use yet!'})




app.run(debug=True)

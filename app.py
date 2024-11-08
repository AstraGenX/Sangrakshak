from flask import Flask, render_template, request, jsonify
import tensorflow as tf
import numpy as np

app = Flask(__name__)

# Load the trained model
model = tf.keras.models.load_model('sangrakshak_model_best.keras')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        features = np.array([[data['linear_movement'], data['click_count'], data['scroll_rate'],
                              data['session_time'], data['multi_clicks'], data['time_gap'],
                              data['rapid_scroll_events'], data['mouse_move_variance']]])
        prediction = model.predict(features)[0][0]
        result = "Suspicious activity detected! Session terminated." if prediction > 0.5 else "Account is secured."
        return jsonify({'result': result})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)

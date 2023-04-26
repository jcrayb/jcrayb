from flask import Flask, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        input_value = request.form['input_field']
        # Do something with the input value, e.g. pass it to a Python script
        print(input_value)
        return "Input value received: {}".format(input_value)
    return '''
        <form method="post">
            <label for="input_field">Enter input:</label><br>
            <input type="text" id="input_field" name="input_field"><br>
            <input type="submit" value="Submit">
        </form>
    '''

if __name__ == '__main__':
    app.run()

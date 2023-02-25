# How to use the `chatlogger.py` script

### Overview - How does it work?
`chatlogger.py` is a Python script that takes saved `.html` pages from (ChatGPT)[chat.openai.com/] and converts the chat logs into a single `.csv`.

To do this, the program loops through the `./html` directory and saves each page's chat log in the `./csv` directory under the title `<M_DD_YYYY H_MM_SS AM|PM>.csv`. This is accomplished with the `extract_all_chatlogs()` function in `chatlogger.py`.

Once each page's chat log is exported as a `.csv` in the `./csv` folder, the `combine_chat_data()` function in `chatlogger.py` will combine all the files in the `./csv` folder and save them as `full_chat_log.csv` in the 


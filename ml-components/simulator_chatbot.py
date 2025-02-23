import streamlit as st
from streamlit_chat import message
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.chat_models import ChatOpenAI
from langchain.chains import ConversationalRetrievalChain
from langchain.document_loaders.csv_loader import CSVLoader
from langchain.vectorstores import FAISS
import tempfile

from dotenv import load_dotenv
import os


load_dotenv(override=True)
counter = 0

chat_history_tuples = []




open_ai_api_key = "key"

loader1 = CSVLoader(file_path='sustainability_data.csv')
loader2 = CSVLoader(file_path='grocery_sustainability.csv')
loader3 = CSVLoader(file_path='grocery.csv')
loader4 = CSVLoader(file_path='susan_sustainable_user_record.csv')

data1 = loader1.load()
data2 = loader2.load()
data3 = loader3.load()
data4 = loader4.load()



combined = data1+data2+data3+data4


embeddings = OpenAIEmbeddings(api_key=open_ai_api_key)
vectorstore = FAISS.from_documents(combined,embeddings)
chain = ConversationalRetrievalChain.from_llm(llm=ChatOpenAI(temperature=0.4,model_name='gpt-3.5-turbo',openai_api_key=open_ai_api_key),retriever=vectorstore.as_retriever())


def query_bot(query):
    response = chain({"question": query, "chat_history": st.session_state['history']})
    st.session_state['history'].append((query, response["answer"]))
    return response['answer']

# Streamlit UI Configuration
st.set_page_config(page_title="EcoWolf🐺")
st.title("Talk with Wolfie 🐺")

# Initialize session state
if 'history' not in st.session_state:
    st.session_state.history = []
if 'bot' not in st.session_state:
    st.session_state.bot = ["Hello! How can I assist you today?"]
if 'past' not in st.session_state:
    st.session_state.past = ['Hey there! 👋']

# Chat Interface
response_container = st.container()
container = st.container()

with container:
    with st.form(key='grok_form', clear_on_submit=True):
        query = st.text_input("Query:", placeholder='Enter your query here:', key='input')
        submit_button = st.form_submit_button(label='Submit')

    if submit_button and query:
        output = query_bot(query)
        st.session_state.past.append(query)
        st.session_state.bot.append(output)

# Display Chat Messages
if st.session_state.bot:
    with response_container:
        for i in range(len(st.session_state.bot)):
            message(st.session_state.past[i], is_user=True, key=str(i) + '_user', avatar_style='big-smile')
            message(st.session_state.bot[i], key=str(i), avatar_style='thumbs')
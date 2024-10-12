import os
import pandas as pd
from pymongo import MongoClient

# MongoDB connection setup
client = MongoClient('mongodb+srv://rerite:vf69tgNdntAsh76@cluster0.zt8sx.mongodb.net/test')  # Adjust connection URI as needed
db = client['myFirstDatabase']  # Replace with your database name
collection = db['mypolicies']  # Replace with your collection name

# CSV file path
csv_file_path = 'C:/Users/maadh/OneDrive/Desktop/serveup/policyeditorials_to_update.csv'  # Replace with your CSV file path

# Read the CSV file using pandas
data = pd.read_csv(csv_file_path)

# Iterate through each row in the CSV DataFrame
for index, row in data.iterrows():
    document = row.to_dict()

    # Convert the 'hobbies' column into a list (array)
    if 'author' in row and isinstance(row['author'], str):
        document['author'] = [hobby.strip() for hobby in row['author'].split(',')]  # Create a list from comma-separated string
    
    if 'policy' in row and isinstance(row['policy'], str):
        document['policy'] = [hobby.strip() for hobby in row['policy'].split(',')]  # Create a list from comma-separated string

    # Check if the "brief" column exists and contains a valid file path
    if 'brief' in row and os.path.isfile(row['brief']):
        txt_file_path = row['brief']
        
        # Read the content of the .txt file
        with open(txt_file_path, 'r') as txt_file:
            text_data = txt_file.read()
        
        # Add the text content to the document
        document['brief'] = text_data
    
    # Insert the document into MongoDB
    collection.insert_one(document)

print("Data from CSV and corresponding .txt files have been successfully inserted.")
import json

from pathlib import Path


BASE_DIR = Path(__file__).resolve().parent.parent

def read_env():
    env_file = BASE_DIR / '.env.json'
    
    with open(env_file, 'r') as env_json_file:
        env = json.load(env_json_file)

    return env


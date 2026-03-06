from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/neural-network")

def neural_network():

    nodes = []
    edges = []

    # create nodes
    for i in range(60):

        nodes.append({
            "id": i,
            "x": random.uniform(-40,40),
            "y": random.uniform(-40,40),
            "z": random.uniform(-40,40)
        })

    # create connections
    for i in range(120):

        edges.append({
            "source": random.randint(0,59),
            "target": random.randint(0,59)
        })

    return {
        "nodes": nodes,
        "edges": edges
    }

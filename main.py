from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from google.auth.transport.requests import Request
from google.oauth2 import id_token
import os
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Replace this with your Google client ID
CLIENT_ID = "1026995151609-huoeo703c06m40o667tkc3poa6orlh7n.apps.googleusercontent.com"

class TokenRequest(BaseModel):
    token: str

@app.post("/auth/google")
async def authenticate_google_user(request: TokenRequest):
    token = request.token

    try:
        # Verify the token using Google's library
        idinfo = id_token.verify_oauth2_token(token, Request(), CLIENT_ID)

        # idinfo contains the user's information
        user_info = {
            "email": idinfo.get("email"),
            "name": idinfo.get("name"),
            "picture": idinfo.get("picture"),
        }

        # You can add user authentication logic here, such as storing user in DB

        return {"status": "success", "user": user_info}

    except ValueError as e:
        raise HTTPException(status_code=401, detail="Invalid token")

# Run FastAPI
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=5002, reload=True)




# from fastapi import FastAPI, APIRouter, HTTPException, Request
# from fastapi.responses import RedirectResponse
# from google.oauth2 import id_token
# from google.auth.transport import requests
# import httpx
# from starlette.middleware.sessions import SessionMiddleware
# from fastapi.middleware.cors import CORSMiddleware

# # Initialize FastAPI app
# app = FastAPI()

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# GOOGLE_CLIENT_ID = "1026995151609-huoeo703c06m40o667tkc3poa6orlh7n.apps.googleusercontent.com"
# GOOGLE_CLIENT_SECRET = "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"


# @app.get("/users/google-login")
# async def login(request: Request):
#     redirect_uri = request.url_for('users/auth_callback')
#     print(f"Redirect URI: {redirect_uri}")
#     google_auth_url = f"https://accounts.google.com/o/oauth2/auth?client_id={GOOGLE_CLIENT_ID}&redirect_uri={redirect_uri}&response_type=code&scope=openid email profile"
    
#     return RedirectResponse(url=google_auth_url)

# @app.get("/users/auth_callback"  ,name="users/auth_callback")
# async def auth_callback(code: str, request: Request):
#     token_request_uri = "https://oauth2.googleapis.com/token"
    
#     data = {
#         'code': code,
#         'client_id': GOOGLE_CLIENT_ID,
#         'client_secret': GOOGLE_CLIENT_SECRET,
#         'redirect_uri':request.url_for('users/auth_callback'),
#         'grant_type': 'authorization_code',
#     }
    
#     print(f"Data for token exchange: {data}")
    
#     async with httpx.AsyncClient() as client:
#         response = await client.post(token_request_uri, data=data)
#         response.raise_for_status() 
#         token_response = response.json()

#     print(f"Token Response: {token_response}")
    
#     id_token_value = token_response.get('id_token')
#     if not id_token_value:
#         raise HTTPException(status_code=400, detail="Missing id_token in response.")

#     try:
#         id_info = id_token.verify_oauth2_token(id_token_value, requests.Request(), GOOGLE_CLIENT_ID)
#         name = id_info.get('name')
#         print(f"User info: {name}")

#         # Redirect after successful login
#         return RedirectResponse(url="http://localhost:3000")

#     except ValueError as e:
#         raise HTTPException(status_code=400, detail=f"Invalid id_token: {str(e)}")

#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")


# # Run FastAPI
# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run("main:app", host="127.0.0.1", port=5002, reload=True)


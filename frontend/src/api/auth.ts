export async function GetToken(code: string){
  const result = await fetch("http://localhost:8000/auth/token/"+code,{
    method: "POST"
  });
  return await result.json()
}

export async function GetProfile(token: string){
  const result = await fetch("http://localhost:8000/auth/profile",{
    method: "GET",
    headers: {
      "Authorization": token
    }
  });
  return await result.json();
}


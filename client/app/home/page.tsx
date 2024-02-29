"use client"
import { useEffect, useState } from "react";

export default function Home() {
    const [user, setUser] = useState(null);
    const [meals, setMeals]= useState([]);


    useEffect(()=>{
        fetch("http://localhost:8080/api/user/id",{
           credentials:"include" 
        })
        .then((response)=>{
            response.json().then((res)=>{
                setUser(res.data);
            })
        }).catch((err)=>{
            console.log(err);
        })
    },[])


    const handleSubmit=async (e)=>{
        e.preventDefault();
        e.stopPropagation();
      
        const name = e.target.name.value;
      const response = await fetch("http://localhost:8080/api/meal/"+name)
      const data = await response.json();
     setMeals(data);
    }
    return (<div className=" grid grid-flow-col grid-cols-2 w-screen min-h-screen">
            <div id="userinfo" className=" w-full h-full">
                <h1>user info</h1>
                
               {user && <div id='user profile'>
                    <h3>name : {user?.name}</h3>
                    <p>email : {user?.email}</p>
                    <p>phone : {user?.phone}</p>
                    <p>age : {user?.age}</p>
                    <p>gender : {user?.gender}</p>
                    <p>profession : {user?.profession}</p>
                   <p className="flex flex-row gap-2">fitnessGoals : {user?.fitnessGoals.map((goal)=>(
                        <p>{goal},</p>
                    ))}
                    </p>
                </div>}
                
            </div>
            <div id="meals" className="w-full h-full">
                <h1 className="">meals search</h1>
                <div>
                    {/* search*/}
                    <div className="w-full">
                        <form className="w-full p-0 m-0 flex gap-3" onSubmit={handleSubmit}>
                            <input type="text" name="" placeholder="enter meal name" id="name" className=" border border-solid bottom-4 border-black " />
                            <input type="submit" name="" id="" />
                        </form>

                        <h3>display list of meals</h3>
                        {meals && <div>
                        {meals.map((meal)=>(
                            <p>{meal.name}</p>
                        ))}
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
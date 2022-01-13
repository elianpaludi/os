import Head from 'next/head'
import Image from 'next/image'
import { useSession, signIn, signOut, token } from "next-auth/react"

import { connectToDatabase } from "./../lib/mongodb.js";

export default function Home() {
  return (
    <main className="container-login">
      <div className="modal fade" id="loginmodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Login with:</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div onClick={() => signIn("twitch")} className="twitch-container">
                <div className="twitch-icon"></div>
                <h2 className="login-text">Twitch</h2>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="wave"></div>
      <section className="container-login_content">
        <h1 className="title-login">Welcome to Tip Smart</h1>
        <h2 className="subtitle-login">The best website to donate to your favorite streamers</h2>


        <div className="container-login_content-form" data-bs-toggle="modal" data-bs-target="#loginmodal" >Sign up</div>
      </section>

      <section className="container-card">
        {/* <UserProfile 
        profile='/static-cdn.jtvnw.net/jtv_user_pictures/b7d8e97c-407e-4223-8b22-cd5803f89884-profile_image-300x300.png'
        /> */}

      </section>

      <style jsx>{`
   .container-login{
     width:100%;
     height:100vh;
     background-image: url("/images/bg-global.png");
      background-size: cover;
      background-position: center;
   }

   .container-login_content{
     width:100%;
      height:30%;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      position:relative;
      

   }

   .container-login_content
   h1.title-login {
      font-size:3rem;
      margin-top:120px;
      font-weight:bold;
      width:70%;
      text-align:center;
      color:white;
      
   }

   h2.subtitle-login{
      font-size:1.5rem;
      font-weight:bold;
      color:white;
      width:50%;
      text-align:center;
      padding-top:15px;

   }

   @media(max-width:600px){

    h1.title-login{
      font-size:2.4rem !important;
    }
    h2.subtitle-login{
      width:70%;
      font-size:1.2rem !important;
    }
   }

   .container-login_content
   .container-login_content-form{
    position:absolute;
    top:320px;
    width:210px;
    height:90px;
    background-color:#6B30B0;
    color:white;
    cursor:pointer;
    border-radius:7px;
    display:flex;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    align-items:center;
    justify-content:center;
    font-size:1.5rem;
   }


    .twitch-container{
      width:100%;
      height:70px;
      display:flex;
      justify-content:space-evenly;
      align-items:center;
      flex-direction:row;
      background-color:#6b30b0;

    }
   .twitch-icon{
    width:50px;
    height:50px;
    background:url('/images/bt-twitch.png') no-repeat center center;
    background-size:cover;
    position:absolute;
    left:95px;
   }

   .login-text{
    font-size:1.5rem;
    color:white;
   } 

   .container-login_content
   button.twitch-login:hover{
    
   }

    .container-card{
      display:flex;
      flex-direction:row;
      justify-content:space-around;
      align-items:center;
      display:relative;
      z-index:40;
    }

    `}</style>
    </main>
  )
}

//   export async function getServerSideProps() {
//     const db  = await connectToDatabase;
//     const users = await db
//     db.collection("sessions")
//     db.find({})
//     db.toArray()
    
//     console.log(users)

//     return {
//       props: {users: JSON.parse(JSON.stringify(movies)) },
//     };
// }


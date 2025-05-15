import React, { useEffect, useReducer, useState } from 'react'
import profile from "../../assets/About/second_profile.png"
import skillImg from "../../assets/About/skills.png"
import { Icon } from '@iconify/react'
import SkillName from './SkillName'
import QuickContact from './QuickContact'
import { useLocation } from 'react-router-dom';

const initialState = {
  nextCount:0,
  reactCount:0,
  nodeCount:0,
  mongoCount:0
}

const reducer = (state,action) => {

 if(action.type==='REACTSKILL'){
    return ({...state,reactCount:state.reactCount+1})
  }
 else if(action.type==='NEXTSKILL'){
    return ({...state,nextCount:state.nextCount+1})
  }
 else if(action.type==='NODESKILL'){
    return ({...state,nodeCount:state.nodeCount+1})
  }
 else if(action.type==='MONGOSKILL'){
    return ({...state,mongoCount:state.mongoCount+1})
  }
  else if(action.type==='RESET'){
    return ({...state,...initialState})
  }
}


const About = () => {
 const location = useLocation();

const [state,dispatch] = useReducer(reducer , initialState);
const [permission,setPermission] = useState(false);

  const handleTImer = () =>{
     dispatch({type:"NEXTSKILL"});
  }
  const handleReactTimer = () =>{
     dispatch({type:"REACTSKILL"});
  }
  const handleNodeTimer = () =>{
     dispatch({type:"NODESKILL"});
  }
  const handleMongoTimer = () =>{
     dispatch({type:"MONGOSKILL"});
  }
  useEffect(()=>{

     const handleScroll = () => {
        if(location.pathname==="/"){
          if(window.pageYOffset>2500 && window.pageYOffset<4500){
            setPermission(true);
           }
           else{
            setPermission(false);
           }
        }
        else{
          if(window.pageYOffset>10){
            setPermission(true);
           }
           else{
            setPermission(false);
           }
        }
     }



    window.addEventListener("scroll",handleScroll)
     if(permission===true){
      console.log(state.nextCount)
      const nextTimer =  setInterval(handleTImer,30);
      const reactTimer =  setInterval(handleReactTimer,30);
      const nodeTimer =  setInterval(handleNodeTimer,30);
      const mongoTimer =  setInterval(handleMongoTimer,30);

      if(state.nextCount===75){
        clearInterval(nextTimer);
      }
      if(state.reactCount===85){
        clearInterval(reactTimer)
      }
      if(state.nodeCount===65){
        clearInterval(nodeTimer)
      }
      if(state.mongoCount===55){
        clearInterval(mongoTimer)
      }

      
        return () =>{clearInterval(nextTimer);clearInterval(reactTimer);clearInterval(nodeTimer);clearInterval(mongoTimer);window.removeEventListener("scroll",handleScroll)}
     }
     else{
        dispatch({type:"RESET"});
     }
  },[state.nextCount,state.reactCount,state.nodeCount,state.mongoCount,permission])

  return (
    <>
      <div className="lg:py-[130px] py-20 bg-dark">
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div className="lg:col-span-8 col-span-12">
              <span className="text-xl tracking-wider text-primary font-medium mb-4 block">
                ABOUT ME
              </span>
              <p className="md:text-5xl text-4xl font-black text-white ">
                Transforming visions into exceptional portfolios
              </p>
              <p className='text-base font-medium text-body after:absolute relative after:w-24 mt-20 after:h-1 after:top-[10px] after:-translate-y-1/2 ps-[120px] after:bg-primary after:start-0'>Hey! I'm Ashish Kumar, a full-stack developer who loves turning ideas into awesome web apps. Whether it’s front-end magic or back-end logic, I’ve got it covered. I’m always exploring new tech , tinkering with cool projects. Let's build something amazing together!
             </p>
             <button className='btn text-base flex items-center gap-2 mt-16'>Our Services <Icon icon='heroicons-solid:download' className='text-lg'  /> </button>
            </div>
            <div className="lg:col-span-4 col-span-12 flex items-center flex-col">
              <img src={profile} alt="" className="w-full" />
              <img src='https://storyset.com/illustration/connected-world/bro' alt="" className="w-full" />
            </div>
            <div className="lg:col-span-8 col-span-12">
            <h2 className="text-white text-3xl mb-6 font-semibold mt-10 capitalize w-fit border-b-2 border-gray-600">
                Skills
              </h2>
            <div className="grid grid-cols-12 gap-y-6 md:pe-20 pe-4">
               <SkillName title="NextJs" value={state.nextCount} icon='devicon:nextjs' />
               <SkillName title="ReactJs" value={state.reactCount} icon='logos:react' />
               <SkillName title="NodeJs" value={state.nodeCount} icon='logos:nodejs-icon' />
               <SkillName title="MongoDB" value={state.mongoCount} icon='devicon:mongodb' />
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12 flex items-center">
              <img src={skillImg} alt="img" className='w-full mt-auto' />
              </div>
          </div>
          <QuickContact/>
        </div>
      </div>
    </>
  );
}

export default About

import React from 'react'
import './skill.css'
import { motion } from 'framer-motion'
import html from '../../../public/assets/skill/html.png'
import css from '../../../public/assets/skill/css.png'
import bootstrap from '../../../public/assets/skill/bootstrap.png'
import js from '../../../public/assets/skill/js.png'
import react from '../../../public/assets/skill/react.png'
import java from '../../../public/assets/skill/java.png'
import mysql from '../../../public/assets/skill/mysql.png'
import git from '../../../public/assets/skill/git.png'
import github from '../../../public/assets/skill/github.png'

const skills = [
    {
        id:0,
        icon:html,
        title:'HTML'
    },
    {
        id:1,
        icon:css,
        title:'CSS'
    },
    {
        id:3,
        icon:bootstrap,
        title:'Bootstrap'
    },
    {
        id:4,
        icon:js,
        title:'JavaScript'
    },
    {
        id:5,
        icon:react,
        title:'ReactJS'
    },
    {
        id:6,
        icon:java,
        title:'Java'
    },
    {
        id:7,
        icon:mysql,
        title:'Mysql'
    },
    {
        id:8,
        icon:git,
        title:'Git'
    },
    {
        id:9,
        icon:github,
        title:'Github'
    }
]

const Single = ({item}) => {
    return  <div className=' card px-sm-5  bg-transparent p-3 m-3 bg-light d-flex flex-column justify-content-center align-items-center'>
                <img src={item.icon} alt={item.title} width={80}/>
                <p className='fw-bold pt-3'>{item.title}</p>
            </div>
}

const Skill = () => {


    const motionvariants = {
        initial:{
            opacity:0,
            y:500
        },
        animate:{
            opacity:1,
            y:0,
            transition:{
                duration:2,
                staggerChildren:0.1
            }
        }
    }

  return (
    <motion.div variants={motionvariants} initial="initial" whileInView="animate"  className='h-100 skills  container text-center d-flex flex-column justify-content-center align-items-center pt-md-5 pt-lg-0 mt-lg-0 '>
       
        <motion.h1 variants={motionvariants}  className='display-4  fw-bold pt-lg-0 pb-3 pb-lg-0 pb-sm-5 pt-sm-5 w-100'>Skills</motion.h1>
        <motion.div variants={motionvariants}  className=" p-md-3 d-flex box p-sm-3  gap-md-2 gap-lg-3  p-lg-5 flex-wrap align-items-center justify-content-center">
            {skills.map((item) => {
                return(
                    <Single item={item}/>
                )
            })}
        </motion.div>
    </motion.div>
  )
}

export default Skill
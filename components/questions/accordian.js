'use client'

import React from 'react'
import './accordian.css'
import { useState } from 'react';

function Accordian() {

        const [selected, setSeleceted] = useState(null)


        const toggle = (i)=> {
        if(selected == i){
            return setSeleceted(null)
        }

        setSeleceted(i)

    }


return (
    <>
        <div className="header-acc">
            <p>Frequently Asked Questions</p>
        </div>
    <div className='wrapper'>
      <div className='accordian'>
          {data.map((items,i)=>(
            <div key="item" className='item'>
              <div className='title' onClick={()=> toggle(i)}>
                <h2>{items.question}</h2>
                <span>{selected == i ? '-' : '+'}</span>
              </div>
              <div className={selected == i ? '.content show' : 'content'}>
                {items.answer}
              </div>
            </div>
          ))}
      </div>
    </div>
        </>
  )
}

const data = [
    {
      question: 'question 1',
      answer: 
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non fugit autem quod nostrum corporis voluptatibus doloremque, quae architecto rerum possimus nam eum sapiente modi quidem dolor voluptatem sequi magnam, molestiae distinctio quisquam rem ullam quas eveniet. Et inventore ea aspernatur excepturi sequi delectus ducimus itaque, labore eos soluta similique ad voluptas unde eius obcaecati ut doloremque quibusdam nobis earum veritatis. Architecto placeat eveniet nam quae itaque doloremque assumenda?'
    },
    {
      question: 'question 2',
      answer: 
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non fugit autem quod nostrum corporis voluptatibus doloremque, quae architecto rerum possimus nam eum sapiente modi quidem dolor voluptatem sequi magnam, molestiae distinctio quisquam rem ullam quas eveniet. Et inventore ea aspernatur excepturi sequi delectus ducimus itaque, labore eos soluta similique ad voluptas unde eius obcaecati ut doloremque quibusdam nobis earum veritatis. Architecto placeat eveniet nam quae itaque doloremque assumenda?'
    },
    {
      question: 'question 3',
      answer: 
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non fugit autem quod nostrum corporis voluptatibus doloremque, quae architecto rerum possimus nam eum sapiente modi quidem dolor voluptatem sequi magnam, molestiae distinctio quisquam rem ullam quas eveniet. Et inventore ea aspernatur excepturi sequi delectus ducimus itaque, labore eos soluta similique ad voluptas unde eius obcaecati ut doloremque quibusdam nobis earum veritatis. Architecto placeat eveniet nam quae itaque doloremque assumenda?'
    },
    {
      question: 'question 4',
      answer: 
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non fugit autem quod nostrum corporis voluptatibus doloremque, quae architecto rerum possimus nam eum sapiente modi quidem dolor voluptatem sequi magnam, molestiae distinctio quisquam rem ullam quas eveniet. Et inventore ea aspernatur excepturi sequi delectus ducimus itaque, labore eos soluta similique ad voluptas unde eius obcaecati ut doloremque quibusdam nobis earum veritatis. Architecto placeat eveniet nam quae itaque doloremque assumenda?'
    },
    {
      question: 'question 5',
      answer: 
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non fugit autem quod nostrum corporis voluptatibus doloremque, quae architecto rerum possimus nam eum sapiente modi quidem dolor voluptatem sequi magnam, molestiae distinctio quisquam rem ullam quas eveniet. Et inventore ea aspernatur excepturi sequi delectus ducimus itaque, labore eos soluta similique ad voluptas unde eius obcaecati ut doloremque quibusdam nobis earum veritatis. Architecto placeat eveniet nam quae itaque doloremque assumenda?'
    }
  ]
  
export default Accordian
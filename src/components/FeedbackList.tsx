import React from 'react'
import { TriangleUpIcon } from '@radix-ui/react-icons';



export default function FeedbackList() {
  return (
    <div>
      <ol className='feedback-list'>
        <li className='feedback'>
          <button>
            <TriangleUpIcon />
            <span>593</span>
          </button>
          <div>
            <p>B</p>
          </div>
          <div>
            <p>Facebook</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, inventore.
            </p>
          </div>
          <p>Id</p>
        </li>
      </ol>
    </div>
  )
}

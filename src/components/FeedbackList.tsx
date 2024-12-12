import React, { useState, useEffect } from 'react';
import { TriangleUpIcon } from '@radix-ui/react-icons';
import Spinner from "./spinner";

const FeedbackList = () => {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks');
        const data = await response.json();
        console.log(data);
        setFeedbackItems(data.feedbacks);
        
        setIsLoading(false);
      } catch (error) {
        setError("Something went wrong. Please try again later!");
        console.warn(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (isLoading) {
    return <div><Spinner /></div>;
  }

  return (
    <div>
      <ol className='feedback-list'>
        {feedbackItems.map((item, index) => (
          <li key={index} className='feedback'>
            <button>
              <TriangleUpIcon />
              <span>{item.upvoteCount}</span>
            </button>
            <div>
              <p>{item.badgeLetter}</p>
            </div>
            <div>
              <p>{item.company}</p>
              <p>
                {item.text}
              </p>
            </div>
            <p>{item.daysAgo}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default FeedbackList;
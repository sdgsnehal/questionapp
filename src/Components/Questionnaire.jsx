import React, { useState } from 'react';

const Questionnaire = () => {
  const [responses, setResponses] = useState({});

  const handleResponseChange = (questionIndex, response) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionIndex]: response,
    }));
  };

  const questions = [
    {
      question: 'Text',
      'sub-questions': [
        {
          question: 'Text 1',
          options: ['For', 'Against', 'Abstain'],
        },
      ],
      options: ['For', 'Against', 'Abstain'],
    },
  ];

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index}>
          <p style={{ display: 'inline-block', marginRight: '10px' }}>{question.question}</p>
          {question['sub-questions'] &&
            question['sub-questions'].map((subQuestion, subIndex) => (
              <div key={subIndex}>
                <p style={{ display: 'inline-block', marginRight: '10px' }}>{subQuestion.question}</p>
                {subQuestion.options.map((option, optionIndex) => (
                  <div key={optionIndex} style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input
                      type="radio"
                      name={`subQuestion-${index}-${subIndex}`}
                      value={option}
                      onChange={() => handleResponseChange(`${index}-${subIndex}`, option)}
                      checked={responses[`${index}-${subIndex}`] === option}
                    />
                    <label>{option}</label>
                  </div>
                ))}
              </div>
            ))}
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex} style={{ display: 'inline-block', marginRight: '10px' }}>
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                onChange={() => handleResponseChange(`${index}`, option)}
                checked={responses[`${index}`] === option}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Questionnaire;
